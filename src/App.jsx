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
  const [currentPage, setCurrentPage] = useState('discovery'); // أو 'chat', 'stories', 'profile'

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

  // للاختبار: عدّل currentPage يدويًا
  const renderPage = () => {
    switch(currentPage) {
      case 'chat': return <Chat />;
      case 'stories': return <Stories />;
      case 'profile': return <Profile />;
      default: return <Discovery />;
    }
  };

  return (
    <div>
      {renderPage()}
      {/* في المستقبل: شريط تنقل سفلي */}
      <div style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        display: 'flex', 
        justifyContent: 'space-around', 
        backgroundColor: 'white', 
        padding: '12px 0',
        borderTop: '1px solid #eee'
      }}>
        <button onClick={() => setCurrentPage('discovery')}>🏠</button>
        <button onClick={() => setCurrentPage('stories')}>📖</button>
        <button onClick={() => setCurrentPage('chat')}>💬</button>
        <button onClick={() => setCurrentPage('profile')}>👤</button>
      </div>
    </div>
  );
}

export default App;