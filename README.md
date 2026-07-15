## Proctor Vision

AI-Based Online Exam Proctoring System

Overview
Proctor Vision is a real-time AI-powered online exam proctoring system designed to maintain exam integrity during remote assessments. The system uses computer vision techniques to monitor candidate behavior through a webcam and detect suspicious head movements.
Using MediaPipe FaceMesh and OpenCV, the system analyzes facial landmarks to determine head direction. If a candidate continuously looks away from the screen for more than 6 seconds, a violation is recorded, a warning is issued, and evidence is captured. After three violations, the exam is automatically terminated.

Key Feature
Real-time webcam monitoring during online exams
AI-based head direction detection using MediaPipe FaceMesh
Continuous 6-second rule violation detection
Automated voice alerts to notify candidates
Screenshot capture for violation evidence
Automatic exam termination after repeated violations
Live monitoring of direction and violation count
System Architecture
The system consists of two main components:

Frontend
Built with HTML, CSS, and JavaScript
Captures webcam frames and sends them to the backend
Displays proctoring status, warnings, and violation count

Backend
Built using Flask (Python)
Processes frames using OpenCV and MediaPipe
Implements violation detection logic and alert system
Captures screenshots and manages exam state

## Project Structure
proctor-vision/
│
├── app.py
├── requirements.txt
├── README.md
├── screenshots/
│
├── templates/
│     └── index.html
│
├── static/
│     ├── css/
│     └── js/
│
└── .gitignore

## Features

- ✅ Face Detection
- ✅ Head Direction Detection
- ✅ 6-second violation timer
- ✅ Voice Warning
- ✅ Screenshot Capture
- ✅ Automatic Exam Termination
- ✅ Real-time Violation Counter
- ✅ Responsive Web Interface

## Requirements

- Python 3.11.x (Recommended)
- pip 24+
- Webcam

>⚠️ This project is tested with Python 3.11.
>Python 3.13 and Python 3.14 may not work correctly with MediaPipe FaceMesh.

Technologies Used

Languages

Python
JavaScript
HTML
CSS

Frameworks & Libraries

Flask
OpenCV
MediaPipe FaceMesh
NumPy
PyTTSX3 (voice alerts)

How It Works

The candidate starts the exam using the Start Test button.
The system activates the webcam and begins capturing frames.
Frames are sent to the Flask backend for processing.
MediaPipe detects facial landmarks and determines head direction.
If the candidate looks away for more than 6 seconds, the system:
Issues a voice warning
Records a violation
Captures a screenshot
After three violations, the exam is automatically terminated.

## Compatibility

This project has been tested with the following environment:

- Python 3.11.9
- Flask 3.1.3
- MediaPipe 0.10.21
- OpenCV 4.11.0.86
- NumPy 1.26.4

> **Note:** Python 3.13 and 3.14 may not work correctly with the MediaPipe Face Mesh API used in this project.

## Installation & Setup

Clone the repository

```bash
git clone https://github.com/Vaibhav-Nagar03/proctor-vision.git
cd proctor-vision
```

Create virtual environment

```bash
py -3.11 -m venv venv
```

Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Upgrade pip

```bash
python -m pip install --upgrade pip
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the project

```bash
python app.py
```

## Troubleshooting

### MediaPipe Error

If you get:

```python
AttributeError: module 'mediapipe' has no attribute 'solutions'
```

Use Python 3.11.

Delete the virtual environment:

```bash
rm -rf venv
```

or on Windows

```powershell
Remove-Item -Recurse -Force venv
```

Create a new environment:

```bash
py -3.11 -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

Install dependencies again:

```bash
pip install -r requirements.txt
```

## Author

Vaibhav Rajesh Nagar

GitHub:
https://github.com/Vaibhav-Nagar03

Computer Engineering Student
AI • MERN Stack • Computer Vision
