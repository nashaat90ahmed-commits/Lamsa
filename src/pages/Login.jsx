import { useState, useEffect } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // تحقق إذا كان التطبيق مثبتًا
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    setIsInstalled(isStandalone);
  }, []);

  const handleInstall = () => {
    // اعرض تعليمات للمستخدم (لأن الزر التلقائي قد لا يعمل)
    alert('للتثبيت: اضغط على زر القائمة (⋯) في المتصفح، ثم اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    const mockUser = { id: Date.now(), email };
    localStorage.setItem('lamsa_user', JSON.stringify(mockUser));
    onLogin(mockUser);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F1C3F 0%, #0A0A0A 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* زر التثبيت اليدوي (يظهر دائمًا إذا لم يُثبت) */}
      {!isInstalled && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          borderRadius: '20px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2,
          border: '1px solid rgba(212, 175, 55, 0.4)',
          cursor: 'pointer'
        }} onClick={handleInstall}>
          <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>📲</span>
          <span style={{ color: 'white', fontSize: '0.95rem', fontWeight: '600' }}>تثبيت</span>
        </div>
      )}

      <div style={{ textAlign: 'center', zIndex: 1, marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', background: 'linear-gradient(to right, #D4AF37, #F9E496)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 10px rgba(212, 175, 55, 0.2)' }}>لمسة</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '10px', fontSize: '1.1rem' }}>لقاء يبدأ بلمسة...</p>
      </div>

      <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '360px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '30px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)', zIndex: 1 }}>
        <input type="email" placeholder="بريدك الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)', color: 'white', marginBottom: '20px' }} />
        <button type="submit" style={{ width: '100%', padding: '16px', background: '#D4AF37', color: '#0A0A0A', border: 'none', borderRadius: '16px', fontWeight: '700' }}>المتابعة</button>
      </form>
    </div>
  );
}