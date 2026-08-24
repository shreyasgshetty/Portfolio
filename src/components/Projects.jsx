import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

/* ── 1. REAL PROJECT DATA (Preserved with Refined Engineering Terminology) ── */
const FEATURED_PROJECT = {
  id: 'urban-vault',
  num: '01',
  tag: '01 / FULL-STACK COMMERCE SYSTEM',
  title: 'UrbanVault',
  subtitle: 'Full-Stack E-Commerce System',
  description: 'Full-stack commerce application implementing authenticated user flows, product lifecycle management, cart and checkout workflows, order processing, administrative controls, seller and delivery management, and Razorpay payment integration.',
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Razorpay', 'Tailwind CSS'],
  github: 'https://github.com/shreyasgshetty/urban_vault',
  features: ['Authentication System', 'Product Lifecycle Management', 'Order Processing & Razorpay', 'Admin & Seller Controls'],
  accent: '#7C3AED', // Electric Violet
  motif: 'commerce-pipeline',
};

const GRID_PROJECTS = [
  {
    id: 'crm-system',
    num: '02',
    tag: '02 / FULL-STACK WEB APPLICATION',
    title: 'CRM System',
    subtitle: 'Customer & Workflow Management System',
    description: 'Full-stack CRM application for centralized customer and lead management, authenticated workflows, modular CRUD operations, dashboard analytics, and interaction-history tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/shreyasgshetty/crm',
    features: ['Lead Lifecycle', 'CRUD Workflows', 'Analytics Dashboard', 'Interaction History'],
    accent: '#F59E0B', // Amber
    motif: 'crm-telemetry',
  },
  {
    id: 'online-marketplace',
    num: '03',
    tag: '03 / JAVA & SPRING BOOT SYSTEM',
    title: 'Trade Nest',
    subtitle: 'Auction-Enabled Transactional Marketplace',
    description: 'Java Spring Boot marketplace system implementing authenticated listing workflows, auction-based transactions, category-driven discovery, search functionality, MongoDB persistence, and Razorpay payment integration.',
    tech: ['Java', 'Spring Boot', 'Razorpay', 'MongoDB'],
    github: 'https://github.com/shreyasgshetty/online-marketplace',
    features: ['Auction Workflows', 'Listing Taxonomy', 'Search & Discovery', 'Razorpay Integration'],
    accent: '#10B981', // Emerald
    motif: 'marketplace-auction',
  },
  {
    id: 'cricpulz',
    num: '04',
    tag: '04 / REAL-TIME SPORTS ANALYTICS',
    title: 'CricPulz',
    subtitle: 'Real-Time Sports Analytics Platform',
    description: 'Real-time cricket analytics application consuming REST APIs to surface live match data, upcoming fixtures, player statistics, points tables, and match-level insights through a responsive React interface.',
    tech: ['React', 'REST APIs', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/shreyasgshetty/cricpulz',
    features: ['Real-Time Data Feeds', 'REST API Consumption', 'Match Insights', 'Player Statistics'],
    accent: '#61DAFB', // Cyan
    motif: 'sports-telemetry',
  },
  {
    id: 'coral-predictor',
    num: '05',
    tag: '05 / MACHINE LEARNING PIPELINE',
    title: 'Coral Regime Predictor',
    subtitle: 'Environmental ML Classification System',
    description: 'Machine learning classification pipeline for predicting coral reef bleaching severity from environmental and oceanographic variables, including preprocessing, model training, evaluation, confusion-matrix analysis, and feature-importance visualization.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/shreyasgshetty/Coral-Regime-Predictor',
    features: ['Data Preprocessing', 'Logistic Regression & SVM', 'Random Forest Classifier', 'Confusion Matrix Analysis'],
    accent: '#A78BFA', // Light Violet
    motif: 'ml-pipeline',
  },
];

/* ── 2. SOPHISTICATED TECHNICAL MOTIFS (Zero Overlap & 100% Deterministic) ── */
const ProjectMotifVisual = ({ motif, accent }) => {
  if (motif === 'commerce-pipeline') {
    const STAGES = [
      { label: 'AUTH', sub: 'Firebase' },
      { label: 'CATALOG', sub: 'MongoDB' },
      { label: 'CHECKOUT', sub: 'Workflow' },
      { label: 'PAYMENT', sub: 'Razorpay' },
      { label: 'ORDER', sub: 'Fulfilled' },
    ];

    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(1rem, 2.5vw, 1.5rem)',
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 60% 40%, ${accent}18, transparent 65%)`,
            pointerEvents: 'none',
          }}
        />

        {/* Workflow Nodes Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-4)', letterSpacing: '0.08em' }}>
              TRANSACTION PIPELINE // ARCHITECTURE
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#22C55E', fontWeight: 600 }}>
              SYS.ACTIVE [200 OK]
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 75px), 1fr))',
              gap: '6px',
            }}
          >
            {STAGES.map((st) => (
              <div
                key={st.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.035)',
                  border: `1px solid ${accent}30`,
                  borderRadius: '8px',
                  padding: '6px 4px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  minWidth: 0,
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '0.02em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {st.label}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: accent, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {st.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Connected Vector Bus Trace */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', marginTop: '2px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent }} />
            <div style={{ flex: 1, height: '1px', background: `${accent}35`, margin: '0 4px' }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent }} />
            <div style={{ flex: 1, height: '1px', background: `${accent}35`, margin: '0 4px' }} />
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#61DAFB' }} />
            <div style={{ flex: 1, height: '1px', background: `${accent}35`, margin: '0 4px' }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent }} />
            <div style={{ flex: 1, height: '1px', background: `${accent}35`, margin: '0 4px' }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
          </div>
        </div>
      </div>
    );
  }

  if (motif === 'crm-telemetry') {
    const BARS = [40, 65, 35, 85, 50, 90, 68];
    return (
      <div style={{ position: 'relative', width: '100%', height: '80px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', padding: '0.5rem 1rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 75% 25%, ${accent}12, transparent 60%)`, pointerEvents: 'none' }} />
        {BARS.map((h, i) => (
          <div
            key={i}
            style={{
              width: '12px',
              height: `${h}%`,
              borderRadius: '3px 3px 1px 1px',
              background: `linear-gradient(to top, ${accent}30, ${accent}80)`,
              border: `1px solid ${accent}45`,
            }}
          />
        ))}
      </div>
    );
  }

  if (motif === 'marketplace-auction') {
    return (
      <div style={{ position: 'relative', width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, ${accent}12, transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ padding: '3px 7px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${accent}35`, fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>
            BID.ENGINE
          </div>
          <span style={{ color: accent, fontSize: '0.7rem' }}>⇄</span>
          <div style={{ padding: '3px 7px', borderRadius: '6px', background: `${accent}15`, border: `1px solid ${accent}50`, fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: accent, fontWeight: 700 }}>
            AUCTION // MATCH
          </div>
          <span style={{ color: accent, fontSize: '0.7rem' }}>⇄</span>
          <div style={{ padding: '3px 7px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${accent}35`, fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>
            SETTLE
          </div>
        </div>
      </div>
    );
  }

  if (motif === 'sports-telemetry') {
    return (
      <div style={{ position: 'relative', width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, ${accent}12, transparent 60%)`, pointerEvents: 'none' }} />
        <svg viewBox="0 0 200 50" style={{ width: '85%', height: '75%', position: 'relative', zIndex: 1 }}>
          <polyline points="10,42 35,28 65,35 95,14 125,22 155,8 185,18" fill="none" stroke={`${accent}70`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="95" cy="14" r="3.5" fill={accent} />
          <circle cx="155" cy="8" r="3.5" fill="#FFFFFF" />
          <circle cx="185" cy="18" r="3" fill={accent} />
        </svg>
      </div>
    );
  }

  if (motif === 'ml-pipeline') {
    return (
      <div style={{ position: 'relative', width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, ${accent}12, transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: `${accent}70` }} />
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: `${accent}70` }} />
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: `${accent}70` }} />
          </div>
          <div style={{ height: '30px', width: '1px', background: `${accent}30` }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#61DAFB' }} />
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#61DAFB' }} />
          </div>
          <div style={{ height: '30px', width: '1px', background: `${accent}30` }} />
          <div style={{ padding: '3px 7px', borderRadius: '5px', background: `${accent}20`, border: `1px solid ${accent}45`, fontSize: '0.58rem', fontFamily: 'var(--font-mono)', color: accent, fontWeight: 700 }}>
            CLASSIFIER
          </div>
        </div>
      </div>
    );
  }

  return null;
};

/**
 * Projects Section — Engineering Laboratory & Project Portfolio
 * Non-overlapping responsive layout with clear visual hierarchy,
 * structured metadata headers, and deterministic motifs.
 */
const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.04 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(5rem, 12vh, 8rem) 0',
        background: 'linear-gradient(135deg, #08080B 0%, #0A0910 50%, #07080B 100%)',
        overflow: 'hidden',
      }}
    >
      {/* ── TECHNICAL WORKSPACE BACKGROUND ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 40%, black 25%, transparent 88%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 40%, black 25%, transparent 88%)',
          opacity: 0.85,
        }}
      />

      {/* Atmospheric Accent Glows */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-5%',
          width: 'min(65vw, 600px)',
          height: 'min(65vw, 600px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 'min(55vw, 500px)',
          height: 'min(55vw, 500px)',
          background: 'radial-gradient(circle, rgba(97, 218, 251, 0.05) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── SECTION HEADER ── */}
          <motion.div variants={itemVariants} style={{ marginBottom: '3.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-light)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '0.8rem',
              }}
            >
              <span style={{ width: '18px', height: '1px', background: 'var(--accent)' }} />
              03 / SELECTED WORK
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                fontWeight: 900,
                color: 'var(--text-1)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '0.75rem',
              }}
            >
              Engineering in practice.
            </h2>
            <p
              style={{
                color: 'var(--text-3)',
                maxWidth: '560px',
                fontSize: '0.92rem',
                lineHeight: 1.75,
              }}
            >
              Systems, applications, and machine learning pipelines designed and implemented across full-stack engineering and data science.
            </p>
          </motion.div>

          {/* ── 1. FEATURED SYSTEM CARD: URBANVAULT (Clean Asymmetrical Structure) ── */}
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '1.5rem',
              background: 'rgba(14, 14, 19, 0.94)',
              border: `1px solid ${FEATURED_PROJECT.accent}40`,
              borderRadius: '16px',
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.55), 0 0 30px rgba(124, 58, 237, 0.1)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Top Header Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.4rem',
                background: 'rgba(255, 255, 255, 0.025)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: FEATURED_PROJECT.accent,
                    boxShadow: `0 0 8px ${FEATURED_PROJECT.accent}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {FEATURED_PROJECT.tag}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--accent-light)',
                  letterSpacing: '0.06em',
                }}
              >
                FLAGSHIP IMPLEMENTATION
              </span>
            </div>

            {/* Content Body */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                alignItems: 'stretch',
              }}
            >
              {/* Left Details */}
              <div style={{ padding: 'clamp(1.4rem, 3vw, 2.2rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                        fontWeight: 800,
                        color: 'var(--text-1)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                      }}
                    >
                      {FEATURED_PROJECT.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-light)',
                        marginTop: '3px',
                        fontWeight: 500,
                      }}
                    >
                      {FEATURED_PROJECT.subtitle}
                    </p>
                  </div>

                  <p style={{ color: 'var(--text-3)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                    {FEATURED_PROJECT.description}
                  </p>

                  {/* Key System Capabilities */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {FEATURED_PROJECT.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          padding: '3px 10px',
                          borderRadius: '6px',
                          background: 'rgba(124, 58, 237, 0.08)',
                          border: '1px solid rgba(124, 58, 237, 0.25)',
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-light)',
                          fontWeight: 600,
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack + GitHub Button Footer */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {FEATURED_PROJECT.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          fontSize: '0.64rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={FEATURED_PROJECT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      background: 'rgba(124, 58, 237, 0.15)',
                      border: '1px solid rgba(124, 58, 237, 0.45)',
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease, border-color 0.2s ease',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(124, 58, 237, 0.15)';
                    }}
                  >
                    <FiGithub size={14} />
                    <span>SOURCE CODE</span>
                    <FiArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right System Motif Interface */}
              <div
                style={{
                  minHeight: '180px',
                  background: 'rgba(0, 0, 0, 0.25)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ProjectMotifVisual motif={FEATURED_PROJECT.motif} accent={FEATURED_PROJECT.accent} />
              </div>
            </div>
          </motion.div>

          {/* ── 2. SYMMETRICAL 2x2 CONTROLLED PROJECT GRID (Zero Overlapping) ── */}
          <div className="projects-2col-grid">
            {GRID_PROJECTS.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                style={{
                  background: 'rgba(12, 12, 16, 0.88)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.accent}55`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 14px 40px ${project.accent}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
                }}
              >
                <div>
                  {/* Card Header Strip (Clean in-flow header - NEVER overlaps visual) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        fontWeight: 700,
                        color: project.accent,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {project.tag}
                    </span>
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: project.accent,
                      }}
                    />
                  </div>

                  {/* Dedicated Visual Motif Area */}
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.25)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ProjectMotifVisual motif={project.motif} accent={project.accent} />
                  </div>

                  {/* Card Content Body */}
                  <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.2rem',
                          fontWeight: 800,
                          color: 'var(--text-1)',
                          letterSpacing: '-0.015em',
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: project.accent,
                          fontWeight: 500,
                        }}
                      >
                        {project.subtitle}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-3)', fontSize: '0.82rem', lineHeight: 1.7 }}>
                      {project.description}
                    </p>

                    {/* Key Technical Features */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '2px' }}>
                      {project.features.map((feat) => (
                        <span
                          key={feat}
                          style={{
                            padding: '2px 7px',
                            borderRadius: '4px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: `1px solid ${project.accent}25`,
                            fontSize: '0.64rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-2)',
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech Stack + Source Code CTA */}
                <div
                  style={{
                    margin: '0 1.4rem 1.25rem 1.4rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-4)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${project.accent}35`,
                      color: project.accent,
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background-color 0.18s ease, color 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${project.accent}20`;
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = project.accent;
                    }}
                  >
                    <FiGithub size={13} />
                    <span>SOURCE CODE</span>
                    <FiArrowRight size={12} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── 3. TRANSITION FOOTER BANNER ── */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '2.5rem',
              padding: '1rem 1.4rem',
              background: 'rgba(14, 14, 18, 0.75)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--accent-light)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                MORE SYSTEMS & CODEBASES IN ACTIVE DEVELOPMENT
              </span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-3)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-3)';
              }}
            >
              <span>Get in touch for collaborations</span>
              <FiArrowRight size={13} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
