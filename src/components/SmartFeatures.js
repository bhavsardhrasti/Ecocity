import React, { useState, useEffect } from 'react';

function SmartFeatures({ bins = [], scheduledCollections = [] }) {
  const [wastePredictions, setWastePredictions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [activeTab, setActiveTab] = useState('predictions');

  // Waste Prediction Logic
  useEffect(() => {
    if (bins.length > 0) {
      const predictions = bins.map(bin => {
        // Simulate past waste data based on fill level and collection history
        const pastWaste = bin.fillLevel * (Math.random() * 0.5 + 0.75); // Add some variance
        const threshold = 60; // Threshold for high waste zone
        
        let prediction = 'Low';
        if (pastWaste > 80) prediction = 'High';
        else if (pastWaste > threshold) prediction = 'Medium';
        
        return {
          id: bin.id,
          area: bin.area,
          city: bin.city,
          currentFill: bin.fillLevel,
          predictedWaste: Math.round(pastWaste),
          prediction: prediction,
          lat: bin.lat,
          lng: bin.lng
        };
      });
      
      // Sort by predicted waste (highest first)
      predictions.sort((a, b) => b.predictedWaste - a.predictedWaste);
      setWastePredictions(predictions);
    }
  }, [bins]);

  // Smart Alerts Logic
  useEffect(() => {
    const newAlerts = [];
    
    // Bin Full Alerts
    bins.forEach(bin => {
      if (bin.fillLevel >= 80) {
        newAlerts.push({
          id: `alert-full-${bin.id}`,
          type: 'bin-full',
          severity: bin.fillLevel >= 90 ? 'critical' : 'high',
          message: `Bin #${bin.id} in ${bin.area}, ${bin.city} is ${bin.fillLevel}% full`,
          binId: bin.id,
          area: bin.area,
          city: bin.city,
          timestamp: new Date().toLocaleString()
        });
      }
    });
    
    // Missed Pickup Alerts (simulate based on last collected date)
    bins.forEach(bin => {
      const lastCollected = new Date(bin.lastCollected);
      const today = new Date();
      const daysSinceCollection = Math.floor((today - lastCollected) / (1000 * 60 * 60 * 24));
      
      if (daysSinceCollection >= 3) {
        newAlerts.push({
          id: `alert-missed-${bin.id}`,
          type: 'missed-pickup',
          severity: daysSinceCollection >= 5 ? 'critical' : 'medium',
          message: `Bin #${bin.id} in ${bin.area} missed pickup for ${daysSinceCollection} days`,
          binId: bin.id,
          area: bin.area,
          city: bin.city,
          daysMissed: daysSinceCollection,
          timestamp: new Date().toLocaleString()
        });
      }
    });
    
    setAlerts(newAlerts);
  }, [bins]);

  // Routes Logic
  useEffect(() => {
    if (bins.length > 0) {
      // Sort bins by priority (fill level)
      const sortedBins = [...bins].sort((a, b) => b.fillLevel - a.fillLevel);

      // Group bins into routes (simulate 2-3 routes based on location/area)
      const routesData = [];
      const binsPerRoute = Math.ceil(sortedBins.length / 3);

      for (let i = 0; i < sortedBins.length; i += binsPerRoute) {
        const routeBins = sortedBins.slice(i, i + binsPerRoute);
        const routeId = `route-${Math.floor(i / binsPerRoute) + 1}`;

        // Calculate route stats
        const totalDistance = Math.round(routeBins.length * 2.5 + Math.random() * 5); // Simulate distance
        const estimatedDuration = Math.round(totalDistance * 3 + routeBins.length * 5); // Simulate time

        // Create stops with priorities
        const stops = routeBins.map((bin, index) => {
          let priority = 'Low';
          if (bin.fillLevel >= 90) priority = 'Critical';
          else if (bin.fillLevel >= 80) priority = 'High';
          else if (bin.fillLevel >= 60) priority = 'Medium';

          return {
            id: `stop-${bin.id}`,
            binId: bin.id,
            area: bin.area,
            city: bin.city,
            fillLevel: bin.fillLevel,
            priority: priority,
            estimatedTime: Math.round((index + 1) * 8 + Math.random() * 5) // Cumulative time
          };
        });

        routesData.push({
          id: routeId,
          name: `Route ${Math.floor(i / binsPerRoute) + 1} - ${routeBins[0]?.area || 'Area'}`,
          stops: stops,
          totalDistance: totalDistance,
          estimatedDuration: estimatedDuration,
          startTime: new Date(Date.now() + Math.random() * 86400000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
      }

      setRoutes(routesData);
    }
  }, [bins]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#f44336';
      case 'high': return '#ff9800';
      case 'medium': return '#ffeb3b';
      case 'low': return '#4caf50';
      default: return '#999';
    }
  };

  const getPredictionColor = (prediction) => {
    switch (prediction) {
      case 'High': return '#f44336';
      case 'Medium': return '#ff9800';
      case 'Low': return '#4caf50';
      default: return '#999';
    }
  };



  return (
    <div className="smart-features">
      <div className="smart-features-header">
        <h2>🤖 Smart Features</h2>
        <div className="feature-tabs">
          <button 
            className={`tab-btn ${activeTab === 'predictions' ? 'active' : ''}`}
            onClick={() => setActiveTab('predictions')}
          >
            📊 Waste Prediction
          </button>
          <button
            className={`tab-btn ${activeTab === 'alerts' ? 'active' : ''}`}
            onClick={() => setActiveTab('alerts')}
          >
            🔔 Smart Alerts
          </button>
          <button
            className={`tab-btn ${activeTab === 'routes' ? 'active' : ''}`}
            onClick={() => setActiveTab('routes')}
          >
            🚛 Routes
          </button>

        </div>
      </div>

      <div className="feature-content">
        {/* Waste Prediction Tab */}
        {activeTab === 'predictions' && (
          <div className="predictions-panel" data-aos="fade-in">
            <h3>Waste Generation Prediction</h3>
            <p className="panel-description">Areas likely to generate more waste based on historical data</p>
            
            <div className="prediction-stats">
              <div className="prediction-stat high">
                <span className="stat-value">{wastePredictions.filter(p => p.prediction === 'High').length}</span>
                <span className="stat-label">High Waste Zones</span>
              </div>
              <div className="prediction-stat medium">
                <span className="stat-value">{wastePredictions.filter(p => p.prediction === 'Medium').length}</span>
                <span className="stat-label">Medium Waste Zones</span>
              </div>
              <div className="prediction-stat low">
                <span className="stat-value">{wastePredictions.filter(p => p.prediction === 'Low').length}</span>
                <span className="stat-label">Low Waste Zones</span>
              </div>
            </div>

            <div className="predictions-list">
              {wastePredictions.map((prediction, index) => (
                <div 
                  key={prediction.id} 
                  className="prediction-card"
                  style={{ borderLeft: `4px solid ${getPredictionColor(prediction.prediction)}` }}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="prediction-header">
                    <span className="prediction-id">Bin #{prediction.id}</span>
                    <span 
                      className="prediction-badge"
                      style={{ backgroundColor: getPredictionColor(prediction.prediction) }}
                    >
                      {prediction.prediction}
                    </span>
                  </div>
                  <div className="prediction-details">
                    <p><strong>Area:</strong> {prediction.area}, {prediction.city}</p>
                    <p><strong>Current Fill:</strong> {prediction.currentFill}%</p>
                    <p><strong>Predicted Waste:</strong> {prediction.predictedWaste}%</p>
                  </div>
                  {prediction.prediction === 'High' && (
                    <div className="prediction-warning">
                      ⚠️ This area is likely to generate high waste. Schedule early collection.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Smart Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="alerts-panel" data-aos="fade-in">
            <h3>Smart Alerts</h3>
            <p className="panel-description">Real-time alerts for bin status and collection issues</p>
            
            <div className="alert-summary">
              <div className="alert-summary-item critical">
                <span className="alert-count">{alerts.filter(a => a.severity === 'critical').length}</span>
                <span className="alert-label">Critical</span>
              </div>
              <div className="alert-summary-item high">
                <span className="alert-count">{alerts.filter(a => a.severity === 'high').length}</span>
                <span className="alert-label">High</span>
              </div>
              <div className="alert-summary-item medium">
                <span className="alert-count">{alerts.filter(a => a.severity === 'medium').length}</span>
                <span className="alert-label">Medium</span>
              </div>
            </div>

            {alerts.length === 0 ? (
              <div className="no-alerts">
                <span className="no-alerts-icon">✅</span>
                <p>No active alerts. All systems are running smoothly!</p>
              </div>
            ) : (
              <div className="alerts-list">
                {alerts.map((alert, index) => (
                  <div 
                    key={alert.id} 
                    className="alert-card"
                    style={{ borderLeft: `4px solid ${getSeverityColor(alert.severity)}` }}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="alert-header">
                      <span className="alert-icon">
                        {alert.type === 'bin-full' ? '🗑️' : '🚛'}
                      </span>
                      <span className="alert-type">
                        {alert.type === 'bin-full' ? 'Bin Full Alert' : 'Missed Pickup Alert'}
                      </span>
                      <span 
                        className="alert-severity"
                        style={{ backgroundColor: getSeverityColor(alert.severity) }}
                      >
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="alert-message">{alert.message}</p>
                    <div className="alert-footer">
                      <span className="alert-location">📍 {alert.area}, {alert.city}</span>
                      <span className="alert-time">🕐 {alert.timestamp}</span>
                    </div>
                    {alert.daysMissed && (
                      <div className="alert-extra">
                        <span>⏰ Missed for {alert.daysMissed} day(s)</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Routes Tab */}
        {activeTab === 'routes' && (
          <div className="routes-container" data-aos="fade-in">
            <div className="routes-main-header">
              <div className="routes-title-block">
                <span className="routes-main-icon">🚛</span>
                <div>
                  <h2>Collection Routes</h2>
                  <p>Optimized routes for efficient waste collection</p>
                </div>
              </div>
              <div className="routes-summary">
                <div className="summary-item">
                  <span className="summary-value">{routes.length}</span>
                  <span className="summary-label">Routes</span>
                </div>
                <div className="summary-item">
                  <span className="summary-value">{routes.reduce((acc, r) => acc + r.stops.length, 0)}</span>
                  <span className="summary-label">Total Stops</span>
                </div>
              </div>
            </div>

            {routes.length === 0 ? (
              <div className="no-routes-message">
                <div className="no-routes-icon">🚛</div>
                <h3>No Routes Available</h3>
                <p>Select bins to generate optimized collection routes</p>
              </div>
            ) : (
              <div className="routes-cards-container">
                {routes.map((route, routeIndex) => (
                  <div 
                    key={route.id} 
                    className="route-main-card"
                    data-aos="fade-up"
                    data-aos-delay={routeIndex * 150}
                  >
                    {/* Route Header */}
                    <div className="route-main-header">
                      <div className="route-main-title">
                        <div className="route-number-badge">{routeIndex + 1}</div>
                        <div>
                          <h3>{route.name}</h3>
                          <span className="route-subtitle">Collection Route</span>
                        </div>
                      </div>
                      <div className="route-main-badge">
                        {route.stops.length} Stops
                      </div>
                    </div>

                    {/* Route Quick Info */}
                    <div className="route-quick-info">
                      <div className="quick-info-item">
                        <span className="quick-icon">🕐</span>
                        <span className="quick-text">{route.startTime}</span>
                      </div>
                      <div className="quick-info-item">
                        <span className="quick-icon">⏱️</span>
                        <span className="quick-text">{route.estimatedDuration} min</span>
                      </div>
                      <div className="quick-info-item">
                        <span className="quick-icon">🛣️</span>
                        <span className="quick-text">{route.totalDistance} km</span>
                      </div>
                    </div>

                    {/* Route Stops */}
                    <div className="route-stops-section">
                      <h4 className="stops-section-title">📍 Route Stops</h4>
                      <div className="stops-list-container">
                        {route.stops.map((stop, index) => (
                          <div 
                            key={stop.id} 
                            className="stop-main-item"
                            style={{ borderLeftColor: getSeverityColor(stop.priority.toLowerCase()) }}
                          >
                            <div className="stop-main-number">{index + 1}</div>
                            <div className="stop-main-details">
                              <div className="stop-main-header">
                                <span className="stop-main-bin">Bin #{stop.binId}</span>
                                <span 
                                  className="stop-main-priority"
                                  style={{ backgroundColor: getSeverityColor(stop.priority.toLowerCase()) }}
                                >
                                  {stop.priority}
                                </span>
                              </div>
                              <div className="stop-main-location">
                                📍 {stop.area}, {stop.city}
                              </div>
                              <div className="stop-main-meta">
                                <span>Fill: {stop.fillLevel}%</span>
                                <span>⏱️ {stop.estimatedTime} min</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Route Actions */}
                    <div className="route-main-actions">
                      <button className="route-main-btn primary">
                        📋 View Full Route
                      </button>
                      <button className="route-main-btn secondary">
                        📍 Start Navigation
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}


      </div>
    </div>
  );
}

export default SmartFeatures;
