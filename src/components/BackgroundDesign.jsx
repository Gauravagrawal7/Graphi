import React from "react";
import "./BackgroundDesign.css";
import grafhiLogo from "../assets/Ellipse grafhi.png";
import vectorImage from "../assets/vector_image.png";

export default function BackgroundDesign() {
  return (
    <div className="container">
      <div className="left-section">
        <div className="ellipse ellipse-14"></div>
        <div className="ellipse ellipse-13"></div>
        <div className="ellipse ellipse-12"></div>
        <div className="ellipse ellipse-11"></div>
        <div className="ellipse ellipse-10"></div>
        <div className="ellipse ellipse-9"></div>
        <div className="ellipse ellipse-8"></div>
        <div className="ellipse ellipse-7"></div>
        <div className="ellipse ellipse-6"></div>
        <div className="ellipse ellipse-5"></div>

        <div className="ellipse ellipse-4"></div>

        <div className="ellipse ellipse-3">
          <img src={grafhiLogo} alt="Grafhi Logo" className="grafhi-logo" />

          <img src={vectorImage} alt="Vector Art" className="vector-image" />
        </div>
      </div>

      <h1 className="welcome-text">
        Welcome to <br /> Grafhi.
      </h1>
      <p className="subtext">
        Let’s get you all set up so you can verify your personal account and
        begin setting up your profile
      </p>
    </div>
  );
}
