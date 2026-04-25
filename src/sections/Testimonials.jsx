import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);

  const content = {
    en: {
      badge: 'Testimonials',
      title: 'Words from our Community',
      items: [
        {
          name: 'Anita Sharma',
          role: 'Donor',
          text: 'HopeRise Foundation is incredibly transparent with their funds. I love receiving the monthly impact updates and seeing exactly how my contribution is changing lives.',
          avatar: 'https://i.pravatar.cc/150?u=anita',
          rating: 5
        },
        {
          name: 'Vikram Singh',
          role: 'Corporate Partner',
          text: 'We have partnered with HopeRise for our CSR activities for 3 years now. Their ground-level execution and professionalism are unmatched in the NGO sector.',
          avatar: 'https://i.pravatar.cc/150?u=vikram',
          rating: 5
        },
        {
          name: 'Rajesh G.',
          role: 'Volunteer',
          text: 'Volunteering with the health camps was a life-changing experience. Seeing the smiles on the faces of people receiving care is the greatest reward.',
          avatar: 'https://i.pravatar.cc/150?u=rajesh',
          rating: 4
        }
      ]
    },
    te: {
      badge: 'సాక్షులు',
      title: 'మన కమ్యూనిటీ నుండి మాటలు',
      items: [
        {
          name: 'అనిత శర్మ',
          role: 'దాతృ',
          text: 'హోప్‌రైజ్ ఫౌండేషన్ వారి నిధుల విషయంలో చాలా పారదర్శకంగా ఉంది. నెలవారీ ప్రభావ అప్‌డేట్‌లు అందుకోవడం మరియు నా సహాయం జీవితాలను ఎలా మారుస్తుందో చూడడం నాకు చాలా ఇష్టం.',
          avatar: 'https://i.pravatar.cc/150?u=anita',
          rating: 5
        },
        {
          name: 'విక్రమ్ సింగ్',
          role: 'కార్పొరేట్ భాగస్వామి',
          text: 'మేము 3 సంవత్సరాలుగా మా CSR కార్యక్రమాల కోసం హోప్‌రైజ్‌తో భాగస్వామ్యం వహించాము. వారి గ్రౌండ్-లెవల్ అమలు మరియు వృత్తి నిపుణత NGO రంగంలో అసాధారణమైనది.',
          avatar: 'https://i.pravatar.cc/150?u=vikram',
          rating: 5
        },
        {
          name: 'రాజేష్ జి.',
          role: 'వాలంటీర్',
          text: 'ఆరోగ్య శిబిరాలలో వాలంటీరింగ్ చేయడం జీవితాన్ని మార్చే అనుభవం. సంరక్షణ పొందుతున్న వ్యక్తుల ముఖాలలో చిరునవ్వులు చూడడం అత్యుత్తమ బహుమతి.',
          avatar: 'https://i.pravatar.cc/150?u=rajesh',
          rating: 4
        }
      ]
    }
  };

  const data = content[language] || content.en;
  const testimonials = data.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [language, testimonials.length]);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">{data.badge}</span>
          <h2 className="section-title">{data.title}</h2>
        </div>

        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={index + language}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card glass-effect"
            >
              <div className="testimonial-quote">
                <Quote size={40} color="var(--secondary)" fill="rgba(249, 115, 22, 0.1)" />
              </div>
              <p className="testimonial-text">"{testimonials[index].text}"</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonials[index].rating ? "var(--secondary)" : "none"} color="var(--secondary)" />
                ))}
              </div>
              <div className="testimonial-author">
                <img src={testimonials[index].avatar} alt={testimonials[index].name} className="author-img" />
                <div className="author-info">
                  <h4>{testimonials[index].name}</h4>
                  <span>{testimonials[index].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-nav">
            <button onClick={prev} className="nav-btn"><ChevronLeft /></button>
            <div className="nav-dots">
              {testimonials.map((_, i) => (
                <div key={i} className={`dot ${index === i ? 'active' : ''}`} onClick={() => setIndex(i)} />
              ))}
            </div>
            <button onClick={next} className="nav-btn"><ChevronRight /></button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .testimonials-section { background: var(--bg-dark); overflow: hidden; }
        .testimonials-container { max-width: 800px; margin: 0 auto; position: relative; }
        .testimonial-card { padding: 4rem; border-radius: var(--radius-lg); text-align: center; position: relative; }
        .testimonial-quote { display: flex; justify-content: center; margin-bottom: 2rem; }
        .testimonial-text { font-size: 1.3rem; color: var(--text-main); font-style: italic; line-height: 1.6; margin-bottom: 2rem; }
        .testimonial-rating { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; }
        .testimonial-author { display: flex; align-items: center; justify-content: center; gap: 1.5rem; }
        .author-img { width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--secondary); }
        .author-info { text-align: left; }
        .author-info h4 { font-size: 1rem; margin-bottom: 0.25rem; }
        .author-info span { color: var(--text-muted); font-size: 0.85rem; font-weight: 600; }
        .slider-nav { display: flex; align-items: center; justify-content: center; gap: 2rem; margin-top: 3rem; }
        .nav-btn { width: 50px; height: 50px; border-radius: 50%; background: var(--glass); border: 1px solid var(--glass-border); color: white; display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); }
        .nav-btn:hover { background: var(--secondary); transform: scale(1.1); }
        .nav-dots { display: flex; gap: 0.75rem; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--glass-border); cursor: pointer; transition: var(--transition-smooth); }
        .dot.active { background: var(--secondary); width: 25px; border-radius: 10px; }
        @media (max-width: 768px) {
          .testimonial-card { padding: 2rem 1.5rem; }
          .testimonial-text { font-size: 1rem; margin-bottom: 1.5rem; }
          .testimonial-author { flex-direction: column; gap: 1rem; text-align: center; }
          .author-info { text-align: center; }
          .nav-btn { width: 44px; height: 44px; }
          .slider-nav { gap: 1rem; }
        }
        @media (max-width: 360px) {
          .testimonial-card { padding: 1.5rem 1rem; }
          .testimonial-text { font-size: 0.95rem; line-height: 1.5; }
          .author-img { width: 50px; height: 50px; }
          .author-info h4 { font-size: 1rem; }
          .nav-btn { width: 40px; height: 40px; }
          .dot { width: 8px; height: 8px; }
          .dot.active { width: 18px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

