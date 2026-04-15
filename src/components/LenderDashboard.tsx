import React, { useState } from 'react';
import { Search, FileText, ChevronLeft } from 'lucide-react';

interface LenderDashboardProps {
  onLogout: () => void;
}

const LenderDashboard: React.FC<LenderDashboardProps> = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results] = useState([
    { id: 1, name: 'TechFlow Solutions', type: 'SaaS', score: 85 },
    { id: 2, name: 'GreenEco Manufacturing', type: 'General', score: 72 },
    { id: 3, name: 'HealthSync AI', type: 'Healthcare', score: 91 },
  ]);

  const filteredResults = results.filter(sme => 
    sme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <header className="top-bar">
        <button className="back-link-btn" onClick={onLogout}>
          <ChevronLeft size={20} />
          <span>Back to Login</span>
        </button>
        <h2 className="current-tab-indicator">Lender/Regulator Portal</h2>
      </header>

      <main className="main-content">
        <div className="lender-container">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search SMEs by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="lender-search-input"
            />
          </div>

          <div className="results-list">
            <h3 className="section-subtitle">Registered SMEs</h3>
            {filteredResults.map(sme => (
              <div key={sme.id} className="sme-card">
                <div className="sme-info">
                  <h4>{sme.name}</h4>
                  <p>{sme.type} | Trust Score: <span className="score">{sme.score}</span></p>
                </div>
                <button className="request-btn" onClick={() => alert(`Request sent to ${sme.name}`)}>
                  <FileText size={18} />
                  <span>Request Audit Forms</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LenderDashboard;
