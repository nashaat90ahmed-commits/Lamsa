import { useState } from 'react';

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { key: 'name', label: 'ما اسمك الكامل؟', type: 'text' },
    { key: 'age', label: 'كم عمرك؟', type: 'number' },
    { key: 'gender', label: 'جنسك؟', type: 'select', options: ['ذكر', 'أنثى'] },
    { key: 'goal', label: 'هدفك من "لمسة"؟', type: 'select', options: ['زواج', 'تعارف جاد'] },
    { key: 'location', label: 'من أين أنت؟', type: 'text' },
  ];

  const handleNext = (value) => {
    setAnswers(prev => ({ ...prev, [questions[step].key]: value }));
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const fullProfile = { ...answers, [questions[step].key]: value, onboarded: true };
      const user = JSON.parse(localStorage.getItem('lamsa_user'));
      localStorage.setItem('lamsa_user', JSON.stringify({ ...user, ...fullProfile }));
      localStorage.setItem('onboarding_completed', 'true');
      onComplete();
    }
  };

  const q = questions[step];
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '100vh' }}>
      <h2 className="gold" style={{ marginBottom: '30px' }}>{q.label}</h2>
      
      {q.type === 'text' || q.type === 'number' ? (
        <input
          type={q.type}
          autoFocus
          onKeyUp={(e) => e.key === 'Enter' && handleNext(e.target.value)}
          placeholder={`أدخل ${q.label.replace('؟', '')}`}
          style={{
            width: '90%',
            maxWidth: '300px',
            padding: '14px',
            borderRadius: '12px',
            border: '1px solid #ddd',
            fontSize: '1.1rem'
          }}
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          {q.options.map(opt => (
            <button
              key={opt}
              className="btn-primary"
              onClick={() => handleNext(opt)}
              style={{ width: '90%', maxWidth: '300px', margin: '0 auto' }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          style={{ marginTop: '20px', background: 'none', color: '#666', textDecoration: 'underline' }}
        >
          السابق
        </button>
      )}
    </div>
  );
}