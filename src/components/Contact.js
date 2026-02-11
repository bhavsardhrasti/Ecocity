import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <div className="contact-page" data-aos="fade-in">
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade-in">
        <div className="hero-container" data-aos="fade-up">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">Get in Touch</h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
            Connect with our team of seasoned professionals to explore how EcoCity's cutting-edge smart waste management solutions can revolutionize your city's sustainability efforts. With decades of expertise in environmental engineering and urban innovation, we're committed to delivering tailored, high-impact solutions that drive measurable results.
          </p>
        </div>
      </section>

      {/* Centered Contact Form and Info Section */}
      <section className="contact-content" data-aos="fade-in">
        <div className="contact-centered-container" data-aos="fade-up" data-aos-delay="600">
          <div className="contact-form-section" data-aos="fade-right" data-aos-delay="800">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section" data-aos="fade-left" data-aos-delay="1000">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">📧</div>
                <h3>Email</h3>
                <p>info@ecocity.com</p>
                <p>sales@ecocity.com</p>
              </div>
              <div className="contact-card">
                <div className="card-icon">📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri, 9AM-6PM EST</p>
              </div>
              <div className="contact-card">
                <div className="card-icon">📍</div>
                <h3>Address</h3>
                <p>123 Green Avenue</p>
                <p>EcoCity, EC 12345</p>
                <p>United States</p>
              </div>
            </div>

            <div className="office-locations">
              <h3>Office Locations</h3>
              <div className="location">
                <h4>Headquarters</h4>
                <p>123 Green Avenue, EcoCity, EC 12345</p>
              </div>
              <div className="location">
                <h4>Regional Office</h4>
                <p>456 Sustainable Street, GreenTown, GT 67890</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
