import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Quote, X, ChevronRight, ChevronLeft } from 'lucide-react';

const ImpactStories = () => {
  const { t, language } = useLanguage();
  const [selectedStory, setSelectedStory] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const stories = language === 'te' ? [
    {
      id: 1,
      name: 'రవి కుమార్',
      age: 12,
      location: 'గ్రామీణ తెలంగాణ',
      title: 'చక్రాన్ని విచ్ఛిన్నం చేస్తున్నాం',
      summary: 'రవి కుటుంబాన్ని పోషించడానికి పొలాలల్లో పని చేసేవాడు. ఇప్పుడు, అతను తన స్మార్ట్ తరగతి గదిలో అగ్రశ్రేణి విద్యార్థి.',
      content: 'రవి కుమార్కి 10 సంవత్సరాల వయస్సులోనే తన తల్లిదండ్రులకు పోలాల్లోను సహాయపడటం ప్రారంభించాడు. హోప్‌రైజ్ జోక్యం అయ్యాక, ఇండ్లో చదువు అతని కల అయింది. ఇప్పుడు అతను ఇంటర్నెట్ సౌలభ్యం ఉన్న పాఠశాలలో చదువుతున్నాడు.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
      before: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400',
      after: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400'
    },
    {
      id: 2,
      name: 'లక్ష్మీ దేవి',
      age: 34,
      location: 'వరంగల్ జిల్లా',
      title: 'స్వాతంత్ర్యాన్ని స్వీకరిస్తున్నాము',
      summary: 'మా మహిళా స్వయం సహాయక గ్రూపు కార్యక్రమం ద్వారా ఇబ్బంది ఇల్లాలు నుండి వ్యాపారవేత్త వరకు.',
      content: 'లక్ష్మీ 2021లో మా స్వయం సహాయక గ్రూపులో చేరింది. చిన్న రుణం మరియు వృత్తి శిక్షణతో తన స్వంత టేలరింగ్ వ్యాపారాన్ని ప్రారంభించింది. ఇప్పుడు, ఆమె తన గ్రామం నుంచి నలుగురు మహిళలకు ఉద్యోగాలు ఇచ్చి ఇరు కూతురులను కాలేజికి పంపడానికి సంపాదిస్తుంది.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
      before: 'https://images.unsplash.com/photo-1489980507512-29705d0ff44b?q=80&w=400',
      after: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=400'
    }
  ] : [
    {
      id: 1,
      name: 'Ravi Kumar',
      age: 12,
      location: 'Rural Telangana',
      title: 'Breaking the Cycle',
      summary: 'Ravi used to work in the fields to support his family. Now, he is the top student in his smart classroom.',
      content: 'Ravi Kumar was just 10 years old when he started helping his parents in the cotton fields. His education was a distant dream until HopeRise intervened. Today, Ravi is enrolled in a government school supported by our digital learning toolkit. He wants to become a doctor to serve his community.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
      before: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400',
      after: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400'
    },
    {
      id: 2,
      name: 'Laxmi Devi',
      age: 34,
      location: 'Warangal District',
      title: 'Embracing Independence',
      summary: 'From a struggling housewife to a successful entrepreneur with our SHG program.',
      content: 'Laxmi joined our Self-Help Group (SHG) in 2021. With a small loan and vocational training, she started her own tailoring unit. Today, she employs four other women from her village and earns enough to send both her daughters to college.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
      before: 'https://images.unsplash.com/photo-1489980507512-29705d0ff44b?q=80&w=400',
      after: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=400'
    }
  ];

  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % stories.length);
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + stories.length) % stories.length);

  const ageLabel = language === 'te' ? 'వయస్సు' : 'Age';

  return (
    <section id="impact" className="stories-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('stories.title')}</span>
          <h2 className="section-title">{t('stories.subtitle')}</h2>
        </div>

        {/* Stories Slider */}
        <div className="stories-slider-container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={sliderIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="story-main-card glass-effect"
            >
              <div className="story-image-side">
                <img src={stories[sliderIndex].img} alt={stories[sliderIndex].name} />
                <div className="story-quote-icon">
                  <Quote fill="white" size={32} />
                </div>
              </div>
              <div className="story-content-side">
                <div className="story-meta">
                  <span>{stories[sliderIndex].location}</span> • <span>{ageLabel} {stories[sliderIndex].age}</span>
                </div>
                <h3>{stories[sliderIndex].title}</h3>
                <p className="story-excerpt">
                  {stories[sliderIndex].summary}
                </p>
                
                {/* Mini Before/After */}
                <div className="before-after-preview">
                  <div className="ba-item">
                    <img src={stories[sliderIndex].before} alt="Before" />
                    <span>{t('stories.before')}</span>
                  </div>
                  <div className="ba-item">
                    <img src={stories[sliderIndex].after} alt="After" />
                    <span>{t('stories.after')}</span>
                  </div>
                </div>

                <button 
                  className="read-full-story"
                  onClick={() => setSelectedStory(stories[sliderIndex])}
                >
                  {t('stories.readMore')} <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-controls">
            <button onClick={prevSlide} className="slider-btn"><ChevronLeft /></button>
            <button onClick={nextSlide} className="slider-btn"><ChevronRight /></button>
          </div>
        </div>

        {/* Real Faces Grid */}
        <div className="faces-grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <motion.div 
              key={idx}
              className="face-item"
              whileHover={{ scale: 1.1, zIndex: 10 }}
              viewport={{ once: true }}
            >
              <img src={`https://i.pravatar.cc/150?u=${idx + 10}`} alt="Beneficiary" />
            </motion.div>
          ))}
          <div className="faces-text">
            <h4>{language === 'te' ? '+12,500 ఆశా ముఖాలు' : '+12,500 Faces of Hope'}</h4>
            <p>{language === 'te' ? 'ప్రతి ముఖం స్థితిస్థాపకత యొక్క విలక్షణమైన ప్రయాణాన్ని కలిగి ఉంది.' : 'Every face has a unique journey of resilience.'}</p>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div 
            className="story-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div 
              className="story-modal-content glass-effect"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedStory(null)}><X /></button>
              <div className="modal-inner">
                <img src={selectedStory.img} className="modal-hero-img" alt={selectedStory.name} />
                <div className="modal-text">
                  <h3>{selectedStory.title}</h3>
                  <div className="modal-meta">{selectedStory.name} • {selectedStory.location}</div>
                  <div className="modal-body-text">
                    {selectedStory.content}
                  </div>
                  <div className="modal-before-after">
                    <div>
                      <img src={selectedStory.before} alt="Before" />
                      <p>{t('stories.before')}</p>
                    </div>
                    <div>
                      <img src={selectedStory.after} alt="After" />
                      <p>{t('stories.after')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .stories-section {
          background: var(--bg-dark);
          overflow: hidden;
        }

        .stories-slider-container {
          position: relative;
          margin-bottom: 6rem;
        }

        .story-main-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 500px;
        }

        .story-image-side {
          position: relative;
        }

        .story-image-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-quote-icon {
          position: absolute;
          top: 2rem;
          left: 2rem;
          width: 64px;
          height: 64px;
          background: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .story-content-side {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story-meta {
          color: var(--secondary);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .story-content-side h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .story-excerpt {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .before-after-preview {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .ba-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .ba-item img {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          object-fit: cover;
          border: 2px solid var(--glass-border);
        }

        .ba-item span {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .read-full-story {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-main);
          font-weight: 700;
          background: transparent;
        }

        .slider-controls {
          position: absolute;
          bottom: -30px;
          right: 2rem;
          display: flex;
          gap: 1rem;
        }

        .slider-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary-light);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
        }

        .slider-btn:hover {
          background: var(--secondary);
        }

        /* Faces Grid */
        .faces-grid {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          border-top: 1px solid var(--glass-border);
        }

        .face-item {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--secondary);
          flex-shrink: 0;
        }

        .face-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .faces-text h4 {
          font-size: 1.25rem;
          color: var(--text-main);
        }

        .faces-text p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        /* Modal Styles */
        .story-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .story-modal-content {
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: var(--radius-lg);
          position: relative;
        }

        .close-modal {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: white;
          background: rgba(0,0,0,0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .modal-inner {
          display: flex;
          flex-direction: column;
        }

        .modal-hero-img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }

        .modal-text {
          padding: 3rem;
        }

        .modal-text h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .modal-meta {
          color: var(--secondary);
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .modal-body-text {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        .modal-before-after {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .modal-before-after img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 0.5rem;
        }

        .modal-before-after p {
          text-align: center;
          font-weight: 700;
          color: var(--text-muted);
        }

        @media (max-width: 968px) {
          .story-main-card {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .story-image-side {
            height: 300px;
          }
          .story-content-side {
            padding: 3rem 2rem;
          }
          .story-content-side h3 {
            font-size: 1.85rem;
            margin-bottom: 1rem;
          }
          .story-excerpt {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          .before-after-preview {
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          .slider-controls {
            bottom: -30px;
            right: 50%;
            transform: translateX(50%);
          }
          .slider-btn {
            width: 54px;
            height: 54px;
          }
          .modal-before-after {
            grid-template-columns: 1fr;
          }
          .faces-grid {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
            padding: 2rem 1rem;
          }
          .modal-text {
            padding: 2rem 1.5rem;
          }
          .modal-hero-img {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .story-image-side {
            height: 250px;
          }
          .story-content-side {
            padding: 2rem 1.25rem;
          }
          .story-content-side h3 {
            font-size: 1.5rem;
          }
          .story-excerpt {
            font-size: 0.9rem;
            line-height: 1.6;
          }
          .ba-item img {
            width: 70px;
            height: 70px;
          }
          .face-item {
            width: 44px;
            height: 44px;
          }
          .modal-hero-img {
            height: 200px;
          }
           .modal-text h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 360px) {
          .story-content-side h3 {
            font-size: 1.35rem;
          }
          .story-excerpt {
            font-size: 0.85rem;
          }
          .ba-item img {
            width: 60px;
            height: 60px;
          }
          .faces-grid {
            gap: 0.75rem;
          }
          .modal-body-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactStories;
