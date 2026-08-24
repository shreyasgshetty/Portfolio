import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';

const TYPEWRITER_TEXTS = [
  'Aspiring Software Engineer',
  'Full Stack Developer',
  'AI & ML Enthusiast',
];

const CORE_STACK = [
  { name: 'MERN',      category: 'Full Stack',              color: '#61DAFB' },
  { name: 'Java',      category: 'Programming',             color: '#F89820' },
  { name: 'Python',    category: 'Programming',             color: '#3776AB' },
  { name: 'SQL',       category: 'Database',                color: '#38BDF8' },
  { name: 'ML / AI',   category: 'Artificial Intelligence', color: '#A78BFA' },
  { name: 'REST APIs', category: 'Backend',                 color: '#22C55E' },
];

/**
 * 1. ISOLATED TYPEWRITER COMPONENT
 * Renders high-frequency typewriter updates locally without causing parent Hero re-renders.
 */
const TypewriterRole = React.memo(() => {
  const [displayed,  setDisplayed]  = useState('');
  const [phase,      setPhase]      = useState('typing');
  const [textIndex,  setTextIndex]  = useState(0);
  const phaseRef     = useRef(phase);
  const textIndexRef = useRef(textIndex);
  const displayedRef = useRef(displayed);

  useEffect(() => { phaseRef.current     = phase;     }, [phase]);
  useEffect(() => { textIndexRef.current = textIndex; }, [textIndex]);
  useEffect(() => { displayedRef.current = displayed; }, [displayed]);

  useEffect(() => {
    const tick = () => {
      const p = phaseRef.current;
      const i = textIndexRef.current;
      const d = displayedRef.current;
      const full = TYPEWRITER_TEXTS[i];

      if (p === 'typing') {
        const next = full.slice(0, d.length + 1);
        setDisplayed(next);
        if (next.length === full.length) setPhase('pausing');
      } else if (p === 'pausing') {
        setPhase('deleting');
      } else {
        const next = full.slice(0, d.length - 1);
        setDisplayed(next);
        if (next.length === 0) {
          setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
          setPhase('typing');
        }
      }
    };
    const delay = phaseRef.current === 'typing' ? 85 : phaseRef.current === 'pausing' ? 1600 : 45;
    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [displayed, phase, textIndex]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        marginBottom: '1.25rem',
        fontSize: 'clamp(0.88rem, 2.3vw, 1.15rem)',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-3)',
        minHeight: '1.75rem',
      }}
    >
      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>//</span>
      <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>{displayed}</span>
      <span className="typing-cursor" />
    </div>
  );
});

TypewriterRole.displayName = 'TypewriterRole';

/**
 * 2. ISOLATED ATMOSPHERIC DEVELOPER ENVIRONMENT
 * Direct GPU transform tracking (Zero React re-renders on mouse move).
 * Removed expensive SVG feTurbulence filter and continuous particle loops.
 */
const HeroAtmosphere = React.memo(() => {
  const violetLightRef = useRef(null);

  useEffect(() => {
    // Zero-overhead cursor tracking using direct DOM transform on desktop only
    if (window.matchMedia('(pointer: fine)').matches) {
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let rafId;

      const handleMouseMove = (e) => {
        mouseX = ((e.clientX / window.innerWidth) - 0.5) * 32;
        mouseY = ((e.clientY / window.innerHeight) - 0.5) * 24;
      };

      const animateLoop = () => {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        if (violetLightRef.current) {
          violetLightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
        rafId = requestAnimationFrame(animateLoop);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      rafId = requestAnimationFrame(animateLoop);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  // Sparse static decorative micro particles (No continuous React animation loop)
  const PARTICLES = [
    { x: '8%',  y: '16%', s: 2,   c: 'rgba(124, 58, 237, 0.4)' },
    { x: '18%', y: '78%', s: 1.5, c: 'rgba(255, 255, 255, 0.3)' },
    { x: '88%', y: '18%', s: 2,   c: 'rgba(97, 218, 251, 0.35)' },
    { x: '92%', y: '72%', s: 1.5, c: 'rgba(124, 58, 237, 0.4)' },
    { x: '4%',  y: '48%', s: 1.5, c: 'rgba(245, 158, 11, 0.35)' },
    { x: '94%', y: '42%', s: 2,   c: 'rgba(255, 255, 255, 0.25)' },
    { x: '28%', y: '10%', s: 1.5, c: 'rgba(124, 58, 237, 0.3)' },
    { x: '72%', y: '12%', s: 2,   c: 'rgba(255, 255, 255, 0.35)' },
    { x: '82%', y: '88%', s: 1.5, c: 'rgba(97, 218, 251, 0.3)' },
    { x: '12%', y: '90%', s: 2,   c: 'rgba(124, 58, 237, 0.35)' },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* ── Base Near-Black Tone ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 65% 35%, #0B0A12 0%, #08080B 50%, #050507 100%)',
        }}
      />

      {/* ── Technical Grid with Radial Fade Mask ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 85%)',
        }}
      />

      {/* ── Primary Atmospheric Light (Violet, Diffused & GPU-translated) ── */}
      <div
        ref={violetLightRef}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'min(75vw, 650px)',
          height: 'min(75vw, 650px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.13) 0%, rgba(124, 58, 237, 0.03) 45%, transparent 70%)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />

      {/* ── Secondary Ambient Light (Warm Amber Depth) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-8%',
          width: 'min(65vw, 500px)',
          height: 'min(65vw, 500px)',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* ── Data Flow Circuit Lines ── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.7,
        }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
            <stop offset="40%" stopColor="rgba(124, 58, 237, 0.2)" />
            <stop offset="80%" stopColor="rgba(97, 218, 251, 0.18)" />
            <stop offset="100%" stopColor="rgba(97, 218, 251, 0)" />
          </linearGradient>
        </defs>

        <path
          d="M 680 80 L 860 80 L 940 160 L 1150 160"
          fill="none"
          stroke="url(#traceGrad1)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      {/* ── Content Focus Field ── */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '15%',
          width: 'min(60vw, 550px)',
          height: 'min(60vw, 450px)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* ── Sparse Static Particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: p.y,
            left: p.x,
            width: `${p.s}px`,
            height: `${p.s}px`,
            borderRadius: '50%',
            background: p.c,
          }}
        />
      ))}

      {/* ── Desktop Technical Edge Metadata ── */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          right: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          color: 'rgba(255, 255, 255, 0.15)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          display: 'none',
        }}
        className="hero-meta-top-right"
      >
        2026 // SHREYAS.DEV
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          color: 'rgba(255, 255, 255, 0.15)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'none',
        }}
        className="hero-meta-bottom-left"
      >
        SYS.ENV // READY [200 OK]
      </div>
    </div>
  );
});

HeroAtmosphere.displayName = 'HeroAtmosphere';

/**
 * 3. ISOLATED SHREYAS.DEV DEVELOPER IDENTITY PANEL
 * Memoized, no expensive backdrop-filter stacking, isolated interactive state.
 */
const DeveloperIdentityPanel = React.memo(() => {
  const [initPhase, setInitPhase] = useState(0);
  const [isInteractiveActive, setIsInteractiveActive] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setInitPhase(1), 350);
    const t2 = setTimeout(() => setInitPhase(2), 750);
    const t3 = setTimeout(() => setInitPhase(3), 1150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleCardInteraction = () => {
    setIsInteractiveActive(true);
    setTimeout(() => setIsInteractiveActive(false), 1200);
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCardInteraction}
      role="region"
      aria-label="Shreyas.dev Developer Identity System"
      style={{
        position: 'relative',
        width: 'min(86vw, 300px)',
        maxWidth: '320px',
        background: 'rgba(14, 14, 18, 0.94)',
        border: isInteractiveActive
          ? '1px solid rgba(124, 58, 237, 0.55)'
          : '1px solid rgba(124, 58, 237, 0.22)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
        transition: 'border-color 0.2s ease',
        cursor: 'pointer',
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 0.9rem',
          background: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: isInteractiveActive ? 'var(--accent)' : 'var(--success)',
              transition: 'background-color 0.2s ease',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              color: 'var(--text-1)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            SHREYAS.DEV
          </span>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--text-4)',
            letterSpacing: '0.06em',
          }}
        >
          {isInteractiveActive ? 'ACTIVE' : 'ID // 2026'}
        </span>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1rem 1rem 0.9rem 1rem' }}>
        <AnimatePresence mode="wait">
          {initPhase < 3 ? (
            <motion.div
              key="init-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '8px',
                color: 'var(--text-3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--accent)' }}>&gt;</span>
                <span>sys.init(&quot;shreyas.dev&quot;)</span>
              </div>
              {initPhase >= 1 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-2)' }}>
                  <span style={{ color: 'var(--accent)' }}>&gt;</span>
                  <span>loading modules...</span>
                </div>
              )}
              {initPhase >= 2 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success)' }}>
                  <span style={{ color: 'var(--success)' }}>✔</span>
                  <span>system ready</span>
                </div>
              )}
            </motion.div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {/* Identity Monogram */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(124, 58, 237, 0.08))',
                    border: '1px solid rgba(124, 58, 237, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  S
                </div>
                <div style={{ minWidth: 0 }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      color: 'var(--text-1)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    SHREYAS G SHETTY
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--accent-light)',
                      letterSpacing: '0.04em',
                      marginTop: '2px',
                    }}
                  >
                    Full Stack & ML
                  </p>
                </div>
              </div>

              {/* Core Stack Grid */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--text-4)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  Core Stack
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '4px',
                  }}
                >
                  {CORE_STACK.map((tech) => (
                    <div
                      key={tech.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '4px 6px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '6px',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: tech.color,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          fontWeight: 500,
                          color: 'var(--text-2)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Status Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.45rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: isInteractiveActive ? 'var(--accent)' : 'var(--success)',
                    }}
                    className="avail-dot"
                  />
                  <span style={{ color: isInteractiveActive ? 'var(--accent-light)' : 'var(--success)', fontWeight: 600 }}>
                    {isInteractiveActive ? 'SYSTEM ACTIVE' : 'SYSTEM READY'}
                  </span>
                </div>
                <span style={{ color: 'var(--text-4)' }}>
                  BLR // PESU
                </span>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

DeveloperIdentityPanel.displayName = 'DeveloperIdentityPanel';

/**
 * 4. MAIN HERO COMPONENT
 * Clean, memoized sub-trees, GPU-accelerated entrance animations.
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* ── Optimized Atmosphere (Zero-Render Pointer Tracking) ── */}
      <HeroAtmosphere />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">
          {/* ── LEFT: Main Editorial Introduction ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* Availability Status Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 14px 5px 10px',
                  borderRadius: '100px',
                  background: 'rgba(34, 197, 94, 0.07)',
                  border: '1px solid rgba(34, 197, 94, 0.22)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  color: 'var(--success)',
                }}
              >
                <span className="avail-dot" />
                Open to opportunities
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.15rem' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.35rem, 7.5vw, 5.2rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.04,
                  color: 'var(--text-1)',
                }}
              >
                Hi, I'm<br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 25%, var(--accent-light) 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Shreyas G
                </span>{' '}
                <span
                  style={{
                    color: 'var(--accent)',
                    WebkitTextFillColor: 'var(--accent)',
                  }}
                >
                  Shetty
                </span>
              </h1>
            </motion.div>

            {/* Isolated Typewriter (Updates do not re-render Hero) */}
            <motion.div variants={itemVariants}>
              <TypewriterRole />
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--text-3)',
                fontSize: 'clamp(0.875rem, 1.8vw, 0.96rem)',
                lineHeight: 1.8,
                maxWidth: '500px',
                marginBottom: '2rem',
              }}
            >
              Passionate about building{' '}
              <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>scalable full-stack applications</span>,
              and exploring the frontiers of{' '}
              <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>Machine Learning</span>.
            </motion.p>

            {/* Symmetrical CTA Actions */}
            <motion.div variants={itemVariants} className="hero-cta-container">
              {/* Primary Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary hero-cta-primary"
                aria-label="View featured projects"
              >
                <span>View Projects</span>
                <span style={{ display: 'inline-flex' }}>
                  <FiArrowRight size={16} />
                </span>
              </motion.button>

              {/* Secondary Group: Resume + GitHub + LinkedIn */}
              <div className="hero-cta-secondary-row">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href="/Resume_V2.pdf"
                  download="Shreyas_G_Shetty_Resume.pdf"
                  className="hero-sub-btn hero-sub-btn-resume"
                  aria-label="Download resume"
                >
                  <FiDownload size={14} style={{ flexShrink: 0 }} />
                  <span>Resume</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/shreyasgshetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-sub-btn"
                  aria-label="GitHub profile"
                >
                  <FiGithub size={15} style={{ flexShrink: 0 }} />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/shreyas-g-shetty18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-sub-btn"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin size={15} style={{ flexShrink: 0 }} />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: SHREYAS.DEV Developer Identity System ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <DeveloperIdentityPanel />

            {/* Scroll Cue */}
            <div
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '1.75rem',
                cursor: 'pointer',
                color: 'var(--text-4)',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                userSelect: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              <span>scroll</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
