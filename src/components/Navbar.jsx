import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Heart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const mainLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.programs'), href: '/programs' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const exploreLinks = language === 'te' ? [
    { name: 'ప్రభావ కథలు', desc: 'నిజమైన వ్యక్తులు. నిజమైన మార్పు. నిజమైన ప్రభావం.', href: '/impact' },
    { name: 'సాక్ష్యాలు', desc: 'ఆశా గళు: మన సమాజం మరియు మద్దతుదారుల నుండి వినండి.', href: '/testimonials' },
    { name: 'కమ్యూనిటీ', desc: 'ఉద్యమంలో చేరండి: సహకరించడానికి మార్గాలను అన్వేషించండి.', href: '/community' },
    { name: 'పారదర్శకత', desc: 'నమ్మకం మరియు స్పష్టత: మా ఆడిట్ చేయబడిన ఆర్థిక నివేదికలు చూడండి.', href: '/transparency' },
    { name: 'బ్లాగ్', desc: 'తాజా అప్డేట్‌లు: క్షేత్రం నుండి కథలు మరియు అంతర్దృష్టులు.', href: '/blog' },
  ] : [
    { name: 'Impact Stories', desc: 'Real people. Real change. Real impact.', href: '/impact' },
    { name: 'Testimonials', desc: 'Voices of Hope: Hear from our community and supporters.', href: '/testimonials' },
    { name: 'Community', desc: 'Join the Movement: Explore ways to contribute and help.', href: '/community' },
    { name: 'Transparency', desc: 'Trust & Clarity: Access our audited financial reports.', href: '/transparency' },
    { name: 'Blog', desc: 'Latest Updates: Stories and insights from the field.', href: '/blog' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <Heart className="logo-icon" fill="var(--secondary)" color="var(--secondary)" />
          <span className="logo-text">HopeRise</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {mainLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Explore Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="dropdown-trigger">
              {language === 'te' ? 'అన్వేషించండి' : 'Explore'} <ChevronDown size={16} className={isDropdownOpen ? 'rotated' : ''} />
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'visible' : ''}`}>
              {exploreLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                  className={({ isActive }) => isActive ? 'dropdown-active' : ''}
                >
                  <div className="dropdown-link-content">
                    <span className="link-title">{link.name}</span>
                    <span className="link-desc">{link.desc}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav-actions">
            <div id="google_translate_element" className="google-translate-container"></div>
            <Link 
              to="/donate"
              className="cta-button-nav glass-effect"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.donate')}
            </Link>
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(15px);
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          font-family: var(--font-heading);
          color: var(--text-main);
        }

        .logo-icon {
          animation: pulse-slow 3s infinite;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a, .dropdown-trigger {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-muted);
          position: relative;
          background: transparent;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: var(--transition-smooth);
        }

        .nav-links a:hover, .dropdown-trigger:hover {
          color: var(--text-main);
        }

        .active-link {
          color: var(--text-main) !important;
        }

        .active-link:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--secondary);
        }

        /* Dropdown Styles */
        .nav-dropdown {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
        }

        .dropdown-trigger .rotated {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: var(--bg-alt);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          min-width: 320px;
          padding: 1rem;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .dropdown-menu.visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(5px);
        }

        .dropdown-menu a {
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          width: 100%;
          transition: all 0.2s ease;
        }

        .dropdown-menu a:hover {
          background: rgba(255,255,255,0.05);
        }

        .dropdown-link-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .link-title {
          font-weight: 600;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .link-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .dropdown-menu a:hover .link-title {
          color: var(--secondary);
        }

        .dropdown-active {
          background: rgba(249, 115, 22, 0.05) !important;
        }
        
        .dropdown-active .link-title {
          color: var(--secondary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.03);
          color: var(--text-main);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .cta-button-nav {
          padding: 0.7rem 1.4rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, var(--secondary), #ea580c);
          font-size: 0.9rem;
          border: none;
        }

        .menu-toggle {
          display: none;
          background: transparent;
          color: var(--text-main);
        }

        @media (max-width: 1024px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 100%;
            background: var(--bg-dark);
            flex-direction: column;
            justify-content: flex-start;
            padding: 8rem 2rem 2rem;
            gap: 1.5rem;
            transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1001;
            overflow-y: auto;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links a, .dropdown-trigger {
            font-size: 1.25rem;
            width: 100%;
            padding: 0.5rem 0;
          }

          .nav-dropdown {
            width: 100%;
          }

          .dropdown-menu {
            position: static;
            transform: none;
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            background: transparent;
            border: none;
            padding: 0.5rem 0 0 1rem;
            margin-top: 0.5rem;
            border-left: 1px solid var(--glass-border);
            gap: 1.25rem;
            min-width: 0;
          }

          .dropdown-menu a {
            padding: 0;
          }

          .link-title {
            font-size: 1.1rem;
          }

          .link-desc {
            font-size: 0.85rem;
          }

          .nav-actions {
            flex-direction: column;
            width: 100%;
            margin-top: 2rem;
            gap: 1rem;
          }

          .lang-toggle, .cta-button-nav {
            width: 100%;
            justify-content: center;
            padding: 1.1rem;
            font-size: 1rem;
          }

          .menu-toggle {
            display: flex;
            z-index: 1002;
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
          }

          .active-link:after {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .nav-logo { font-size: 1.2rem; }
          .nav-links a, .dropdown-trigger { font-size: 1.1rem; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

