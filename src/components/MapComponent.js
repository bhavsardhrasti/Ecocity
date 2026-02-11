import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different marker types
const binIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const fullBinIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const halfBinIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const complaintIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to update map view when center changes
function MapView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// Component to handle map interactions
function MapController({ onMapReady }) {
  const map = useMap();
  useEffect(() => {
    onMapReady(map);
  }, [map, onMapReady]);
  return null;
}

function MapComponent({ bins = [], complaints = [], center = [20.5937, 78.9629], zoom = 5, showFilters = true }) {
  const [filter, setFilter] = useState('all'); // all, bins, complaints, empty, half, full
  const [selectedItem, setSelectedItem] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  const getBinIcon = (status) => {
    if (status === 'Full') return fullBinIcon;
    if (status === 'Half') return halfBinIcon;
    return binIcon;
  };

  const filteredBins = bins.filter(bin => {
    if (filter === 'all' || filter === 'bins') return true;
    if (filter === 'empty') return bin.status === 'Empty';
    if (filter === 'half') return bin.status === 'Half';
    if (filter === 'full') return bin.status === 'Full';
    return true;
  });

  const filteredComplaints = complaints.filter(() => {
    if (filter === 'all' || filter === 'complaints') return true;
    if (filter === 'bins' || filter === 'empty' || filter === 'half' || filter === 'full') return false;
    return true;
  });

  const handleItemClick = (item, type) => {
    setSelectedItem({ ...item, type });
    if (mapInstance) {
      mapInstance.setView([item.lat, item.lng], 15);
    }
  };

  return (
    <div className="map-wrapper">
      {showFilters && (
        <div className="map-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'bins' ? 'active' : ''}`}
            onClick={() => setFilter('bins')}
          >
            🗑️ Bins
          </button>
          <button 
            className={`filter-btn ${filter === 'complaints' ? 'active' : ''}`}
            onClick={() => setFilter('complaints')}
          >
            📍 Complaints
          </button>
          <div className="filter-divider"></div>
          <button 
            className={`filter-btn ${filter === 'empty' ? 'active' : ''}`}
            onClick={() => setFilter('empty')}
          >
            🟢 Empty
          </button>
          <button 
            className={`filter-btn ${filter === 'half' ? 'active' : ''}`}
            onClick={() => setFilter('half')}
          >
            🟡 Half
          </button>
          <button 
            className={`filter-btn ${filter === 'full' ? 'active' : ''}`}
            onClick={() => setFilter('full')}
          >
            🔴 Full
          </button>
        </div>
      )}
      
      <div className="map-content">
        <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapView center={center} zoom={zoom} />
          <MapController onMapReady={setMapInstance} />
          
          {/* Bin Markers */}
          {filteredBins.map((bin) => (
            <Marker 
              key={bin.id} 
              position={[bin.lat, bin.lng]} 
              icon={getBinIcon(bin.status)}
            >
              <Popup>
                <div className="map-popup">
                  <h4>🗑️ Smart Bin #{bin.id}</h4>
                  <p><strong>Status:</strong> {bin.status}</p>
                  <p><strong>Fill Level:</strong> {bin.fillLevel}%</p>
                  <p><strong>Last Collected:</strong> {bin.lastCollected}</p>
                  {bin.area && <p><strong>Area:</strong> {bin.area}</p>}
                  {bin.city && <p><strong>City:</strong> {bin.city}</p>}
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Complaint Markers */}
          {filteredComplaints.map((complaint, index) => (
            <Marker 
              key={`complaint-${index}`} 
              position={[complaint.lat, complaint.lng]} 
              icon={complaintIcon}
            >
              <Popup>
                <div className="map-popup">
                  <h4>📍 Complaint #{complaint.id || index + 1}</h4>
                  <p><strong>Type:</strong> {complaint.type}</p>
                  <p><strong>Description:</strong> {complaint.description}</p>
                  <p><strong>Status:</strong> {complaint.status || 'Pending'}</p>
                  <p><strong>Reported:</strong> {complaint.date}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Map Legend */}
        <div className="map-legend">
          <h4>Legend</h4>
          <div className="legend-item">
            <span className="legend-icon green"></span>
            <span>Empty Bin</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon yellow"></span>
            <span>Half Full Bin</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon red"></span>
            <span>Full Bin</span>
          </div>
          <div className="legend-item">
            <span className="legend-icon blue"></span>
            <span>Complaint</span>
          </div>
        </div>
      </div>

      {/* Scrollable Status Sidebar */}
      <div className="map-sidebar">
        <h3>Status Overview</h3>
        <div className="sidebar-stats">
          <div className="stat-box green">
            <span className="stat-number">{bins.filter(b => b.status === 'Empty').length}</span>
            <span className="stat-label">Empty</span>
          </div>
          <div className="stat-box yellow">
            <span className="stat-number">{bins.filter(b => b.status === 'Half').length}</span>
            <span className="stat-label">Half</span>
          </div>
          <div className="stat-box red">
            <span className="stat-number">{bins.filter(b => b.status === 'Full').length}</span>
            <span className="stat-label">Full</span>
          </div>
          <div className="stat-box blue">
            <span className="stat-number">{complaints.length}</span>
            <span className="stat-label">Complaints</span>
          </div>
        </div>

        <div className="sidebar-content">
          <h4>Bins</h4>
          <div className="sidebar-list">
            {filteredBins.map((bin) => (
              <div 
                key={bin.id} 
                className={`sidebar-item ${selectedItem?.id === bin.id ? 'selected' : ''}`}
                onClick={() => handleItemClick(bin, 'bin')}
              >
                <div className="sidebar-item-header">
                  <span className="sidebar-item-icon">
                    {bin.status === 'Empty' ? '🟢' : bin.status === 'Half' ? '🟡' : '🔴'}
                  </span>
                  <span className="sidebar-item-title">Bin #{bin.id}</span>
                </div>
                <div className="sidebar-item-details">
                  <span className="sidebar-item-location">{bin.area}, {bin.city}</span>
                  <span className="sidebar-item-fill">{bin.fillLevel}% full</span>
                </div>
              </div>
            ))}
          </div>

          {filteredComplaints.length > 0 && (
            <>
              <h4>Complaints</h4>
              <div className="sidebar-list">
                {filteredComplaints.map((complaint, index) => (
                  <div 
                    key={`complaint-${index}`} 
                    className={`sidebar-item complaint ${selectedItem?.id === complaint.id ? 'selected' : ''}`}
                    onClick={() => handleItemClick(complaint, 'complaint')}
                  >
                    <div className="sidebar-item-header">
                      <span className="sidebar-item-icon">📍</span>
                      <span className="sidebar-item-title">#{complaint.id || index + 1}</span>
                    </div>
                    <div className="sidebar-item-details">
                      <span className="sidebar-item-type">{complaint.type}</span>
                      <span className={`sidebar-item-status ${complaint.status?.toLowerCase() || 'pending'}`}>
                        {complaint.status || 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
