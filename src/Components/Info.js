import React from "react";
import InformationCard from "./InformationCard";
import { faHeartbeat, faShieldVirus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Prediction & Action Plan</span>
        </h3>
        <p className="info-description">
          Our prediction model analyzes various health factors to predict potential medical conditions. Based on the prediction, we provide tailored advice and necessary actions you can take to ensure your well-being. Let us help you stay informed and proactive about your health.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Health Risk Prediction"
          description="Our predictive system assesses your health risk based on vital parameters. After the prediction, you can take immediate actions to manage your health risk, including lifestyle changes, monitoring, and consultation with specialists."
          icon={faHeartbeat}
        />

        <InformationCard
          title="Precautionary Measures"
          description="Once the prediction is made, we provide actionable steps like scheduling check-ups, adopting a healthier lifestyle, and regular monitoring to manage any predicted health conditions effectively."
          icon={faShieldVirus}
        />

        <InformationCard
          title="Further Testing"
          description="Depending on the prediction, further tests may be recommended. These could include blood tests, heart screenings, or genetic assessments to confirm the results and assist with a personalized treatment plan."
          icon={faPlusCircle}
        />
      </div>
    </div>
  );
}

export default Info;
