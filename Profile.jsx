// src/pages/Profile.jsx
export default function Profile() {
  const user = JSON.parse(localStorage.getItem('lamsa_user')) || {};

  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#0F1C3F' }}>ملفي</h2>
      
      {/* الصور */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '25px' }}>
        <img 
          src="https://i.pravatar.cc/300?img=12" 
          alt="الرئيسية" 
          style={{ width: 120, height: 120, borderRadius: '16px', objectFit: 'cover', border: '3px solid var(--gold)' }} 
        />
        <img 
          src="https://i.pravatar.cc/300?img=15" 
          alt="الصورة 2" 
          style={{ width: 120, height: 120, borderRadius: '16px', objectFit: 'cover' }} 
        />
      </div>

      {/* المعلومات */}
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <p><strong>الاسم:</strong> {user.name || 'غير مكتمل'}</p>
        <p><strong>العمر:</strong> {user.age || '—'}</p>
        <p><strong>المدينة:</strong> {user.location || '—'}</p>
        <p><strong>الهدف:</strong> {user.goal || '—'}</p>
      </div>

      {/* أزرار */}
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <button className="btn-primary" style={{ width: '100%' }}>✏️ تعديل الملف</button>
        <button 
          className="btn-primary" 
          style={{ width: '100%', background: '#0F1C3F' }}
          onClick={() => window.open('https://www.paypal.com/donate/...', '_blank')}
        >
          💎 اشترك في النسخة المميزة
        </button>
        <button style={{ width: '100%', background: 'none', border: '1px solid #ccc', padding: '12px', borderRadius: '30px' }}>
          📞 الدعم الفني
        </button>
      </div>
    </div>
  );
}