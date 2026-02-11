function Features() {
  return (
    <section id="features" className="features" data-aos="fade-in">
      <h2 className="features-title" data-aos="fade-up">Key Features</h2>
      <p className="features-subtitle" data-aos="fade-up" data-aos-delay="200">Experience the power of smart waste management in action.</p>

      <div className="cards" data-aos="fade-up" data-aos-delay="400">
        <div className="card" data-aos="zoom-in" data-aos-delay="500">
          <div className="card-icon">🗑</div>
          <h3>Smart Bin Monitoring</h3>
          <p>Real-time monitoring of waste levels in bins to optimize collection and reduce overflow.</p>
          <span className="card-status">Active</span>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="600">
          <div className="card-icon">📍</div>
          <h3>GPS Tracking</h3>
          <p>Track waste collection vehicles in real-time for efficient routing and scheduling.</p>
          <span className="card-status">Online</span>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="700">
          <div className="card-icon">📊</div>
          <h3>Waste Analytics</h3>
          <p>Analyze waste data to make informed decisions and improve city cleanliness.</p>
          <span className="card-status">Processing</span>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="800">
          <div className="card-icon">🌍</div>
          <h3>Eco-Friendly City</h3>
          <p>Contribute to a greener environment with sustainable waste management practices.</p>
          <span className="card-status">Live</span>
        </div>
      </div>
    </section>
  );
}

export default Features;
