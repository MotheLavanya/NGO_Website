import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Download, CheckCircle, BarChart3, ArrowUpRight } from 'lucide-react';

const Transparency = () => {
  const { t } = useLanguage();
  const [downloadingIdx, setDownloadingIdx] = React.useState(null);

  const handleDownload = (idx) => {
    setDownloadingIdx(idx);
    setTimeout(() => setDownloadingIdx(null), 2000); // Reset after 2s
  };

  const reports = [
    { year: '2023-24', name: 'Annual Impact Report', size: '2.4 MB', type: 'PDF' },
    { year: '2022-23', name: 'Financial Audit Statement', size: '1.8 MB', type: 'PDF' },
    { year: '2021-22', name: 'Community Outreach Summary', size: '3.1 MB', type: 'PDF' },
  ];

  const auditSteps = [
    { year: '2016', label: 'First External Audit', status: 'Completed' },
    { year: '2019', label: 'ISO 9001 Certification', status: 'Active' },
    { year: '2022', label: 'GuideStar Platinum Seal', status: 'Awarded' },
    { year: '2024', label: 'Quarterly Grant Review', status: 'In Progress' },
  ];

  return (
    <section id="transparency" className="transparency-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('transparency.title')}</span>
          <h2 className="section-title">{t('transparency.subtitle')}</h2>
        </div>

        <div className="transparency-grid">
          {/* Left: Audit Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="audit-timeline glass-effect"
          >
            <h3>{t('transparency.audit')}</h3>
            <div className="audit-items">
              {auditSteps.map((step, idx) => (
                <div key={idx} className="audit-step">
                  <div className="step-year">{step.year}</div>
                  <div className="step-content">
                    <h4>{step.label}</h4>
                    <span className={`status-tag ${step.status.toLowerCase().replace(' ', '-')}`}>
                      {step.status}
                    </span>
                  </div>
                  <CheckCircle className="step-check" size={18} />
                </div>
              ))}
            </div>
            <div className="live-tracker">
              <div className="tracker-header">
                <BarChart3 size={20} color="var(--secondary)" />
                <h4>Live Fund Usage</h4>
              </div>
              <div className="tracker-bars">
                <div className="tracker-bar">
                  <span>Program Services</span>
                  <div className="bar-track"><motion.div initial={{width: 0}} whileInView={{width: '85%'}} style={{background: 'var(--secondary)'}} /></div>
                  <span>85%</span>
                </div>
                <div className="tracker-bar">
                  <span>Administration</span>
                  <div className="bar-track"><motion.div initial={{width: 0}} whileInView={{width: '10%'}} style={{background: '#94A3B8'}} /></div>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Reports Table */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="reports-card glass-effect"
          >
            <div className="card-header">
              <h3>{t('transparency.reports')}</h3>
              <button className="view-archive">View Archive <ArrowUpRight size={16} /></button>
            </div>
            <div className="reports-table">
              {reports.map((report, idx) => (
                <div key={idx} className="report-row">
                  <div className="report-icon">
                    <FileText size={24} />
                  </div>
                  <div className="report-info">
                    <h4>{report.name}</h4>
                    <span>{report.year} • {report.size}</span>
                  </div>
                  <button 
                    className={`download-btn ${downloadingIdx === idx ? 'downloading' : ''}`} 
                    title={t('transparency.download')}
                    onClick={() => handleDownload(idx)}
                    disabled={downloadingIdx === idx}
                  >
                    {downloadingIdx === idx ? '...' : <Download size={20} />}
                  </button>
                </div>
              ))}
            </div>
            <div className="certificates-strip">
              <img src="https://placehold.co/80x40/1e293b/94a3b8?text=TRUST" alt="Cert 1" />
              <img src="https://placehold.co/80x40/1e293b/94a3b8?text=GUIDE" alt="Cert 2" />
              <img src="https://placehold.co/80x40/1e293b/94a3b8?text=FCRA" alt="Cert 3" />
              <img src="https://placehold.co/80x40/1e293b/94a3b8?text=ISO" alt="Cert 4" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .transparency-section {
          background: #0f172a;
        }

        .transparency-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
        }

        .audit-timeline, .reports-card {
          padding: 3rem;
          border-radius: var(--radius-lg);
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        /* Audit Timeline */
        .audit-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .audit-step {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          background: rgba(255,255,255,0.03);
          border-radius: var(--radius-md);
          position: relative;
        }

        .step-year {
          font-weight: 800;
          color: var(--secondary);
          width: 50px;
        }

        .step-content h4 {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }

        .status-tag {
          font-size: 0.7rem;
          padding: 0.1rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .status-tag.completed { background: rgba(16, 185, 129, 0.1); color: #10B981; }
        .status-tag.active { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }
        .status-tag.awarded { background: rgba(249, 115, 22, 0.1); color: var(--secondary); }
        .status-tag.in-progress { background: rgba(148, 163, 184, 0.1); color: #94A3B8; }

        .step-check {
          margin-left: auto;
          color: var(--secondary);
        }

        .live-tracker {
          background: var(--bg-dark);
          padding: 2rem;
          border-radius: var(--radius-md);
        }

        .tracker-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .tracker-bars {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tracker-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
        }

        .tracker-bar .bar-track {
          flex: 1;
          height: 6px;
          background: var(--glass);
          border-radius: 3px;
          overflow: hidden;
        }

        .tracker-bar .bar-track div {
          height: 100%;
        }

        /* Reports Table */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .view-archive {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--secondary);
          background: transparent;
        }

        .reports-table {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .report-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          background: var(--glass);
          border: 1px solid var(--glass-border);
          transition: var(--transition-smooth);
        }

        .report-row:hover {
          background: rgba(255,255,255,0.08);
          border-color: var(--secondary);
        }

        .report-icon {
          color: var(--secondary);
        }

        .report-info h4 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .report-info span {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .download-btn {
          margin-left: auto;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          background: var(--primary-light);
        }

        .certificates-strip {
          display: flex;
          justify-content: space-between;
          opacity: 0.5;
          filter: grayscale(1);
        }

        @media (max-width: 1024px) {
          .transparency-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .audit-timeline, .reports-card {
            padding: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .report-row {
            padding: 1.25rem;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          .audit-timeline, .reports-card {
            padding: 2rem 1.25rem;
          }
          .report-row {
            padding: 1rem;
            gap: 1rem;
          }
          .report-info h4 {
            font-size: 1rem;
          }
          .certificates-strip {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.25rem;
            margin-top: 1.5rem;
          }
          .live-tracker {
            padding: 1.5rem 1rem;
          }
          .tracker-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 0.5rem;
          }
          .tracker-bar .bar-track {
            width: 100%;
            height: 8px;
          }
          .download-btn {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 360px) {
          .audit-timeline, .reports-card {
            padding: 1.5rem 1rem;
          }
          .report-row {
            padding: 0.85rem;
            gap: 0.75rem;
          }
          .report-info h4 {
            font-size: 0.9rem;
          }
          .report-info span {
            font-size: 0.75rem;
          }
          .audit-step {
            gap: 1rem;
            padding: 0.85rem;
          }
          .step-year {
            width: 40px;
            font-size: 0.8rem;
          }
          .tracker-bar {
            gap: 0.4rem;
          }
          .tracker-bar span {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Transparency;
