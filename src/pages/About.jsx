import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CLIENT_PAGES, STATS_DATA } from "../components/data";

export default function About() {
  const [activePage, setActivePage] = useState(0);
  const navigate = useNavigate();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-top-grid">
          <div className="about-bio">
            <h2 className="about-heading">COMPANY BIOGRAPHY</h2>
            <span className="teal-badge">SHORT STORY ABOUT US</span>
            <p className="bio-text main-p">
              This is <span className="teal-text">Photoshop's</span> version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
            </p>
            <p className="bio-text">
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p className="bio-text">
              Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
            </p>
          </div>

          <div className="about-clients">
            <div className="clients-header">
              <h2 className="about-heading">OUR CLIENTS</h2>
              <span className="teal-badge">WE LOVE OUR CLIENTS</span>
              <div className="carousel-dots">
                {CLIENT_PAGES.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${activePage === index ? "active" : ""}`}
                    onClick={() => setActivePage(index)}
                  ></span>
                ))}
              </div>
            </div>

            <div className="clients-grid">
              {CLIENT_PAGES[activePage]?.map((client) => (
                <div key={client.id} className="client-card">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="client-logo-img"
                    onClick={() => navigate("/")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats-container">
          <div className="stats-header">
            <h2 className="about-heading center">COMPANY STATS</h2>
            <p className="stats-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
          </div>
          <div className="stats-grid">
            {STATS_DATA.map((stat) => (
              <div key={stat.id} className="stat-card">
                <i className={`fa-solid ${stat.iconClass} stat-icon`}></i>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
