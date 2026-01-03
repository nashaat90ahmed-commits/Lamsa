import { useState, useEffect } from 'react';

// لننشئ الصفحات داخليًّا مؤقتًا (لضمان البناء)
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    const mockUser = { id: Date.now(), email };
    localStorage.setItem('lamsa_user', JSON.stringify(mockUser));
    onLogin(mockUser);
  };
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0F1C3F', color: 'white' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>لمسة</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: '320px', margin: '0 auto' }}>
        <input type="email" placeholder="بريدك الإلكتروني" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '12px', marginBottom: '20px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }} />
        <button type="submit" style={{ background: '#D4AF37', color: 'white', padding: '12px 24px', borderRadius: '30px', fontWeight: '700', width: '100%' }}>المتابعة</button>
      </form>
    </div>
  );
};

const Onboarding = ({ onComplete }) => {
  const [name, setName] = useState('');
  const handleNext = () => {
    if (name) {
      localStorage.setItem('lamsa_user', JSON.stringify({ ...JSON.parse(localStorage.getItem('lamsa_user')), name }));
      localStorage.setItem('onboarding_completed', 'true');
      onComplete();
    }
  };
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '100vh' }}>
      <h2 style={{ color: '#D4AF37', marginBottom: '30px' }}>ما اسمك؟</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} onKeyUp={e => e.key === 'Enter' && handleNext()} placeholder="أدخل اسمك" style={{ width: '90%', maxWidth: '300px', padding: '14px', borderRadius: '12px', fontSize: '1.1rem' }} />
    </div>
  );
};

const Discovery = () => (
  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
    <h1 style={{ fontSize: '2rem', color: '#0F1C3F' }}>مرحبًا في لمسة!</h1>
    <p>هذا تطبيق تعارف وزواج عربي فاخر.</p>
    <div style={{ background: '#eee', height: '70vh', margin: '20px 0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      👤 مكان الصور قريبًا!
    </div>
  </div>
);

// الـ App الرئيسي
export default function App() {
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

  if (!user) return <Login onLogin={setUser} />;
  if (!onboarded) return <Onboarding onComplete={() => setOnboarded(true)} />;
  return <Discovery />;
}