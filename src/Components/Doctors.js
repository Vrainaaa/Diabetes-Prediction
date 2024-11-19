import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-8.png";
import profile2 from "../Assets/profile-6.png";
import profile3 from "../Assets/profile-8.png";
import profile4 from "../Assets/profile-7.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Diabetes Specialists</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of diabetes specialists, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to help you manage and prevent diabetes effectively.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Ravi Kumar"
          title="Endocrinologist"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Priya Sharma"
          title="Diabetes Specialist"
          stars="4.8"
          reviews="1200"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Arvind Patel"
          title="General Physician"
          stars="4.7"
          reviews="900"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Ayesha Reddy"
          title="Nutritionist"
          stars="4.8"
          reviews="650"
        />
      </div>
    </div>
  );
}

export default Doctors;
