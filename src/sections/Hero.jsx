import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="hero-bg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')` 
        }}
      />

      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-box"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-badge"
          >
            <Heart size={14} fill="currentColor" /> {t('nav.volunteer')}
          </motion.span>
          
          <h1 className="hero-title">
            {t('hero.title')}
          </h1>
          
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>

          <div className="hero-ctas">
            <button 
              className="cta-primary glass-effect"
              onClick={() => navigate('/donate')}
            >
              {t('hero.ctaPrimary')} <ArrowRight size={20} />
            </button>
            <button 
              className="cta-secondary"
              onClick={() => navigate('/about')}
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Sticky Donate Button (Visible after some scroll) */}
      <motion.button 
        className="floating-donate glass-effect"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/donate')}
      >
        <Heart fill="#F97316" color="#F97316" />
      </motion.button>


      <style jsx="true">{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: var(--bg-dark);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(15, 23, 42, 0.9) 0%, 
            rgba(30, 58, 138, 0.6) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
        }

        .hero-text-box {
          max-width: 800px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(249, 115, 22, 0.1);
          color: var(--secondary);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 1.5rem;
          color: var(--text-main);
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-primary {
          background: var(--secondary);
          color: white;
          padding: 1rem 2rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.5);
        }

        .cta-secondary {
          background: transparent;
          color: var(--text-main);
          padding: 1rem 2rem;
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          font-weight: 600;
        }

        .cta-secondary:hover {
          background: var(--glass);
        }

        .floating-donate {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          background: var(--glass);
          border: 1px solid var(--secondary);
          animation: pulse-slow 2s infinite;
        }

        @media (max-width: 768px) {
          .hero {
            height: auto;
            min-height: 100vh;
            padding: 120px 0 80px;
            text-align: center;
          }
          
          .hero-content {
            justify-content: center;
          }

          .hero-text-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .hero-title {
            font-size: clamp(2.25rem, 10vw, 3.5rem);
            margin-bottom: 2rem;
          }

          .hero-subtitle {
            margin-bottom: 2.5rem;
            font-size: 1.1rem;
          }

          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 400px;
            gap: 1rem;
          }
          .cta-primary, .cta-secondary {
            width: 100%;
            justify-content: center;
            padding: 1.15rem;
          }

          .floating-donate {
            bottom: 1.5rem;
            right: 1.25rem;
            width: 56px;
            height: 56px;
          }
        }

        @media (max-width: 480px) {
          .hero-badge {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
            margin-bottom: 1.5rem;
          }
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .cta-primary, .cta-secondary {
            padding: 1rem;
          }
        }

        @media (max-width: 360px) {
          .hero {
            padding: 100px 0 60px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 0.9rem;
            margin-bottom: 2rem;
          }
          .hero-ctas {
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
