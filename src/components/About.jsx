import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';

const HIGHLIGHTS = [
  { n: '01', icon: <FiCode size={16} />, title: 'Software Engineering', desc: 'Passionate about software engineering with Java, emphasizing clean architecture, efficient algorithms, and robust application development.', color: 'var(--accent)' },
  { n: '02', icon: <FiLayers size={16} />, title: 'Full-Stack Development', desc: 'I build web applications using React, Node.js, Express.js, and MongoDB. I have worked on a few projects from scratch to deployment.', color: 'var(--a2)' },
  { n: '03', icon: <FiDatabase size={16} />, title: 'Backend & APIs', desc: 'I have experience building RESTful APIs with Node.js, handling authentication, and working with databases like MongoDB and MySQL.', color: '#10B981' },
  { n: '04', icon: <FiCpu size={16} />, title: 'Machine Learning', desc: 'I have worked on ML projects involving data analysis and classification models using Scikit-learn, Pandas, and NumPy.', color: 'var(--accent-light)' },
];

const TAGS = ['Java', 'DSA', 'MERN Stack', 'Machine Learning', 'Problem Solving', 'System Design'];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const up = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section id="about" ref={ref} style={{ position: 'relative', padding: '8rem 0', background: 'var(--bg-alt)' }}>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 60% 80% at 100% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 100% 50%, black 30%, transparent 100%)',
      }} />

      {/* Accent glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-8%',
        width: '40vw', height: '40vw', maxWidth: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* ── Section header ── */}
        <motion.div {...up()} style={{ marginBottom: '4rem' }}>
          <div className="eyebrow">About Me</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', maxWidth: '560px' }}>
            Who I Am
          </h2>
        </motion.div>

        {/* ── Two columns ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>

          {/* Left: prose */}
          <motion.div {...up(0.1)}>
            {/* Large statement */}
            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.8vw, 1.65rem)',
                fontWeight: 700,
                color: 'var(--text-1)',
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}>
                CS Student &{' '}
                <span style={{ color: 'var(--accent-light)' }}>Full-Stack Developer</span>
                {' '}at PES University.
              </p>
            </div>

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                <>I'm a Computer Science student at <strong style={{ color: 'var(--text-2)', fontWeight: 600 }}>PES University</strong>. I enjoy building things with code and have a particular interest in <span style={{ color: 'var(--accent-light)' }}>Full Stack Development and Software Engineering.</span></>,
                <>I build web applications using the <span style={{ color: 'var(--accent-light)' }}>MERN stack</span> — working with Node.js and MongoDB on the backend, and React with Tailwind CSS on the frontend.</>,
                <>I also have some experience with <span style={{ color: 'var(--accent-light)' }}>Machine Learning</span> — I worked on ML projects involving data analysis and classification algorithms using Scikit-learn, Pandas, and NumPy.</>,
              ].map((text, i) => (
                <p key={i} style={{ color: 'var(--text-3)', lineHeight: 1.85, fontSize: '0.93rem' }}>{text}</p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '2rem' }}>
              {TAGS.map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px', borderRadius: 'var(--r-sm)',
                  background: 'var(--surface-up)', border: '1px solid var(--border)',
                  fontSize: '0.72rem', fontFamily: 'var(--font-mono)',
                  color: 'var(--text-3)', fontWeight: 600,
                  letterSpacing: '0.02em',
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: numbered highlight cards */}
          <motion.div {...up(0.18)} style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {HIGHLIGHTS.map((h, i) => (
              <HighlightRow key={h.n} item={h} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HighlightRow = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ backgroundColor: 'var(--surface-up)' }}
      style={{
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
        padding: '1.35rem 1.4rem',
        borderRadius: 'var(--r-lg)',
        border: '1px solid transparent',
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${item.color}25`;
        e.currentTarget.style.background = 'var(--surface-up)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {/* Number */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
        color: item.color, fontWeight: 700, opacity: 0.6,
        paddingTop: '3px', letterSpacing: '0.06em', flexShrink: 0,
      }}>{item.n}</span>

      {/* Icon */}
      <div style={{
        flexShrink: 0, width: '34px', height: '34px', borderRadius: '8px',
        background: `${item.color}14`, border: `1px solid ${item.color}25`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color, marginTop: '2px',
      }}>{item.icon}</div>

      {/* Text */}
      <div style={{ minWidth: 0 }}>
        <h4 style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: '0.35rem', fontSize: '0.88rem' }}>
          {item.title}
        </h4>
        <p style={{ color: 'var(--text-3)', fontSize: '0.8rem', lineHeight: 1.7 }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
