import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImpactStories from '../sections/ImpactStories';
import GetInvolved from '../sections/GetInvolved';
import Testimonials from '../sections/Testimonials';
import Partners from '../components/Partners';
import FAQ from '../sections/FAQ';

const CommunityPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-wrapper community-page-wrapper">
      <div className="page-header community-header">
        <div className="container">
          <span className="section-badge">Our Community</span>
          <h1 className="section-title">Join the movement and see our collective impact.</h1>
          <p className="page-subtitle">From stories of change to ways you can help, explore how we are building a better future together.</p>
        </div>
      </div>

      <ImpactStories />
      <GetInvolved />
      <Testimonials />
      <Partners />
      <FAQ />

      <style jsx="true">{`
        .community-page-wrapper {
          background: var(--bg-dark);
        }

        .community-header {
          padding: 100px 0 60px;
          text-align: center;
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(15, 23, 42, 0.3) 100%);
        }

        .page-subtitle {
          max-width: 700px;
          margin: 1.5rem auto 0;
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .community-header {
            padding: 80px 0 40px;
          }
          .page-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CommunityPage;
