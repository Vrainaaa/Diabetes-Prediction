import React from "react";
import Doctor from "../Assets/doctor-groups.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Diabetes Care, your trusted solution for early detection
          and management of diabetes. Our innovative prediction system helps you
          assess your risk and take proactive steps towards a healthier life.
          Let us guide you towards managing your health more effectively.
        </p>

        <h4 className="about-text-title">How We Help</h4>

        <SolutionStep
          title="Input Your Data"
          description="Simply input your health data, such as age, glucose levels, BMI, and more. Our system processes the information to evaluate your risk of diabetes."
        />

        <SolutionStep
          title="Receive a Prediction"
          description="Based on the data provided, our prediction model assesses your likelihood of having diabetes, offering you insights into your health status."
        />

        <SolutionStep
          title="Take Action"
          description="Our system provides personalized recommendations to help you manage or prevent diabetes. Take action with expert advice and maintain a healthy lifestyle."
        />
      </div>
    </div>
  );
}

export default About;
