import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Play, 
  Calendar, 
  Award, 
  Target, 
  X, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Users 
} from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  const timelineData = {
    en: [
      { year: '2015', event: 'Founded with a vision to educate 100 kids.', icon: <Target size={18} /> },
      { year: '2018', event: 'Expanded to 5 states, helping 5000+ families.', icon: <Award size={18} /> },
      { year: '2021', event: 'Recognized for Healthcare Excellence in Rural areas.', icon: <Award size={18} /> },
      { year: '2024', event: 'Launched National Youth Empowerment Program.', icon: <Award size={18} /> },
    ],
    te: [
      { year: '2015', event: '100 పిల్లలకు విద్య అందించాలనే దార్శనికతతో స్థాపించబడింది.', icon: <Target size={18} /> },
      { year: '2018', event: '5 రాష్ట్రాలకు విస్తరించి, 5000+ కుటుంబాలకు సహాయం చేసింది.', icon: <Award size={18} /> },
      { year: '2021', event: 'గ్రామీణ ప్రాంతాలలో ఆరోగ్య సంరక్షణ శ్రేష్ఠతకు గుర్తింపు పొందింది.', icon: <Award size={18} /> },
      { year: '2024', event: 'జాతీయ యువత సాధికారత కార్యక్రమాన్ని ప్రారంభించింది.', icon: <Award size={18} /> },
    ]
  };
  const timeline = timelineData[language] || timelineData.en;

  const valuesData = {
    en: [
      { name: t('about.value1'), icon: <Heart size={24} />, desc: 'Putting humanity and empathy at the heart of every decision.' },
      { name: t('about.value2'), icon: <ShieldCheck size={24} />, desc: '100% transparency in fund allocation and impact reporting.' },
      { name: t('about.value3'), icon: <Zap size={24} />, desc: 'Creating long-term systems, not just temporary fixes.' },
      { name: t('about.value4'), icon: <Users size={24} />, desc: 'Collaborating with community leaders for sustainable growth.' },
    ],
    te: [
      { name: t('about.value1'), icon: <Heart size={24} />, desc: 'ప్రతి నిర్ణయంలో మానవత్వం మరియు సానుభూతిని కేంద్రంగా ఉంచడం.' },
      { name: t('about.value2'), icon: <ShieldCheck size={24} />, desc: 'నిధుల కేటాయింపు మరియు ప్రభావ నివేదికలో 100% పారదర్శకత.' },
      { name: t('about.value3'), icon: <Zap size={24} />, desc: 'తాత్కాలిక పరిష్కారాలు కాకుండా దీర్ఘకాలిక వ్యవస్థలను రూపొందించడం.' },
      { name: t('about.value4'), icon: <Users size={24} />, desc: 'స్థిరమైన వృద్ధి కోసం కమ్యూనిటీ నాయకులతో సహకరించడం.' },
    ]
  };
  const values = valuesData[language] || valuesData.en;

  return (
    <section id="about" className="about-section section-padding">
      {/* Decorative Background Orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="container">
        {/* Intro Section */}
        <div className="about-grid">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <span className="section-badge">{t('about.title')}</span>
            <h2 className="section-title">{t('about.subtitle')}</h2>
            <p className="about-description">
              {language === 'te'
                ? 'హోప్‌రైజ్ ఫౌండేషన్ ఒక సరళమైన నమ్మకంతో ప్రారంభమైంది: ప్రతి మానవుడికి వర్ధిల్లే అవకాశం ఉండాలి. గత దశాబ్దంలో, మేము విద్య, ఆరోగ్య సంరక్షణ మరియు స్థిరమైన జీవనోపాధి కార్యక్రమాల ద్వారా పేదరిక చక్రాన్ని విచ్ఛిన్నం చేయడానికి గ్రాసురూట్ స్థాయిలో అలుపెరుగకుండా కృషి చేసాము.'
                : 'HopeRise Foundation began with a simple belief: every human being deserves a chance to thrive. Over the last decade, we have worked tirelessly at the grassroots level to break the cycle of poverty through education, healthcare, and sustainable livelihood programs.'}
            </p>

            <div className="timeline-container">
              <h3 className="timeline-title">{t('about.timeline')}</h3>
              <div className="timeline-line"></div>
              <div className="timeline-items">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-dot">
                      {item.icon}
                    </div>
                    <div className="timeline-text">
                      <span className="timeline-year">{item.year}</span>
                      <p className="timeline-desc">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Media */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-media"
          >
            <div className="image-stack">
              <div className="image-main">
                <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" alt="Impact" />
                <button className="play-button" onClick={() => setShowVideo(true)}>
                  <Play fill="white" />
                  <span className="play-ripple"></span>
                </button>
              </div>
              <div className="team-circles">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Team 1" className="team-circle-1" />
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Team 2" className="team-circle-2" />
                <div className="founder-message glass-effect">
                  <div className="quote-mark">“</div>
                  <p>{t('about.message')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Horizon: Mission & Vision Redesign */}
        <div className="impact-horizon">
          {/* Mission Block */}
          <motion.div 
            className="horizon-item mission-horizon"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="horizon-image">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Mission" />
              <div className="image-overlay"></div>
            </div>
            <div className="horizon-content-box glass-effect">
              <div className="horizon-icon mission-icon"><Target size={32} /></div>
              <div className="horizon-text">
                <span className="horizon-badge">01. {t('about.mission')}</span>
                <h3>{t('about.mission')}</h3>
                <p>{t('about.missionText')}</p>
              </div>
            </div>
          </motion.div>

          {/* Vision Block */}
          <motion.div 
            className="horizon-item vision-horizon"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="horizon-image">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Vision" />
              <div className="image-overlay"></div>
            </div>
            <div className="horizon-content-box glass-effect">
              <div className="horizon-icon vision-icon"><Eye size={32} /></div>
              <div className="horizon-text">
                <span className="horizon-badge">02. {t('about.vision')}</span>
                <h3>{t('about.vision')}</h3>
                <p>{t('about.visionText')}</p>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Values Section */}
        <div className="values-section">
          <div className="section-header-center">
            <h2 className="section-title">{t('about.values')}</h2>
          </div>
          <div className="values-grid">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                className="pillar-card glass-effect"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="pillar-number">0{idx + 1}</div>
                <div className="pillar-icon">{val.icon}</div>
                <div className="pillar-content">
                  <h4>{val.name}</h4>
                  <p>{val.desc}</p>
                </div>
                <div className="pillar-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Video Popup Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-video" onClick={() => setShowVideo(false)}><X /></button>
            <div className="video-container">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Founder Message" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .about-section {
          background: var(--bg-dark);
          position: relative;
          overflow: hidden;
        }

        /* Bg Orbs */
        .bg-orbs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .orb {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }

        .orb-1 {
          top: 10%;
          right: -100px;
          background: var(--secondary);
        }

        .orb-2 {
          bottom: 20%;
          left: -100px;
          background: var(--primary-light);
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .section-badge {
          color: var(--secondary);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.25rem;
          margin-bottom: 1.25rem;
          line-height: 1.2;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-description {
          color: var(--text-muted);
          margin-bottom: 3rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        /* Timeline Styles */
        .timeline-container {
          position: relative;
        }

        .timeline-title {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: var(--text-main);
        }

        .timeline-line {
          position: absolute;
          left: 17px;
          top: 60px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(to bottom, var(--secondary), transparent);
          opacity: 0.3;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: flex;
          gap: 1.5rem;
          position: relative;
          z-index: 5;
        }

        .timeline-dot {
          width: 36px;
          height: 36px;
          background: var(--primary-light);
          border: 2px solid var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          flex-shrink: 0;
        }

        .timeline-year {
          display: block;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }

        .timeline-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        /* Media Styles */
        .image-stack {
          position: relative;
        }

        .image-main {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5);
          border: 1px solid var(--glass-border);
        }

        .image-main img {
          width: 100%;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-main:hover img {
          transform: scale(1.08);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 0 40px var(--secondary);
        }

        .play-ripple {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--secondary);
          opacity: 0.5;
          animation: pulse-slow 2s infinite;
        }

        .team-circles {
          position: absolute;
          bottom: -40px;
          right: -40px;
          display: flex;
          align-items: center;
        }

        .team-circle-1, .team-circle-2 {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 4px solid var(--bg-dark);
          object-fit: cover;
          margin-left: -20px;
          box-shadow: var(--shadow-premium);
        }

        .founder-message {
          margin-left: 1rem;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          max-width: 220px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: -10px;
          left: 10px;
          font-size: 3rem;
          color: var(--secondary);
          opacity: 0.3;
          font-family: serif;
        }

        .founder-message p {
          font-style: italic;
          font-size: 0.9rem;
          position: relative;
          z-index: 1;
        }

        /* Impact Horizon Redesign */
        .impact-horizon {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .horizon-item {
          display: flex;
          align-items: center;
          gap: 0;
          position: relative;
          min-height: 320px;
        }

        .mission-horizon { flex-direction: row; }
        .vision-horizon { flex-direction: row-reverse; }

        .horizon-image {
          width: 60%;
          height: 320px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
          border: 1px solid var(--glass-border);
        }

        .horizon-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s ease;
        }

        .horizon-item:hover .horizon-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.6));
        }

        .horizon-content-box {
          width: 48%;
          margin-left: -10%;
          padding: 2rem 2.5rem;
          border-radius: var(--radius-md);
          position: relative;
          z-index: 10;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.4);
          display: flex;
          gap: 1.5rem;
          transition: var(--transition-smooth);
        }

        .vision-horizon .horizon-content-box {
          margin-left: 0;
          margin-right: -10%;
        }

        .horizon-content-box:hover {
          transform: translateY(-5px);
          border-color: var(--secondary);
          background: rgba(255, 255, 255, 0.05);
        }

        .horizon-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
        }

        .mission-icon { color: var(--secondary); }
        .vision-icon { color: #3b82f6; }

        .horizon-badge {
          display: block;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .horizon-text h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 800;
          background: linear-gradient(to bottom, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .horizon-text p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .horizon-image { width: 100%; height: 350px; }
          .horizon-content-box {
            width: 90%;
            margin: -80px auto 0 !important;
            padding: 2.5rem;
          }
          .horizon-item {
            flex-direction: column !important;
            min-height: auto;
          }
        }

        /* Values Section */

        .section-header-center {
          text-align: center;
          margin-bottom: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .pillar-card {
          padding: 3rem 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: var(--transition-smooth);
          height: 100%;
          min-height: 320px;
        }

        .pillar-card:hover {
          border-color: var(--secondary);
          background: rgba(255, 255, 255, 0.05);
        }

        .pillar-number {
          position: absolute;
          top: -10px;
          right: -10px;
          font-size: 6rem;
          font-weight: 900;
          color: white;
          opacity: 0.03;
          line-height: 1;
          pointer-events: none;
          transition: var(--transition-smooth);
        }

        .pillar-card:hover .pillar-number {
          opacity: 0.08;
          transform: scale(1.1);
        }

        .pillar-icon {
          width: 56px;
          height: 56px;
          background: rgba(249, 115, 22, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          color: var(--secondary);
          border: 1px solid rgba(249, 115, 22, 0.2);
          position: relative;
          z-index: 2;
        }

        .pillar-content {
          position: relative;
          z-index: 2;
        }

        .pillar-content h4 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .pillar-content p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .pillar-accent {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: var(--secondary);
          box-shadow: 0 0 15px var(--secondary);
          transition: var(--transition-smooth);
        }

        .pillar-card:hover .pillar-accent {
          width: 60%;
        }

        /* Modal Styles */
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .video-container {
          width: 85%;
          aspect-ratio: 16/9;
          max-width: 1100px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }

        .close-video {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: white;
          background: rgba(255,255,255,0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-media {
            order: -1;
            max-width: 600px;
            margin: 0 auto;
          }
          .team-circles {
            bottom: -20px;
            right: 0;
          }
          .horizon-image { width: 100%; height: 350px; }
          .horizon-content-box {
            width: 100%;
            margin: 0 !important;
            padding: 2.5rem;
            border-radius: var(--radius-lg);
          }
          .horizon-item {
            flex-direction: column !important;
            min-height: auto;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .team-circle-1, .team-circle-2 {
            width: 80px;
            height: 80px;
          }
          .founder-message {
            max-width: 220px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 568px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .team-circles {
            position: relative;
            bottom: 0;
            right: 0;
            margin-top: 2rem;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .team-circle-1, .team-circle-2 {
             margin-left: 0;
             margin-bottom: 0.5rem;
          }
          .founder-message {
            margin-left: 0;
            margin-top: 1rem;
            max-width: 100%;
          }
          .horizon-content-box {
            padding: 1.5rem;
            flex-direction: column;
            gap: 1rem;
          }
          .horizon-icon {
            width: 44px;
            height: 44px;
          }
          .horizon-text h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 400px) {
           .image-main {
             border-radius: var(--radius-md);
           }
           .timeline-item {
             gap: 1rem;
           }
           .timeline-dot {
             width: 32px;
             height: 32px;
           }
        }
      `}</style>
    </section>
  );
};

export default About;
