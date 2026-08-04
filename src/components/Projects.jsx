import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiGithub, FiExternalLink, FiShoppingCart, FiUsers, FiPackage, FiActivity, FiBarChart2 } from 'react-icons/fi';

// Each project has its own accent hex — drives border, icon, badges, hover tint
const PROJECTS = [
  {
    id: 'urban-vault',
    title: 'UrbanVault',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform featuring secure Firebase authentication, admin dashboard, product management, wishlist, shopping cart, seamless checkout flow, order management, and Razorpay payment integration, also delivery management and seller management in single platform.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Razorpay', 'Tailwind CSS'],
    github: 'https://github.com/shreyasgshetty/urban_vault',
    live: null,
    icon: FiShoppingCart,
    accent: '#06B6D4',   // cyan
    features: ['Admin Dashboard', 'Razorpay Payments', 'Firebase Auth', 'Order Management'],
  },
  {
    id: 'crm-system',
    title: 'CRM System',
    subtitle: 'Customer Relationship Management',
    description:
      'A comprehensive CRM platform for managing customers, leads, and business workflows. Includes full authentication, CRUD operations across all modules, dashboard analytics, and interaction history tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shreyasgshetty/crm',
    live: null,
    icon: FiUsers,
    accent: '#A78BFA',   // soft violet
    features: ['Lead Management', 'Analytics Dashboard', 'Customer Tracking', 'Auth System'],
  },
  {
    id: 'online-marketplace',
    title: 'Trade Nest',
    subtitle: 'Buy & Sell Platform',
    description:
      'A buy-and-sell marketplace application with auction based system with and secure payment system using razorpayand also secure authentication, structured product listings, categories, advanced search functionality, a responsive UI, and a scalable backend architecture.',
    tech: ['Java', 'Spring Boot', 'RazorPay', 'MongoDB'],
    github: 'https://github.com/shreyasgshetty/online-marketplace',
    live: null,
    icon: FiPackage,
    accent: '#34D399',   // emerald
    features: ['Product Listings', 'Category Filters', 'Search Functionality', 'Responsive UI'],
  },
  {
    id: 'cricpulz',
    title: 'CricPulz',
    subtitle: 'Live Cricket Analytics',
    description:
      'A live cricket analytics platform displaying real-time scores, upcoming fixtures, player statistics, points tables, and detailed match insights powered by REST APIs.',
    tech: ['MongoDB', 'React', 'REST APIs', 'Node.js'],
    github: 'https://github.com/shreyasgshetty/cricpulz',
    live: null,
    icon: FiActivity,
    accent: '#FBBF24',   // amber
    features: ['Live Scores', 'Player Stats', 'Points Table', 'Match Insights'],
  },
  {
    id: 'coral-predictor',
    title: 'Coral Regime Predictor',
    subtitle: 'Data Science & ML',
    description:
      'A machine learning project predicting coral reef bleaching severity using environmental and oceanographic data. Implemented Logistic Regression, SVM, and Random Forest with full preprocessing, evaluation metrics, confusion matrices, and feature importance visualization.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/shreyasgshetty/Coral-Regime-Predictor',
    live: null,
    icon: FiBarChart2,
    accent: '#38BDF8',   // sky blue
    features: ['Logistic Regression', 'SVM & Random Forest', 'Feature Importance', 'Data Visualization'],
  },
];

// Converts hex to rgba — used for tinted card backgrounds and borders
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Horizontal project card — per-project accent color drives all decorative elements.
 */
const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const { accent } = project;

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="project-row-card"
      style={{
        background: '#0F172A',
        border: `1px solid ${hexToRgba(accent, 0.22)}`,
        borderLeft: `3px solid ${hexToRgba(accent, 0.7)}`,
        borderRadius: '12px',
        padding: '1.75rem 2rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        background: '#131f35',
        borderLeftColor: accent,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      {/* Subtle glow spot top-right */}
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        background: hexToRgba(accent, 0.06),
        pointerEvents: 'none',
        filter: 'blur(30px)',
      }} />

      {/* Left — icon block */}
      <div style={{ flexShrink: 0, paddingTop: '2px', position: 'relative' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: hexToRgba(accent, 0.12),
          border: `1px solid ${hexToRgba(accent, 0.28)}`,
          color: accent,
        }}>
          <project.icon size={20} />
        </div>
      </div>

      {/* Right — content */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', position: 'relative' }}>

        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#E2E8F0', margin: 0 }}>
            {project.title}
          </h3>
          <span style={{
            fontSize: '0.73rem',
            color: accent,
            fontWeight: 500,
            background: hexToRgba(accent, 0.1),
            padding: '2px 10px',
            borderRadius: '100px',
            border: `1px solid ${hexToRgba(accent, 0.22)}`,
            whiteSpace: 'nowrap',
          }}>
            {project.subtitle}
          </span>
        </div>

        {/* Description */}
        <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.75, margin: 0 }}>
          {project.description}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.features.map((f) => (
            <span key={f} style={{
              fontSize: '0.72rem',
              padding: '3px 10px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              color: '#94A3B8',
              fontWeight: 500,
            }}>
              {f}
            </span>
          ))}
        </div>

        {/* Bottom row: tech + actions */}
        <div className="project-card-bottom">
          {/* Tech badges — tinted with accent */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                fontSize: '0.7rem',
                padding: '2px 9px',
                borderRadius: '4px',
                background: hexToRgba(accent, 0.07),
                border: `1px solid ${hexToRgba(accent, 0.2)}`,
                color: accent,
                fontWeight: 500,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.45rem 1rem',
                borderRadius: '7px',
                border: `1px solid ${hexToRgba(accent, 0.3)}`,
                background: hexToRgba(accent, 0.07),
                color: accent,
                fontWeight: 600,
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <FiGithub size={14} />
              <span>GitHub</span>
            </motion.a>

            {project.live && (
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.45rem 1rem',
                  borderRadius: '7px',
                  border: `1px solid ${hexToRgba(accent, 0.4)}`,
                  background: hexToRgba(accent, 0.12),
                  color: accent,
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <FiExternalLink size={14} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/**
 * Projects section — full-width horizontal list layout.
 */
const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F1F5F9' }}>
            Featured Projects
          </h2>
          <p style={{ color: '#64748B', marginTop: '1rem', maxWidth: '520px', margin: '1rem auto 0', fontSize: '0.95rem' }}>
            A selection of projects demonstrating full-stack development and data science skills.
          </p>
        </motion.div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
