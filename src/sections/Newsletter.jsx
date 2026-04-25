import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="newsletter-box glass-effect"
        >
          <div className="newsletter-content">
            <div className="text-wrapper">
              <div className="mini-icon">
                <Mail size={24} color="var(--secondary)" />
              </div>
              <div className="title-desc">
                <h2>{t('newsletter.title')}</h2>
                <p>{t('newsletter.subtitle')}</p>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder={t('newsletter.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    {t('newsletter.cta')} <Send size={18} />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="subscribed-msg"
              >
                <CheckCircle size={20} color="var(--success)" />
                <span>{language === 'te' ? 'సఫలంగా సబ్‌స్క్రైబ్ చేయబడింది!' : 'Subscribed successfully!'}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .newsletter-section {
          padding: 40px 0;
          background: var(--bg-dark);
          border-top: 1px solid var(--glass-border);
        }

        .newsletter-box {
          padding: 2.5rem 4rem;
          border-radius: var(--radius-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(15, 23, 42, 0.2) 100%);
        }

        .newsletter-content {
          flex: 1;
        }

        .text-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-align: left;
        }

        .mini-icon {
          width: 54px;
          height: 54px;
          background: var(--glass);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
          flex-shrink: 0;
        }

        .newsletter-content h2 {
          font-size: 1.55rem;
          margin-bottom: 0.25rem;
          color: var(--text-main);
        }

        .newsletter-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .form-wrapper {
          flex: 1;
          max-width: 450px;
        }

        .newsletter-form {
          width: 100%;
        }

        .input-group {
          display: flex;
          gap: 0.5rem;
          background: var(--bg-dark);
          padding: 0.4rem;
          border-radius: 100px;
          border: 1px solid var(--glass-border);
          transition: var(--transition-smooth);
        }

        .input-group:focus-within {
          border-color: var(--secondary);
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
        }

        .input-group input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 0 1.25rem;
          color: white;
          outline: none;
          font-size: 0.9rem;
        }

        .subscribe-btn {
          padding: 0.6rem 1.75rem;
          background: var(--secondary);
          color: white;
          border-radius: 100px;
          font-weight: 700;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          gap: 0.5rem;
          transition: var(--transition-smooth);
        }

        .subscribe-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .subscribed-msg {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          color: var(--success);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .newsletter-box {
            padding: 3rem 2rem;
            flex-direction: column;
            text-align: center;
            gap: 2.5rem;
          }
          .text-wrapper {
            flex-direction: column;
            text-align: center;
          }
          .form-wrapper {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .newsletter-section {
            padding: 40px 0;
          }
          .newsletter-box {
            padding: 2.5rem 1.25rem;
          }
          .newsletter-content h2 {
            font-size: 1.35rem;
          }
          .input-group {
            flex-direction: column;
            border: none;
            background: transparent;
            padding: 0;
            gap: 1rem;
          }
          .input-group input {
            background: var(--bg-dark);
            height: 55px;
            border: 1px solid var(--glass-border);
            border-radius: var(--radius-md);
            padding: 0 1.5rem;
            width: 100%;
          }
          .subscribe-btn {
            width: 100%;
            height: 55px;
            justify-content: center;
            border-radius: var(--radius-md);
          }
        }

        @media (max-width: 400px) {
          .mini-icon {
            width: 48px;
            height: 48px;
          }
           .newsletter-content h2 {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 360px) {
          .newsletter-box {
            padding: 2rem 1rem;
            gap: 1.5rem;
          }
          .newsletter-content h2 {
            font-size: 1.15rem;
          }
          .newsletter-content p {
            font-size: 0.8rem;
          }
          .text-wrapper {
            gap: 1rem;
          }
          .input-group input, .subscribe-btn {
            height: 50px;
            font-size: 0.85rem;
          }
          .subscribed-msg {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;

