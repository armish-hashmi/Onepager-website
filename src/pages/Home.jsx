import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HERO_SLIDES } from "../components/data";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content fade-in" key={HERO_SLIDES[currentSlide].id}>
        <h1 className="hero-title">{HERO_SLIDES[currentSlide].title}</h1>
        <p className="hero-subtitle">{HERO_SLIDES[currentSlide].subtitle}</p>

        {HERO_SLIDES[currentSlide].btnText && (
          <button className="hero-btn" onClick={() => navigate("/portfolio")}>
            <span>{HERO_SLIDES[currentSlide].btnText}</span>
          </button>
        )}
      </div>

      <div className="hero-arrow arrow-left" onClick={handlePrevSlide}>&#10094;</div>
      <div className="hero-arrow arrow-right" onClick={handleNextSlide}>&#10095;</div>
    </section>
  );
}
