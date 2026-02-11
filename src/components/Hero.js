function Hero() {
  const scrollToReport = () => {
    const reportSection = document.querySelector('.report-section');
    if (reportSection) {
      reportSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" data-aos="fade-in">
      <div className="hero-overlay" data-aos="fade-up">
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200" style={{ color: 'white' }}>Smart Waste Management System</h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="400" style={{ color: 'white' }}>
          EcoCity uses smart technology to monitor waste levels, reduce pollution,
          and keep cities clean.
        </p>
        <div className="hero-status" data-aos="fade-up" data-aos-delay="600">
          <span className="status-text">Monitoring waste levels</span>
          <span className="dots">...</span>
        </div>
        <div className="hero-buttons" data-aos="zoom-in" data-aos-delay="800">
          <button className="hero-button" onClick={scrollToReport}>Get Started</button>
          <a href="/smart-bins" className="hero-button secondary">View Smart Bins</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
