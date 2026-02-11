import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import ReportSection from "./components/ReportSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmartBins from "./components/SmartBins";

import UserDashboard from "./components/UserDashboard";
import AuthCard from "./components/AuthCard";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/auth';

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Features />
            <Benefits />
            <ReportSection />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/smart-bins" element={<SmartBins />} />
        <Route path="/auth" element={<AuthCard />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
