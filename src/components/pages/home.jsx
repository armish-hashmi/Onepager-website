import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import "./home.css";

const getImgUrl = (name) => new URL(`../img/${name}`, import.meta.url).href;

const HERO_SLIDES = [
  {
    id: 1,
    title: <>WELCOME TO <span className="highlight">ONE</span>PAGER</>,
    subtitle: "We design and develop awesome websites and smart applications, impactful identities using the latest technologies.",
    btnText: "LEARN MORE"
  },
  {
    id: 2,
    title: <>WE ARE GREAT <span className="bold">COMPANY</span></>,
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    btnText: "LEARN MORE"
  },
  {
    id: 3,
    title: <> <span className="highlight">ONE</span>PAGER IS VERY SUITABLE</>,
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit",
    btnText: null 
  }
];

const PORTFOLIO_DATA = [
  { id: 1, category: ["Web Design", "Photography"], image: getImgUrl("1.jpg") },
  { id: 2, category: ["Illustration", "Branding"], image: getImgUrl("2.jpg") },
  { id: 3, category: ["Photography", "Illustration"], image: getImgUrl("3.jpg") },
  { id: 4, category: ["Web Design", "Branding"], image: getImgUrl("4.jpg") },
  { id: 5, category: ["Photography"], image: getImgUrl("5.jpg") },
  { id: 6, category: ["Web Design", "Photography", "Branding"], image: getImgUrl("6.jpg") },
  { id: 7, category: ["Web Design", "Illustration"], image: getImgUrl("7.jpg") },
  { id: 8, category: ["Web Design", "Branding"], image: getImgUrl("8.jpg") },
  { id: 9, category: ["Photography", "Illustration"], image: getImgUrl("9.jpg") },
  { id: 10, category: ["Web Design"], image: getImgUrl("10.jpg") },
  { id: 11, category: ["Web Design", "Photography"], image: getImgUrl("11.jpg") },
];

const SERVICES_DATA = [
  {
    id: 1,
    title: "WEB DESIGN",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    iconClass: "fa-bullhorn"
  },
  {
    id: 2,
    title: "PHOTOGRAPHY",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    iconClass: "fa-plane"
  },
  {
    id: 3,
    title: "HTML5",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    iconClass: "fa-copy"
  },
  {
    id: 4,
    title: "JQUERY",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    iconClass: "fa-thumbs-up"
  },
  {
    id: 5,
    title: "SEO",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    iconClass: "fa-image"
  },
  {
    id: 6,
    title: "CSS3",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    iconClass: "fa-shield-halved"
  }
];

const TEAM_DATA = [
  { id: 1, name: "Owen Miller", role: "developer", image: getImgUrl("team1.jpg") },
  { id: 2, name: "Mike William", role: "developer", image: getImgUrl("team2.jpg") },
  { id: 3, name: "Besim Dauti", role: "developer", image: getImgUrl("team3.jpg") },
  { id: 4, name: "Faton Avdiu", role: "developer", image: getImgUrl("team4.jpg") }
];

const CLIENT_PAGES = [
  [
    { id: 1, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 2, name: "HP", image: getImgUrl("hp.png") },
    { id: 3, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 4, name: "CANON", image: getImgUrl("canon.png") }
  ],
  [
    { id: 5, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 6, name: "HP", image: getImgUrl("hp.png") },
    { id: 7, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 8, name: "CANON", image: getImgUrl("canon.png") }
  ],
  [
    { id: 9, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 10, name: "HP", image: getImgUrl("hp.png") },
    { id: 11, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 12, name: "CANON", image: getImgUrl("canon.png") }
  ],
  [
    { id: 13, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 14, name: "HP", image: getImgUrl("hp.png") },
    { id: 15, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 16, name: "CANON", image: getImgUrl("canon.png") }
  ]
];

const STATS_DATA = [
  { id: 1, number: "956779", label: "Lines of code written", iconClass: "fa-flask" },
  { id: 2, number: "1479", label: "Coffe Drinked", iconClass: "fa-mug-hot" },
  { id: 3, number: "578", label: "Happy Clients", iconClass: "fa-users" },
  { id: 4, number: "2178", label: "Projects Done", iconClass: "fa-briefcase" }
];

const BLOG_DATA = [
  {
    id: 1,
    image: getImgUrl("blog1.jpg"),
    date: "19 oct",
    comments: 10,
    title: "Mobile Friendly Comments Dashboardnow launched!",
    excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu"
  },
  {
    id: 2,
    image: getImgUrl("blog2.jpg"),
    date: "19 oct",
    comments: 10,
    title: "Mobile Friendly Comments Dashboardnow launched!",
    excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu"
  },
  {
    id: 3,
    image: getImgUrl("blog3.jpg"),
    date: "19 oct",
    comments: 10,
    title: "Mobile Friendly Comments Dashboardnow launched!",
    excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu"
  },
  {
    id: 4,
    image: getImgUrl("blog4.jpg"),
    date: "19 oct",
    comments: 10,
    title: "Mobile Friendly Comments Dashboardnow launched!",
    excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSection, setActiveSection] = useState("home");
  const [activePage, setActivePage] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const categories = ["All", "Web Design", "Photography", "Illustration", "Branding"];

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

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        if (window.scrollY >= homeHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category.includes(activeCategory));

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="onepage-container">
      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content fade-in" key={HERO_SLIDES[currentSlide].id}>
          <h1 className="hero-title">{HERO_SLIDES[currentSlide].title}</h1>
          <p className="hero-subtitle">{HERO_SLIDES[currentSlide].subtitle}</p>
          
          {HERO_SLIDES[currentSlide].btnText && (
            <button className="hero-btn" onClick={() => scrollToSection("portfolio")}>
              <span>{HERO_SLIDES[currentSlide].btnText}</span>
            </button>
          )}
        </div>

        <div className="hero-arrow arrow-left" onClick={handlePrevSlide}>&#10094;</div>
        <div className="hero-arrow arrow-right" onClick={handleNextSlide}>&#10095;</div>
      </section>

     
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Logo" className="logo-img" style={{ cursor: "pointer" }} />
          </div>

          <ul className="navbar-menu">
            <li>
              <button 
                onClick={() => scrollToSection("home")} 
                className={`nav-item ${activeSection === "home" ? "active" : ""}`}
              >
                <span>HOME</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("portfolio")} 
                className={`nav-item ${activeSection === "portfolio" ? "active" : ""}`}
              >
                <span>PORTFOLIO</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("services")} 
                className={`nav-item ${activeSection === "services" ? "active" : ""}`}
              >
                <span>SERVICES</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("team")} 
                className={`nav-item ${activeSection === "team" ? "active" : ""}`}
              >
                <span>TEAM</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className={`nav-item ${activeSection === "about" ? "active" : ""}`}
              >
                <span>ABOUT</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("blog")} 
                className={`nav-item ${activeSection === "blog" ? "active" : ""}`}
              >
                <span>BLOG</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
              >
                <span>CONTACT US</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* PORTFOLIO */}
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

      {/* SERVICES*/}
      <section id="services" className="service-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">OUR SERVICES</h2>
            <p className="section-subtitle">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          <div className="services-grid">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-badge" onClick={() => scrollToSection("home")}>
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

      {/* TEAM */}
      <section id="team" className="team-section">
        <button className="carousel-arrow left-arrow" aria-label="Previous">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">MEET THE TEAM</h2>
            <p className="team-subtitle">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          <div className="team-grid">
            {TEAM_DATA.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>

                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>

                <div className="team-socials">
                  <a href="#home" className="social-icon" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#home" className="social-icon" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#home" className="social-icon" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                    <i className="fa-solid fa-rss"></i>
                  </a>
                  <a href="#home" className="social-icon" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow right-arrow" aria-label="Next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-top-grid">
            <div className="about-bio">
              <h2 className="about-heading">COMPANY BIOGRAPHY</h2>
              <span className="teal-badge">SHORT STORY ABOUT US</span>
              
              <p className="bio-text main-p">
                This is <span className="teal-text">Photoshop's</span> version of Lorem Ipsum. 
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum 
                auctor, nisi elit
              </p>
              
              <p className="bio-text">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat 
                auctor eu in elit. <span className="teal-text">class aptent taciti</span> sociosqu ad litora 
                torquent per conubia nostra, per inceptos himenaeos.
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
                {CLIENT_PAGES[activePage].map((client) => (
                  <div key={client.id} className="client-card">
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="client-logo-img" 
                      onClick={() => scrollToSection("home")} 
                    />                   
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-stats-container">
            <div className="stats-header">
              <h2 className="about-heading center">COMPANY STATS</h2>
              <p className="stats-subtitle">
                This is Photoshop's version of Lorem Ipsum. Proin gravida
              </p>
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

      {/* BLOG */}
      <section id="blog" className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <h2 className="blog-title">LATEST POSTS</h2>
            <p className="blog-subtitle">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          <div className="blog-grid">
            {BLOG_DATA.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-img-wrapper">
                  <img src={post.image} alt={post.title} className="blog-img" />
                  
                  <div className="blog-meta-badge">
                    <span className="meta-item">
                      <i className="fa-regular fa-clock"></i> {post.date}
                    </span>
                    <span className="meta-item">
                      <i className="fa-solid fa-comment"></i> {post.comments}
                    </span>
                  </div>
                </div>

                <div className="blog-content">
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT*/}
      <section id="contact" className="page-section section-layout contact-section">
        <div className="contact-header">
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact info</h3>
            <p className="info-description">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.
            </p>
            <p className="info-description">
              Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum
            </p>

            <div className="info-meta">
              <p><i className="fa-solid fa-house"></i> lorem ipsum street</p>
              <p><i className="fa-solid fa-phone"></i> +399 (500) 321 9548</p>
              <p><i className="fa-solid fa-envelope"></i> info@domain.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-inputs">
              <div className="input-group">
                <span className="input-icon"><i className="fa-solid fa-user"></i></span>
                <input type="text" placeholder="Name" required />
              </div>

              <div className="input-group">
                <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
                <input type="email" placeholder="e-mail" required />
              </div>

              <div className="input-group">
                <span className="input-icon"><i className="fa-solid fa-link"></i></span>
                <input type="text" placeholder="website" />
              </div>
            </div>

            <div className="form-message-group">
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="contact-submit-btn">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER*/}
      <footer className="contact-footer">
        <div className="footer-container">
          <p>© 2014 OnePager, All Rights Reserved</p>
          <div className="footer-socials">
            <a href="#facebook" onClick={() => scrollToSection("home")}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#twitter" onClick={() => scrollToSection("home")}><i className="fa-brands fa-twitter"></i></a>
            <a href="#rss" onClick={() => scrollToSection("home")}><i className="fa-solid fa-rss"></i></a>
            <a href="#google" onClick={() => scrollToSection("home")}><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#linkedin" onClick={() => scrollToSection("home")}><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#pinterest" onClick={() => scrollToSection("home")}><i className="fa-brands fa-pinterest-p"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}