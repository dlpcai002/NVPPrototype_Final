import { useState } from 'react';
import './App.css';
import { ChevronLeft } from 'lucide-react';
import Dashboard from './components/Dashboard';
import RiskIntelligence from './components/RiskIntelligence';
import ComplianceShield from './components/ComplianceShield';
import BusinessInfo from './components/BusinessInfo';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import VerifyEmail from './components/VerifyEmail';
import LenderDashboard from './components/LenderDashboard';

type Tab = 'Dashboard' | 'Risk Intelligence' | 'Compliance Shield' | 'Business Information' | 'Login' | 'CreateAccount';

function App() {
  const [view, setView] = useState<'Login' | 'CreateAccount' | 'VerifyEmail' | 'App' | 'Lender'>('Login');
  const [currentTab, setCurrentTab] = useState<Tab>('Dashboard');
  const [, setRefresh] = useState(0);

  (window as any).onApplyChanges = () => {
    // Simulate refreshing data across all components
    setRefresh(prev => prev + 1);
    alert('Changes applied and dashboard updated!');
  };

  const handleLogin = (username: string) => {
    const lowerUser = username.toLowerCase();
    if (lowerUser.includes('lr')) {
      setView('Lender');
    } else {
      setCurrentTab('Dashboard');
      setView('App');
    }
  };

  if (view === 'Login') {
    return <Login onLogin={handleLogin} onCreateAccount={() => setView('CreateAccount')} />;
  }

  if (view === 'CreateAccount') {
    return <CreateAccount onBackToLogin={() => setView('Login')} onAccountCreated={() => setView('VerifyEmail')} />;
  }

  if (view === 'VerifyEmail') {
    return <VerifyEmail onVerified={() => setView('Login')} />;
  }

  if (view === 'Lender') {
    return <LenderDashboard onLogout={() => setView('Login')} />;
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Risk Intelligence':
        return <RiskIntelligence />;
      case 'Compliance Shield':
        return <ComplianceShield />;
      case 'Business Information':
        return <BusinessInfo />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dashboard-layout">
      <header className="top-bar">
        <button className="back-link-btn" onClick={() => setView('Login')}>
          <ChevronLeft size={20} />
          <span>Back to Login</span>
        </button>
        <h2 className="current-tab-indicator">{currentTab}</h2>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>

      <nav className="bottom-nav">
        <button 
          className={`nav-item ${currentTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentTab('Dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-item ${currentTab === 'Risk Intelligence' ? 'active' : ''}`}
          onClick={() => setCurrentTab('Risk Intelligence')}
        >
          Risk Intelligence
        </button>
        <button 
          className={`nav-item ${currentTab === 'Compliance Shield' ? 'active' : ''}`}
          onClick={() => setCurrentTab('Compliance Shield')}
        >
          Compliance Shield
        </button>
        <button 
          className={`nav-item ${currentTab === 'Business Information' ? 'active' : ''}`}
          onClick={() => setCurrentTab('Business Information')}
        >
          Business Info
        </button>
      </nav>
    </div>
  );
}

export default App;
