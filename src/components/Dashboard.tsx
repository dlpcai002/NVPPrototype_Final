import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, AlertCircle, Activity, ArrowUpRight, ArrowDownRight, FileText, FileCheck, XCircle, Download } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2500); // Animation duration
  };

  return (
    <div className="tab-content dashboard-view">
      <header className="dashboard-header">
        <div className="trust-score-container">
          <div className="trust-score-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                strokeDasharray="85, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">85</text>
            </svg>
            <span className="score-label">Trust Score</span>
          </div>
          <div className="score-details">
            <h3>Excellent Standing</h3>
            <p>Your business remains in the top 10% of peer performers this month.</p>
          </div>
        </div>
        <button 
          className={`header-report-btn ${isDownloading ? 'downloading' : ''}`}
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <div className="download-progress-container">
              <div className="download-text">
                <Download size={14} className="spinning-icon" /> Generating...
              </div>
              <div className="download-bar">
                <div className="download-fill"></div>
              </div>
            </div>
          ) : (
            <>
              <FileText size={18} />
              Generate Audit Forms
            </>
          )}
        </button>
      </header>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <TrendingUp size={20} className="icon-purple" />
            <span>Cash Flow</span>
          </div>
          <div className="metric-value">R 124,500</div>
          <div className="metric-trend up">
            <ArrowUpRight size={14} />
            <span>+12% vs last month</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <ShieldCheck size={20} className="icon-green" />
            <span>Compliance</span>
          </div>
          <div className="metric-value">92%</div>
          <div className="metric-trend">
            <span>2 tasks pending</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <AlertCircle size={20} className="icon-orange" />
            <span>Risk Level</span>
          </div>
          <div className="metric-value">Low</div>
          <div className="metric-trend down">
            <ArrowDownRight size={14} />
            <span>Decreased 5%</span>
          </div>
        </div>
      </div>
      
      <section className="dashboard-section audit-requests-section">
        <h3><FileText size={20} className="icon-purple" /> Audit Form Requests</h3>
        <div className="audit-requests-list">
          <div className="audit-request-item">
            <div className="requester-info">
              <span className="requester-name">Standard Bank - Corporate Division</span>
              <span className="request-date">Request received: Today, 10:15 AM</span>
            </div>
            <div className="request-actions">
              <button className="action-btn authorize-btn">
                <FileCheck size={16} />
                Authorize
              </button>
              <button className="action-btn reject-btn">
                <XCircle size={16} />
                Reject
              </button>
            </div>
          </div>
          <div className="audit-request-item">
            <div className="requester-info">
              <span className="requester-name">Nedbank - Business Banking</span>
              <span className="request-date">Request received: Yesterday, 02:40 PM</span>
            </div>
            <div className="request-actions">
              <button className="action-btn authorize-btn">
                <FileCheck size={16} />
                Authorize
              </button>
              <button className="action-btn reject-btn">
                <XCircle size={16} />
                Reject
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section activity-section">
        <h3><Activity size={20} /> Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-dot blue"></div>
            <div className="activity-info">
              <p><strong>Xero Sync</strong> completed successfully</p>
              <span>Today, 09:24 AM</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot green"></div>
            <div className="activity-info">
              <p><strong>Tax Certificate</strong> uploaded to Vault</p>
              <span>Yesterday, 04:15 PM</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot orange"></div>
            <div className="activity-info">
              <p><strong>Risk Alert:</strong> Minor cash flow fluctuation</p>
              <span>Oct 12, 11:30 AM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
