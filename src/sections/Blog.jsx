import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const { t, language } = useLanguage();

  const posts = language === 'te' ? [
    {
      id: 1,
      title: 'స్మార్ట్ తరగతి గదులు గ్రామీణ విద్యను ఎలా మార్చుతున్నాయి',
      excerpt: 'ప్రభుత్వ పాఠశాలల్లో డిజిటల్ సాధనాల ప్రభావంపై లోతైన విశ్లేషణ...',
      date: 'ఏప్రిల్ 10, 2024',
      author: 'డా. సారా జేమ్స్',
      category: 'విద్య',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800'
    },
    {
      id: 2,
      title: 'మహిళా సాధికారత ఆర్థిక వ్యవస్థలను ఎందుకు పెంచుతుంది',
      excerpt: 'మహిళలకు ఆర్థిక స్వాతంత్ర్యం కేవలం సామాజిక లక్ష్యం మాత్రమే కాదు; ఇది ఆర్థిక చాలక...',
      date: 'ఏప్రిల్ 05, 2024',
      author: 'లక్ష్మీ రెడ్డి',
      category: 'సాధికారత',
      img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800'
    },
    {
      id: 3,
      title: 'మా స్వచ్ఛమైన నీటి చొరవ  50 గ్రామాలకు చేరింది',
      excerpt: 'కరవు ప్రభావిత జిల్లాలలో 50వ శుద్ధీకరణ కేంద్రాన్ని వ్యవస్థాపించిన మైలురాయి సాధించాము...',
      date: 'మార్చి 28, 2024',
      author: 'జాన్ డో',
      category: 'మురుగు',
      img: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800'
    }
  ] : [
    {
      id: 1,
      title: 'How Smart Classrooms are Changing Rural Education',
      excerpt: 'A deep dive into the impact of digital tools in government schools...',
      date: 'April 10, 2024',
      author: 'Dr. Sarah James',
      category: 'Education',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800'
    },
    {
      id: 2,
      title: '5 Ways Women Empowerment Scales Economies',
      excerpt: 'Financial independence for women isn’t just a social goal; it’s an economic driver...',
      date: 'April 05, 2024',
      author: 'Laxmi Reddy',
      category: 'Empowerment',
      img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800'
    },
    {
      id: 3,
      title: 'Our Clean Water Initiative Reaches 50 Villages',
      excerpt: 'Milestone achieved as we install our 50th filtration plant in the drought-hit districts...',
      date: 'March 28, 2024',
      author: 'John Doe',
      category: 'Infrastructure',
      img: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800'
    }
  ];

  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('blog.title')}</span>
          <h2 className="section-title">{t('blog.subtitle')}</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="blog-card glass-effect"
            >
              <div className="blog-image">
                <img src={post.img} alt={post.title} />
                <div className="blog-tag">
                  <Tag size={12} /> {post.category}
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><User size={14} /> {post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="blog-cta">
                  {t('blog.readMore')} <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .blog-section {
          background: var(--bg-dark);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .blog-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .blog-card:hover {
          transform: translateY(-10px);
          border-color: var(--secondary);
        }

        .blog-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.1);
        }

        .blog-tag {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: var(--secondary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .blog-content {
          padding: 1.5rem;
        }

        .blog-meta {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .blog-meta span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .blog-content h3 {
          font-size: 1.15rem;
          margin-bottom: 1rem;
          line-height: 1.4;
          transition: var(--transition-smooth);
        }

        .blog-card:hover h3 {
          color: var(--secondary);
        }

        .blog-content p {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .blog-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          font-weight: 700;
          background: transparent;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
           .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .blog-content h3 {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .blog-image {
            height: 200px;
          }
          .blog-content {
            padding: 1.25rem;
          }
          .blog-content h3 {
            font-size: 1.1rem;
          }
          .blog-meta {
            gap: 1rem;
          }
        }

        @media (max-width: 360px) {
          .blog-content {
            padding: 1rem;
          }
          .blog-content h3 {
            font-size: 1rem;
          }
          .blog-meta {
            flex-wrap: wrap;
            gap: 0.75rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;

