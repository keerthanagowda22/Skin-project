from pathlib import Path

from ultralytics import YOLO

dataset_dir = Path(__file__).resolve().parent
project_dir = dataset_dir.parent
run_dir = project_dir / "runs" / "detect" / "runs" / "skin_disease_model"
last_checkpoint = run_dir / "weights" / "last.pt"

if last_checkpoint.is_file():
    model = YOLO(str(last_checkpoint))
    results = model.train(resume=True)
else:
    model = YOLO("yolo11n.pt")
    results = model.train(
        data=str(dataset_dir / "data.yaml"),
        epochs=50,
        imgsz=640,
        batch=8,
        project=str(project_dir / "runs"),
        name="skin_disease_model",
    )

print("Training completed!")