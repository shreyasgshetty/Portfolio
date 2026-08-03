import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from 'react-icons/fi';

const TYPEWRITER_TEXTS = [
  'Software Engineer',
  'Full Stack Developer',
  'AI & ML Enthusiast',
  'Java Developer',
  'Problem Solver',
];

/**
 * Hero section with typewriter effect, glowing CTA buttons, and gradient background.
 */
const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter animation
  useEffect(() => {
    const current = TYPEWRITER_TEXTS[textIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, textIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background radial glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
          }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              color: '#06B6D4',
              fontWeight: 500,
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06B6D4', display: 'inline-block', animation: 'pulseRing 2s ease-in-out infinite' }} />
              Open to opportunities
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
              color: '#F1F5F9',
            }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Shreyas G Shetty</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#94A3B8',
              marginBottom: '1.5rem',
              height: '2.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ color: '#06B6D4' }}>&gt;</span>&nbsp;
            <span style={{ color: '#F1F5F9' }}>{displayed}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#94A3B8',
              maxWidth: '620px',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Passionate about building{' '}
            <span style={{ color: '#F1F5F9', fontWeight: 500 }}>scalable full-stack applications</span>,
            writing{' '}
            <span style={{ color: '#F1F5F9', fontWeight: 500 }}>clean, efficient Java</span>,
            mastering{' '}
            <span style={{ color: '#F1F5F9', fontWeight: 500 }}>Data Structures & Algorithms</span>,
            and exploring the frontiers of{' '}
            <span style={{ color: '#F1F5F9', fontWeight: 500 }}>Machine Learning</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="btn-glow"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span>View Projects</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/Resume.pdf"
              download="Shreyas_G_Shetty_Resume.pdf"
              className="btn-outline"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <FiDownload size={16} />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/shreyasgshetty"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#94A3B8',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
            >
              <FiGithub size={18} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://linkedin.com/in/shreyasgshetty"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#94A3B8',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
            >
              <FiLinkedin size={18} />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: '#64748B',
          fontSize: '0.75rem',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll</span>
        <FiArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
