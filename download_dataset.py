import json
import os
import requests
from tqdm import tqdm

NDJSON_FILE = "skin-disease.ndjson"
OUTPUT_DIR = "skin-disease"

# Your 7 classes from the dataset
CLASSES = [
    "Acne",
    "Eczema",
    "Leprosy",
    "Melasma",
    "Psoriasis",
    "Ringworm",
    "Warts"
]

# Create folders
for split in ["train", "val", "test"]:
    os.makedirs(f"{OUTPUT_DIR}/{split}/images", exist_ok=True)
    os.makedirs(f"{OUTPUT_DIR}/{split}/labels", exist_ok=True)

# Read NDJSON
records = []

with open(NDJSON_FILE, "r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()

        if not line:
            continue

        try:
            data = json.loads(line)

            if data.get("type") == "image":
                records.append(data)

        except json.JSONDecodeError:
            continue

print("Images found:", len(records))


# Download images and create YOLO labels
for item in tqdm(records, desc="Downloading images"):

    filename = item["file"]
    url = item["url"]
    split = item.get("split", "train")

    if split not in ["train", "val", "test"]:
        split = "train"

    image_path = os.path.join(
        OUTPUT_DIR,
        split,
        "images",
        filename
    )

    label_name = os.path.splitext(filename)[0] + ".txt"

    label_path = os.path.join(
        OUTPUT_DIR,
        split,
        "labels",
        label_name
    )

    # Download image
    try:
        response = requests.get(url, timeout=30)

        if response.status_code == 200:
            with open(image_path, "wb") as img:
                img.write(response.content)
        else:
            print("\nFailed:", filename)

    except Exception as e:
        print("\nError downloading:", filename)
        print(e)
        continue

    # Create YOLO annotation file
    annotations = item.get("annotations", {})
    boxes = annotations.get("boxes", [])

    with open(label_path, "w", encoding="utf-8") as label_file:

        for box in boxes:

            # Format:
            # [class_id, x_center, y_center, width, height]

            if len(box) == 5:
                class_id, x, y, w, h = box

                label_file.write(
                    f"{int(class_id)} {x} {y} {w} {h}\n"
                )


# Create data.yaml
yaml_path = os.path.join(OUTPUT_DIR, "data.yaml")

with open(yaml_path, "w", encoding="utf-8") as yaml:

    yaml.write(f"path: {os.path.abspath(OUTPUT_DIR)}\n")
    yaml.write("train: train/images\n")
    yaml.write("val: val/images\n")
    yaml.write("test: test/images\n\n")

    yaml.write("names:\n")

    for i, class_name in enumerate(CLASSES):
        yaml.write(f"  {i}: {class_name}\n")


print("\n================================")
print("Dataset preparation completed!")
print("================================")
print(f"Dataset location: {OUTPUT_DIR}")
print(f"YAML file: {yaml_path}")