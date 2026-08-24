import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';

const TYPEWRITER_TEXTS = [
  'Aspiring Software Engineer',
  'Full Stack Developer',
  'AI & ML Enthusiast',
];

const CORE_STACK = [
  { name: 'MERN', category: 'Full Stack', color: '#61DAFB' },
  { name: 'Java', category: 'Programming', color: '#F89820' },
  { name: 'Python', category: 'Programming', color: '#3776AB' },
  { name: 'SQL', category: 'Database', color: '#38BDF8' },
  { name: 'ML / AI', category: 'Artificial Intelligence', color: '#A78BFA' },
  { name: 'REST APIs', category: 'Backend', color: '#22C55E' },
];

/**
 * 10-Layer Atmospheric Developer Environment for Hero Section
 * Fully GPU-accelerated, responsive, and non-distracting.
 */
const HeroAtmosphere = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only activate cursor tracking on devices with pointer capability
    if (window.matchMedia('(pointer: fine)').matches) {
      let rafId;
      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const targetX = ((e.clientX / innerWidth) - 0.5) * 28;
        const targetY = ((e.clientY / innerHeight) - 0.5) * 20;

        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          setMouseOffset({ x: targetX, y: targetY });
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  // 14 Sparse Micro Particles positioned safely around peripheral margins
  const PARTICLES = [
    { x: '8%', y: '16%', s: 2, d: 0.2, c: 'rgba(124, 58, 237, 0.4)' },
    { x: '18%', y: '78%', s: 1.5, d: 1.4, c: 'rgba(255, 255, 255, 0.3)' },
    { x: '88%', y: '18%', s: 2, d: 0.8, c: 'rgba(97, 218, 251, 0.35)' },
    { x: '92%', y: '72%', s: 1.5, d: 2.1, c: 'rgba(124, 58, 237, 0.4)' },
    { x: '4%', y: '48%', s: 1.5, d: 1.8, c: 'rgba(245, 158, 11, 0.35)' },
    { x: '94%', y: '42%', s: 2, d: 0.5, c: 'rgba(255, 255, 255, 0.25)' },
    { x: '28%', y: '10%', s: 1.5, d: 2.5, c: 'rgba(124, 58, 237, 0.3)' },
    { x: '72%', y: '12%', s: 2, d: 1.1, c: 'rgba(255, 255, 255, 0.35)' },
    { x: '82%', y: '88%', s: 1.5, d: 1.9, c: 'rgba(97, 218, 251, 0.3)' },
    { x: '12%', y: '90%', s: 2, d: 0.7, c: 'rgba(124, 58, 237, 0.35)' },
    { x: '45%', y: '6%', s: 1.5, d: 2.8, c: 'rgba(255, 255, 255, 0.2)' },
    { x: '58%', y: '94%', s: 2, d: 1.6, c: 'rgba(245, 158, 11, 0.3)' },
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
      {/* ── LAYER 1: Near-Black Base with Cool Violet Undertone ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 65% 35%, #0B0A12 0%, #08080B 50%, #050507 100%)',
        }}
      />

      {/* ── LAYER 2: Subtle Technical Grid with Fade Mask ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 85%)',
        }}
      />

      {/* ── LAYER 3: Primary Atmospheric Light (Violet, Diffused & Cursor Reactive) ── */}
      <motion.div
        animate={{
          x: mouseOffset.x * 1.2,
          y: mouseOffset.y * 1.2,
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          x: { type: 'spring', stiffness: 45, damping: 25 },
          y: { type: 'spring', stiffness: 45, damping: 25 },
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 'min(75vw, 680px)',
          height: 'min(75vw, 680px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, rgba(124, 58, 237, 0.04) 45%, transparent 70%)',
          filter: 'blur(45px)',
          borderRadius: '50%',
        }}
      />

      {/* ── LAYER 4: Secondary Ambient Light (Warm Amber Depth, Lower-Left) ── */}
      <motion.div
        animate={{
          x: mouseOffset.x * -0.8,
          y: mouseOffset.y * -0.8,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
        style={{
          position: 'absolute',
          bottom: '-12%',
          left: '-8%',
          width: 'min(65vw, 520px)',
          height: 'min(65vw, 520px)',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.045) 0%, rgba(245, 158, 11, 0.01) 40%, transparent 65%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />

      {/* ── LAYER 5: Data Flow Circuit Lines & Traveling Signal Packets ── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.85,
        }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
            <stop offset="40%" stopColor="rgba(124, 58, 237, 0.22)" />
            <stop offset="80%" stopColor="rgba(97, 218, 251, 0.2)" />
            <stop offset="100%" stopColor="rgba(97, 218, 251, 0)" />
          </linearGradient>
          <linearGradient id="traceGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.18)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </linearGradient>
        </defs>

        {/* Top-Right Circuit Trace (Path 1) */}
        <path
          d="M 680 80 L 860 80 L 940 160 L 1150 160"
          fill="none"
          stroke="url(#traceGrad1)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Bottom-Left Circuit Trace (Path 2) */}
        <path
          d="M 60 680 L 260 680 L 340 600 L 580 600"
          fill="none"
          stroke="url(#traceGrad2)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>

      {/* Traveling Data Signal Packets */}
      <motion.div
        animate={{
          x: [680, 860, 940, 1150],
          y: [80, 80, 160, 160],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.35, 0.65, 1],
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#61DAFB',
          boxShadow: '0 0 10px #61DAFB, 0 0 20px #61DAFB',
        }}
      />

      <motion.div
        animate={{
          x: [60, 260, 340, 580],
          y: [680, 680, 600, 600],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
          times: [0, 0.4, 0.7, 1],
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: '#F59E0B',
          boxShadow: '0 0 8px #F59E0B',
        }}
      />

      {/* ── LAYER 7: Content Focus Field (Enhances Headline Contrast) ── */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '15%',
          width: 'min(60vw, 550px)',
          height: 'min(60vw, 450px)',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 65%)',
          filter: 'blur(30px)',
          borderRadius: '50%',
        }}
      />

      {/* ── LAYER 8: Sparse Micro Particles (Twinkling in Peripheral Margins) ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.15, 0.65, 0.15],
            scale: [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.d,
          }}
          style={{
            position: 'absolute',
            top: p.y,
            left: p.x,
            width: `${p.s}px`,
            height: `${p.s}px`,
            borderRadius: '50%',
            background: p.c,
            boxShadow: `0 0 6px ${p.c}`,
          }}
        />
      ))}

      {/* ── LAYER 9: Micro Film Grain / Noise Overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── LAYER 10: Technical Edge Metadata Labels (Subtle Environmental Details) ── */}
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
          display: 'none', // Shown on desktop via media query styling
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
};

/**
 * Mobile-First & Desktop-Refined Hero Section
 * Foreground components remain 100% preserved.
 */
const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const [textIndex, setTextIndex] = useState(0);
  const phaseRef = useRef(phase);
  const textIndexRef = useRef(textIndex);
  const displayedRef = useRef(displayed);

  useEffect(() => { phaseRef.current = phase; }, [phase]);
  useEffect(() => { textIndexRef.current = textIndex; }, [textIndex]);
  useEffect(() => { displayedRef.current = displayed; }, [displayed]);

  /* ── Smooth Typewriter Effect ── */
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* ── 10-Layer Atmospheric Background System ── */}
      <HeroAtmosphere />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">
          {/* ── LEFT / MAIN INTRO: Editorial Introduction ── */}
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
                    textShadow: '0 0 35px rgba(124, 58, 237, 0.35)',
                  }}
                >
                  Shetty
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Roles Banner */}
            <motion.div
              variants={itemVariants}
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

            {/* ── Mobile-First Symmetrical CTA Buttons ── */}
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
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ display: 'inline-flex' }}
                >
                  <FiArrowRight size={16} />
                </motion.span>
              </motion.button>

              {/* Secondary Symmetrical Group: Resume + GitHub + LinkedIn */}
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

          {/* ── RIGHT / SECONDARY COLUMN: SHREYAS.DEV Developer Identity System ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <DeveloperIdentityPanel />

            {/* Subtle Scroll Cue */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
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
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-light)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-4)'; }}
            >
              <span>scroll</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── SHREYAS.DEV Developer Identity System Card ──────────────── */
const DeveloperIdentityPanel = () => {
  const [initPhase, setInitPhase] = useState(0);
  const [isInteractiveActive, setIsInteractiveActive] = useState(false);

  // Smooth brief terminal initialization (~1.1s total)
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
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCardInteraction}
      role="region"
      aria-label="Shreyas.dev Developer Identity System"
      style={{
        position: 'relative',
        width: 'min(86vw, 300px)',
        maxWidth: '320px',
        background: 'rgba(14, 14, 18, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isInteractiveActive
          ? '1px solid rgba(124, 58, 237, 0.55)'
          : '1px solid rgba(124, 58, 237, 0.22)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: isInteractiveActive
          ? '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(124, 58, 237, 0.25)'
          : '0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(124, 58, 237, 0.06)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
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
              boxShadow: isInteractiveActive
                ? '0 0 8px var(--accent)'
                : '0 0 6px rgba(34, 197, 94, 0.6)',
              transition: 'background 0.2s',
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

      {/* Card Body with Brief Terminal Init -> Identity Transition */}
      <div style={{ padding: '1rem 1rem 0.9rem 1rem' }}>
        <AnimatePresence mode="wait">
          {initPhase < 3 ? (
            /* ── Brief Initializing Screen (< 1.2s) ── */
            <motion.div
              key="init-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-2)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>&gt;</span>
                  <span>loading modules...</span>
                </motion.div>
              )}
              {initPhase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success)' }}
                >
                  <span style={{ color: 'var(--success)' }}>✔</span>
                  <span>system ready</span>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* ── Main Clean Identity System ── */
            <motion.div
              key="identity-content"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
            >
              {/* Central Identity Monogram & Label */}
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
                    boxShadow: isInteractiveActive
                      ? '0 0 20px rgba(124, 58, 237, 0.5)'
                      : '0 0 12px rgba(124, 58, 237, 0.25)',
                    flexShrink: 0,
                    transition: 'box-shadow 0.3s ease',
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

              {/* Technical Core Stack Matrix (2x3 compact grid) */}
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
                          boxShadow: `0 0 4px ${tech.color}`,
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

              {/* Footer System Status Bar */}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Hero;
