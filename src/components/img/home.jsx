import React, { useState, useEffect, useRef } from "react";
import logo from "../img/logo.png";
import "./home.css";

// Import portfolio images as modules so the bundler tracks and
// correctly resolves them in production builds (raw string paths
// like "src/components/img/1.jpg" only work in dev, not after deploy).
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";
import img10 from "../img/10.jpg";
import img11 from "../img/11.jpg";
import servicesImage from "../img/image.png";

const HERO_SLIDES = [
  {
    id: 1,
    title: <>WELCOME TO <span className="highlight">ONE</span>PAGER</>,
    subtitle: "We design and develop awesome websites and smart applications, impactful identities using the latest technologies.",
    btnText: "LEARN MORE"
  },
  {
    id: 2,
    title: <>WE ARE GREAT<span className="bold">COMPANY</span></>,
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    btnText: "LEARN MORE"
  },
  {
    id: 3,
    title: <> <span className="highlight">ONE</span>PAGER IS VERY SUITABLE</>,
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit",
    // no btnText here on purpose — slide 3 has no button
  }
];

const PORTFOLIO_DATA = [
  { id: 1, category: ["Web Design", "Photography"], image: img1 },
  { id: 2, category: ["Illustration", "Branding"], image: img2 },
  { id: 3, category: ["Photography", "Illustration"], image: img3 },
  { id: 4, category: ["Web Design", "Branding"], image: img4 },
  { id: 5, category: ["Photography"], image: img5 },
  { id: 6, category: ["Web Design", "Photography", "Branding"], image: img6 },
  { id: 7, category: ["Web Design", "Illustration"], image: img7 },
  { id: 8, category: ["Web Design", "Branding"], image: img8 },
  { id: 9, category: ["Photography", "Illustration"], image: img9 },
  { id: 10, category: ["Web Design"], image: img10 },
  { id: 11, category: ["Web Design", "Photography"], image: img11 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const categories = ["All", "Web Design", "Photography", "Illustration", "Branding"];

  // Fixed: category is an array per project, so we need .includes()
  // rather than a strict equality check, or the filter buttons never match anything.
  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) =>
        item.category.some((c) => c.trim() === activeCategory)
      );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsSticky(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className="onepage-container">

      <section id="home" className="hero-section" ref={heroRef}>
        <div className="hero-overlay"></div>

        <div className="hero-content fade-in" key={activeSlide.id}>
          <h1 className="hero-title">{activeSlide.title}</h1>
          <p className="hero-subtitle">{activeSlide.subtitle}</p>
          {/* Only render the button if this slide actually has button text
              — this is what makes the 3rd slide's button disappear */}
          {activeSlide.btnText && (
            <button className="hero-btn">
              <span>{activeSlide.btnText}</span>
            </button>
          )}
        </div>

        <div className="hero-arrow arrow-left" onClick={handlePrevSlide}>&#10094;</div>
        <div className="hero-arrow arrow-right" onClick={handleNextSlide}>&#10095;</div>

        <div className="hero-dots">
          {HERO_SLIDES.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Logo"
            onClick={() => scrollToSection("home")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <ul className="navbar-menu">
          <li><button onClick={() => scrollToSection("home")} className="nav-item">HOME</button></li>
          <li><button onClick={() => scrollToSection("portfolio")} className="nav-item active">PORTFOLIO</button></li>
          <li><button onClick={() => scrollToSection("services")} className="nav-item">SERVICES</button></li>
          <li><button onClick={() => scrollToSection("team")} className="nav-item">TEAM</button></li>
          <li><button onClick={() => scrollToSection("about")} className="nav-item">ABOUT</button></li>
          <li><button onClick={() => scrollToSection("blog")} className="nav-item">BLOG</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="nav-item">CONTACT US</button></li>
        </ul>
      </nav>

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
              <img src={project.image} alt={`Portfolio item ${project.id}`} className="portfolio-img" />
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="page-section section-layout">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        <h3>WEB DESIGN</h3>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
        <h3>PHOTOGRAPHY</h3>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
        <h3>HTML5</h3>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
        <h3>JQUERY</h3>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
        <h3>SEO</h3>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
        <h3>CSS3</h3>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.</p>
        <img src={servicesImage} alt="Services" style={{ maxWidth: "100%", height: "auto" }} />
      </section>

      <section id="team" className="page-section">
        <h2>Our Team</h2>
      </section>

      <section id="about" className="page-section">
        <h2>About Us</h2>
      </section>

      <section id="blog" className="page-section">
        <h2>Blog</h2>
      </section>

      <section id="contact" className="page-section">
        <h2>Contact Us</h2>
      </section>
    </div>
  );
}
