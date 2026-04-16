import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string) => void;
  onCreateAccount: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCreateAccount }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">AuditLens</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="input-group">
          <div className="password-input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="create-account-text">
        Dont have an account?{' '}
        <span className="create-account-link" onClick={onCreateAccount}>
          Create Account
        </span>
      </p>
      <div className="logo-credit">
        Logo Credit: <a href="https://www.flaticon.com/free-icons/trust" title="trust icons" target="_blank" rel="noopener noreferrer">Trust icons created by pojok d - Flaticon</a>
      </div>
    </div>
  );
};

export default Login;
