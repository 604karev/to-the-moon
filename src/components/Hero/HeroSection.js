import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Discover the vast expanses of <span className="hero__space">space</span></h1>
          <p className="hero__subtitle">Where the possibilities are <span className="hero__endless">endless!</span></p>
          <a href="#learn-more" className="hero__cta">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
