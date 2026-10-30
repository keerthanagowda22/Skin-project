# IEEE Paper Verification Checklist

This checklist records the experiments, source records, and project facts still required before submission. The draft is not IEEE-approved or publication-ready solely because it uses numbered sections and IEEE-like citations.

## Experiments and Results

- [ ] **Run held-out test evaluation:** From the project root, use the environment with the intended Ultralytics version and evaluate the trained checkpoint against `split=test`. Example command:

  ```powershell
  yolo detect val model="C:\Users\chetu\OneDrive\Desktop\Skin project\runs\detect\runs\skin_disease_model\weights\best.pt" data="C:\Users\chetu\OneDrive\Desktop\Skin project\skin-disease\data.yaml" split=test imgsz=640 batch=8 conf=0.001 iou=0.7 project="runs/detect" name="skin_disease_test"
  ```

  This command is a proposed procedure, not a claim that evaluation has already been performed. Confirm supported syntax against the installed Ultralytics version [5]. It writes evaluation outputs to a new run directory and should not change application code, the checkpoint, or dataset files.
- [ ] Preserve and report the command, Ultralytics/PyTorch versions, exact checkpoint path/hash, split, image size, batch size, confidence and IoU settings, per-class metrics, aggregate metrics, and evaluation output files.
- [ ] Do not use the test split for checkpoint selection, threshold tuning, or iterative model development. If decisions are made based on test results, document the resulting evaluation as exploratory and obtain a new independent evaluation set for final claims.
- [ ] Determine whether the supplied metrics are intended to be validation metrics. The values (0.622, 0.428, 0.469, 0.274) approximately correspond to the epoch-35 `results.csv` row (0.62287, 0.42828, 0.46982, 0.27442); three reported values appear truncated relative to conventional rounding. Confirm reported precision and rounding.
- [ ] Establish which exact weights/checkpoint produced the supplied metrics. The numerical match to a validation row alone does not prove it was `best.pt`.
- [ ] If available, report per-class precision, recall, AP, confusion matrix, confidence-threshold sensitivity, and uncertainty; do not calculate or infer these from the aggregate metrics.
- [ ] Report training/inference hardware and timing only after measuring them under a documented procedure.

## Training-Run and Model Provenance

- [ ] Resolve the stated **46 epochs** versus `args.yaml` configured **50 epochs** and `results.csv` containing rows through epoch 50. Do not assume which statement refers to the deployed weights.
- [ ] Inspect and explain the repeated row labelled epoch 3 in `results.csv` and document whether the log combines resumed training or another run.
- [ ] Identify which training run generated `best.pt` and `last.pt`, and whether the backend-loaded `best.pt` corresponds to the reported validation metrics.
- [ ] Record model file hashes and exact training command/configuration for reproducibility.
- [ ] Record Python, PyTorch, Ultralytics, FastAPI, Pillow, operating system, CPU/GPU and relevant driver versions. The reviewed backend requirements do not pin versions.
- [ ] If reporting architecture details, generate a verified model summary from the exact `best.pt`; do not infer layer counts, parameter count, or compute from the model name alone.

## Dataset

- [ ] Verify the exact Ultralytics dataset name, source URL, release/version, retrieval date, and license.
- [ ] Obtain the dataset's official publication/reference and cite it; the local `data.yaml` contains class names and split paths but no bibliography.
- [ ] Confirm image provenance, annotation procedure, class definitions, quality control, and whether multiple objects can occur in one image.
- [ ] Establish whether train/validation/test splits are independent at the patient or source-image level, where that information is available.
- [ ] Confirm representativeness, demographic coverage, acquisition settings, and any known limitations. Do not infer these from the image counts.
- [ ] Verify the locally counted split image/label totals before final submission if the dataset may have changed.

## Implementation and Deployment

- [ ] Resolve the frontend/backend API port mismatch: `dashboard-script.js` calls `http://127.0.0.1:8001/predict`, while `backend/main.py` starts Uvicorn on port 8000 and `backend/README.md` documents 8000.
- [ ] Verify actual runtime configuration and record the live endpoint used in the tested application. The paper currently reports source/documentation defaults and does not claim the connection is verified.
- [ ] Confirm whether the backend uses the default `MODEL_PATH` or an environment override, and document the resolved model path.
- [ ] Confirm implementation status before final writing: login is simulated client-side; registration/social login/password reset are not implemented in the reviewed login script; product catalogue data are demo content; checkout is test-mode; provider discovery is not a clinician consultation.
- [ ] If the paper discusses feedback persistence or map/provider functionality beyond a high-level feature description, verify the deployment configuration and external-service dependencies.

## Citations and Manuscript

- [x] Verify bibliographic metadata for Esteva *et al.*, “Dermatologist-level classification of skin cancer with deep neural networks,” DOI 10.1038/nature21056.
- [x] Verify bibliographic metadata for Tschandl *et al.*, “The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions,” DOI 10.1038/sdata.2018.161.
- [x] Verify bibliographic metadata for Codella *et al.*, “Skin lesion analysis toward melanoma detection: A challenge at the 2017 International Symposium on Biomedical Imaging ...,” DOI 10.1109/ISBI.2018.8363547.
- [x] Check official Ultralytics YOLO11 and validation documentation URLs; these are online technical documentation, not peer-reviewed papers.
- [ ] Verify that all cited literature is relevant and that no prior-work result is presented as directly comparable without matching dataset, labels, evaluation protocol, and split.
- [ ] Add author names, department, institution, location, and corresponding-author details.
- [ ] Apply the official IEEE conference template, including its figure/table placement, typography, reference formatting, and page limits. This draft's Markdown presentation is not evidence of template compliance or IEEE approval.
- [ ] Obtain supervisor/co-author review and follow institutional research-ethics, data-use, and publication requirements.

## Known Project Facts Already Checked

- Seven configured classes: Acne, Eczema, Leprosy, Melasma, Psoriasis, Ringworm, and Warts.
- `skin-disease/data.yaml` defines `train`, `val`, and `test` splits.
- Locally counted image totals: 1,539 train, 291 validation, and 148 test; corresponding label-file totals match.
- Training script starts from `yolo11n.pt` unless it resumes `last.pt`; the saved run is configured for up to 50 epochs, image size 640, and batch size 8.
- The saved run configuration specifies AdamW, patience 100, validation split `val`, seed 0, and deterministic mode.
- `results.csv` contains metric rows through epoch 50. The project description's 46-epoch statement remains unresolved.
- `backend/main.py` maps the seven classes, loads the trained model from its configured path, and exposes `/health` and `/predict`.
- Backend default model path: `runs/detect/runs/skin_disease_model/weights/best.pt`.
- The frontend API URL and backend default port conflict: hard-coded frontend port 8001 versus backend/documentation port 8000.
- The supplied metrics approximately match a validation row; test-set metrics were not found.
