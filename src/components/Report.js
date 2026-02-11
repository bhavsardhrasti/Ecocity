import React from 'react';
import Footer from './Footer';

function Report() {
  return (
    <div className="report-page" data-aos="fade-in">
      {/* Hero Section */}
      <section className="report-hero" data-aos="fade-in">
        <div className="hero-container" data-aos="fade-up">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">Report a Complaint</h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
            Help us improve our services by reporting issues related to waste management. Your feedback is crucial in maintaining a clean and sustainable city. Please provide detailed information so we can address your concerns promptly.
          </p>
        </div>
      </section>

      {/* Centered Report Form and Info Section */}
      <section className="report-content" data-aos="fade-in">
        <div className="report-centered-container" data-aos="fade-up" data-aos-delay="600">
          <div className="report-form-section" data-aos="fade-right" data-aos-delay="800">
            <h2>Submit Your Complaint</h2>
            <form className="report-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="complaintType">Complaint Type *</label>
                <select id="complaintType" name="complaintType" required>
                  <option value="">Select a type</option>
                  <option value="waste-collection">Waste Collection Issue</option>
                  <option value="illegal-dumping">Illegal Dumping</option>
                  <option value="overflowing-bin">Overflowing Bin</option>
                  <option value="missed-pickup">Missed Pickup</option>
                  <option value="damaged-bin">Damaged Bin</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input type="text" id="location" name="location" placeholder="Street address or area description" required />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea id="description" name="description" rows="6" placeholder="Please describe the issue in detail..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Complaint</button>
            </form>
          </div>

          <div className="report-info-section" data-aos="fade-left" data-aos-delay="1000">
            <h2>Report Guidelines</h2>
            <div className="report-cards">
              <div className="report-card">
                <div className="card-icon">📝</div>
                <h3>Provide Details</h3>
                <p>Include specific information about the location, time, and nature of the complaint to help us respond quickly.</p>
              </div>
              <div className="report-card">
                <div className="card-icon">⏰</div>
                <h3>Response Time</h3>
                <p>We aim to acknowledge all reports within 24 hours and address urgent issues within 48 hours.</p>
              </div>
              <div className="report-card">
                <div className="card-icon">🔒</div>
                <h3>Privacy</h3>
                <p>Your personal information is kept confidential and used only to process your complaint.</p>
              </div>
            </div>

            <div className="emergency-contact">
              <h3>Emergency Situations</h3>
              <p>For immediate hazards or health risks, please call our emergency hotline:</p>
              <p className="emergency-number">+1 (555) 911-HELP</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Report;
