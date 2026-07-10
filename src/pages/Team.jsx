import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TEAM_DATA } from "../components/data";

export default function Team() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextTeam = () => {
    setCurrentTeamIndex((prev) => (prev >= TEAM_DATA.length - visibleCards ? 0 : prev + 1));
  };

  const handlePrevTeam = () => {
    setCurrentTeamIndex((prev) => (prev === 0 ? TEAM_DATA.length - visibleCards : prev - 1));
  };

  return (
    <section id="team" className="team-section">
      <button className="carousel-arrow left-arrow" onClick={handlePrevTeam} aria-label="Previous Team Member">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">MEET THE TEAM</h2>
          <p className="team-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="team-carousel-window">
          <div
            className="team-track"
            style={{ transform: `translateX(-${currentTeamIndex * (100 / visibleCards)}%)` }}
          >
            {TEAM_DATA.map((member) => (
              <div
                key={member.id}
                className="team-card-wrapper"
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <div className="team-card">
                  <div className="team-img-wrapper">
                    <img src={member.image} alt={member.name} className="team-img" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <div className="team-socials">
                    <a href="#facebook" className="social-icon" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#twitter" className="social-icon" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#rss" className="social-icon" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                      <i className="fa-solid fa-rss"></i>
                    </a>
                    <a href="#google" className="social-icon" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="carousel-arrow right-arrow" onClick={handleNextTeam} aria-label="Next Team Member">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </section>
  );
}
