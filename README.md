# Diabetes Prediction Project

This project predicts the likelihood of diabetes based on various health parameters using a machine learning model. The application is built using Flask for backend functionality, and Streamlit for an interactive user interface.



## Features
- Predict diabetes likelihood using user-provided health metrics.
- Interactive web interface for entering input values.
- Scalable backend with Flask and machine learning integration.

---

## Prerequisites
Ensure you have the following installed:
- **Node.js** (for frontend setup)
- **Python 3.x** (for backend functionality)
- Required Python libraries (specified in `requirements.txt`).

---

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/Vrainaaa/Diabetes-Prediction.git
cd Diabetes-Prediction
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Start the Frontend
```bash
npm start
```

### Step 4: Set Up Backend
Install the required Python libraries:
```bash
pip install -r requirements.txt
```

---

## Running the Application

### Flask Backend
1. Ensure the `app.py` file is in the root directory.
2. Run the Flask application:
   ```bash
   python app.py
   ```

### Streamlit Interface
1. Install Streamlit:
   ```bash
   pip install streamlit
   ```
2. Start the Streamlit application:
   ```bash
   streamlit run app.py
   ```

---

## Usage
1. Access the web interface through your browser.
2. Enter the required health metrics such as Glucose, BMI, Age, etc.
3. Submit the data to get predictions.

---

## Dataset
The model uses a dataset containing the following columns:
- **Pregnancies**
- **Glucose**
- **BloodPressure**
- **SkinThickness**
- **Insulin**
- **BMI**
- **DiabetesPedigreeFunction**
- **Age**
- **Outcome** (0 for non-diabetic, 1 for diabetic)

---

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push the branch: `git push origin feature-name`
5. Create a pull request.

---

## License
This project is licensed under the MIT License.


 
