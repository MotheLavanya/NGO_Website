import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Heart, PieChart, CheckCircle2, IndianRupee } from 'lucide-react';

const Donate = () => {
  const { t, language } = useLanguage();
  const [amount, setAmount] = useState(1000);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [500, 1000, 2500, 5000];
  const goal = 500000;
  const raised = 320000;
  const progress = (raised / goal) * 100;

  const handleDonate = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const fundingAllocation = language === 'te' ? [
    { label: 'విద్య', percent: 45, color: '#3B82F6' },
    { label: 'ఆరోగ్యం', percent: 30, color: '#10B981' },
    { label: 'గ్రామీణ అభివృద్ధి', percent: 15, color: '#F97316' },
    { label: 'నిర్వహణ', percent: 10, color: '#94A3B8' },
  ] : [
    { label: 'Education', percent: 45, color: '#3B82F6' },
    { label: 'Healthcare', percent: 30, color: '#10B981' },
    { label: 'Rural Dev', percent: 15, color: '#F97316' },
    { label: 'Admin', percent: 10, color: '#94A3B8' },
  ];

  return (
    <section id="donate" className="donate-section section-padding">
      <div className="container">
        <div className="donate-grid">
          {/* Left: Donation Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="donate-card glass-effect"
          >
            <div className="donate-header">
              <h2>{t('donate.title')}</h2>
              <p>{t('donate.subtitle')}</p>
            </div>

            <div className="donation-type-toggle">
              <button 
                className={isMonthly ? 'active' : ''} 
                onClick={() => setIsMonthly(true)}
              >
                {t('donate.monthly')}
              </button>
              <button 
                className={!isMonthly ? 'active' : ''} 
                onClick={() => setIsMonthly(false)}
              >
                {t('donate.oneTime')}
              </button>
            </div>

            <div className="amount-grid">
              {amounts.map((amt) => (
                <button 
                  key={amt}
                  className={`amount-btn ${amount === amt ? 'active' : ''}`}
                  onClick={() => { setAmount(amt); setCustomAmount(''); }}
                >
                  ₹{amt}
                </button>
              ))}
              <div className="custom-amount-input">
                <IndianRupee size={16} className="input-icon" />
                <input 
                  type="number" 
                  placeholder={t('donate.custom')}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount(Number(e.target.value));
                  }}
                />
              </div>
            </div>

            <form onSubmit={handleDonate}>
              <button type="submit" className="donate-submit-btn">
                {t('donate.cta')}
              </button>
            </form>

            <div className="trust-badges">
              <div className="badge"><ShieldCheck size={16} /> {language === 'te' ? '100% సురక్షితం' : '100% Secure'}</div>
              <div className="badge"><CheckCircle2 size={16} /> {language === 'te' ? '80G పన్ను మినహాయింపు' : '80G Tax Exempt'}</div>
            </div>
          </motion.div>

          {/* Right: Impact Stats & Goal */}
          <div className="donate-impact-side">
            <div className="goal-container glass-effect">
              <div className="goal-header">
                <h3>{language === 'te' ? 'కార్యక్రమం ప్రగతి' : 'Campaign Progress'}</h3>
                <span className="goal-percent">{Math.round(progress)}%</span>
              </div>
              <div className="progress-track">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="progress-bar"
                />
              </div>
              <div className="goal-footer">
                <div>
                  <p className="label">{t('donate.raised')}</p>
                  <p className="value">₹{raised.toLocaleString()}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="label">{t('donate.goal')}</p>
                  <p className="value">₹{goal.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="allocation-card glass-effect">
              <h3>{language === 'te' ? 'మీ డబ్బు ఎక్కడికి వెళుతుంది' : 'Where your money goes'}</h3>
              <div className="allocation-list">
                {fundingAllocation.map((item, idx) => (
                  <div key={idx} className="allocation-item">
                    <div className="alloc-info">
                      <span className="alloc-label">{item.label}</span>
                      <span className="alloc-percent">{item.percent}%</span>
                    </div>
                    <div className="alloc-bar-bg">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        className="alloc-bar-fill"
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="alloc-icon">
                <PieChart size={40} color="var(--secondary)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Animation Overlay */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="success-content glass-effect"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="success-icon">
                <Heart fill="var(--secondary)" size={64} color="var(--secondary)" />
              </div>
              <h2>{language === 'te' ? 'ధన్యవాదాలు!' : 'Thank You!'}</h2>
              <p>{language === 'te' ? `మీ ₹${amount} విరాళం అందుకుంది. మీరు నిజమైన వీరుడు!` : `Your donation of ₹${amount} has been received. You are a hero!`}</p>
              <button onClick={() => setIsSuccess(false)} className="close-success">{language === 'te' ? 'మూసివేయండి' : 'Close'}</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .donate-section {
          background: var(--bg-dark);
        }

        .donate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .donate-card {
          padding: 3rem;
          border-radius: var(--radius-lg);
        }

        .donate-header h2 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .donate-header p {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .donation-type-toggle {
          display: flex;
          background: var(--bg-dark);
          padding: 0.5rem;
          border-radius: 100px;
          margin-bottom: 2rem;
        }

        .donation-type-toggle button {
          flex: 1;
          padding: 0.75rem;
          border-radius: 100px;
          color: var(--text-muted);
          font-weight: 600;
          background: transparent;
        }

        .donation-type-toggle button.active {
          background: var(--secondary);
          color: white;
        }

        .amount-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .amount-btn {
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
          background: var(--glass);
          color: var(--text-main);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .amount-btn.active {
          border-color: var(--secondary);
          background: rgba(249, 115, 22, 0.1);
          color: var(--secondary);
        }

        .custom-amount-input {
          grid-column: span 2;
          position: relative;
          display: flex;
          align-items: center;
        }

        .custom-amount-input .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .custom-amount-input input {
          width: 100%;
          padding: 1rem 1rem 1rem 2.5rem;
          border-radius: var(--radius-md);
          background: var(--glass);
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          font-weight: 700;
          outline: none;
        }

        .donate-submit-btn {
          width: 100%;
          padding: 1.25rem;
          border-radius: var(--radius-md);
          background: var(--secondary);
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4);
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        /* Impact Side */
        .goal-container {
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
        }

        .goal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .goal-percent {
          font-size: 2rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .progress-track {
          height: 12px;
          background: var(--bg-dark);
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(to right, var(--secondary), #f59e0b);
        }

        .goal-footer {
          display: flex;
          justify-content: space-between;
        }

        .goal-footer .label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .goal-footer .value {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .allocation-card {
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          position: relative;
        }

        .allocation-card h3 {
          margin-bottom: 2rem;
        }

        .allocation-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .alloc-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .alloc-bar-bg {
          height: 6px;
          background: var(--bg-dark);
          border-radius: 3px;
        }

        .alloc-bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        .alloc-icon {
          position: absolute;
          top: 2rem;
          right: 2.5rem;
        }

        /* Success Overlay */
        .success-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-content {
          padding: 4rem;
          border-radius: var(--radius-lg);
          text-align: center;
          max-width: 500px;
        }

        .success-icon {
          margin-bottom: 2rem;
          animation: pulse-slow 2s infinite;
        }

        .success-content h2 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .success-content p {
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .close-success {
          padding: 1rem 2.5rem;
          background: var(--secondary);
          color: white;
          border-radius: 100px;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .donate-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .donate-card, .goal-container, .allocation-card {
            padding: 2.5rem 1.5rem;
          }
          .donate-header h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .amount-grid {
            grid-template-columns: repeat(2, 1fr);
          }
           .custom-amount-input {
            grid-column: span 2;
          }
        }

        @media (max-width: 480px) {
          .amount-grid {
            grid-template-columns: 1fr;
          }
          .amount-btn {
            font-size: 1rem;
            padding: 0.85rem;
          }
          .custom-amount-input {
            grid-column: span 1;
          }
          .trust-badges {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          .goal-percent {
            font-size: 1.75rem;
          }
          .goal-footer .value {
            font-size: 1.1rem;
          }
          .alloc-icon {
            display: none;
          }
          .success-content {
            padding: 2.5rem 1.5rem;
            width: 95%;
          }
          .success-content h2 {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 360px) {
          .donate-card {
            padding: 1.5rem 1rem;
          }
          .goal-container {
             padding: 1.5rem 1rem;
          }
          .goal-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          .amount-btn {
            font-size: 0.9rem;
            padding: 0.75rem;
          }
          .donate-header p {
            font-size: 0.9rem;
          }
          .success-content h2 {
            font-size: 1.5rem;
          }
          .success-content p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Donate;

