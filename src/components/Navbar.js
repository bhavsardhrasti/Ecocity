import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
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
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">EcoCity </h2>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
          <li className="navbar-item"><a href="#" onClick={(e) => handleNavClick(e, 'about')}>AboutUs</a></li>
          <li className="navbar-item"><a href="#" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
          <li className="navbar-item"><a href="#" onClick={(e) => handleNavClick(e, 'benefits')}>Benefits</a></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
          <li className="navbar-item"><Link to="/auth">Login</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
