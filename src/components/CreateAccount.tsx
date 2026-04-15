import React, { useState } from 'react';
import { Eye, EyeOff, Landmark, Cloud, ShieldCheck, User, Building } from 'lucide-react';

interface CreateAccountProps {
  onBackToLogin: () => void;
  onAccountCreated: () => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onBackToLogin, onAccountCreated }) => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    businessName: '',
    registrationNumber: '',
    businessType: '',
    headquartersAddress: '',
    role: '',
    hostingRegion: 'South Africa',
    consentFinancials: false,
    consentInfrastructure: false,
    consentIdentity: false,
    consentRealTime: false,
    password: '',
    confirmPassword: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Form Submitted:', formData);
      onAccountCreated();
    }
  };

  const renderProgressBar = () => {
    return (
      <div className="progress-bar-container">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
    );
  };

  const renderStep1 = () => {
    return (
      <form className="login-form" onSubmit={handleNext}>
        <h2 className="step-title">Basic Identity</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className="login-input"
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            required
            className="login-input"
          />
        </div>
        <div className="input-group">
          <div className="phone-input-wrapper">
            <span className="phone-prefix">+27</span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') })}
              required
              className="login-input phone-input"
            />
          </div>
        </div>
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBackToLogin}>
            Back
          </button>
          <button type="submit" className="login-button">
            Next
          </button>
        </div>
      </form>
    );
  };

  const renderStep2 = () => {
    return (
      <form className="login-form" onSubmit={handleNext}>
        <h2 className="step-title">Business Profile</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Registered Business Name"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            required
            className="login-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Company Registration Number"
            value={formData.registrationNumber}
            onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value.replace(/\D/g, '') })}
            required
            className="login-input"
          />
        </div>
        <div className="input-group">
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            required
            className="login-input select-input"
          >
            <option value="" disabled>Select Business Type</option>
            <optgroup label="SaaS & Cloud Services">
              <option value="saas_cloud">SaaS & Cloud Services</option>
            </optgroup>
            <optgroup label="AI & Data Analytics">
              <option value="ai_analytics">AI & Data Analytics</option>
            </optgroup>
            <optgroup label="Marketing & Data Processing">
              <option value="marketing_data">Marketing & Data Processing</option>
            </optgroup>
            <optgroup label="Specialized & High-Risk">
              <option value="fintech">Fintech & Financial Services</option>
              <option value="healthcare">Healthcare & Pharmaceuticals</option>
              <option value="legal">Legal & Professional Services</option>
            </optgroup>
            <optgroup label="General Business">
              <option value="ecommerce">E-commerce & Retail</option>
              <option value="general_services">General Professional Services</option>
            </optgroup>
          </select>
        </div>
        <div className="input-group">
          <textarea
            placeholder="Headquarters Address"
            value={formData.headquartersAddress}
            onChange={(e) => setFormData({ ...formData, headquartersAddress: e.target.value })}
            required
            className="login-input textarea-input"
            rows={3}
          />
        </div>
        <div className="button-group">
          <button type="button" className="back-button" onClick={() => setStep(1)}>
            Previous
          </button>
          <button type="submit" className="login-button">
            Next
          </button>
        </div>
      </form>
    );
  };

  const renderStep3 = () => {
    return (
      <form className="login-form step3-form" onSubmit={handleNext}>
        <h2 className="step-title">Account Role & Consent</h2>
        
        <div className="role-selection">
          <div 
            className={`role-card ${formData.role === 'sme' ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, role: 'sme' })}
          >
            <Building size={24} />
            <span>SME/Start-up</span>
          </div>
          <div 
            className={`role-card ${formData.role === 'lender' ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, role: 'lender' })}
          >
            <Landmark size={24} />
            <span>Lender/Regulator</span>
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Data Hosting Region</label>
          <input
            type="text"
            value={formData.hostingRegion}
            readOnly
            className="login-input readonly-input"
          />
        </div>

        <div className="consent-section">
          <h3 className="section-subtitle">Data Connectivity Permissions (The "Hooks")</h3>
          <div className="integration-cards">
            {formData.role !== 'lender' && (
              <>
                <div className="integration-card">
                  <div className="card-header">
                    <Landmark size={20} />
                    <span>Financials</span>
                    <ShieldCheck size={16} className="reassurance-icon" />
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={formData.consentFinancials}
                      onChange={(e) => setFormData({ ...formData, consentFinancials: e.target.checked })}
                    />
                    <span className="slider"></span>
                    <span className="toggle-label">Authorize Read-Only</span>
                  </label>
                </div>
                <div className="integration-card">
                  <div className="card-header">
                    <Cloud size={20} />
                    <span>Infrastructure</span>
                    <ShieldCheck size={16} className="reassurance-icon" />
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={formData.consentInfrastructure}
                      onChange={(e) => setFormData({ ...formData, consentInfrastructure: e.target.checked })}
                    />
                    <span className="slider"></span>
                    <span className="toggle-label">Authorize Read-Only</span>
                  </label>
                </div>
              </>
            )}
            <div className="integration-card">
              <div className="card-header">
                <User size={20} />
                <span>Identity</span>
                <ShieldCheck size={16} className="reassurance-icon" />
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={formData.consentIdentity}
                  onChange={(e) => setFormData({ ...formData, consentIdentity: e.target.checked })}
                />
                <span className="slider"></span>
                <span className="toggle-label">Authorize Read-Only</span>
              </label>
            </div>
          </div>
        </div>

        <div className="pulse-disclosure">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={formData.consentRealTime}
              onChange={(e) => setFormData({ ...formData, consentRealTime: e.target.checked })}
              required
            />
            <span>
              {formData.role === 'lender' 
                ? "I agree to the Terms of Service and confirm that I will handle all accessed SME data in accordance with [POPIA/GDPR] regulations. I understand that my access to specific Trust Reports is subject to individual SME approval."
                : "I authorize the Trust Engine to perform continuous background scans to maintain my Live Trust Score"
              }
            </span>
          </label>
        </div>

        <div className="legal-summary-box">
          <div className="legal-col">
            <strong>The Why</strong>
            <p>{formData.role === 'lender' ? 'To facilitate secure SME risk assessment.' : 'To prove your credibility.'}</p>
          </div>
          <div className="legal-divider"></div>
          <div className="legal-col">
            <strong>The What</strong>
            <p>
              {formData.role === 'lender' 
                ? 'We provide access to verified SME trust data while maintaining strict regulatory compliance.' 
                : 'We process your data to create a 0–100 Risk Score and check security doors.'
              }
            </p>
          </div>
        </div>

        <div className="password-section">
          <div className="input-group">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="login-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              className="login-input"
            />
          </div>
        </div>

        <div className="button-group">
          <button type="button" className="back-button" onClick={() => setStep(2)}>
            Previous
          </button>
          <button type="submit" className="login-button">
            Create Account
          </button>
        </div>
      </form>
    );
  };

  const renderStepSelection = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      default: return renderStep1();
    }
  };

  return (
    <div className="login-container create-account-container">
      <h1 className="login-title">RiskLens</h1>
      {renderProgressBar()}
      {renderStepSelection()}
    </div>
  );
};

export default CreateAccount;
