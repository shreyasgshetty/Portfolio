import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { FiShoppingCart, FiUsers, FiPackage, FiActivity, FiBarChart2 } from 'react-icons/fi';

/* ── Project data — unchanged ────────────────────────────────── */
const PROJECTS = [
  {
    id: 'urban-vault', num: '01',
    title: 'UrbanVault',
    subtitle: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform featuring secure Firebase authentication, admin dashboard, product management, wishlist, shopping cart, seamless checkout flow, order management, and Razorpay payment integration, also delivery management and seller management in single platform.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Razorpay', 'Tailwind CSS'],
    github: 'https://github.com/shreyasgshetty/urban_vault',
    live: null,
    icon: FiShoppingCart,
    features: ['Admin Dashboard', 'Razorpay Payments', 'Firebase Auth', 'Order Management'],
    accent: '#7C3AED',
    motif: 'e-commerce',
  },
  {
    id: 'crm-system', num: '02',
    title: 'CRM System',
    subtitle: 'Customer Relationship Management',
    description: 'A comprehensive CRM platform for managing customers, leads, and business workflows. Includes full authentication, CRUD operations across all modules, dashboard analytics, and interaction history tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shreyasgshetty/crm',
    live: null,
    icon: FiUsers,
    features: ['Lead Management', 'Analytics Dashboard', 'Customer Tracking', 'Auth System'],
    accent: '#F59E0B',
    motif: 'dashboard',
  },
  {
    id: 'online-marketplace', num: '03',
    title: 'Trade Nest',
    subtitle: 'Buy & Sell Platform',
    description: 'A buy-and-sell marketplace application with auction based system and secure payment system using Razorpay, secure authentication, structured product listings, categories, advanced search functionality, a responsive UI, and a scalable backend architecture.',
    tech: ['Java', 'Spring Boot', 'RazorPay', 'MongoDB'],
    github: 'https://github.com/shreyasgshetty/online-marketplace',
    live: null,
    icon: FiPackage,
    features: ['Product Listings', 'Category Filters', 'Search Functionality', 'Responsive UI'],
    accent: '#10B981',
    motif: 'marketplace',
  },
  {
    id: 'cricpulz', num: '04',
    title: 'CricPulz',
    subtitle: 'Live Cricket Analytics',
    description: 'A live cricket analytics platform displaying real-time scores, upcoming fixtures, player statistics, points tables, and detailed match insights powered by REST APIs.',
    tech: ['MongoDB', 'React', 'REST APIs', 'Node.js'],
    github: 'https://github.com/shreyasgshetty/cricpulz',
    live: null,
    icon: FiActivity,
    features: ['Live Scores', 'Player Stats', 'Points Table', 'Match Insights'],
    accent: '#60A5FA',
    motif: 'analytics',
  },
  {
    id: 'coral-predictor', num: '05',
    title: 'Coral Regime Predictor',
    subtitle: 'Data Science & ML',
    description: 'A machine learning project predicting coral reef bleaching severity using environmental and oceanographic data. Implemented Logistic Regression, SVM, and Random Forest with full preprocessing, evaluation metrics, confusion matrices, and feature importance visualization.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/shreyasgshetty/Coral-Regime-Predictor',
    live: null,
    icon: FiBarChart2,
    features: ['Logistic Regression', 'SVM & Random Forest', 'Feature Importance', 'Data Visualization'],
    accent: '#A78BFA',
    motif: 'ml',
  },
];

const rgba = (hex, a) => {
  const r = parseInt(hex.replace('#','').slice(0,2),16);
  const g = parseInt(hex.replace('#','').slice(2,4),16);
  const b = parseInt(hex.replace('#','').slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
};

/* ─── Abstract visual motif per project ─────────────────────── */
const ProjectMotif = ({ motif, accent }) => {
  if (motif === 'e-commerce') return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Shopping grid pattern */}
      {[0,1,2].map(row => (
        <div key={row} style={{ position: 'absolute', display: 'flex', gap: '6px', top: `${20 + row * 26}%`, left: '50%', transform: 'translateX(-50%)' }}>
          {[0,1,2,3].map(col => (
            <div key={col} style={{ width: '18px', height: '22px', borderRadius: '3px', background: rgba(accent, 0.06 + Math.random()*0.08), border: `1px solid ${rgba(accent,0.15)}` }} />
          ))}
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '15%', right: '20%', width: '32px', height: '32px', borderRadius: '50%', background: rgba(accent,0.12), border: `2px solid ${rgba(accent,0.3)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, fontSize: '0.9rem' }}>$</div>
    </div>
  );

  if (motif === 'dashboard') return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      {/* Bar chart */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '70%' }}>
        {[65,40,80,55,70,45,90].map((h, i) => (
          <div key={i} style={{ width: '10px', height: `${h}%`, borderRadius: '3px 3px 0 0', background: rgba(accent, 0.1 + i*0.06), border: `1px solid ${rgba(accent,0.2)}` }} />
        ))}
      </div>
    </div>
  );

  if (motif === 'marketplace') return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {[{x:30,y:30,s:22},{x:60,y:50,s:18},{x:40,y:65,s:20},{x:70,y:25,s:16}].map((n,i) => (
        <div key={i} style={{ position: 'absolute', left:`${n.x}%`, top:`${n.y}%`, width:`${n.s}px`, height:`${n.s}px`, borderRadius:'4px', background:rgba(accent,0.08), border:`1px solid ${rgba(accent,0.2)}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.5rem', color:accent }}>↕</div>
      ))}
    </div>
  );

  if (motif === 'analytics') return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      {/* Line graph */}
      <svg viewBox="0 0 100 60" style={{ width: '80%', height: '60%' }}>
        <polyline points="5,55 20,35 35,45 50,15 65,30 80,10 95,20" fill="none" stroke={rgba(accent,0.5)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="5,55 20,35 35,45 50,15 65,30 80,10 95,20" fill={rgba(accent,0.06)} strokeWidth="0" />
        {[20,35,50,65,80].map((x,i) => (
          <circle key={i} cx={x} cy={[35,45,15,30,10][i]} r="3" fill={accent} opacity="0.7" />
        ))}
      </svg>
    </div>
  );

  if (motif === 'ml') return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Neural net */}
      {[{x:20,ys:[25,50,75]},{x:50,ys:[15,35,55,75]},{x:80,ys:[30,60]}].map((col,ci) => (
        col.ys.map((y,ri) => (
          <div key={`${ci}-${ri}`} style={{ position:'absolute', left:`${col.x}%`, top:`${y}%`, width:'10px', height:'10px', borderRadius:'50%', background:rgba(accent,0.12), border:`1px solid ${rgba(accent,0.35)}`, transform:'translate(-50%,-50%)' }} />
        ))
      ))}
      {/* Connection lines via svg */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
        {[
          [20,25,50,15],[20,25,50,35],[20,50,50,35],[20,50,50,55],[20,75,50,55],[20,75,50,75],
          [50,15,80,30],[50,35,80,30],[50,55,80,60],[50,75,80,60],
        ].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke={rgba(accent,0.18)} strokeWidth="1" />
        ))}
      </svg>
    </div>
  );

  return null;
};

/* ─── Featured card (UrbanVault) ─────────────────────────────── */
const FeaturedCard = ({ project }) => {
  const [ref, inView] = useInView({ threshold: 0.06 });
  const { accent } = project;
  const Icon = project.icon;

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${rgba(accent, 0.2)}`,
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1rem',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = rgba(accent, 0.4);
        e.currentTarget.style.boxShadow = `0 0 60px ${rgba(accent, 0.08)}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = rgba(accent, 0.2);
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${accent}, ${rgba(accent, 0.2)}, transparent)` }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        minHeight: '260px',
      }}>
        {/* Content */}
        <div style={{ padding: '2.25rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: rgba(accent, 0.1), border: `1px solid ${rgba(accent, 0.25)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, flexShrink: 0 }}>
                <Icon size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: rgba(accent, 0.7), fontWeight: 700, letterSpacing: '0.12em', display: 'block', marginBottom: '4px' }}>
                  {project.num} / FEATURED
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {project.title}
                </h3>
                <span style={{ fontSize: '0.73rem', color: accent, fontWeight: 500 }}>{project.subtitle}</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-3)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
              {project.features.map(f => (
                <span key={f} style={{ fontSize: '0.7rem', padding: '3px 10px', borderRadius: '100px', background: rgba(accent, 0.06), border: `1px solid ${rgba(accent, 0.18)}`, color: accent, fontWeight: 500 }}>{f}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontSize: '0.66rem', padding: '2px 8px', borderRadius: 'var(--r-sm)', background: 'var(--surface-up)', border: '1px solid var(--border)', color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <ActionBtn href={project.github} icon={<FiGithub size={14} />} label="GitHub" accent={accent} />
              {project.live && <ActionBtn href={project.live} icon={<FiExternalLink size={14} />} label="Live" accent={accent} filled />}
            </div>
          </div>
        </div>

        {/* Visual motif panel */}
        <div style={{
          background: rgba(accent, 0.03),
          borderLeft: `1px solid ${rgba(accent, 0.1)}`,
          position: 'relative',
          minHeight: '200px',
          overflow: 'hidden',
        }}>
          {/* Glow */}
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, ${rgba(accent, 0.1)}, transparent 60%)`, pointerEvents: 'none' }} />
          <ProjectMotif motif={project.motif} accent={accent} />
          {/* Large faded number */}
          <div style={{
            position: 'absolute', bottom: '0.5rem', right: '1.25rem',
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: '5rem', lineHeight: 1,
            color: rgba(accent, 0.06),
            userSelect: 'none',
          }}>{project.num}</div>
        </div>
      </div>
    </motion.article>
  );
};

/* ─── Grid card ──────────────────────────────────────────────── */
const GridCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.06 });
  const { accent } = project;
  const Icon = project.icon;

  return (
    <motion.article
      ref={ref}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: 'easeOut' }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = rgba(accent, 0.35);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 16px 48px ${rgba(accent, 0.08)}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Motif strip */}
      <div style={{ height: '80px', background: rgba(accent, 0.04), borderBottom: `1px solid ${rgba(accent, 0.1)}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 80% 20%, ${rgba(accent, 0.12)}, transparent 60%)` }} />
        <ProjectMotif motif={project.motif} accent={accent} />
        {/* Number */}
        <div style={{ position: 'absolute', top: '0.6rem', left: '0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, color: rgba(accent, 0.6), letterSpacing: '0.08em' }}>{project.num}</div>
      </div>

      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {/* Title row */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: rgba(accent, 0.1), border: `1px solid ${rgba(accent, 0.22)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, flexShrink: 0 }}>
            <Icon size={16} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-1)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{project.title}</h3>
            <span style={{ fontSize: '0.7rem', color: accent, fontWeight: 500 }}>{project.subtitle}</span>
          </div>
        </div>

        <p style={{ color: 'var(--text-3)', fontSize: '0.81rem', lineHeight: 1.75, flex: 1 }}>{project.description}</p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {project.features.map(f => (
            <span key={f} style={{ fontSize: '0.67rem', padding: '2px 8px', borderRadius: '100px', background: rgba(accent, 0.06), border: `1px solid ${rgba(accent, 0.15)}`, color: accent, fontWeight: 500 }}>{f}</span>
          ))}
        </div>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontSize: '0.64rem', padding: '2px 7px', borderRadius: 'var(--r-sm)', background: 'var(--surface-up)', border: '1px solid var(--border)', color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '7px', paddingTop: '0.25rem' }}>
          <ActionBtn href={project.github} icon={<FiGithub size={13} />} label="GitHub" accent={accent} />
          {project.live && <ActionBtn href={project.live} icon={<FiExternalLink size={13} />} label="Live" accent={accent} filled />}
        </div>
      </div>
    </motion.article>
  );
};

const ActionBtn = ({ href, icon, label, accent, filled }) => {
  const bg = filled ? accent : 'transparent';
  const border = rgba(accent, filled ? 1 : 0.3);
  const color = filled ? '#fff' : accent;
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        padding: '0.4rem 0.9rem', borderRadius: '7px',
        background: filled ? rgba(accent, 0.9) : rgba(accent, 0.06),
        border: `1px solid ${border}`, color, fontWeight: 600,
        fontSize: '0.76rem', textDecoration: 'none', transition: 'all 0.18s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = rgba(accent, filled ? 1 : 0.14); }}
      onMouseLeave={e => { e.currentTarget.style.background = rgba(accent, filled ? 0.9 : 0.06); }}
    >
      {icon} {label}
    </motion.a>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.04 });
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" ref={ref} style={{ position: 'relative', padding: '8rem 0', background: 'var(--bg-alt)' }}>
      {/* Right glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '-8%',
        width: '40vw', height: '40vw', maxWidth: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="eyebrow">Work</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-3)', maxWidth: '460px', fontSize: '0.9rem', lineHeight: 1.7 }}>
            A selection of projects demonstrating full-stack development and data science skills.
          </p>
        </motion.div>

        {/* Featured */}
        <FeaturedCard project={featured} />

        {/* Grid */}
        <div className="projects-grid">
          {rest.map((p, i) => (
            <GridCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
