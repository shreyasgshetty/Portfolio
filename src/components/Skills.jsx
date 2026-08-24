import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaFire, FaSearch,
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiPostman, SiLinux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

/* ── All skills data — unchanged ─────────────────────────────── */
const CATS = [
  {
    id: 'lang',
    title: 'Languages',
    accent: '#F59E0B',
    items: [
      { name: 'Java',       icon: FaJava },
      { name: 'Python',     icon: FaPython },
      { name: 'JavaScript', icon: FaJs },
    ],
    span: 4, // grid column span (out of 12)
  },
  {
    id: 'back',
    title: 'Backend',
    accent: '#7C3AED',
    items: [
      { name: 'Node.js',    icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs',  icon: TbApi },
    ],
    span: 4,
  },
  {
    id: 'db',
    title: 'Database',
    accent: '#10B981',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL',   icon: SiMysql },
    ],
    span: 4,
  },
  {
    id: 'front',
    title: 'Frontend',
    accent: '#60A5FA',
    items: [
      { name: 'React',        icon: FaReact },
      { name: 'HTML',         icon: FaHtml5 },
      { name: 'CSS',          icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    span: 6,
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    accent: '#F87171',
    items: [
      { name: 'Git',                  icon: FaGitAlt },
      { name: 'GitHub',               icon: FaGithub },
      { name: 'Firebase',             icon: FaFire },
      { name: 'Postman',              icon: SiPostman },
      { name: 'Autopsy',              icon: FaSearch },
      { name: 'Linux Forensic Tools', icon: SiLinux },
    ],
    span: 6,
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.06 });
  const [narrow, setNarrow] = useState(window.innerWidth < 900);
  const [xnarrow, setXnarrow] = useState(window.innerWidth < 580);
  useEffect(() => {
    const h = () => { setNarrow(window.innerWidth < 900); setXnarrow(window.innerWidth < 580); };
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  // Responsive col span for bento cells
  const span = (desktopSpan) => {
    if (xnarrow) return 12;
    if (narrow) return 6;
    return desktopSpan;
  };

  return (
    <section id="skills" ref={ref} style={{ position: 'relative', padding: '8rem 0', background: 'var(--bg)' }}>

      {/* Left violet glow */}
      <div style={{
        position: 'absolute', bottom: '20%', left: '-6%',
        width: '35vw', height: '35vw', maxWidth: '440px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="eyebrow">Technical Skills</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Skills & Technologies
          </h2>
          <p style={{ color: 'var(--text-3)', maxWidth: '440px', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Technologies I've worked with and am passionate about.
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        {/* Row 1: Languages (4) Backend (4) Database (4) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
          {CATS.slice(0, 3).map((cat, i) => (
            <BentoCell key={cat.id} cat={cat} index={i} inView={inView} colSpan={span(4)} />
          ))}
        </div>

        {/* Row 2: Frontend (6) Tools (6) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem' }}>
          {CATS.slice(3).map((cat, i) => (
            <BentoCell key={cat.id} cat={cat} index={i + 3} inView={inView} colSpan={span(6)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoCell = ({ cat, index, inView, colSpan }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    style={{
      gridColumn: `span ${colSpan}`,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = `${cat.accent}30`; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
  >
    {/* Category glow spot */}
    <div style={{
      position: 'absolute', top: 0, right: 0,
      width: '80px', height: '80px', borderRadius: '50%',
      background: `radial-gradient(circle at top right, ${cat.accent}10, transparent)`,
      pointerEvents: 'none',
    }} />

    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.1rem' }}>
      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: cat.accent, boxShadow: `0 0 8px ${cat.accent}88`, flexShrink: 0 }} />
      <span style={{
        fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
        color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>
        {cat.title}
      </span>
    </div>

    {/* Chips */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {cat.items.map((item, i) => (
        <Chip key={item.name} item={item} accent={cat.accent} delay={index * 0.06 + i * 0.05} inView={inView} />
      ))}
    </div>
  </motion.div>
);

const Chip = ({ item, accent, delay, inView }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -2, borderColor: `${accent}55`, color: accent }}
      style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        padding: '0.5rem 0.85rem',
        borderRadius: 'var(--r-md)',
        background: 'var(--surface-up)',
        border: '1px solid var(--border)',
        cursor: 'default',
        transition: 'all 0.2s ease',
        color: 'var(--text-2)',
      }}
    >
      <span style={{ fontSize: '1rem', color: accent, lineHeight: 1, flexShrink: 0 }}><Icon /></span>
      <span style={{ fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-sans)', color: 'inherit', whiteSpace: 'nowrap' }}>
        {item.name}
      </span>
    </motion.div>
  );
};

export default Skills;
