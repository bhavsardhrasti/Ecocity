import React, { useState } from 'react';

function ReportSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaintType: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting a complaint
    const complaintId = Math.floor(Math.random() * 10000) + 1;
    alert(`Complaint submitted successfully! Your complaint ID is: ${complaintId}`);
    setFormData({ name: '', email: '', complaintType: '', location: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="report" className="report-section" data-aos="fade-up">
      <div className="report-card">
        <div className="report-header">
          <h2>Report a Complaint</h2>
          <p>Help us maintain a clean city by reporting waste management issues</p>
        </div>
        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="complaintType">Complaint Type *</label>
            <select 
              id="complaintType" 
              name="complaintType" 
              value={formData.complaintType}
              onChange={handleChange}
              required
            >
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
            <input 
              type="text" 
              id="location" 
              name="location" 
              placeholder="Street address or area description" 
              value={formData.location}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea 
              id="description" 
              name="description" 
              rows="4" 
              placeholder="Please describe the issue in detail..." 
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Complaint</button>
        </form>
      </div>
    </section>
  );
}

export default ReportSection;
