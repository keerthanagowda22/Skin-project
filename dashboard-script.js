// Dashboard Script - Image Upload, Camera Capture, and Analysis
document.addEventListener('DOMContentLoaded', () => {
    const fileBtn = document.getElementById('fileBtn');
    const fileInput = document.getElementById('fileInput');
    const cameraBtn = document.getElementById('cameraBtn');
    const cameraContainer = document.getElementById('cameraContainer');
    const cameraVideo = document.getElementById('cameraVideo');
    const cameraCanvas = document.getElementById('cameraCanvas');
    const captureBtn = document.getElementById('captureBtn');
    const cancelCameraBtn = document.getElementById('cancelCameraBtn');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const retakeBtn = document.getElementById('retakeBtn');
    const resultsSection = document.getElementById('resultsSection');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const uploadSection = document.querySelector('.upload-section');
    const logoutBtn = document.getElementById('logoutBtn');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const newAnalysisBtn = document.getElementById('newAnalysisBtn');
    const downloadReportBtn = document.getElementById('downloadReportBtn');
    let capturedImageData = null;
    let latestPrediction = null;

    function setSidebarState(isOpen) {
        sidebarMenu.classList.toggle('open', isOpen);
        sidebarBackdrop.classList.toggle('hidden', !isOpen);
        sidebarToggle.setAttribute('aria-expanded', String(isOpen));
    }

    sidebarToggle.addEventListener('click', () => {
        const isOpen = sidebarMenu.classList.contains('open');
        setSidebarState(!isOpen);
    });

    sidebarCloseBtn.addEventListener('click', () => setSidebarState(false));
    sidebarBackdrop.addEventListener('click', () => setSidebarState(false));

    const currentPage = location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('.sidebar-item').forEach(item => {
        const pageName = item.dataset.page;
        const targetPage = item.getAttribute('href');
        if (currentPage === targetPage || (pageName === 'dashboard' && currentPage === 'dashboard.html')) {
            item.classList.add('active');
        }
    });

    // Set user name from localStorage
    const userName = localStorage.getItem('userName') || 'User';
    document.getElementById('userName').textContent = userName;

    // File upload
    fileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                capturedImageData = event.target.result;
                previewImage.src = capturedImageData;
                imagePreview.classList.remove('hidden');
                cameraContainer.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    // Camera capture
    cameraBtn.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                } 
            });
            cameraVideo.srcObject = stream;
            cameraContainer.classList.remove('hidden');
            imagePreview.classList.add('hidden');
        } catch (error) {
            alert('Unable to access camera. Please check permissions.');
            console.error('Camera error:', error);
        }
    });

    // Capture photo from camera
    captureBtn.addEventListener('click', () => {
        const context = cameraCanvas.getContext('2d');
        cameraCanvas.width = cameraVideo.videoWidth;
        cameraCanvas.height = cameraVideo.videoHeight;
        context.drawImage(cameraVideo, 0, 0);
        
        capturedImageData = cameraCanvas.toDataURL('image/jpeg');
        previewImage.src = capturedImageData;
        
        // Stop camera stream
        const stream = cameraVideo.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        
        cameraContainer.classList.add('hidden');
        imagePreview.classList.remove('hidden');
    });

    // Cancel camera
    cancelCameraBtn.addEventListener('click', () => {
        const stream = cameraVideo.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        cameraContainer.classList.add('hidden');
    });

    // Retake/Change image
    retakeBtn.addEventListener('click', () => {
        capturedImageData = null;
        latestPrediction = null;
        imagePreview.classList.add('hidden');
        resultsSection.classList.add('hidden');
        uploadSection.classList.remove('hidden');
        fileInput.value = '';
    });

    // Analyze button
    analyzeBtn.addEventListener('click', () => {
        if (!capturedImageData) {
            alert('Please capture or upload an image first');
            return;
        }
        performAnalysis();
    });

    function dataURLToFile(dataUrl, fileName) {
        const matches = dataUrl.match(/^data:(.*?);base64,(.*)$/);
        if (!matches) {
            throw new Error('Invalid image data URL');
        }

        const mimeType = matches[1] || 'image/jpeg';
        const base64Data = matches[2];
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i += 1) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return new File([bytes], fileName, { type: mimeType });
    }

    async function performAnalysis() {
        try {
            loadingIndicator.classList.remove('hidden');
            uploadSection.classList.add('hidden');
            imagePreview.classList.add('hidden');

            const imageFile = dataURLToFile(capturedImageData, 'skin-image.jpg');
            const formData = new FormData();
            formData.append('file', imageFile);

            const response = await fetch('https://skin-disease-backend-6m09.onrender.com/predict', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || result.success === false) {
                throw new Error(result.detail || result.message || 'Prediction failed.');
            }

            displayResults(result.prediction);
            resultsSection.classList.remove('hidden');
            window.scrollTo(0, resultsSection.offsetTop);
        } catch (error) {
            console.error('Prediction error:', error);
            alert(error.message || 'Unable to analyze the image. Please try a different image.');
        } finally {
            loadingIndicator.classList.add('hidden');
        }
    }

    function displayResults(prediction) {
        latestPrediction = prediction;
        const diseaseName = document.getElementById('diseaseName');
        const diseaseDescription = document.getElementById('diseaseDescription');
        const diseaseInfoSection = document.getElementById('diseaseInformationSection');
        const diseaseInfoContent = document.getElementById('diseaseInfoContent');
        const isNoDetection = prediction.disease === 'No supported skin condition detected';
        const resultHeading = diseaseName.parentElement.querySelector('h3');

        diseaseName.textContent = prediction.disease;
        resultHeading.textContent = isNoDetection ? 'Analysis Outcome' : 'Disease Detected';
        diseaseDescription.textContent = isNoDetection
            ? 'The analysis did not identify a supported skin condition in this image. This does not confirm that the skin is disease-free; consult a dermatologist if you have concerns.'
            : 'AI-generated prediction for informational purposes only. It is not a medical diagnosis.';

        const diseaseInfo = getDiseaseInfoByName(prediction.disease);
        if (diseaseInfo) {
            diseaseInfoContent.innerHTML = buildDiseaseInformationHTML(diseaseInfo);
            diseaseInfoSection.classList.remove('hidden');
        } else {
            diseaseInfoSection.classList.add('hidden');
            diseaseInfoContent.innerHTML = '';
        }

        const existingConfidenceNote = diseaseDescription.parentElement.querySelector('.confidence-note');
        if (existingConfidenceNote) {
            existingConfidenceNote.remove();
        }
        if (!isNoDetection) {
            const confidenceText = prediction.confidence !== undefined ? `Confidence: ${prediction.confidence}%` : 'Confidence: unavailable';
            const confidenceNote = document.createElement('p');
            confidenceNote.className = 'confidence-note';
            confidenceNote.textContent = confidenceText;
            diseaseDescription.parentElement.appendChild(confidenceNote);
        }
    }

    function buildDiseaseInformationHTML(diseaseInfo) {
        const renderList = (items) => items.map(item => `<li>${item}</li>`).join('');

        return `
            <div class="disease-info-group">
                <h4>About ${diseaseInfo.name}</h4>
                <p>${diseaseInfo.description}</p>
            </div>
            <div class="disease-info-group">
                <h4>Common Symptoms</h4>
                <ul>${renderList(diseaseInfo.symptoms)}</ul>
            </div>
            <div class="disease-info-group">
                <h4>Common Causes / Risk Factors</h4>
                <ul>${renderList(diseaseInfo.causes)}</ul>
            </div>
            <div class="disease-info-group">
                <h4>General Prevention / Self-Care</h4>
                <ul>${renderList(diseaseInfo.prevention)}</ul>
            </div>
            <div class="disease-info-group">
                <h4>When to Consult a Doctor</h4>
                <ul>${renderList(diseaseInfo.whenToConsult)}</ul>
            </div>
            <div class="disease-info-group">
                <h4>Allopathic / Modern Medical Information</h4>
                <ul>${renderList(diseaseInfo.allopathic)}</ul>
                <div class="disease-info-warning">Medicines and treatment plans should only be used under guidance from a qualified healthcare professional. This information is educational and does not replace professional medical care.</div>
            </div>
            <div class="disease-info-group">
                <h4>Ayurvedic / Traditional Information</h4>
                <ul>${renderList(diseaseInfo.ayurvedic)}</ul>
                <div class="disease-info-warning">Ayurvedic practices are general traditional information only. They are not a cure for the disease, and users should consult a qualified Ayurvedic practitioner before using remedies, especially if they are taking other medicines.</div>
            </div>
            <div class="disease-info-group">
                <h4>Homeopathic Information</h4>
                <ul>${renderList(diseaseInfo.homeopathic)}</ul>
                <div class="disease-info-warning">Homeopathic approaches are presented only as general educational information. They are not proven to cure these skin diseases and should not replace evidence-based medical care.</div>
            </div>
            <div class="disease-info-group">
                <h4>Medical Disclaimer</h4>
                <p>${diseaseInfo.disclaimer}</p>
            </div>
        `;
    }

    function updateTreatmentList(elementId, items) {
        const list = document.getElementById(elementId);
        list.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }

    // New analysis
    newAnalysisBtn.addEventListener('click', () => {
        retakeBtn.click();
    });

    // Download report
    downloadReportBtn.addEventListener('click', () => {
        if (!latestPrediction) {
            alert('Analyze an image before downloading a report.');
            return;
        }

        const diseaseInfo = getDiseaseInfoByName(latestPrediction.disease);
        const formatList = (items) => Array.isArray(items) && items.length
            ? items.map((item) => `- ${item}`).join('\n')
            : 'Not available';
        const reportContent = [
            'SKIN DISEASE DETECTION REPORT',
            '================================',
            `Date: ${new Date().toLocaleString()}`,
            `User: ${userName}`,
            '',
            'AI ANALYSIS',
            '-----------',
            `Predicted condition: ${latestPrediction.disease || 'Not available'}`,
            `Model confidence: ${typeof latestPrediction.confidence === 'number' && Number.isFinite(latestPrediction.confidence) ? `${latestPrediction.confidence}%` : 'Not available'}`,
            '',
            latestPrediction.disease === 'No supported skin condition detected' ? 'ASSESSMENT NOTE' : 'ABOUT THIS CONDITION',
            latestPrediction.disease === 'No supported skin condition detected'
                ? '--------------'
                : '--------------------',
            diseaseInfo?.description || (latestPrediction.disease === 'No supported skin condition detected'
                ? 'The analysis did not identify a supported skin condition in this image. This does not confirm that the skin is disease-free. Consult a dermatologist if you have concerns.'
                : 'No educational information is available for this condition.'),
            '',
            'GENERAL PREVENTION / SELF-CARE',
            '------------------------------',
            formatList(diseaseInfo?.prevention),
            '',
            'WHEN TO CONSULT A DOCTOR',
            '-------------------------',
            formatList(diseaseInfo?.whenToConsult),
            '',
            'MEDICAL DISCLAIMER',
            '------------------',
            'This AI-generated result is preliminary information, not a medical diagnosis. Consult a qualified dermatologist for professional evaluation and treatment.',
            '',
            'Generated by: Skin Disease Detection System'
        ].join('\n');

        const reportBlob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
        const reportUrl = URL.createObjectURL(reportBlob);
        const element = document.createElement('a');
        const date = new Date().toISOString().slice(0, 10);
        element.href = reportUrl;
        element.download = `skin-disease-report-${date}.txt`;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        element.remove();
        window.setTimeout(() => URL.revokeObjectURL(reportUrl), 1000);
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('userName');
        window.location.href = 'index.html';
    });

    const logoutLink = document.querySelector('.logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('userName');
            window.location.href = 'index.html';
        });
    }
});

// Permission checker for camera access
function checkCameraPermission() {
    if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'camera' }).then(permissionStatus => {
            if (permissionStatus.state === 'denied') {
                console.warn('Camera permission denied');
            }
        });
    }
}

// Initialize on load
window.addEventListener('load', checkCameraPermission);
