import { useState } from 'react';

const dailyHoroscope = {
  برج_الحمل: 'يوم مليء بالطاقة! استغل الفرص الجديدة.',
  برج_الثور: 'استمع لحدسك اليوم، خاصة في الأمور العاطفية.',
  برج_الجوزاء: 'قد تلتقي بشخص جديد يغيّر أفكارك.',
  برج_السرطان: 'وقت مثالي للتفكير في المستقبل مع شريكك.',
  برج_الأسد: 'ثق بنفسك — قراراتك اليوم صائبة.',
  برج_العذراء: 'اهتم بتفاصيل صغيرة، قد تصنع فرقًا كبيرًا.',
  برج_الميزان: 'الحب في أفقك — كن منفتحًا.',
  برج_العقرب: 'لا تخف من التعبير عن مشاعرك الحقيقية.',
  برج_القوس: 'رحلة أو تغيير مفاجئ قد يجلب السعادة.',
  برج_الجدي: 'الاستقرار العاطفي يبدأ من قراراتك اليوم.',
  برج_الدلو: 'أفكارك الإبداعية ستفتح لك أبوابًا جديدة.',
  برج_الحوت: 'ثق بحدسك — القلب يعرف ما يناسبك.'
};

export default function Stories() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff9f0', minHeight: '100vh' }}>
      <div style={{ 
        backgroundColor: '#0F1C3F', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '16px', 
        marginBottom: '30px',
        boxShadow: '0 6px 20px rgba(15, 28, 63, 0.3)'
      }}>
        <h2 className="gold" style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.6rem' }}>
          🌟 توقعات الأبراج اليوم
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {Object.keys(dailyHoroscope).map(z => (
            <div 
              key={z}
              onClick={() => setSelectedZodiac(z)}
              style={{ 
                backgroundColor: selectedZodiac === z ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                color: selectedZodiac === z ? '#000' : 'white',
                padding: '12px 8px',
                borderRadius: '10px',
                textAlign: 'center',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {z.replace('برج_', '')}
            </div>
          ))}
        </div>
        {selectedZodiac && (
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
            <p>{dailyHoroscope[selectedZodiac]}</p>
          </div>
        )}
      </div>

      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#0F1C3F' }}>قصة اليوم</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '15px' }}>
          في حي دمشقي قديم، حيث تلامس النوافذ بعضها، عاشت "ليلى" تحلم بلمسة حبٍ حقيقية...
        </p>
        <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600" 
             alt="دمشق" style={{ width: '100%', borderRadius: '12px', margin: '20px 0' }} />
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          لم تكن تعلم أن نافذة الجار الجديد ستفتح لها بابًا لم تطرقه من قبل...
        </p>
        <button 
          className="btn-primary" 
          style={{ marginTop: '20px', width: '100%' }}
          onClick={() => alert('التعليقات قريباً!')}
        >
          اترك تعليقك
        </button>
      </div>
    </div>
  );
}