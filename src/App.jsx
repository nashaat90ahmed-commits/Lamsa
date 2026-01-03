import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Discovery from './pages/Discovery';
import Chat from './pages/Chat';
import Stories from './pages/Stories';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [onboarded, setOnboarded] = useState(false);
  const [currentPage, setCurrentPage] = useState('discovery');

  useEffect(() => {
    const savedUser = localStorage.getItem('lamsa_user');
    const isOnboarded = localStorage.getItem('onboarding_completed') === 'true';
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setOnboarded(isOnboarded);
    }
  }, []);

  if (!user) return <Login onLogin={(u) => setUser(u)} />;
  if (!onboarded) return <Onboarding onComplete={() => setOnboarded(true)} />;

  const renderPage = () => {
    switch (currentPage) {
      case 'chat': return <Chat />;
      case 'stories': return <Stories />;
      case 'profile': return <Profile />;
      default: return <Discovery />;
    }
  };

  return (
    <div style={{ paddingBottom: '70px' }}>
      {renderPage()}
      
      {/* شريط تنقل سفلي — لتجربة كل الأقسام */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: '12px 0',
        borderTop: '1px solid #eee',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}>
        <button 
          onClick={() => setCurrentPage('discovery')}
          style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: currentPage === 'discovery' ? '#D4AF37' : '#666' }}
        >
          🏠
        </button>
        <button 
          onClick={() => setCurrentPage('stories')}
          style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: currentPage === 'stories' ? '#D4AF37' : '#666' }}
        >
          📖
        </button>
        <button 
          onClick={() => setCurrentPage('chat')}
          style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: currentPage === 'chat' ? '#D4AF37' : '#666' }}
        >
          💬
        </button>
        <button 
          onClick={() => setCurrentPage('profile')}
          style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: currentPage === 'profile' ? '#D4AF37' : '#666' }}
        >
          👤
        </button>
      </div>
    </div>
  );
}

export default App;