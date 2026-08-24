import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCalendar, FiCheckCircle, FiClock, FiBookOpen, FiArrowRight, FiMapPin, FiAward } from 'react-icons/fi';

/* ── 1. FACTUAL ACADEMIC MILESTONES DATA (Source of Truth) ── */
const MILESTONES = {
  current: {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'PES University',
    duration: '2023 – 2027',
    status: 'In Progress',
    year: '2027',
    tag: 'CURRENT ACADEMIC STAGE // B.TECH CSE',
    color: '#7C3AED', // Electric Violet
    coursework: [
      { num: '01', name: 'Data Structures' },
      { num: '02', name: 'DBMS' },
      { num: '03', name: 'Operating Systems' },
      { num: '04', name: 'Machine Learning' },
      { num: '05', name: 'Computer Networks' },
      { num: '06', name: 'Digital Forensic' },
      { num: '07', name: 'OOP with Java' },
      { num: '08', name: 'Web Development' },
    ],
  },
  preUniversity: {
    degree: 'Pre-University (11th & 12th)',
    field: 'Science (PCMB)',
    institution: 'Sri Sathya Sai Loka Seva P U College, Alike',
    duration: '2021 – 2023',
    status: 'Completed',
    year: '2021 — 2023',
    tag: 'PRE-UNIVERSITY COURSE',
    color: '#F59E0B', // Amber
  },
  school: {
    degree: 'School (Up to 10th)',
    field: 'General Secondary Education',
    institution: 'Sri Sai Angels, Chikmagaluru',
    duration: 'Completed',
    status: 'Completed',
    year: 'FOUNDATION',
    tag: 'FOUNDATIONAL ACADEMIC STAGE',
    color: '#10B981', // Emerald
  },
};

/**
 * Education Section — Academic Journey & Technical Milestone Archive
 * Editorial layout with drawing milestone line, giant year typography,
 * hero PES University card with structured 8-subject curriculum matrix, and transition banner.
 */
const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.06 });

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
      id="education"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(5rem, 12vh, 8.5rem) 0',
        background: 'linear-gradient(135deg, #08080B 0%, #0B0A11 50%, #07080B 100%)',
        overflow: 'hidden',
      }}
    >
      {/* ── 1. LAYERED ACADEMIC ARCHIVE BACKGROUND ── */}
      {/* Visible 56px Technical Grid */}
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
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 30%, transparent 90%)',
          opacity: 0.85,
        }}
      />

      {/* SVG Academic Constellation Trace Behind Timeline */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.4,
        }}
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <path
          d="M 600 100 L 600 800 M 350 260 L 600 260 M 850 420 L 600 420 M 600 580 L 1050 580"
          fill="none"
          stroke="rgba(124, 58, 237, 0.18)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* Subtle background branch endpoints (offset from center spine) */}
        <circle cx="350" cy="260" r="2.5" fill="#10B981" opacity="0.6" />
        <circle cx="850" cy="420" r="2.5" fill="#F59E0B" opacity="0.6" />
        <circle cx="1050" cy="580" r="2.5" fill="#7C3AED" opacity="0.6" />
      </svg>

      {/* Ambient Colored Depth Lights */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-6%',
          width: 'min(60vw, 550px)',
          height: 'min(60vw, 550px)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-5%',
          width: 'min(65vw, 600px)',
          height: 'min(65vw, 600px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.09) 0%, transparent 65%)',
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
              04 / ACADEMIC JOURNEY
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
              The path so far.
            </h2>
            <p
              style={{
                color: 'var(--text-3)',
                maxWidth: '560px',
                fontSize: '0.92rem',
                lineHeight: 1.75,
              }}
            >
              From foundational studies and pre-university science to computer science engineering at PES University.
            </p>
          </motion.div>

          {/* ── 2. DESKTOP ACADEMIC JOURNEY TIMELINE (Centered Asymmetric Milestone Flow) ── */}
          <div className="edu-desktop-timeline">
            {/* Continuous Milestone Vector Spine */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                top: '2rem',
                bottom: '3rem',
                left: '50%',
                width: '2px',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(to bottom, #10B981 0%, #F59E0B 45%, #7C3AED 100%)',
                transformOrigin: 'top',
                opacity: 0.4,
                zIndex: 0,
              }}
            />

            {/* ── STAGE 01: SCHOOL (Left Side) ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
              {/* Left Card */}
              <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    background: 'rgba(12, 12, 16, 0.88)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '14px',
                    padding: '1.25rem 1.4rem',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#10B981', fontWeight: 700, letterSpacing: '0.06em' }}>
                      {MILESTONES.school.tag}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '100px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#10B981' }}>
                      <FiCheckCircle size={10} />
                      Completed
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-1)', lineHeight: 1.2 }}>
                    {MILESTONES.school.degree}
                  </h3>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.86rem', fontWeight: 600, marginTop: '3px' }}>
                    {MILESTONES.school.institution}
                  </p>
                </div>
              </motion.div>

              {/* Central Node Indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#10B981',
                    border: '3px solid #08080B',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
                  }}
                />
              </div>

              {/* Right Year Callout */}
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#10B981', fontWeight: 700, letterSpacing: '0.08em' }}>
                  SECONDARY SCHOOL
                </span>
              </div>
            </div>

            {/* ── STAGE 02: PRE-UNIVERSITY (Right Side) ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
              {/* Left Year Callout */}
              <div style={{ paddingRight: '1rem', textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#F59E0B', fontWeight: 700, letterSpacing: '0.08em' }}>
                  PRE-UNIVERSITY
                </span>
              </div>

              {/* Central Node Indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#F59E0B',
                    border: '3px solid #08080B',
                    boxShadow: '0 0 10px rgba(245, 158, 11, 0.6)',
                  }}
                />
              </div>

              {/* Right Card */}
              <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    background: 'rgba(12, 12, 16, 0.88)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    borderRadius: '14px',
                    padding: '1.25rem 1.4rem',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#F59E0B', fontWeight: 700, letterSpacing: '0.06em' }}>
                      {MILESTONES.preUniversity.tag}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '100px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)', fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#F59E0B' }}>
                      <FiCheckCircle size={10} />
                      Completed
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-1)', lineHeight: 1.2 }}>
                    {MILESTONES.preUniversity.degree}
                  </h3>
                  <p style={{ color: '#F59E0B', fontSize: '0.82rem', fontWeight: 600, marginTop: '2px' }}>
                    {MILESTONES.preUniversity.field}
                  </p>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.86rem', fontWeight: 600, marginTop: '4px' }}>
                    {MILESTONES.preUniversity.institution}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── STAGE 03: HERO MILESTONE — PES UNIVERSITY (Grand Full-Width Card) ── */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              {/* Current Active Timeline Beacon Node */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', position: 'relative' }}>
                <div
                  className="beacon-pulse"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#7C3AED',
                    border: '3px solid #08080B',
                  }}
                />
              </div>

              {/* Grand PES University Hero Card */}
              <motion.div
                variants={itemVariants}
                style={{
                  width: '100%',
                  maxWidth: '920px',
                  background: 'rgba(14, 14, 19, 0.94)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  borderRadius: '18px',
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(124, 58, 237, 0.12)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Giant Faded 2027 Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '5%',
                    right: '1.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(5.5rem, 14vw, 9.5rem)',
                    fontWeight: 900,
                    color: 'rgba(124, 58, 237, 0.04)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    lineHeight: 1,
                  }}
                >
                  2027
                </div>

                {/* Card Header Strip */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '1.1rem',
                    marginBottom: '1.4rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    flexWrap: 'wrap',
                    gap: '8px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#7C3AED',
                        boxShadow: '0 0 8px #7C3AED',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--text-1)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {MILESTONES.current.tag}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '3px 12px',
                      borderRadius: '100px',
                      background: 'rgba(34, 197, 94, 0.08)',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                      color: 'var(--success)',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span className="avail-dot" />
                    IN PROGRESS [2023 — 2027]
                  </span>
                </div>

                {/* Degree & Institution */}
                <div style={{ marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                      fontWeight: 900,
                      color: 'var(--text-1)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                    }}
                  >
                    {MILESTONES.current.degree}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.86rem',
                      color: 'var(--accent-light)',
                      marginTop: '4px',
                      fontWeight: 600,
                    }}
                  >
                    {MILESTONES.current.field}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      color: 'var(--text-2)',
                      marginTop: '6px',
                      fontWeight: 600,
                    }}
                  >
                    {MILESTONES.current.institution}
                  </p>
                </div>

                {/* ── Curriculum Matrix (8 Numbered Core Subjects) ── */}
                <div
                  style={{
                    paddingTop: '1.4rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-4)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                      }}
                    >
                      KEY COURSEWORK // 8 CORE SUBJECTS
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--accent-light)',
                      }}
                    >
                      COMPUTER SCIENCE CURRICULUM
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                      gap: '0.6rem',
                    }}
                  >
                    {MILESTONES.current.coursework.map((course) => (
                      <div
                        key={course.num}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0.55rem 0.85rem',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          transition: 'border-color 0.2s ease, background-color 0.2s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.4)';
                          e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            color: 'var(--accent-light)',
                          }}
                        >
                          {course.num}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            color: 'var(--text-2)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {course.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── 3. MOBILE ACADEMIC JOURNEY TIMELINE (Clean Left-Anchored Timeline) ── */}
          <div className="edu-mobile-timeline">
            {/* Left Vertical Spine */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                bottom: '2rem',
                left: '12px',
                width: '2px',
                background: 'linear-gradient(to bottom, #10B981, #F59E0B, #7C3AED)',
                opacity: 0.45,
                zIndex: 0,
              }}
            />

            {/* School Milestone */}
            <div style={{ paddingLeft: '32px', position: 'relative', marginBottom: '2rem' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '1.4rem',
                  left: '7px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#10B981',
                  border: '2px solid #08080B',
                }}
              />
              <div
                style={{
                  background: 'rgba(12, 12, 16, 0.9)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '12px',
                  padding: '1.15rem 1.25rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#10B981', fontWeight: 700 }}>
                  FOUNDATIONAL EDUCATION
                </span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-1)', marginTop: '2px' }}>
                  {MILESTONES.school.degree}
                </h4>
                <p style={{ color: 'var(--text-2)', fontSize: '0.84rem', fontWeight: 500, marginTop: '2px' }}>
                  {MILESTONES.school.institution}
                </p>
              </div>
            </div>

            {/* Pre-University Milestone */}
            <div style={{ paddingLeft: '32px', position: 'relative', marginBottom: '2rem' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '1.4rem',
                  left: '7px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#F59E0B',
                  border: '2px solid #08080B',
                }}
              />
              <div
                style={{
                  background: 'rgba(12, 12, 16, 0.9)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: '12px',
                  padding: '1.15rem 1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#F59E0B', fontWeight: 700 }}>
                    PRE-UNIVERSITY // 2021—2023
                  </span>
                  <span style={{ color: '#F59E0B', fontSize: '0.6rem', fontFamily: 'var(--font-mono)' }}>Completed</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-1)', marginTop: '2px' }}>
                  {MILESTONES.preUniversity.degree}
                </h4>
                <p style={{ color: '#F59E0B', fontSize: '0.8rem', fontWeight: 600, marginTop: '2px' }}>
                  {MILESTONES.preUniversity.field}
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.84rem', fontWeight: 500, marginTop: '2px' }}>
                  {MILESTONES.preUniversity.institution}
                </p>
              </div>
            </div>

            {/* PES University Hero Milestone */}
            <div style={{ paddingLeft: '32px', position: 'relative' }}>
              <div
                className="beacon-pulse"
                style={{
                  position: 'absolute',
                  top: '1.4rem',
                  left: '5px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#7C3AED',
                  border: '2px solid #08080B',
                }}
              />
              <div
                style={{
                  background: 'rgba(14, 14, 19, 0.95)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  borderRadius: '14px',
                  padding: '1.25rem 1.35rem',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.55)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--accent-light)', fontWeight: 700 }}>
                    CURRENT // 2023—2027
                  </span>
                  <span style={{ color: 'var(--success)', fontSize: '0.62rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    ● IN PROGRESS
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-1)', lineHeight: 1.2 }}>
                  {MILESTONES.current.degree}
                </h4>
                <p style={{ color: 'var(--accent-light)', fontSize: '0.82rem', fontWeight: 600, marginTop: '2px' }}>
                  {MILESTONES.current.field}
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', fontWeight: 600, marginTop: '3px' }}>
                  {MILESTONES.current.institution}
                </p>

                {/* Coursework Matrix on Mobile */}
                <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-4)', marginBottom: '0.6rem', fontWeight: 700 }}>
                    KEY COURSEWORK
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
                    {MILESTONES.current.coursework.map((c) => (
                      <div
                        key={c.num}
                        style={{
                          padding: '3px 6px',
                          borderRadius: '5px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--text-2)',
                        }}
                      >
                        {c.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 4. TRANSITION BANNER (From Learning to Building) ── */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '3.5rem',
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
                FROM LEARNING TO BUILDING
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
              <span>Let's connect for opportunities</span>
              <FiArrowRight size={13} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
