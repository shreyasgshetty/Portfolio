import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiBook, FiCalendar } from 'react-icons/fi';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'PES University',
    duration: '2023 – 2027',
    status: 'In Progress',
    color: '#06B6D4',
    coursework: [
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Machine Learning',
      'Computer Networks',
      'OOP with Java',
      'Web Development',
    ],
  },
  {
    degree: 'Pre-University (11th & 12th)',
    field: 'Science (PCMB)',
    institution: 'Sri Sathya Sai Loka Seva P U College, Alike',
    duration: '2021 – 2023',
    status: 'Completed',
    color: '#3B82F6',
    coursework: [],
  },
  {
    degree: 'School (Up to 10th)',
    field: null,
    institution: 'Sri Sai Angels, Chikmagaluru',
    duration: null,
    status: 'Completed',
    color: '#8B5CF6',
    coursework: [],
  },
];

/**
 * Education section showing university, pre-university, and school.
 */
const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  });

  return (
    <section id="education" style={{ padding: '6rem 0', background: 'rgba(15, 20, 35, 0.3)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#06B6D4', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            // background
          </p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F1F5F9' }}>
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '760px', margin: '0 auto' }}>
          {EDUCATION.map((item, i) => (
            <motion.div
              key={item.institution}
              {...fadeUp(0.1 + i * 0.15)}
            >
              <div className="glass-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: `linear-gradient(to bottom, ${item.color}, ${item.color}55)`,
                  borderRadius: '0 0 0 16px',
                }} />

                <div style={{ paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F1F5F9', lineHeight: 1.3 }}>
                        {item.degree}
                      </h4>
                      {item.field && (
                        <p style={{ color: item.color, fontWeight: 600, fontSize: '0.88rem', marginTop: '3px' }}>
                          {item.field}
                        </p>
                      )}
                    </div>
                    <span style={{
                      background: item.status === 'In Progress'
                        ? 'rgba(6, 182, 212, 0.12)'
                        : 'rgba(139, 92, 246, 0.12)',
                      border: `1px solid ${item.status === 'In Progress' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                      color: item.status === 'In Progress' ? '#06B6D4' : '#A78BFA',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '100px',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.status}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                    <FiBook size={13} style={{ color: '#94A3B8', flexShrink: 0 }} />
                    <p style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.9rem' }}>
                      {item.institution}
                    </p>
                  </div>

                  {item.duration && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.83rem' }}>
                      <FiCalendar size={13} />
                      <span>{item.duration}</span>
                    </div>
                  )}

                  {item.coursework.length > 0 && (
                    <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <h5 style={{ color: '#94A3B8', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                        Key Coursework
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.coursework.map((course) => (
                          <span key={course} style={{
                            fontSize: '0.74rem',
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#CBD5E1',
                          }}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
