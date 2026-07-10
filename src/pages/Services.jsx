import React from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES_DATA, getImgUrl } from "../components/data";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="service-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-badge" onClick={() => navigate("/")}>
                <i className={`fa-solid ${service.iconClass}`}></i>
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-showcase">
        <img src={getImgUrl("image.png")} alt="Services banner" />
      </div>
    </section>
  );
}
