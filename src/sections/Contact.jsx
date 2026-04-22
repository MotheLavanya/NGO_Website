import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Mail, Phone, MapPin, Send, Bot, X, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm HopeBot. How can I assist you with your donation or volunteer queries today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    setMessages([...messages, { text: inputValue, isBot: false }]);
    setInputValue('');

    // Simulated Bot Response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for reaching out! A member of our team usually responds within 2 hours. Would you like to know more about our current education projects?",
        isBot: true
      }]);
    }, 1000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('contact.title')}</span>
          <h2 className="section-title">{t('contact.subtitle')}</h2>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-form-card glass-effect"
          >
            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>{t('contact.name')}</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>{t('contact.email')}</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>{t('contact.message')}</label>
                  <textarea rows="2" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">
                  {t('contact.cta')} <Send size={18} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="contact-success glass-effect"
              >
                <div className="success-icon">
                  <CheckCircle2 color="var(--success)" size={48} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Contact Info & Map Placeholder */}
          <div className="contact-info-side">
            <div className="info-cards">
              <div className="info-item glass-effect">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>hello@hoperise.org</p>
                </div>
              </div>
              <div className="info-item glass-effect">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-item glass-effect">
                <MapPin className="info-icon" />
                <div>
                  <h4>Visit Us</h4>
                  <p>Cyber Towers, HITEC City, Hyderabad, TS</p>
                </div>
              </div>
            </div>

            <div className="map-placeholder glass-effect">
              <div className="map-overlay">
                <MapPin size={40} color="var(--secondary)" />
                <span>Interactive Map Loading...</span>
              </div>
              {/* Mock Map Background */}
              <div className="mock-map"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="chatbot-wrapper">
        <AnimatePresence>
          {isBotOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="chatbot-window glass-effect"
            >
              <div className="chatbot-header">
                <div className="bot-info">
                  <Bot size={24} />
                  <span>HopeBot (AI Support)</span>
                </div>
                <button onClick={() => setIsBotOpen(false)}><X size={20} /></button>
              </div>
              <div className="chatbot-messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="chatbot-input">
                <input
                  type="text"
                  placeholder="Ask me something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit"><Send size={18} /></button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="chatbot-trigger"
          onClick={() => setIsBotOpen(!isBotOpen)}
        >
          {isBotOpen ? <X /> : <MessageSquare />}
          <span className="trigger-label">Talk to AI</span>
        </button>
      </div>

      <style jsx="true">{`
        .contact-section {
          background: #0f172a;
          padding: 40px 0;
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-form-card {
          padding: 1.5rem;
          border-radius: var(--radius-lg);
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: var(--bg-dark);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          color: white;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--secondary);
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
        }

        .contact-submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--secondary);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        /* Info Side */
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .info-item {
          padding: 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .info-icon {
          color: var(--secondary);
        }

        .info-item h4 {
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          color: var(--text-muted);
        }

        .info-item p {
          font-weight: 700;
        }

        .map-placeholder {
          height: 200px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.8);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .mock-map {
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800');
          background-size: cover;
          filter: grayscale(1) blur(2px);
        }

        /* Chatbot Styles */
        .chatbot-wrapper {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
        }

        .chatbot-window {
          width: 350px;
          height: 500px;
          border-radius: var(--radius-lg);
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.8);
        }

        .chatbot-header {
          padding: 1.5rem;
          background: var(--secondary);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bot-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
        }

        .chatbot-messages {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          padding: 1rem;
          border-radius: 12px;
          max-width: 85%;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .message.bot {
          background: var(--glass);
          color: var(--text-main);
          align-self: flex-start;
          border-bottom-left-radius: 2px;
        }

        .message.user {
          background: var(--secondary);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }

        .chatbot-input {
          padding: 1rem;
          display: flex;
          gap: 0.5rem;
          background: rgba(255,255,255,0.05);
        }

        .chatbot-input input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          outline: none;
        }

        .chatbot-trigger {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.5);
        }

        .trigger-label {
          position: absolute;
          right: 5rem;
          background: white;
          color: black;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.8rem;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            max-width: 700px;
          }
          .contact-form-card {
            padding: 2.5rem 2rem;
          }
           .chatbot-trigger {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 768px) {
           .chatbot-window {
            width: calc(100vw - 3rem);
            height: 450px;
            right: 1.5rem;
            bottom: 6rem;
          }
           .trigger-label {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.7rem;
          }
          .contact-form-card {
            padding: 2rem 1.25rem;
          }
          .map-placeholder {
            height: 220px;
          }
          .info-item {
            padding: 1.25rem;
            gap: 1rem;
          }
          .info-item p {
            font-size: 0.9rem;
            word-break: break-all;
          }
           .chatbot-window {
            right: 1rem;
            width: calc(100vw - 2rem);
          }
          .chatbot-trigger {
            width: 54px;
            height: 54px;
          }
        }

        @media (max-width: 360px) {
          .contact-form-card {
            padding: 1.5rem 1rem;
          }
          .info-item {
            padding: 1rem;
            gap: 0.75rem;
          }
          .info-item h4 {
            font-size: 0.75rem;
          }
          .info-item p {
            font-size: 0.8rem;
          }
          .chatbot-window {
            width: calc(100vw - 1.5rem);
            right: 0.75rem;
             height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
