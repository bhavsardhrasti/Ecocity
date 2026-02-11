import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe2, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

/**
 * COMPONENT: AboutSection
 * Includes Mission, Stats, and Values for the EcoCity brand.
 */
const AboutSection = () => {
  const stats = [
    { label: "Cities Transformed", value: "140+", icon: <Globe2 size={24} /> },
    { label: "CO2 Emissions Saved", value: "12k Tons", icon: <TrendingUp size={24} /> },
    { label: "Active IoT Sensors", value: "85,000", icon: <Zap size={24} /> },
    { label: "Client Satisfaction", value: "99.2%", icon: <Award size={24} /> }
  ];

  return (
    <section id="about" style={styles.aboutWrapper} data-aos="fade-in">
      <div className="container">
        {/* Header Section */}
        <div style={styles.sectionHeader} data-aos="fade-up">
          <div className="badge" style={styles.badge} data-aos="zoom-in" data-aos-delay="200">
            <Sparkles size={14} fill="currentColor" />
            Our Mission
          </div>
          <h2 style={styles.mainTitle} data-aos="fade-up" data-aos-delay="300">Pioneering the <span style={{color: 'var(--primary)'}}>Circular Economy</span></h2>
          <p style={styles.headerSub} data-aos="fade-up" data-aos-delay="400">
            Founded in 2018, EcoCity Systems was born from a simple observation: waste collection was the only utility still operating on 19th-century schedules. We changed that.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid} data-aos="fade-up" data-aos-delay="500">
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard} data-aos="zoom-in" data-aos-delay={600 + index * 100}>
              <div style={styles.statIcon}>{stat.icon}</div>
              <h3 style={styles.statValue}>{stat.value}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Content - Mission & Vision */}
        <div style={styles.missionGrid} data-aos="fade-up" data-aos-delay="800">
          <div style={styles.missionImageContainer} data-aos="fade-right">
            <img
              src="https://img.freepik.com/premium-vector/ecology-concept-background-flat-style_23-2148244504.jpg?w=360"
              alt="Engineers working on IoT"
              style={styles.missionImage}
            />
            <div style={styles.experienceCard} data-aos="zoom-in" data-aos-delay="1000">
              <span style={styles.expNumber}>08+</span>
              <span style={styles.expText}>Years of Engineering Excellence</span>
            </div>
          </div>

          <div style={styles.missionText} data-aos="fade-left">
            <h3 style={styles.subTitle} data-aos="fade-up" data-aos-delay="900">Why We Do What We Do</h3>
            <p style={styles.descText} data-aos="fade-up" data-aos-delay="1000">
              We believe that data is the most powerful tool for sustainability. By digitizing waste infrastructure, we help municipalities eliminate unnecessary truck rolls, reduce fuel consumption, and prevent the environmental hazards of overflowing bins.
            </p>

            <div style={styles.valueList} data-aos="fade-up" data-aos-delay="1100">
              <div style={styles.valueItem} data-aos="fade-right" data-aos-delay="1200">
                <div style={styles.checkIcon}><ShieldCheck size={20} /></div>
                <div>
                  <h4 style={styles.valueName}>Integrity in Data</h4>
                  <p style={styles.valueDesc}>End-to-end encryption for all municipal and industrial data streams.</p>
                </div>
              </div>
              <div style={styles.valueItem} data-aos="fade-right" data-aos-delay="1300">
                <div style={styles.checkIcon}><Users size={20} /></div>
                <div>
                  <h4 style={styles.valueName}>Community First</h4>
                  <p style={styles.valueDesc}>Building cleaner neighborhoods through citizen-centric technology.</p>
                </div>
              </div>
            </div>

            <button style={styles.ctaBtn} data-aos="fade-up" data-aos-delay="1400">Learn More About Our Team</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  aboutWrapper: {
    padding: '120px 0',
    backgroundColor: '#ffffff',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 80px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--primary-light)',
    color: 'var(--primary-dark)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  mainTitle: {
    fontSize: '48px',
    fontWeight: '900',
    color: 'green',
    marginBottom: '20px',
    letterSpacing: '-1.5px',
  },
  headerSub: {
    fontSize: '18px',
    color: 'green',
    lineHeight: '1.6',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginBottom: '100px',
  },
  statCard: {
    backgroundColor: '#f8fafc',
    padding: '40px 20px',
    borderRadius: '32px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    border: '1px solid #f1f5f9',
  },
  statIcon: {
    color: 'var(--primary)',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: '900',
    color: 'var(--secondary)',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
  },
  missionImageContainer: {
    position: 'relative',
  },
  missionImage: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
  experienceCard: {
    position: 'absolute',
    bottom: '30px',
    right: '-20px',
    backgroundColor: 'var(--secondary)',
    color: 'white',
    padding: '30px',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '180px',
  },
  expNumber: {
    fontSize: '40px',
    fontWeight: '900',
    lineHeight: '1',
  },
  expText: {
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '8px',
    opacity: 0.8,
  },
  missionText: {
    paddingRight: '40px',
  },
  subTitle: {
    fontSize: '32px',
    fontWeight: '900',
    marginBottom: '20px',
    color: 'var(--secondary)',
  },
  descText: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#64748b',
    marginBottom: '40px',
  },
  valueList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '40px',
  },
  valueItem: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  checkIcon: {
    backgroundColor: 'var(--primary)',
    color: 'white',
    padding: '10px',
    borderRadius: '12px',
    display: 'flex',
  },
  valueName: {
    fontSize: '18px',
    fontWeight: '800',
    marginBottom: '4px',
  },
  valueDesc: {
    fontSize: '14px',
    color: '#64748b',
  },
  ctaBtn: {
    backgroundColor: 'transparent',
    border: '2px solid var(--secondary)',
    color: 'var(--secondary)',
    padding: '14px 32px',
    borderRadius: '12px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default AboutSection;