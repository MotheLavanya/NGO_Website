import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Heart, MessageCircle, Send, LayoutGrid, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <Heart className="logo-icon" fill="var(--secondary)" color="var(--secondary)" />
              <span className="logo-text">HopeRise</span>
            </Link>
            <p className="brand-desc">
              Dedicated to empowering communities and creating a sustainable future for all through education, healthcare, and social equity.
            </p>
            <div className="social-links">
              <a href="#"><MessageCircle size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><LayoutGrid size={20} /></a>
              <a href="#"><Globe size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/programs">{t('nav.programs')}</Link></li>
              <li><Link to="/impact">{t('nav.impact')}</Link></li>
              <li><Link to="/blog">{t('blog.title')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Impact Column */}
          <div className="footer-links">
            <h4>Impact Areas</h4>
            <ul>
              <li><Link to="/programs">{t('programs.education')}</Link></li>
              <li><Link to="/programs">{t('programs.health')}</Link></li>
              <li><Link to="/programs">{t('programs.women')}</Link></li>
              <li><Link to="/transparency">{t('transparency.title') || 'Transparency'}</Link></li>
            </ul>
          </div>

          {/* Mini CTA Column */}
          <div className="footer-cta">
            <h4>Join the movement</h4>
            <p>Every small action counts. Be the change today.</p>
            <button className="footer-donate-btn" onClick={() => navigate('/donate')}>
              {t('nav.donate')}
            </button>
            <div className="footer-certs">
              <img src="https://placehold.co/60x30/1e293b/94a3b8?text=80G" alt="Cert 1" />
              <img src="https://placehold.co/60x30/1e293b/94a3b8?text=12A" alt="Cert 2" />
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <p>© 2024 HopeRise Foundation. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <button className="scroll-top-btn" onClick={handleScrollTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .footer-section {
          background: #020617;
          border-top: 1px solid var(--glass-border);
          padding: 80px 0 30px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .footer-brand .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          font-family: var(--font-heading);
          margin-bottom: 1.5rem;
        }

        .brand-desc {
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--glass);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          border: 1px solid var(--glass-border);
        }

        .social-links a:hover {
          background: var(--secondary);
          transform: translateY(-3px);
          border-color: var(--secondary);
        }

        .footer-links h4, .footer-cta h4 {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: var(--text-main);
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links ul li {
          margin-bottom: 1rem;
        }

        .footer-links ul li a {
          color: var(--text-muted);
          position: relative;
        }

        .footer-links ul li a:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--secondary);
          transition: var(--transition-smooth);
        }

        .footer-links ul li a:hover {
          color: var(--text-main);
        }

        .footer-links ul li a:hover:after {
          width: 100%;
        }

        .footer-cta p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .footer-donate-btn {
          padding: 0.75rem 2rem;
          background: var(--secondary);
          color: white;
          border-radius: 100px;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .footer-certs {
          display: flex;
          gap: 1rem;
          opacity: 0.5;
        }

        /* Footer Bottom */
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          position: relative;
        }

        .bottom-links {
          display: flex;
          gap: 2rem;
        }

        .scroll-top-btn {
          position: absolute;
          top: -25px;
          right: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4);
        }

        @media (max-width: 1024px) {
          .footer-section {
            padding: 60px 0 30px;
          }
          .footer-main {
            grid-template-columns: 1.5fr 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            text-align: center;
            gap: 3rem;
          }
          .footer-brand .nav-logo {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
          .footer-certs {
            justify-content: center;
          }
          .scroll-top-btn {
            right: 50%;
            transform: translateX(50%);
            top: -25px;
          }
        }

        @media (max-width: 640px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
            padding-bottom: 2rem;
            margin-top: 2rem;
          }
          .bottom-links {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 400px) {
           .brand-desc {
             font-size: 0.95rem;
           }
           .footer-links h4, .footer-cta h4 {
             margin-bottom: 1.5rem;
           }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
