# Skin Disease Detection API

This backend powers the existing frontend by running YOLO-based skin disease inference using the trained model already present in the project.

## Python version

This project works well with Python 3.11.

## Create and activate a virtual environment

On Windows:

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
```

## Install dependencies

```powershell
pip install -r requirements.txt
```

## Model path

The backend resolves the model automatically relative to the project root:

```text
runs/detect/runs/skin_disease_model/weights/best.pt
```

If the model file is missing, the app will fail with a clear startup error.

## Start the API

```powershell
cd backend
.venv\Scripts\activate
uvicorn main:app --reload
```

The app will be available at:

- API: http://127.0.0.1:8000
- Swagger docs: http://127.0.0.1:8000/docs

## Check health

```powershell
curl http://127.0.0.1:8000/health
```

## Test prediction

```powershell
curl -X POST "http://127.0.0.1:8000/predict" -F "file=@C:\path\to\image.jpg"
```

## Frontend API URL

The frontend calls:

```text
http://127.0.0.1:8000/predict
```

## Common troubleshooting

- Ensure the trained YOLO model exists at the expected path.
- Ensure the frontend is served from localhost:5500 or 127.0.0.1:5500.
- Check that the uploaded image is a valid JPG, JPEG, PNG, or WEBP file.
- Confirm that the image is not empty or corrupted.
- Verify that the API is running before testing the frontend.
