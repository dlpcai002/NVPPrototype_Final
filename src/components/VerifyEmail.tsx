import React, { useState } from 'react';

interface VerifyEmailProps {
  onVerified: () => void;
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ onVerified }) => {
  const [code, setCode] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 4) {
      onVerified();
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">AuditLens</h1>
      <form className="login-form" onSubmit={handleVerify}>
        <h2 className="step-title">Verify Your Email</h2>
        <p style={{ color: '#666', marginBottom: '1.5rem', textAlign: 'center' }}>
          We've sent a 4-digit verification code to your email.
        </p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter 4-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
            required
            className="login-input"
            style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.5rem' }}
          />
        </div>
        <button type="submit" className="login-button" style={{ marginTop: '1rem' }}>
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
