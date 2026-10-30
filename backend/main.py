from __future__ import annotations

import io
import logging
import os
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
from fastapi import FastAPI, File, HTTPException, UploadFile, status
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image, UnidentifiedImageError
from starlette.responses import JSONResponse

logger = logging.getLogger("skin_backend")
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

load_dotenv()

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MODEL_PATH = PROJECT_ROOT / "runs" / "detect" / "runs" / "skin_disease_model" / "weights" / "best.pt"
MODEL_PATH = Path(os.getenv("MODEL_PATH", str(DEFAULT_MODEL_PATH))).resolve()
CONFIDENCE_THRESHOLD = float(os.getenv("CONFIDENCE_THRESHOLD", "0.25"))
MAX_UPLOAD_SIZE = int(os.getenv("MAX_UPLOAD_SIZE", str(10 * 1024 * 1024)))
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_MIME_TYPES = {"image/jpeg", "image/png", "image/webp"}
CLASS_NAMES = {
    0: "Acne",
    1: "Eczema",
    2: "Leprosy",
    3: "Melasma",
    4: "Psoriasis",
    5: "Ringworm",
    6: "Warts",
}

parsed_origins = []
configured_origins = os.getenv("FRONTEND_ORIGINS", "http://localhost:5500,http://127.0.0.1:5500")
for origin in configured_origins.split(","):
    candidate = origin.strip()
    if candidate:
        parsed_origins.append(candidate)

app = FastAPI(title="Skin Disease Detection API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=parsed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def load_model_on_startup() -> None:
    if not MODEL_PATH.exists():
        error_message = (
            f"YOLO model file not found at '{MODEL_PATH}'. "
            "Please ensure the trained model exists in the project before starting the backend."
        )
        logger.error(error_message)
        raise RuntimeError(error_message)

    try:
        from ultralytics import YOLO

        app.state.model = YOLO(str(MODEL_PATH))
        app.state.model_loaded = True
        app.state.confidence_threshold = CONFIDENCE_THRESHOLD
        logger.info("YOLO model loaded successfully from %s", MODEL_PATH)
    except Exception as exc:  # pragma: no cover - startup failure is intentional validation
        logger.exception("Failed to load YOLO model")
        app.state.model_loaded = False
        raise RuntimeError(
            "Failed to load the YOLO model. Please verify the model file is valid and compatible."
        ) from exc


@app.get("/health")
async def health() -> dict[str, Any]:
    if getattr(app.state, "model_loaded", False):
        return {"status": "ok", "model_loaded": True}

    return JSONResponse(
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        content={
            "status": "error",
            "model_loaded": False,
            "message": "Model is not available. Please check the backend startup logs.",
        },
    )


def _validate_upload_file(file: UploadFile) -> bytes:
    if file is None or not file.filename:
        raise HTTPException(status_code=400, detail="No image file was provided.")

    file_name = file.filename.lower()
    extension = Path(file_name).suffix.lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type. Please upload JPG, JPEG, PNG, or WEBP images.",
        )

    if file.content_type and file.content_type.lower() not in ALLOWED_MIME_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported image MIME type. Please upload JPG, JPEG, PNG, or WEBP images.",
        )

    content = file.file.read()
    if not content:
        raise HTTPException(status_code=400, detail="Uploaded image is empty.")
    if len(content) > MAX_UPLOAD_SIZE:
        raise HTTPException(
            status_code=413,
            detail=f"Uploaded image is too large. Maximum size is {MAX_UPLOAD_SIZE // (1024 * 1024)} MB.",
        )

    try:
        image = Image.open(io.BytesIO(content))
        image.verify()
    except (UnidentifiedImageError, OSError, ValueError):
        raise HTTPException(status_code=400, detail="Invalid or corrupted image file.") from None

    try:
        image = Image.open(io.BytesIO(content))
        image.load()
    except (UnidentifiedImageError, OSError, ValueError):
        raise HTTPException(status_code=400, detail="Invalid or corrupted image file.") from None

    return content


@app.post("/predict")
async def predict(file: UploadFile | None = File(default=None)) -> dict[str, Any]:
    if file is None:
        raise HTTPException(status_code=400, detail="No image file was provided.")

    if not getattr(app.state, "model_loaded", False):
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="The model is not available. Please check the backend health status.",
        )

    try:
        image_bytes = _validate_upload_file(file)
    except HTTPException:
        raise

    try:
        image = Image.open(io.BytesIO(image_bytes))
        model = app.state.model
        threshold = float(getattr(app.state, "confidence_threshold", CONFIDENCE_THRESHOLD))

        # YOLO can return multiple detections for one image.
        # The backend ignores all boxes below the configured confidence threshold,
        # then selects the highest-confidence valid detection as the final prediction.
        results = model(image, conf=threshold, verbose=False)
        valid_predictions: list[dict[str, Any]] = []

        for result in results:
            for detection in getattr(result, "boxes", []):
                if detection.conf is None or len(detection.conf) == 0:
                    continue

                confidence_value = float(detection.conf[0])
                if confidence_value < threshold:
                    continue

                class_id = int(detection.cls[0]) if detection.cls is not None and len(detection.cls) > 0 else -1
                class_name = CLASS_NAMES.get(class_id, f"Class_{class_id}")
                valid_predictions.append(
                    {
                        "class_id": class_id,
                        "disease": class_name,
                        "confidence": round(confidence_value * 100, 2),
                    }
                )

        if not valid_predictions:
            return {
                "success": True,
                "prediction": {
                    "class_id": None,
                    "disease": "No supported skin condition detected",
                    "confidence": None,
                },
            }

        best_prediction = max(valid_predictions, key=lambda item: item["confidence"])
        return {
            "success": True,
            "prediction": {
                "class_id": best_prediction["class_id"],
                "disease": best_prediction["disease"],
                "confidence": best_prediction["confidence"],
            },
        }
    except Exception as exc:
        logger.exception("Prediction failed")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Prediction failed. The uploaded image could not be processed.",
        ) from exc


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
