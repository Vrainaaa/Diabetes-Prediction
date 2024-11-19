import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients' word</p>

       

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">Jaypee</p>
            <p className="rw-reviewer-place">Noida,India  </p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Diabetes Prediction Section */}
      <div className="diabetes-info">
        <h2 className="diabetes-title">Diabetes Prediction</h2>
        <p className="diabetes-desc">
          At <strong>DiabetesCare</strong>, we use advanced machine learning models to predict the likelihood of diabetes based on several health factors, including glucose levels, BMI, age, and more. This prediction helps you understand your risk and take preventive steps towards maintaining your health.
        </p>
        
        <h3 className="diabetes-title">After Prediction Service</h3>
        <p className="diabetes-desc">
          After receiving your diabetes prediction, we offer follow-up services, including dietary advice, exercise recommendations, and access to healthcare professionals for further consultation. It's essential to act on the results and make lifestyle adjustments to manage your health effectively.
        </p>
      </div>
    </div>
  );
}

export default Reviews;
