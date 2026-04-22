import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How is my donation being used?',
      a: 'We maintain 100% transparency. 85% of your donation goes directly to program services, 10% to administration, and 5% to fundraising awareness. You can track this in our live Fund Tracker.'
    },
    {
      q: 'Are my donations tax-exempt?',
      a: 'Yes, all donations to HopeRise Foundation are tax-exempt under Section 80G of the Income Tax Act. You will receive a tax certificate immediately after donation.'
    },
    {
      q: 'Can I volunteer for a specific program?',
      a: 'Absolutely! We have specific volunteer roles for education, healthcare, and rural development. You can choose your area of interest when filling out the application.'
    },
    {
      q: 'How can our company partner with you?',
      a: 'We offer various CSR partnership models, from funding specific village projects to employee engagement programs. Please reach out via our contact form for a custom proposal.'
    }
  ];

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-intro">
            <span className="section-badge">{t('faq.title')}</span>
            <h2 className="section-title">{t('faq.subtitle')}</h2>
            <div className="faq-illustration glass-effect">
              <HelpCircle size={80} color="var(--secondary)" className="illustration-icon" />
              <p>Still have questions? Our support team is here to help 24/7.</p>
              <button className="faq-support-btn">Contact Support</button>
            </div>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button 
                  className={`accordion-header ${openIndex === idx ? 'active' : ''}`}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="accordion-body"
                    >
                      <div className="accordion-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .faq-section {
          background: #0f172a;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 5rem;
          align-items: flex-start;
        }

        .faq-illustration {
          padding: 3rem;
          border-radius: var(--radius-lg);
          text-align: center;
          margin-top: 3rem;
        }

        .illustration-icon {
          margin-bottom: 2rem;
          animation: pulse-slow 3s infinite;
        }

        .faq-illustration p {
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .faq-support-btn {
          padding: 0.75rem 2rem;
          background: var(--secondary);
          color: white;
          border-radius: 100px;
          font-weight: 700;
        }

        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .accordion-item {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          transition: var(--transition-smooth);
        }

        .accordion-header {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          color: var(--text-main);
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
        }

        .accordion-header.active {
          color: var(--secondary);
        }

        .accordion-content {
          padding: 0 2rem 2rem 2rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .faq-illustration {
            display: none;
          }
          .faq-intro {
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .accordion-header {
            padding: 1.25rem 1.5rem;
            font-size: 0.95rem;
          }
          .accordion-content {
            padding: 0 1.5rem 1.5rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .accordion-header {
            padding: 1rem 1.25rem;
            font-size: 0.85rem;
          }
          .accordion-content {
            padding: 0 1.25rem 1.25rem 1.25rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
