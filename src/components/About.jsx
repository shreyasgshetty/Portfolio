import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';

const ABOUT_HIGHLIGHTS = [
  {
    icon: <FiCode size={20} />,
    title: 'Software Engineering',
    desc: 'Passionate about software engineering with Java, emphasizing clean architecture, efficient algorithms, and robust application development.'
  },
  {
    icon: <FiLayers size={20} />,
    title: 'Full-Stack Development',
    desc: 'I build web applications using React, Node.js, Express.js, and MongoDB. I have worked on a few projects from scratch to deployment.',
  },
  {
    icon: <FiDatabase size={20} />,
    title: 'Backend & APIs',
    desc: 'I have experience building RESTful APIs with Node.js, handling authentication, and working with databases like MongoDB and MySQL.',
  },
  {
    icon: <FiCpu size={20} />,
    title: 'Machine Learning',
    desc: 'I have worked on ML projects involving data analysis and classification models using Scikit-learn, Pandas, and NumPy.',
  },
];

/**
 * About section with animated highlight cards and professional summary.
 */
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  };

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }} ref={ref}>
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-200px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>

            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F1F5F9' }}>
              Who I Am
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Left: Text block */}
            <motion.div variants={fadeUp}>
              <div className="glass-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative corner */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle at top right, rgba(6, 182, 212, 0.1), transparent)',
                  pointerEvents: 'none',
                }} />

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#F1F5F9', marginBottom: '1.25rem' }}>
                  CS Student &{' '}
                  <span className="gradient-text">Full-Stack Developer</span>
                </h3>

                <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                  I'm a Computer Science student at <span style={{ color: '#F1F5F9', fontWeight: 600 }}>PES University</span>. I enjoy building things with code and have a particular interest in <span style={{ color: '#06B6D4', fontWeight: 500 }}>Full Stack Development and Software Engineering.</span>
                </p>

                <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                  I build web applications using the <span style={{ color: '#06B6D4', fontWeight: 500 }}>MERN stack</span> — working with Node.js and MongoDB on the backend, and React with Tailwind CSS on the frontend.
                </p>

                <p style={{ color: '#94A3B8', lineHeight: 1.85, fontSize: '0.97rem' }}>
                  I also have some experience with <span style={{ color: '#06B6D4', fontWeight: 500 }}>Machine Learning</span> — I worked on ML projects involving data analysis and classification algorithms using Scikit-learn, Pandas, and NumPy.
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.75rem' }}>
                  {['Java', 'DSA', 'MERN Stack', 'Machine Learning', 'Problem Solving', 'System Design'].map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Highlight cards */}
            <motion.div variants={containerVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ABOUT_HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    background: 'rgba(15, 20, 35, 0.5)',
                    border: '1px solid rgba(6, 182, 212, 0.1)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    cursor: 'default',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.35)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.1)'}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#06B6D4',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#F1F5F9', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
