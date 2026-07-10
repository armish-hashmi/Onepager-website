import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../components/data";

const categories = ["All", "Web Design", "Photography", "Illustration", "Branding"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category.includes(activeCategory));

  return (
    <section id="portfolio" className="page-section section-layout">
      <div className="portfolio-header">
        <h2 className="section-title">OUR PORTFOLIO</h2>
        <p className="section-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        <div className="title-underline"></div>
      </div>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt="Portfolio item" className="portfolio-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
