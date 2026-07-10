import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="page-section section-layout contact-section">
      <div className="contact-header">
        <h2 className="contact-title">GET IN TOUCH</h2>
        <p className="contact-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact info</h3>
          <p className="info-description">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
          <p className="info-description">Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>
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
            <button type="submit" className="contact-submit-btn">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </section>
  );
}
