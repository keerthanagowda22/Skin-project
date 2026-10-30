# 🩺 Smart Skin Disease Detection and Recommendation System Using AI

An AI-powered web application that helps users obtain preliminary skin-condition predictions by uploading an image or capturing one through their device camera. The application uses a trained YOLO model with a FastAPI backend to analyse skin images and display prediction results with confidence information.

The platform also provides educational information, wellness recommendations, diet plans, doctor consultation support, and skincare essentials.

## 🚀 Key Features

- **User Authentication:** Login and registration interface.
- **Image Upload:** Upload skin images directly from your device.
- **Camera Capture:** Capture skin images using your device camera.
- **AI-Based Detection:** Analyse images using a trained YOLO model.
- **Prediction Results:** Display predicted skin conditions with confidence scores.
- **Educational Information:** Access information about different skin conditions.
- **Diet and Wellness:** Explore diet plans and wellness recommendations.
- **Doctor Consultation:** Access doctor consultation-related features.
- **Skin Essentials:** Explore skincare-related products.
- **Downloadable Reports:** Download the generated analysis report.

## 🛠️ Technologies Used

| Component | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python, FastAPI |
| AI Model | YOLO |
| Image Processing | OpenCV |
| API Communication | REST API |
| Development Tools | VS Code, Git, GitHub |

## ⚙️ How It Works

1. The user logs in to the application.
2. The user uploads a skin image or captures one using the camera.
3. The image is sent to the FastAPI backend.
4. The trained YOLO model processes and analyses the image.
5. The system generates a preliminary prediction with confidence information.
6. The result is displayed on the dashboard.
7. Users can explore educational content and available recommendations.

## 📁 Project Structure

```text
Smart-Skin-Disease-Detection/
│
├── index.html
├── dashboard.html
├── dashboard-script.js
├── dashboard-style.css
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
│
├── runs/
│   └── detect/
│       └── runs/
│           └── skin_disease_model/
│               └── weights/
│                   └── best.pt
│
└── README.md
```

*Note: The structure above represents the main project files. Other HTML, CSS, JavaScript and supporting files may also be present.*

## 💻 Requirements

- Python 3.11 (recommended)
- Visual Studio Code or another code editor
- Modern web browser
- Trained YOLO model (`best.pt`)
- Internet connection for features that require external services
- Camera permission for image capture

## ▶️ Installation and Execution

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Smart-Skin-Disease-Detection
```

### Step 2: Set Up the Backend

```powershell
cd backend
python -m venv .venv
.\\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### Step 3: Start the FastAPI Backend

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8001
```

Backend health check:

http://127.0.0.1:8001/health

API documentation:

http://127.0.0.1:8001/docs

### Step 4: Start the Frontend

Open a new terminal in the project root directory and execute:

```bash
python -m http.server 5500
```

Open the application in your browser:

http://localhost:5500

**Important:** Ensure that the trained model is available at the expected path and that the backend is running before analysing images.

## 📸 Application Screenshots

Add screenshots of your application here to demonstrate its interface and functionality.

Suggested screenshots:
- Login and Registration Page
- Dashboard
- Skin Image Upload and Camera Capture
- AI Prediction Results
- Recommendations Page
- Downloadable Analysis Report

## 🔮 Future Enhancements

- Improve AI model accuracy using larger and more diverse datasets.
- Support additional skin-condition categories.
- Introduce multilingual support.
- Enhance personalized skincare recommendations.
- Improve doctor consultation and healthcare connectivity.
- Strengthen data privacy and application security.

## ⚠️ Medical Disclaimer

This application is developed for educational and informational purposes only. AI-generated predictions are preliminary and must not be considered a medical diagnosis.

A result showing no supported condition does not guarantee that the skin is disease-free. Users should consult a qualified dermatologist for proper examination, diagnosis, and treatment.

## 👩‍💻 Project Information

**Project Title:** Smart Skin Disease Detection and Recommendation System Using AI

**Domain:** Artificial Intelligence and Web Development

**Project Type:** Academic Major Project

**Repository:** GitHub

## 📄 License

This project is intended for educational and academic purposes. Add an appropriate open-source license if you intend to permit public reuse and modification.
