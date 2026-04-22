import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Users, MapPin, HandHeart, Trophy } from 'lucide-react';

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const ImpactStats = () => {
  const { t } = useLanguage();

  const stats = [
    { 
      label: t('stats.beneficiaries'), 
      value: 12500, 
      suffix: "+", 
      icon: <Users className="stat-icon" />,
      color: "#3B82F6"
    },
    { 
      label: t('stats.villages'), 
      value: 85, 
      suffix: "", 
      icon: <MapPin className="stat-icon" />,
      color: "#10B981"
    },
    { 
      label: t('stats.volunteers'), 
      value: 450, 
      suffix: "+", 
      icon: <HandHeart className="stat-icon" />,
      color: "#F97316"
    },
    { 
      label: t('stats.raised'), 
      value: 2500000, 
      suffix: "", 
      icon: <Trophy className="stat-icon" />,
      color: "#FDE68A"
    },
  ];

  return (
    <section className="impact-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="stat-card glass-effect"
              whileHover={{ y: -10, borderColor: stat.color }}
            >
              <div className="stat-icon-wrapper" style={{ background: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3 className="stat-value">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .impact-stats {
          padding: 40px 0;
          margin-top: -60px;
          position: relative;
          z-index: 20;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-smooth);
        }

        .stat-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon {
          width: 28px;
          height: 28px;
        }

        .stat-value {
          font-size: 1.75rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .impact-stats {
            margin-top: -30px;
            padding: 20px 0;
          }
          .stat-card {
            padding: 1.25rem;
            gap: 1rem;
          }
          .stat-value {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 568px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 360px) {
          .impact-stats {
            margin-top: -20px;
          }
          .stat-card {
            padding: 1rem;
            gap: 0.75rem;
          }
          .stat-icon-wrapper {
            width: 44px;
            height: 44px;
          }
          .stat-icon {
            width: 20px;
            height: 20px;
          }
          .stat-value {
            font-size: 1.25rem;
          }
          .stat-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactStats;
