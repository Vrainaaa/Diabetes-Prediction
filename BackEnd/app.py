import streamlit as st
import numpy as np
import pickle
import os

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct paths for model and scaler files
model_path = os.path.join(script_dir, 'model.pkl')
scaler_path = os.path.join(script_dir, 'scaler.pkl')

# Load the trained model and scaler
model = pickle.load(open(model_path, 'rb'))
scaler = pickle.load(open(scaler_path, 'rb'))

# Streamlit app layout
st.title('Diabetes Prediction')
st.write('Enter the details below to predict if you have diabetes.')

# Get user inputs (only the 4 features used during training)
pregnancies = st.number_input('Pregnancies', min_value=0)
glucose = st.number_input('Glucose Level', min_value=0)
blood_pressure = st.number_input('Blood Pressure', min_value=0)
skin_thickness = st.number_input('Skin Thickness', min_value=0)

# When the user clicks the button, make a prediction
if st.button('Predict'):
    # Collect input data
    input_data = np.array([[pregnancies, glucose, blood_pressure, skin_thickness]])  # Only these 4 features

    # Scale the input features using the loaded scaler
    scaled_input = scaler.transform(input_data)

    # Make the prediction
    prediction = model.predict(scaled_input)

    # Display result
    if prediction == 1:
        st.write("You have Diabetes, please consult a doctor.")
    else:
        st.write("You don't have Diabetes.")
