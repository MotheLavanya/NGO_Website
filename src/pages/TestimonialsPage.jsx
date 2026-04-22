import React from 'react';
import Testimonials from '../sections/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header community-header" style={{ padding: '80px 0 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(15, 23, 42, 0.3) 100%)' }}>
        <div className="container">
          <span className="section-badge" style={{ padding: '0.4rem 1rem', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--secondary)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600' }}>Social Proof</span>
          <h1 className="section-title">Voices of Change</h1>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;
