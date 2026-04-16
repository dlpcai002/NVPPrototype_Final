import React, { useState } from 'react';
import { Upload, File, Shield, User, Lock, ExternalLink, Trash2 } from 'lucide-react';

const BusinessInfo: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'registration_doc.pdf', size: '1.2MB', date: '2026-04-10' },
    { name: 'tax_certificate.pdf', size: '850KB', date: '2026-04-08' }
  ]);

  const handleRemove = (indexToRemove: number) => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tab-content">
      <h2>Business Information</h2>
      <p>Manage your official documents and platform access.</p>

      <section className="info-section">
        <h3><File size={20} /> Document Vault</h3>
        <div className="upload-zone">
          <Upload size={32} />
          <p>Drag & drop files here or <span>browse</span></p>
          <input type="file" className="file-input" />
        </div>
        
        <div className="file-list">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="file-item">
              <File size={18} />
              <div className="file-info">
                <span className="file-name">{file.name}</span>
                <span className="file-meta">{file.size} | Uploaded: {file.date}</span>
              </div>
              <div className="file-actions">
                <button className="view-btn">View</button>
                <button 
                  className="remove-btn" 
                  onClick={() => handleRemove(index)}
                  title="Remove document"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h3><Shield size={20} /> Account Access & Security</h3>
        <div className="access-grid">
          <div className="access-card">
            <User size={24} />
            <div className="access-info">
              <h4>Connected Bank Accounts</h4>
              <p>2 active connections</p>
            </div>
            <button className="manage-btn">Manage</button>
          </div>
          <div className="access-card">
            <Lock size={24} />
            <div className="access-info">
              <h4>Security Permissions</h4>
              <p>Read-only API access</p>
            </div>
            <button className="manage-btn">Manage</button>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h3><ExternalLink size={20} /> External Integrations</h3>
        <div className="integration-list">
          <div className="integration-item">
            <span>Xero Accounting</span>
            <span className="status-badge connected">Connected</span>
          </div>
          <div className="integration-item">
            <span>AWS Infrastructure</span>
            <span className="status-badge connected">Connected</span>
          </div>
        </div>
      </section>

      <div className="apply-actions">
        <button className="apply-btn" onClick={() => (window as any).onApplyChanges?.()}>
          Done & Apply Changes
        </button>
      </div>

      <footer className="data-use-footer">
        <div className="security-header">
          <Shield size={20} className="text-purple" />
          <h3>Data Security & Privacy</h3>
        </div>
        <div className="security-content">
          <p>
            AuditLens uses your data strictly for <strong>risk assessment, compliance verification, and trust scoring</strong>. 
            All information is encrypted <strong>in transit and at rest</strong> using industry-standard protocols.
          </p>
          <p>
            Access is restricted to <strong>only SME-authorised</strong> lenders, bankers, auditors, and regulators. 
            You maintain full control and can <strong>revoke access</strong> to any document at any time via the Document Vault.
          </p>
        </div>
        <div className="security-badges">
          <div className="badge"><Lock size={14} /> Encrypted</div>
          <div className="badge"><Shield size={14} /> POPI Compliant</div>
          <div className="badge"><User size={14} /> Authorised Access Only</div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessInfo;
