import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');

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
      {/* زخارف ذهبية خلفية (تأثير فاخر) */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        border: '2px solid rgba(212, 175, 55, 0.1)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-60px',
        width: '250px',
        height: '250px',
        border: '2px solid rgba(212, 175, 55, 0.07)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      {/* الشعار */}
      <div style={{
        textAlign: 'center',
        zIndex: 1,
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          background: 'linear-gradient(to right, #D4AF37, #F9E496)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 10px rgba(212, 175, 55, 0.2)',
          letterSpacing: '1px'
        }}>
          لمسة
        </h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          marginTop: '10px',
          fontSize: '1.1rem',
          fontWeight: '300'
        }}>
          لقاء يبدأ بلمسة...
        </p>
      </div>

      {/* نموذج الدخول */}
      <form onSubmit={handleLogin} style={{
        width: '100%',
        maxWidth: '360px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '30px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1
      }}>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(0, 0, 0, 0.3)',
            color: 'white',
            fontSize: '1.1rem',
            marginBottom: '20px',
            outline: 'none',
            transition: 'border 0.3s'
          }}
          onFocus={(e) => e.target.style.border = '1px solid #D4AF37'}
          onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '1.1rem',
            fontWeight: '700',
            borderRadius: '16px',
            border: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(90deg, #D4AF37, #F9E496)',
            color: '#0A0A0A',
            boxShadow: '0 6px 20px rgba(212, 175, 55, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
        >
          المتابعة
        </button>
      </form>

      {/* دخول ضيف */}
      <button
        onClick={() => {
          const mock = { id: Date.now(), email: 'guest@lamsa.app' };
          localStorage.setItem('lamsa_user', JSON.stringify(mock));
          onLogin(mock);
        }}
        style={{
          marginTop: '30px',
          background: 'transparent',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          color: 'rgba(212, 175, 55, 0.9)',
          padding: '12px 30px',
          borderRadius: '30px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          backdropFilter: 'blur(5px)',
          zIndex: 1
        }}
      >
        دخول ضيف (مجاني)
      </button>
    </div>
  );
}