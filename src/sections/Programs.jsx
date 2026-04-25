import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Activity, Heart, ArrowRight } from 'lucide-react';

const Programs = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: t('programs.viewAll') },
    { id: 'education', label: t('programs.education') },
    { id: 'health', label: t('programs.health') },
    { id: 'women', label: t('programs.women') },
  ];

  const projects = {
    en: [
      { id: 1, category: 'education', title: 'Smart Classrooms', desc: 'Bringing technology to rural schools to enhance learning experiences.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800', icon: <BookOpen /> },
      { id: 2, category: 'health', title: 'Mobile Clinics', desc: 'Providing essential healthcare to remote villages via our mobile medical units.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800', icon: <Activity /> },
      { id: 3, category: 'women', title: 'Vocational Training', desc: 'Empowering women with skills like tailoring and digital literacy for financial independence.', img: '/images/vocational_training.png', icon: <Heart /> },
      { id: 4, category: 'education', title: 'Scholarship Program', desc: 'Financial support for bright students from underprivileged backgrounds.', img: '/images/scholarship_program.png', icon: <BookOpen /> },
      { id: 5, category: 'health', title: 'Clean Water Initiative', desc: 'Installing water purification plants in fluoride-affected regions.', img: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800', icon: <Activity /> },
      { id: 6, category: 'women', title: 'Self-Help Groups', desc: 'Supporting micro-entrepreneurship through community-led financial circles.', img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800', icon: <Heart /> },
    ],
    te: [
      { id: 1, category: 'education', title: 'స్మార్ట్ తరగతి గదులు', desc: 'గ్రామీణ పాఠశాలలలో అభ్యాస అనుభవాలను మెరుగుపరచడానికి సాంకేతిక పరిజ్ఞానాన్ని తీసుకువస్తున్నాము.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800', icon: <BookOpen /> },
      { id: 2, category: 'health', title: 'మొబైల్ క్లినిక్‌లు', desc: 'మా మొబైల్ వైద్య యూనిట్ల ద్వారా మారుమూల గ్రామాలకు అవసరమైన ఆరోగ్య సంరక్షణ అందిస్తున్నాము.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800', icon: <Activity /> },
      { id: 3, category: 'women', title: 'వృత్తి శిక్షణ', desc: 'ఆర్థిక స్వాతంత్ర్యం కోసం కుట్టు మరియు డిజిటల్ అక్షరాస్యత వంటి నైపుణ్యాలతో మహిళలను సాధికారం చేస్తున్నాము.', img: '/images/vocational_training.png', icon: <Heart /> },
      { id: 4, category: 'education', title: 'స్కాలర్‌షిప్ కార్యక్రమం', desc: 'అట్టడుగు వర్గాల నుండి ప్రతిభావంతులైన విద్యార్థులకు ఆర్థిక సహాయం.', img: '/images/scholarship_program.png', icon: <BookOpen /> },
      { id: 5, category: 'health', title: 'స్వచ్ఛమైన నీటి చొరవ', desc: 'ఫ్లోరైడ్ ప్రభావిత ప్రాంతాలలో నీటి శుద్ధి కర్మాగారాలు వ్యవస్థాపించడం.', img: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800', icon: <Activity /> },
      { id: 6, category: 'women', title: 'స్వయం సహాయక గ్రూపులు', desc: 'సమాజ-నేతృత్వ ఆర్థిక వర్గాల ద్వారా మైక్రో-పారిశ్రామికవేత్తలకు మద్దతు ఇస్తున్నాము.', img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800', icon: <Heart /> },
    ]
  };

  const currentProjects = projects[language] || projects.en;
  const filteredProjects = activeTab === 'all' ? currentProjects : currentProjects.filter(p => p.category === activeTab);

  return (
    <section id="programs" className="programs-section section-padding">
      <div className="container">
        <div className="section-header">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-badge">
            {t('programs.title')}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title">
            {t('programs.subtitle')}
          </motion.h2>

          <div className="filter-tabs">
            {categories.map((cat) => (
              <button key={cat.id} className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`} onClick={() => setActiveTab(cat.id)}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="programs-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="program-card glass-effect"
              >
                <div className="program-image">
                  <img src={project.img} alt={project.title} />
                  <div className="program-category-badge">{project.category}</div>
                </div>
                <div className="program-content">
                  <div className="program-icon-box">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <Link to="/contact" className="program-cta">
                    {t('programs.cta')} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx="true">{`
        .programs-section { background: var(--bg-alt); }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .filter-tabs { display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .filter-btn { padding: 0.75rem 1.75rem; border-radius: 100px; background: var(--glass); border: 1px solid var(--glass-border); color: var(--text-muted); font-weight: 600; transition: var(--transition-smooth); }
        .filter-btn.active { background: var(--secondary); color: white; border-color: var(--secondary); box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4); }
        .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .program-card { border-radius: var(--radius-lg); overflow: hidden; transition: var(--transition-smooth); }
        .program-card:hover { transform: translateY(-10px); border-color: var(--secondary); }
        .program-image { position: relative; height: 180px; overflow: hidden; }
        .program-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .program-card:hover .program-image img { transform: scale(1.1); }
        .program-category-badge { position: absolute; top: 1rem; right: 1rem; background: var(--bg-dark); color: var(--secondary); padding: 0.25rem 0.75rem; border-radius: 100px; font-size: 0.75rem; text-transform: uppercase; font-weight: 700; border: 1px solid var(--secondary); }
        .program-content { padding: 1.5rem; position: relative; }
        .program-icon-box { position: absolute; top: -30px; right: 2rem; width: 60px; height: 60px; background: var(--secondary); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.4); }
        .program-content h3 { font-size: 1.35rem; margin-bottom: 1rem; }
        .program-content p { color: var(--text-muted); margin-bottom: 1.25rem; font-size: 0.85rem; line-height: 1.5; }
        .program-cta { display: flex; align-items: center; gap: 0.5rem; color: var(--secondary); font-weight: 700; background: transparent; font-size: 0.9rem; }
        @media (max-width: 1100px) { .programs-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; } }
        @media (max-width: 768px) { .filter-tabs { justify-content: flex-start; overflow-x: auto; padding: 0.5rem 0.25rem; scrollbar-width: none; margin-bottom: 2rem; } .filter-btn { white-space: nowrap; padding: 0.6rem 1.25rem; font-size: 0.85rem; } .section-title { font-size: 1.7rem; } }
        @media (max-width: 640px) { .programs-grid { grid-template-columns: 1fr; gap: 2rem; } .program-image { height: 200px; } }
        @media (max-width: 480px) { .section-header { margin-bottom: 2.5rem; } .program-card { border-radius: var(--radius-md); } .program-content { padding: 1.25rem; } .program-icon-box { width: 48px; height: 48px; top: -24px; right: 1.25rem; } .program-content h3 { font-size: 1.2rem; } .program-content p { font-size: 0.85rem; } }
      `}</style>
    </section>
  );
};

export default Programs;

