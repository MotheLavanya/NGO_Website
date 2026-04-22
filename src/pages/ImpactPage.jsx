import React from 'react';
import ImpactStats from '../components/ImpactStats';
import ImpactStories from '../sections/ImpactStories';
import { useLanguage } from '../context/LanguageContext';

const ImpactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper impact-page-wrapper">
      <div className="page-header">
        <div className="container">
          <span className="section-badge">{t('nav.impact')}</span>
          <h1 className="section-title">Empowering Lives, Transforming Communities</h1>
        </div>
      </div>
      
      <div className="impact-content">
        <ImpactStats />
        <ImpactStories />
      </div>

      <style jsx="true">{`
        .impact-page-wrapper {
          background: var(--bg-dark);
        }
        
        .page-header {
          padding: 3rem 0 1rem; /* Reduced padding */
          text-align: center;
          background: linear-gradient(to bottom, rgba(30, 58, 138, 0.15), transparent);
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem); /* Reduced from 2.5rem */
          margin-top: 0.5rem;
        }

        .impact-content {
          margin-top: 1rem; /* Reduced from 2rem */
        }

        @media (max-width: 768px) {
          .impact-page-wrapper {
            padding-top: 60px;
          }
          .page-header {
            padding: 2rem 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};


export default ImpactPage;

