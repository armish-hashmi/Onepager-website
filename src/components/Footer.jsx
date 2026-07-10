import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <footer className="contact-footer">
      <div className="footer-container">
        <p>© 2014 OnePager, All Rights Reserved</p>
        <div className="footer-socials">
          <a href="#facebook" onClick={goHome}><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#twitter" onClick={goHome}><i className="fa-brands fa-twitter"></i></a>
          <a href="#rss" onClick={goHome}><i className="fa-solid fa-rss"></i></a>
          <a href="#google" onClick={goHome}><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#linkedin" onClick={goHome}><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#pinterest" onClick={goHome}><i className="fa-brands fa-pinterest-p"></i></a>
        </div>
      </div>
    </footer>
  );
}
