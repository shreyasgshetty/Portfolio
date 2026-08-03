import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 'urban-vault',
    title: 'UrbanVault',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform featuring secure Firebase authentication, admin dashboard, product management, wishlist, shopping cart, seamless checkout flow, order management, and Razorpay payment integration.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Razorpay', 'Tailwind CSS'],
    github: 'https://github.com/shreyasgshetty/urban_vault',
    live: null,
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    icon: '🛒',
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
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    icon: '📊',
    features: ['Lead Management', 'Analytics Dashboard', 'Customer Tracking', 'Auth System'],
  },
  {
    id: 'online-marketplace',
    title: 'Online Marketplace',
    subtitle: 'Buy & Sell Platform',
    description:
      'A buy-and-sell marketplace application with secure authentication, structured product listings, categories, advanced search functionality, a responsive UI, and a scalable backend architecture.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shreyasgshetty/online-marketplace',
    live: null,
    gradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
    icon: '🏪',
    features: ['Product Listings', 'Category Filters', 'Search Functionality', 'Responsive UI'],
  },
  {
    id: 'cricpulz',
    title: 'CricPulz',
    subtitle: 'Live Cricket Analytics',
    description:
      'A live cricket analytics platform displaying real-time scores, upcoming fixtures, player statistics, points tables, and detailed match insights powered by REST APIs.',
    tech: ['React', 'REST APIs', 'Node.js', 'CSS'],
    github: 'https://github.com/shreyasgshetty/cricpulz',
    live: null,
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    icon: '🏏',
    features: ['Live Scores', 'Player Stats', 'Points Table', 'Match Insights'],
  },
  {
    id: 'coral-predictor',
    title: 'Coral Regime Predictor',
    subtitle: 'Machine Learning Project',
    description:
      'A machine learning project predicting coral reef bleaching severity using environmental and oceanographic data. Implemented Logistic Regression, SVM, and Random Forest with full preprocessing, evaluation metrics, confusion matrices, and feature importance visualization.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/shreyasgshetty',
    live: null,
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 100%)',
    icon: '🐠',
    features: ['Logistic Regression', 'SVM & Random Forest', 'Feature Importance', 'Data Visualization'],
  },
];

/**
 * Individual project card with gradient header, tech badges, features, and action buttons.
 */
const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Card header with gradient */}
      <div
        style={{
          background: project.gradient,
          padding: '1.75rem',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '140px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Noise texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }} />

        {/* Icon */}
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem', position: 'relative' }}>{project.icon}</div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, position: 'relative' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginTop: '2px', position: 'relative' }}>
          {project.subtitle}
        </p>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
        {/* Description */}
        <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.75 }}>
          {project.description}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.features.map((f) => (
            <span key={f} style={{
              fontSize: '0.72rem',
              padding: '3px 10px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#CBD5E1',
              fontWeight: 500,
            }}>
              {f}
            </span>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '0.5rem' }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.55rem 1.1rem',
              borderRadius: '8px',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              background: 'rgba(6, 182, 212, 0.06)',
              color: '#06B6D4',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
          >
            <FiGithub size={15} />
            <span>GitHub</span>
          </motion.a>

          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <FiExternalLink size={15} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

/**
 * Projects section with responsive grid of project cards.
 */
const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#06B6D4', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            // my work
          </p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F1F5F9' }}>
            Featured Projects
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '1rem', maxWidth: '520px', margin: '1rem auto 0', fontSize: '0.97rem' }}>
            A selection of projects that demonstrate my skills across full-stack development and machine learning.
          </p>
        </motion.div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
