import React from 'react';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, User 👋</h1>
      </div>
      <div className="dashboard-nav">
        <button className="nav-btn">Eco Points</button>
        <button className="nav-btn">Complaints</button>
        <button className="nav-btn">Bins</button>
        <button className="nav-btn">Waste Stats</button>
      </div>
      <div className="dashboard-sections">
        <div className="section">
          <h2>📢 Raise Complaint</h2>
          <p>Report issues with waste management.</p>
        </div>
        <div className="section">
          <h2>🗑️ Nearby Smart Bins</h2>
          <p>Find smart bins in your area.</p>
        </div>
        <div className="section">
          <h2>📊 My Complaints / Status</h2>
          <p>View and track your complaints.</p>
        </div>
        <div className="section">
          <h2>♻️ Waste Segregation Guide</h2>
          <p>Learn how to segregate waste properly.</p>
        </div>
        <div className="section">
          <h2>🔔 Notifications</h2>
          <p>Stay updated with latest notifications.</p>
        </div>
        <div className="section">
          <h2>👤 Profile / Logout</h2>
          <p>Manage your profile or logout.</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
