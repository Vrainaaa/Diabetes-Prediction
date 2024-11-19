import React, { useEffect, useState } from "react";
import Doctor from "../Assets/profile-6.png";  // You can replace this image with a relevant diabetes-related image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const handleCheckPredictionClick = () => {
    navigate("/diabetes-prediction");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🩺 Take Control of Your Health</p>
          <h2 className="text-title">
            Get Your Diabetes Risk Prediction Now
          </h2>
          <p className="text-description">
            Find out if you're at risk for diabetes and get personalized health
            advice. Our system predicts your likelihood of developing diabetes based
            on your health data and provides recommendations to manage your health
            effectively.
          </p>
          <div className="button-container">
            <button
              className="text-appointment-btn"
              type="button"
              onClick={handleBookAppointmentClick}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Book an Appointment
            </button>
            <button
              className="text-appointment-btn"
              type="button"
              onClick={handleCheckPredictionClick}
            >
              Check Your Diabetes Prediction
            </button>
          </div>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>100k+</p>
              <p>Predictions Made</p>
            </div>

            <div className="text-stats-container">
              <p>200+</p>
              <p>Health Experts</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
