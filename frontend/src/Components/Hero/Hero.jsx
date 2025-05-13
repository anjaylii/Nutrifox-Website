import React from "react";
import "./Hero.css";
import mascotImage from "../Assets/mrmakhana.png";
import backgroundVideo from "../Assets/Bg-makhana.mp4";

export const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="hero-card">
        {/* Left Side: Text Content */}
        <div className="text-content">
          <h1 className="title">Nutrifox - A Healthier Way to Snack!</h1>
          <p className="subtitle">
            Experience the benefits of Makhana – Healthy, Delicious, and Nutrient-packed.
          </p>
          <p>
          Nutrifox is your go-to destination for healthy, delicious, and nutrient-packed snacks made from premium-quality Makhana. We believe in redefining snacking with gluten-free, antioxidant-rich options that are both tasty and wholesome. Our upcoming range includes roasted Makhana in a variety of flavors, ensuring there’s something for everyone. Stay tuned as we bring you the best of nature’s superfood, crafted for a healthier lifestyle. Explore the benefits, experience the taste, and get ready to snack smart with Nutrifox!
          </p>
        </div>

        {/* Right Side: Mascot */}
        <div className="mascot-container">
          <img
            src={mascotImage}
            alt="Mascot"
            className="mascot"
            onClick={() => alert("Hello from Mr. Makhana!")}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
