import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCode, FiDatabase, FiCpu, FiLayers, FiArrowRight, FiTerminal, FiMapPin, FiBookOpen } from 'react-icons/fi';

const CAPABILITIES = [
  {
    n: '01',
    id: 'software-engineering',
    icon: <FiCode size={18} />,
    title: 'Software Engineering',
    summary: 'Passionate about software engineering with Java, emphasizing clean architecture, efficient algorithms, and robust application development.',
    details: 'Object-Oriented Design · Data Structures & Algorithms · Problem Solving · Architecture',
    color: '#7C3AED', // Electric Violet
    tech: ['Java', 'DSA', 'OOP', 'Clean Code'],
  },
  {
    n: '02',
    id: 'full-stack',
    icon: <FiLayers size={18} />,
    title: 'Full-Stack Development',
    summary: 'I build web applications using React, Node.js, Express.js, and MongoDB. I have worked on projects from scratch to deployment.',
    details: 'MERN Stack · Responsive Interfaces · REST Integration · Modern UI Systems',
    color: '#F59E0B', // Amber
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    n: '03',
    id: 'backend-apis',
    icon: <FiDatabase size={18} />,
    title: 'Backend & APIs',
    summary: 'I have experience building RESTful APIs with Node.js, handling authentication, and working with databases like MongoDB and MySQL.',
    details: 'RESTful Architecture · JWT Authentication · Database Schema Design · Relational & NoSQL',
    color: '#10B981', // Emerald
    tech: ['Node.js', 'Express', 'MySQL', 'MongoDB'],
  },
  {
    n: '04',
    id: 'machine-learning',
    icon: <FiCpu size={18} />,
    title: 'Machine Learning',
    summary: 'I have worked on ML projects involving data analysis and classification models using Scikit-learn, Pandas, and NumPy.',
    details: 'Supervised Learning · Data Preprocessing · Exploratory Data Analysis · Model Evaluation',
    color: '#A78BFA', // Light Violet
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
];

/**
 * About Section — Developer Profile / Identity Dossier
 * Editorial layout featuring asymmetric profile dossier, personal narrative,
 * and an interactive Capability Explorer with spotlight focus.
 */
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [activeCapIndex, setActiveCapIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(5rem, 12vh, 8rem) 0',
        background: 'var(--bg-alt)',
        overflow: 'hidden',
      }}
    >
      {/* ── ATMOSPHERIC BACKGROUND SYSTEM ── */}
      {/* Subtle Vertical Technical Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 75% 50%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 75% 50%, black 20%, transparent 85%)',
          opacity: 0.7,
        }}
      />

      {/* Atmospheric Violet Glow behind Capability Column */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: 'min(65vw, 600px)',
          height: 'min(65vw, 600px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />

      {/* One-Time Section Entry Scanline */}
      {inView && (
        <motion.div
          initial={{ y: '-100%', opacity: 0.6 }}
          animate={{ y: '200%', opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.4), transparent)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── SECTION HEADER ── */}
          <motion.div variants={itemVariants} style={{ marginBottom: '3.5rem' }}>
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
              01 / ABOUT
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                fontWeight: 900,
                color: 'var(--text-1)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                maxWidth: '650px',
              }}
            >
              Building. Learning. Solving.
            </h2>
          </motion.div>

          {/* ── ASYMMETRIC 2-COLUMN DOSSIER GRID ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'start',
            }}
          >
            {/* ── LEFT COLUMN: Developer Profile Dossier & Personal Narrative ── */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Developer Identity Dossier Card */}
              <div
                style={{
                  background: 'rgba(14, 14, 18, 0.94)',
                  border: '1px solid rgba(124, 58, 237, 0.22)',
                  borderRadius: '16px',
                  padding: '1.4rem 1.5rem',
                  position: 'relative',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Dossier Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.9rem',
                    marginBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        boxShadow: '0 0 8px var(--accent)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        color: 'var(--text-1)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      DOSSIER // IDENTITY
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'var(--accent-light)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    PESU.CS // 2027
                  </span>
                </div>

                {/* Name & Academic Role */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-1)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                  >
                    SHREYAS G SHETTY
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-light)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginTop: '3px',
                      fontWeight: 600,
                    }}
                  >
                    Computer Science Student
                  </p>
                </div>

                {/* Structured Metadata Specifications */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiBookOpen size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-4)', fontSize: '0.66rem', width: '65px' }}>College</span>
                    <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>PES University</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiMapPin size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-4)', fontSize: '0.66rem', width: '65px' }}>LOCATION</span>
                    <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>Bengaluru, India</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiTerminal size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-4)', fontSize: '0.66rem', width: '65px' }}>FOCUS</span>
                    <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>Full-Stack & Software Dev</span>
                  </div>
                </div>

                {/* Technical Stack Signature */}
                <div
                  style={{
                    marginTop: '1.1rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-3)',
                    letterSpacing: '0.04em',
                  }}
                >
                  MERN · Java · Python · SQL · ML / AI
                </div>
              </div>

              {/* Personal Statement & Narrative Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    lineHeight: 1.35,
                    letterSpacing: '-0.015em',
                  }}
                >
                  I'm a Computer Science student at{' '}
                  <span style={{ color: 'var(--accent-light)' }}>PES University</span> who enjoys turning ideas into working software.
                </p>

                <p style={{ color: 'var(--text-3)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                  My primary focus is <strong style={{ color: 'var(--text-2)', fontWeight: 600 }}>full-stack development and software engineering</strong>, with experience building web applications using the <span style={{ color: 'var(--accent-light)', fontWeight: 500 }}>MERN stack</span> and working with <strong style={{ color: 'var(--text-2)', fontWeight: 600 }}>Java, SQL, and Python</strong>.
                </p>

                <p style={{ color: 'var(--text-3)', fontSize: '0.92rem', lineHeight: 1.85 }}>
                  I'm also exploring <strong style={{ color: 'var(--text-2)', fontWeight: 600 }}>Machine Learning</strong> through projects involving data analysis, preprocessing, and classification algorithms using <span style={{ color: 'var(--accent-light)', fontWeight: 500 }}>Scikit-learn, Pandas, and NumPy</span>.
                </p>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: Interactive Capability Explorer ── */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-4)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  CAPABILITY MATRIX
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--accent-light)',
                  }}
                >
                  HOVER / TAP
                </span>
              </div>

              {CAPABILITIES.map((cap, index) => {
                const isSelected = activeCapIndex === index;

                return (
                  <div
                    key={cap.id}
                    onMouseEnter={() => setActiveCapIndex(index)}
                    onClick={() => setActiveCapIndex(index)}
                    onFocus={() => setActiveCapIndex(index)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isSelected}
                    aria-label={`Capability: ${cap.title}`}
                    style={{
                      position: 'relative',
                      background: isSelected
                        ? 'rgba(18, 18, 24, 0.96)'
                        : 'rgba(12, 12, 16, 0.65)',
                      border: isSelected
                        ? `1px solid ${cap.color}55`
                        : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '14px',
                      padding: '1.25rem 1.35rem',
                      cursor: 'pointer',
                      boxShadow: isSelected
                        ? `0 8px 24px ${cap.color}15, 0 0 1px ${cap.color}`
                        : 'none',
                      opacity: activeCapIndex !== null && !isSelected ? 0.68 : 1,
                      transition: 'background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
                      outline: 'none',
                    }}
                  >
                    {/* Header Row: Number + Icon + Title + Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* Number Indicator */}
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            color: isSelected ? cap.color : 'var(--text-4)',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {cap.n}
                        </span>

                        {/* Icon Badge */}
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: isSelected ? `${cap.color}22` : 'rgba(255, 255, 255, 0.04)',
                            border: isSelected ? `1px solid ${cap.color}44` : '1px solid rgba(255, 255, 255, 0.08)',
                            color: isSelected ? cap.color : 'var(--text-3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                            flexShrink: 0,
                          }}
                        >
                          {cap.icon}
                        </div>

                        {/* Title */}
                        <h4
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: isSelected ? 'var(--text-1)' : 'var(--text-2)',
                            transition: 'color 0.2s ease',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {cap.title}
                        </h4>
                      </div>

                      {/* Directional Accent Arrow */}
                      <span
                        style={{
                          color: isSelected ? cap.color : 'var(--text-4)',
                          transform: isSelected ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'transform 0.2s ease, color 0.2s ease',
                          display: 'flex',
                        }}
                      >
                        <FiArrowRight size={16} />
                      </span>
                    </div>

                    {/* Expandable Details Area */}
                    <div
                      style={{
                        marginTop: isSelected ? '0.85rem' : '0',
                        maxHeight: isSelected ? '180px' : '0px',
                        overflow: 'hidden',
                        opacity: isSelected ? 1 : 0,
                        transition: 'max-height 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease, margin-top 0.25s ease',
                      }}
                    >
                      <p
                        style={{
                          color: 'var(--text-3)',
                          fontSize: '0.84rem',
                          lineHeight: 1.7,
                          marginBottom: '0.75rem',
                        }}
                      >
                        {cap.summary}
                      </p>

                      {/* Technology Chips */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {cap.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              padding: '2px 8px',
                              borderRadius: '5px',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: `1px solid ${cap.color}30`,
                              fontSize: '0.64rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600,
                              color: 'var(--text-2)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
