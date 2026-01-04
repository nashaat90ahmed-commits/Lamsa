import { useState } from 'react';

const mockProfiles = [
  { id: 1, name: 'ليان', age: 28, city: 'الرياض', bio: 'أحب القراءة والموسيقى الكلاسيكية', mainPhoto: 'https://i.pravatar.cc/400?img=12' },
  { id: 2, name: 'نورا', age: 25, city: 'جدة', bio: 'مصممة أزياء، أبحث عن شريك حياة', mainPhoto: 'https://i.pravatar.cc/400?img=8' },
];

export default function Discovery({ onInstallClick, showInstall }) {
  const [profiles] = useState(mockProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = profiles[currentIndex];
  if (!current) return <div>لا توجد ملفات حالياً</div>;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* شريط علوي */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '15px 20px', 
        backgroundColor: 'white', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
      }}>
        <button style={{ fontSize: '1.5rem', background: 'none', border: 'none' }}>🔔</button>
        <button style={{ fontSize: '1.5rem', background: 'none', border: 'none' }}>⚙️</button>
      </div>

      {/* زر التثبيت (يظهر فقط إذا لم يُثبت بعد) */}
      {showInstall && (
        <div style={{
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#FFF8E1',
          color: '#5D4037',
          fontSize: '0.95rem',
          fontWeight: '600',
          zIndex: 10,
          position: 'sticky',
          top: '60px'
        }}>
          📲 هل تريد تثبيت "لمسة" كتطبيق على هاتفك؟
          <button
            onClick={onInstallClick}
            style={{
              background: '#D4AF37',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              padding: '4px 12px',
              marginRight: '8px',
              marginLeft: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            تثبيت
          </button>
        </div>
      )}

      {/* بطاقة الملف */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div onClick={() => alert('عرض باقي الصور')} style={{ cursor: 'pointer' }}>
            <img src={current.mainPhoto} alt={current.name} className="fullscreen-img" />
          </div>
          <h2 style={{ marginTop: '20px', fontSize: '1.8rem' }}>{current.name}, {current.age}</h2>
          <p style={{ color: '#666', margin: '8px 0' }}>{current.city}</p>
          <p style={{ marginTop: '10px', color: '#444' }}>{current.bio}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
          <button style={{ width: 60, height: 60, borderRadius: '50%', background: '#eee', border: 'none', fontSize: '1.8rem' }}>👎</button>
          <button className="btn-primary" style={{ width: 70, height: 70, borderRadius: '50%', fontSize: '1.5rem' }}>💬</button>
          <button style={{ width: 60, height: 60, borderRadius: '50%', background: '#eee', border: 'none', fontSize: '1.8rem' }}>👍</button>
        </div>
      </div>
    </div>
  );
}