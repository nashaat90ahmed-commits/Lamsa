import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return;
    const mockUser = { id: Date.now(), email };
    localStorage.setItem('lamsa_user', JSON.stringify(mockUser));
    onLogin(mockUser);
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0F1C3F', color: 'white' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '700' }}>لمسة</h1>
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>لقاء يبدأ بلمسة...</p>
      
      <form onSubmit={handleLogin} style={{ maxWidth: '320px', margin: '0 auto' }}>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            marginBottom: '20px'
          }}
        />
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
          المتابعة
        </button>
      </form>

      <p style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.7 }}>
        أو سجّل الدخول عبر Cloudflare (مجاني)
      </p>
      <button
        onClick={() => {
          const mock = { id: Date.now(), email: 'guest@lamsa.app' };
          localStorage.setItem('lamsa_user', JSON.stringify(mock));
          onLogin(mock);
        }}
        style={{
          marginTop: '10px',
          background: 'transparent',
          border: '1px solid var(--gold)',
          color: 'var(--gold)',
          padding: '10px 20px',
          borderRadius: '30px',
          cursor: 'pointer'
        }}
      >
        دخول ضيف (مجاني)
      </button>
    </div>
  );
}