import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      const checkAndScroll = () => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(checkAndScroll, 100); // Retry every 100ms until element is found
        }
      };
      setTimeout(checkAndScroll, 200); // Initial delay
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" data-aos="fade-in">
      <div className="footer-container" data-aos="fade-up" data-aos-delay="200">
        <div className="footer-section" data-aos="zoom-in" data-aos-delay="400">
          <h3>EcoCity Solutions</h3>
          <p>Leading the industry in innovative smart waste management technologies. With decades of expertise, we empower cities to achieve sustainable, efficient waste collection systems that enhance environmental stewardship and operational excellence.</p>
        </div>
        <div className="footer-section" data-aos="zoom-in" data-aos-delay="500">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'hero')}>Home</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'about')}>About Us</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'features')}>Features</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'benefits')}>Benefits</a></li>
            <li><a href="#" onClick={(e) => scrollToSection(e, 'report')}>Report Issue</a></li>
            <li><Link to="/smart-bins">Smart Bins</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section" data-aos="zoom-in" data-aos-delay="600">
          <h3>Contact Information</h3>
          <p>Email: info@ecocity.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Green Avenue, EcoCity, EC 12345</p>
        </div>
        <div className="footer-section" data-aos="zoom-in" data-aos-delay="700">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="800">
        <p>© 2026 EcoCity Solutions. All rights reserved. Pioneering sustainable waste management for a greener future.</p>
      </div>
    </footer>
  );
}

export default Footer;
