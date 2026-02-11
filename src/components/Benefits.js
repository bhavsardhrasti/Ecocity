import React, { useState } from 'react';

function Benefits() {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      icon: '💰',
      title: 'Cost Efficiency',
      description: 'Reduce operational costs by up to 40% through optimized collection routes and predictive maintenance, maximizing your city\'s budget allocation.',
      details: {
        how: 'Our AI-powered algorithms analyze historical data and real-time inputs to create optimal collection routes, reducing fuel consumption and vehicle wear. Predictive maintenance alerts prevent costly breakdowns.',
        why: 'Municipal budgets are under constant pressure. By minimizing waste in operations, cities can redirect savings to other essential services like education and infrastructure.',
        forWhat: 'Ideal for city managers and finance departments looking to achieve fiscal responsibility without compromising service quality.'
      }
    },
    {
      icon: '🌱',
      title: 'Environmental Impact',
      description: 'Minimize carbon footprint and promote sustainable practices with our data-driven approach to waste management and recycling initiatives.',
      details: {
        how: 'Smart sensors track waste levels and composition, enabling targeted recycling programs. GPS tracking optimizes routes to reduce emissions, and data analytics identify areas for improvement.',
        why: 'Climate change demands immediate action. Effective waste management reduces methane emissions from landfills and promotes circular economy principles.',
        forWhat: 'Perfect for environmental agencies and sustainability officers committed to meeting carbon reduction goals and enhancing urban green spaces.'
      }
    },
    {
      icon: '📈',
      title: 'Data-Driven Insights',
      description: 'Leverage advanced analytics to make informed decisions, track performance metrics, and continuously improve waste management strategies.',
      details: {
        how: 'Our platform collects data from IoT sensors, GPS devices, and user inputs, processing it through machine learning models to generate actionable insights and predictive analytics.',
        why: 'Traditional waste management relies on guesswork. Data-driven approaches enable evidence-based decision-making, leading to more efficient and effective outcomes.',
        forWhat: 'Suited for operations managers and data analysts who need comprehensive reporting and trend analysis to optimize city services.'
      }
    },
    {
      icon: '⚡',
      title: 'Rapid Implementation',
      description: 'Deploy our solutions quickly with minimal disruption, thanks to our proven methodology and experienced implementation team.',
      details: {
        how: 'Our modular system allows for phased deployment, starting with pilot programs in select areas. Pre-configured hardware and cloud-based software ensure fast setup.',
        why: 'Cities face time constraints and cannot afford lengthy implementation periods. Quick deployment means faster realization of benefits and ROI.',
        forWhat: 'Great for IT departments and project managers who need scalable solutions that integrate seamlessly with existing infrastructure.'
      }
    },
    {
      icon: '🔒',
      title: 'Reliable Technology',
      description: 'Trust in our robust, scalable infrastructure backed by enterprise-grade security and 99.9% uptime guarantees.',
      details: {
        how: 'Built on redundant cloud architecture with automatic failover, encrypted data transmission, and compliance with industry standards like GDPR and SOC 2.',
        why: 'Downtime in waste management can lead to overflow and health hazards. Reliable technology ensures continuous operation and data integrity.',
        forWhat: 'Essential for CIOs and security officers who prioritize system reliability and data protection in critical municipal operations.'
      }
    },
    {
      icon: '🤝',
      title: 'Expert Support',
      description: 'Access our team of seasoned professionals for ongoing support, training, and consultation to ensure long-term success.',
      details: {
        how: '24/7 technical support, regular training sessions, and dedicated account managers provide hands-on assistance throughout the implementation and beyond.',
        why: 'Technology alone isn\'t enough; human expertise ensures proper utilization and adaptation to unique city needs, maximizing long-term value.',
        forWhat: 'Valuable for all stakeholders, from frontline workers receiving training to executives seeking strategic consultation on smart city initiatives.'
      }
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="benefits" className="benefits" data-aos="fade-in">
      <div className="benefits-container" data-aos="fade-up">
        <h2 className="benefits-title" data-aos="fade-up" data-aos-delay="200">Why Choose EcoCity?</h2>
        <p className="benefits-subtitle" data-aos="fade-up" data-aos-delay="400">Discover the transformative benefits of our smart waste management solutions.</p>

        <div className="benefits-grid" data-aos="fade-up" data-aos-delay="600">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" onClick={() => toggleCard(index)} data-aos="zoom-in" data-aos-delay={800 + index * 200}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              {expandedCard === index && (
                <div className="benefit-details" data-aos="fade-in" data-aos-delay="200">
                  <div className="detail-section">
                    <h4>How it works</h4>
                    <p>{benefit.details.how}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Why it matters</h4>
                    <p>{benefit.details.why}</p>
                  </div>
                  <div className="detail-section">
                    <h4>For whom</h4>
                    <p>{benefit.details.forWhat}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
