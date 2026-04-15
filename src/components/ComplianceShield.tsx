import React from 'react';
import { ShieldCheck, Map, ListChecks, Server, Lock, AlertTriangle, FileCheck } from 'lucide-react';

const ComplianceShield: React.FC = () => {
  return (
    <div className="tab-content compliance-view">
      {/* Compliance Overview */}
      <div className="compliance-header-card">
        <div className="status-main">
          <div className="status-icon-container">
            <ShieldCheck size={48} className="text-green" />
          </div>
          <div className="status-text">
            <h2>92% Compliant</h2>
            <p>Your business meets most regional regulatory standards. 2 actions required to reach 100%.</p>
          </div>
        </div>
        <button className="re-audit-btn">Run Compliance Scan</button>
      </div>

      <div className="compliance-grid">
        {/* Regulatory Roadmap */}
        <section className="compliance-section roadmap-card">
          <h3><Map size={20} /> Regulatory Roadmap</h3>
          <div className="roadmap-timeline">
            <div className="roadmap-step completed">
              <div className="step-marker"></div>
              <div className="step-content">
                <h4>VAT Registration</h4>
                <p>Completed Oct 2025</p>
              </div>
            </div>
            <div className="roadmap-step active">
              <div className="step-marker"></div>
              <div className="step-content">
                <h4>POPI Act Audit</h4>
                <p>Due in 14 days</p>
              </div>
            </div>
            <div className="roadmap-step pending">
              <div className="step-marker"></div>
              <div className="step-content">
                <h4>Annual Tax Return</h4>
                <p>Due Jan 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Health */}
        <section className="compliance-section infra-card">
          <h3><Server size={20} /> Infrastructure Health</h3>
          <div className="infra-list">
            <div className="infra-item">
              <div className="infra-icon"><Lock size={18} /></div>
              <div className="infra-details">
                <span>AWS Security Group</span>
                <div className="status-pill secure">Secure</div>
              </div>
            </div>
            <div className="infra-item">
              <div className="infra-icon"><Lock size={18} /></div>
              <div className="infra-details">
                <span>SSL Certificate</span>
                <div className="status-pill secure">Active</div>
              </div>
            </div>
            <div className="infra-item">
              <div className="infra-icon danger"><AlertTriangle size={18} /></div>
              <div className="infra-details">
                <span>Database Backup</span>
                <div className="status-pill warning">Outdated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="compliance-section checklist-card">
          <h3><ListChecks size={20} /> Requirement Checklist</h3>
          <div className="checklist-items">
            <label className="check-item">
              <input type="checkbox" checked readOnly />
              <div className="check-text">
                <strong>Business Registration</strong>
                <span>CIPC certificate verified</span>
              </div>
              <FileCheck size={16} className="text-green" />
            </label>
            <label className="check-item">
              <input type="checkbox" checked readOnly />
              <div className="check-text">
                <strong>Tax Clearance</strong>
                <span>SARS status: Good Standing</span>
              </div>
              <FileCheck size={16} className="text-green" />
            </label>
            <label className="check-item">
              <input type="checkbox" readOnly />
              <div className="check-text">
                <strong>Data Privacy Policy</strong>
                <span>POPI Act compliance missing</span>
              </div>
              <AlertTriangle size={16} className="text-orange" />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComplianceShield;
