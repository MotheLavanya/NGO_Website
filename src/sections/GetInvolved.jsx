import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Users, Handshake, BookOpen, Calendar, ArrowRight, Bell } from 'lucide-react';

const GetInvolved = () => {
  const { t, language } = useLanguage();

  const opportunities = [
    {
      title: t('getInvolved.volunteer'),
      desc: t('getInvolved.volunteerDesc'),
      icon: <Users size={24} />,
      color: '#3B82F6',
      backContent: language === 'te' ? '1,200+ వాలంటీర్లు ఇప్పటికే చేరారు. బోధన, వైద్య శిబిరాలు లేదా నిర్వహణ మద్దతులో సహాయం చేయండి.' : '1,200+ volunteers already joined. Help in teaching, medical camps, or admin support.'
    },
    {
      title: t('getInvolved.partner'),
      desc: t('getInvolved.partnerDesc'),
      icon: <Handshake size={24} />,
      color: '#F97316',
      backContent: language === 'te' ? 'CSR కార్యక్రమాలు లేదా సంయుక్త సమాజ ప్రాజెక్టుల కోసం మాతో సహకరించండి. ప్రభావాన్ని పెంచుదాం.' : 'Collaborate with us for CSR activities or joint community projects. Let’s scale the impact.'
    },
    {
      title: t('getInvolved.intern'),
      desc: t('getInvolved.internDesc'),
      icon: <BookOpen size={24} />,
      color: '#10B981',
      backContent: language === 'te' ? '8-వారాల కార్యక్రమాలు అందుబాటులో ఉన్నాయి. సామాజిక సేవలో ఆచరణాత్మక అనుభవం పొందండి.' : '8-week programs available. Gain hands-on experience in social work and NGO management.'
    }
  ];

  const upcomingEvents = language === 'te' ? [
    { date: 'మే 15', title: 'ఆరోగ్య శిబిరం - వరంగల్', time: 'ఉ.9:00' },
    { date: 'జూన్ 02', title: 'ఉపాధ్యాయ శిక్షణ వర్క్‌షాప్', time: 'ఉ.10:30' },
    { date: 'జూన్ 20', title: 'వేసవి రక్తదాన శిబిరం', time: 'ఉ.8:00' },
  ] : [
    { date: 'MAY 15', title: 'Health Camp - Warangal', time: '9:00 AM' },
    { date: 'JUN 02', title: 'Teacher Training Workshop', time: '10:30 AM' },
    { date: 'JUN 20', title: 'Summer Blood Donation Drive', time: '8:00 AM' },
  ];

  const [appliedIdx, setAppliedIdx] = useState(null);

  const handleApply = (idx) => {
    setAppliedIdx(idx);
    setTimeout(() => setAppliedIdx(null), 3000); // Reset after 3s
  };

  return (
    <section id="get-involved" className="involved-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('getInvolved.title')}</span>
          <h2 className="section-title">{t('getInvolved.subtitle')}</h2>
        </div>

        <div className="involved-grid">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="flip-card-container">
              <motion.div 
                className="flip-card"
                whileHover={appliedIdx !== idx ? { rotateY: 180 } : {}}
                animate={appliedIdx === idx ? { rotateY: 180 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Front Side */}
                <div className="flip-card-front glass-effect">
                  <div className="opp-icon" style={{ background: `${opp.color}15`, color: opp.color }}>
                    {opp.icon}
                  </div>
                  <h3>{opp.title}</h3>
                  <p>{opp.desc}</p>
                  <div className="flip-hint">{language === 'te' ? 'తిప్పడానికి హోవర్ చేయండి' : 'Hover to flip'} <ArrowRight size={14} /></div>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back" style={{ background: appliedIdx === idx ? 'var(--success)' : opp.color }}>
                  <h3>{appliedIdx === idx ? (language === 'te' ? 'దరఖాస్తు పంపబడింది!' : 'Application Sent!') : `${language === 'te' ? 'చేరండి' : 'Join as'} ${opp.title}`}</h3>
                  <p>{appliedIdx === idx ? (language === 'te' ? 'మీ ఆసక్తికి ధన్యవాదాలు. మా బృందం త్వరలో ఇమెయిల్ ద్వారా మిమ్మల్ని సంప్రదిస్తుంది.' : 'Thank you for your interest. Our team will contact you shortly via email.') : opp.backContent}</p>
                  <button 
                    className="opp-apply-btn"
                    onClick={() => handleApply(idx)}
                    disabled={appliedIdx === idx}
                  >
                    {appliedIdx === idx ? (language === 'te' ? 'విజయం ✓' : 'Success ✓') : t('getInvolved.cta')}
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Events Calendar Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="events-strip glass-effect"
        >
          <div className="events-header">
            <Calendar className="calendar-icon" />
            <h3>{language === 'te' ? 'రాబోయే ఈవెంట్లు' : 'Upcoming Events'}</h3>
          </div>
          <div className="events-list">
            {upcomingEvents.map((ev, idx) => (
              <div key={idx} className="event-item">
                <div className="ev-date">{ev.date}</div>
                <div className="ev-details">
                  <h4>{ev.title}</h4>
                  <span>{ev.time}</span>
                </div>
                <button className="ev-remind"><Bell size={16} /></button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .involved-section {
          background: var(--bg-dark);
        }

        .involved-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 6rem;
          perspective: 1000px;
        }

        .flip-card-container {
          height: 350px;
          perspective: 1000px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          color: white;
        }

        .opp-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .flip-card-front h3 {
          margin-bottom: 1rem;
          font-size: 1.35rem;
        }

        .flip-card-front p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }

        .flip-hint {
          font-size: 0.8rem;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
        }

        .opp-apply-btn {
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          color: inherit; /* Set in style map by individual color */
          border-radius: 100px;
          font-weight: 700;
          filter: brightness(0.9);
        }

        .flip-card-back button {
          color: #000;
        }

        /* Events Strip */
        .events-strip {
          display: flex;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          gap: 3rem;
          align-items: center;
        }

        .events-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 200px;
        }

        .calendar-icon {
          color: var(--secondary);
          width: 32px;
          height: 32px;
        }

        .events-list {
          flex: 1;
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .events-list::-webkit-scrollbar {
          display: none;
        }

        .event-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          min-width: 300px;
          background: rgba(255,255,255,0.03);
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
        }

        .ev-date {
          background: var(--secondary);
          color: white;
          padding: 0.5rem;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.75rem;
          text-align: center;
          width: 60px;
        }

        .ev-details h4 {
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .ev-details span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .involved-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .events-strip {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
           .events-header {
            min-width: auto;
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .flip-card-container {
            height: 320px;
          }
          .flip-card-front, .flip-card-back {
            padding: 2rem 1.5rem;
          }
          .events-strip {
            padding: 2rem 1.5rem;
          }
          .event-item {
            min-width: 280px;
            padding: 0.85rem 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .involved-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .flip-card-container {
            height: 300px;
          }
        }

        @media (max-width: 360px) {
          .flip-card-container {
            height: 280px;
          }
          .flip-card-front h3, .flip-card-back h3 {
            font-size: 1.25rem;
          }
          .flip-card-front p, .flip-card-back p {
            font-size: 0.85rem;
            line-height: 1.5;
          }
          .event-item {
            min-width: 240px;
            padding: 0.75rem;
            gap: 1rem;
          }
          .ev-date {
            width: 50px;
            font-size: 0.7rem;
          }
          .ev-details h4 {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GetInvolved;

