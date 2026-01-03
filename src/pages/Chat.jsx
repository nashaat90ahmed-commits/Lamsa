import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'مرحباً! كيف حالك؟', sender: 'other', time: '10:30' },
    { id: 2, text: 'أنا بخير، والحمد لله 😊', sender: 'me', time: '10:32' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: input,
      sender: 'me',
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ 
        backgroundColor: '#0F1C3F', 
        color: 'white', 
        padding: '15px 20px', 
        display: 'flex', 
        alignItems: 'center',
        gap: '15px'
      }}>
        <img src="https://i.pravatar.cc/40?img=12" alt="ليان" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        <div>
          <h3 style={{ fontWeight: '700' }}>ليان</h3>
          <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>متصل الآن</p>
        </div>
      </div>

      <div style={{ 
        flex: 1, 
        padding: '20px', 
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {messages.map(msg => (
          <div 
            key={msg.id}
            style={{ 
              alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
              maxWidth: '70%',
              backgroundColor: msg.sender === 'me' ? '#D4AF37' : '#fff',
              color: msg.sender === 'me' ? 'white' : '#000',
              padding: '12px 16px',
              borderRadius: '18px',
              fontSize: '1rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            {msg.text}
            <div style={{ 
              textAlign: 'right', 
              fontSize: '0.75rem', 
              opacity: 0.8, 
              marginTop: '4px' 
            }}>
              {msg.time}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        padding: '15px', 
        backgroundColor: 'white',
        display: 'flex',
        gap: '10px'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleSend()}
          placeholder="اكتب رسالتك..."
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '30px',
            border: '1px solid #ddd',
            fontSize: '1rem'
          }}
        />
        <button 
          onClick={handleSend}
          className="btn-primary"
          style={{ width: 50, height: 50, borderRadius: '50%', padding: 0 }}
        >
          ↵
        </button>
      </div>
    </div>
  );
}