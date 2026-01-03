import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Discovery from './pages/Discovery';

function App() {
  const [user, setUser] = useState(null);
  const [onboarded, setOnboarded] = useState(false);

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

  return <Discovery />;
}

export default App;