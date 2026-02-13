import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  
  const menuItems = [
    { id: 'overview', icon: '🏠', label: 'Dashboard' },
    { id: 'ecopoints', icon: '🌱', label: 'Eco Points' },
    { id: 'complaints', icon: '📢', label: 'Complaints' },
    { id: 'bins', icon: '🗑️', label: 'Smart Bins' },
    { id: 'stats', icon: '📊', label: 'Waste Stats' },
    { id: 'guide', icon: '♻️', label: 'Segregation Guide' },
    { id: 'notifications', icon: '🔔', label: 'Notifications' },
    { id: 'profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-logo">🌿 EcoCity</h2>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn">
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Welcome back, User! 👋</h1>
            <p className="header-date">Thursday, February 13, 2026</p>
          </div>
          <div className="header-right">
            <div className="user-badge">
              <span className="user-avatar">👤</span>
              <span className="user-name">John Doe</span>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🌱</div>
            <div className="stat-info">
              <h3>1,250</h3>
              <p>Eco Points</p>
            </div>
            <div className="stat-trend positive">+15% this week</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📢</div>
            <div className="stat-info">
              <h3>5</h3>
              <p>Active Complaints</p>
            </div>
            <div className="stat-trend">2 pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🗑️</div>
            <div className="stat-info">
              <h3>8</h3>
              <p>Nearby Bins</p>
            </div>
            <div className="stat-trend">3 nearby</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">♻️</div>
            <div className="stat-info">
              <h3>45kg</h3>
              <p>Waste Recycled</p>
            </div>
            <div className="stat-trend positive">+8kg this month</div>
          </div>
        </section>

        {/* Action Cards Grid */}
        <section className="actions-grid">
          <div className="action-card" onClick={() => setActiveSection('complaints')}>
            <div className="action-icon">📢</div>
            <h3>Raise Complaint</h3>
            <p>Report issues with waste management</p>
            <button className="action-btn">Report Now →</button>
          </div>

          <div className="action-card" onClick={() => setActiveSection('bins')}>
            <div className="action-icon">🗺️</div>
            <h3>Nearby Smart Bins</h3>
            <p>Find smart bins in your area</p>
            <button className="action-btn">View Map →</button>
          </div>

          <div className="action-card" onClick={() => setActiveSection('complaints')}>
            <div className="action-icon">📋</div>
            <h3>My Complaints</h3>
            <p>Track your complaint status</p>
            <button className="action-btn">View All →</button>
          </div>

          <div className="action-card" onClick={() => setActiveSection('guide')}>
            <div className="action-icon">📚</div>
            <h3>Segregation Guide</h3>
            <p>Learn proper waste segregation</p>
            <button className="action-btn">Learn More →</button>
          </div>

          <div className="action-card" onClick={() => setActiveSection('notifications')}>
            <div className="action-icon">🔔</div>
            <h3>Notifications</h3>
            <p>Stay updated with alerts</p>
            <span className="notification-badge">3 new</span>
            <button className="action-btn">View All →</button>
          </div>

          <div className="action-card" onClick={() => setActiveSection('profile')}>
            <div className="action-icon">⚙️</div>
            <h3>Profile Settings</h3>
            <p>Manage your account</p>
            <button className="action-btn">Edit Profile →</button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon success">✓</div>
              <div className="activity-content">
                <p>Complaint #1234 resolved</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon info">🌱</div>
              <div className="activity-content">
                <p>Earned 50 Eco Points for recycling</p>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon warning">⏳</div>
              <div className="activity-content">
                <p>Complaint #1235 in progress</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
