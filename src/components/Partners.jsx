import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'Global Aid', logo: 'https://placehold.co/200x80/1e293b/94a3b8?text=GLOBAL+AID' },
    { name: 'Unity Trust', logo: 'https://placehold.co/200x80/1e293b/94a3b8?text=UNITY+TRUST' },
    { name: 'Health First', logo: 'https://placehold.co/200x80/1e293b/94a3b8?text=HEALTH+FIRST' },
    { name: 'Eco Shield', logo: 'https://placehold.co/200x80/1e293b/94a3b8?text=ECO+SHIELD' },
    { name: 'Pure Water', logo: 'https://placehold.co/200x80/1e293b/94a3b8?text=PURE+WATER' },
    { name: 'Tech Care', logo: 'https://placehold.co/200x80/1e293b/94a3b8?text=TECH+CARE' },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="container">
        <h3 className="partners-title">Trusted by Global Partners</h3>
        <div className="marquee-container">
          <motion.div 
            className="marquee-inner"
            animate={{ x: '-50%' }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedPartners.map((partner, idx) => (
              <div key={idx} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .partners-section {
          padding: 60px 0;
          background: #020617;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }

        .partners-title {
          text-align: center;
          font-size: 1rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 3rem;
        }

        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-inner {
          display: flex;
          gap: 4rem;
          width: max-content;
        }

        .partner-logo {
          width: 200px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(1);
          opacity: 0.4;
          transition: var(--transition-smooth);
        }

        .partner-logo:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        .partner-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 40px 0;
          }
          .marquee-inner {
            gap: 2rem;
          }
          .partner-logo {
            width: 140px;
            height: 60px;
          }
        }

        @media (max-width: 360px) {
          .partner-logo {
            width: 100px;
            height: 40px;
          }
          .marquee-inner {
            gap: 1.5rem;
          }
          .partners-title {
            font-size: 0.8rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
