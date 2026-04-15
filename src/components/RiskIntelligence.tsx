import React, { useState } from 'react';
import { LineChart, BarChart2, ShieldAlert, Zap, TrendingDown, Info } from 'lucide-react';

const RiskIntelligence: React.FC = () => {
  const [sensitivity, setSensitivity] = useState(0);

  return (
    <div className="tab-content risk-view">
      <div className="risk-grid">
        {/* Cash Flow Projection */}
        <section className="risk-section projection-card">
          <div className="section-header">
            <h3><LineChart size={20} /> Cash Flow Projection</h3>
            <span className="badge-live">Live Data</span>
          </div>
          <div className="chart-placeholder">
            {/* Simple SVG Chart simulation */}
            <svg viewBox="0 0 400 150" className="projection-svg">
              <path 
                d="M0,120 L50,110 L100,130 L150,90 L200,70 L250,85 L300,40 L350,60 L400,30" 
                fill="none" 
                stroke="#6a0dad" 
                strokeWidth="3" 
              />
              <path 
                d="M0,120 L50,110 L100,130 L150,90 L200,70 L250,85 L300,40 L350,60 L400,30 V150 H0 Z" 
                fill="url(#gradient)" 
                opacity="0.1"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6a0dad" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            <div className="chart-labels">
              <span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
            </div>
          </div>
        </section>

        {/* Sensitivity Simulator */}
        <section className="risk-section simulator-card">
          <div className="section-header">
            <h3><Zap size={20} /> Sensitivity Simulator</h3>
            <Info size={16} className="info-icon" />
          </div>
          <p className="simulator-desc">Adjust revenue variables to see impact on net liquidity.</p>
          
          <div className="simulator-controls">
            <div className="control-group">
              <div className="control-header">
                <label>Revenue Variance</label>
                <span className={sensitivity >= 0 ? 'pos' : 'neg'}>{sensitivity}%</span>
              </div>
              <input 
                type="range" 
                min="-50" 
                max="50" 
                value={sensitivity} 
                onChange={(e) => setSensitivity(parseInt(e.target.value))}
                className="risk-slider"
              />
            </div>
            
            <div className="impact-display">
              <div className="impact-item">
                <span>Liquidity Buffer</span>
                <strong className={sensitivity < -20 ? 'critical' : ''}>
                  {sensitivity < -20 ? 'At Risk' : 'Stable'}
                </strong>
              </div>
              <div className="impact-item">
                <span>Runway Impact</span>
                <small>{sensitivity < 0 ? `-${Math.abs(sensitivity/5)} months` : `+${sensitivity/5} months`}</small>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Breakdown */}
        <section className="risk-section breakdown-card">
          <h3><ShieldAlert size={20} /> Risk Factor Breakdown</h3>
          <div className="breakdown-list">
            <div className="breakdown-item">
              <div className="item-header">
                <span>Market Volatility</span>
                <span className="risk-status low">Low</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{width: '25%'}}></div></div>
            </div>
            <div className="breakdown-item">
              <div className="item-header">
                <span>Operational Risk</span>
                <span className="risk-status medium">Medium</span>
              </div>
              <div className="progress-bar"><div className="progress-fill warning" style={{width: '55%'}}></div></div>
            </div>
            <div className="breakdown-item">
              <div className="item-header">
                <span>Credit Exposure</span>
                <span className="risk-status low">Low</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{width: '15%'}}></div></div>
            </div>
          </div>
        </section>

        {/* Alerts & Insights */}
        <section className="risk-section insights-card">
          <h3><BarChart2 size={20} /> Smart Insights</h3>
          <div className="insight-item">
            <TrendingDown size={18} className="text-orange" />
            <p>Rising interest rates may impact debt servicing by <strong>2.4%</strong> next quarter.</p>
          </div>
          <button className="download-report-btn">Generate Full Risk Audit</button>
        </section>
      </div>
    </div>
  );
};

export default RiskIntelligence;
