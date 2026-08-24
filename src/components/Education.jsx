import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCalendar, FiCheckCircle, FiClock } from 'react-icons/fi';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'PES University',
    duration: '2023 – 2027',
    status: 'In Progress',
    color: '#7C3AED',
    year: '2023',
    coursework: ['Data Structures','DBMS','Operating Systems','Machine Learning','Computer Networks','Digital Forensic','OOP with Java','Web Development'],
  },
  {
    degree: 'Pre-University (11th & 12th)',
    field: 'Science (PCMB)',
    institution: 'Sri Sathya Sai Loka Seva P U College, Alike',
    duration: '2021 – 2023',
    status: 'Completed',
    color: '#F59E0B',
    year: '2021',
    coursework: [],
  },
  {
    degree: 'School (Up to 10th)',
    field: null,
    institution: 'Sri Sai Angels, Chikmagaluru',
    duration: null,
    status: 'Completed',
    color: '#10B981',
    year: '—',
    coursework: [],
  },
];

const hexRgba = (hex, a) => {
  if (!hex.startsWith('#')) return hex;
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
};

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [mobile, setMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const h = () => setMobile(window.innerWidth < 600);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  return (
    <section id="education" ref={ref} style={{ position: 'relative', padding: '8rem 0', background: 'var(--bg)' }}>
      {/* Bottom left amber glow */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '-6%',
        width: '35vw', height: '35vw', maxWidth: '440px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="eyebrow">Background</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
            Education
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div style={{ maxWidth: '740px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: mobile ? '5px' : '7rem',
              top: '24px',
              bottom: '24px',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--border-accent), rgba(124,58,237,0.04))',
              transformOrigin: 'top',
            }}
          />

          {EDUCATION.map((item, i) => (
            <TimelineEntry key={item.institution} item={item} index={i} inView={inView} mobile={mobile} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineEntry = ({ item, index, inView, mobile }) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.25 + index * 0.15 }}
    style={{
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '7rem 1fr',
      gap: 0,
      position: 'relative',
    }}
  >
    {/* Year column — hidden on mobile */}
    {!mobile && (
      <div style={{
        paddingTop: '1.75rem',
        paddingRight: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem', fontWeight: 700,
          color: item.color, letterSpacing: '0.04em',
        }}>{item.year}</span>
      </div>
    )}

    {/* Card column */}
    <div style={{
      paddingLeft: mobile ? '1.5rem' : '2rem',
      paddingBottom: '2rem',
      position: 'relative',
    }}>
      {/* Dot */}
      <div style={{
        position: 'absolute',
        left: mobile ? '-5px' : '-5px',
        top: '1.85rem',
        width: '10px', height: '10px',
        borderRadius: '50%',
        background: item.color,
        boxShadow: `0 0 12px ${hexRgba(item.color, 0.6)}`,
        zIndex: 2,
      }} />

      {/* Year label on mobile */}
      {mobile && (
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem', fontWeight: 700,
          color: item.color, letterSpacing: '0.04em',
          marginBottom: '6px', paddingTop: '1.75rem',
        }}>{item.year}</span>
      )}

      {/* Card */}
      <motion.div
        whileHover={{ borderColor: hexRgba(item.color, 0.35) }}
        style={{
          background: 'var(--surface)',
          border: `1px solid ${hexRgba(item.color, 0.15)}`,
          borderRadius: 'var(--r-lg)',
          padding: '1.5rem 1.75rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.2s',
        }}
      >
        {/* Left color strip */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '3px', height: '100%',
          background: `linear-gradient(to bottom, ${item.color}, ${hexRgba(item.color, 0.15)})`,
        }} />

        <div style={{ paddingLeft: '0.75rem' }}>
          {/* Top row */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem',
            marginBottom: '0.75rem',
          }}>
            <div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.05rem',
                fontWeight: 700, color: 'var(--text-1)',
                letterSpacing: '-0.01em', lineHeight: 1.2,
              }}>
                {item.degree}
              </h4>
              {item.field && (
                <p style={{ color: item.color, fontWeight: 600, fontSize: '0.82rem', marginTop: '3px' }}>
                  {item.field}
                </p>
              )}
            </div>
            {/* Status badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '3px 10px', borderRadius: '100px',
              background: hexRgba(item.color, 0.08),
              border: `1px solid ${hexRgba(item.color, 0.22)}`,
              color: item.color,
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}>
              {item.status === 'In Progress' ? <FiClock size={10} /> : <FiCheckCircle size={10} />}
              {item.status}
            </span>
          </div>

          <p style={{ color: 'var(--text-2)', fontWeight: 600, fontSize: '0.875rem', marginBottom: item.duration ? '4px' : 0 }}>
            {item.institution}
          </p>

          {item.duration && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-3)', fontSize: '0.78rem' }}>
              <FiCalendar size={11} />
              <span>{item.duration}</span>
            </div>
          )}

          {item.coursework.length > 0 && (
            <div style={{ marginTop: '1.1rem', paddingTop: '1.1rem', borderTop: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-3)', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Key Coursework
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {item.coursework.map(c => (
                  <span key={c} style={{
                    fontSize: '0.7rem', padding: '2px 9px',
                    borderRadius: 'var(--r-sm)',
                    background: 'var(--surface-up)', border: '1px solid var(--border)',
                    color: 'var(--text-3)',
                  }}>{c}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default Education;
