import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaHtml5, FaCss3Alt, FaFire,
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiScikitlearn, SiPandas, SiNumpy, SiPostman,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { FiBarChart2 } from 'react-icons/fi';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    color: '#06B6D4',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 78 },
      { name: 'Python', icon: <FaPython />, level: 68 },
      { name: 'JavaScript', icon: <FaJs />, level: 72 },
      { name: 'SQL', icon: <FaDatabase />, level: 65 },
    ],
  },
  {
    title: 'Frontend',
    color: '#3B82F6',
    skills: [
      { name: 'React', icon: <FaReact />, level: 74 },
      { name: 'HTML', icon: <FaHtml5 />, level: 80 },
      { name: 'CSS', icon: <FaCss3Alt />, level: 75 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 72 },
    ],
  },
  {
    title: 'Backend',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 68 },
      { name: 'Express.js', icon: <SiExpress />, level: 65 },
      { name: 'REST APIs', icon: <TbApi />, level: 70 },
    ],
  },
  {
    title: 'Database',
    color: '#10B981',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 68 },
      { name: 'MySQL', icon: <SiMysql />, level: 62 },
    ],
  },
  {
    title: 'Machine Learning',
    color: '#F59E0B',
    skills: [
      { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 60 },
      { name: 'Pandas', icon: <SiPandas />, level: 64 },
      { name: 'NumPy', icon: <SiNumpy />, level: 62 },
      { name: 'Matplotlib', icon: <FiBarChart2 />, level: 58 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#EF4444',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 72 },
      { name: 'GitHub', icon: <FaGithub />, level: 75 },
      { name: 'Firebase', icon: <FaFire />, level: 62 },
      { name: 'Postman', icon: <SiPostman />, level: 68 },
      { name: 'VS Code', icon: <VscCode />, level: 80 },
    ],
  },
];

/**
 * Individual skill badge with icon and animated progress bar.
 */
const SkillBadge = ({ skill, color, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="skill-badge"
      style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'default' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.3rem', color }}>{skill.icon}</span>
        <span style={{ fontWeight: 600, fontSize: '0.88rem', color: '#E2E8F0' }}>{skill.name}</span>
      </div>
      {/* Progress bar */}
      <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: delay + 0.2, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            borderRadius: '2px',
          }}
        />
      </div>
    </motion.div>
  );
};

/**
 * Skills section with categorized animated skill cards.
 */
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative', background: 'rgba(15, 20, 35, 0.3)' }}>
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '-150px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#06B6D4', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            // tech stack
          </p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F1F5F9' }}>
            Skills & Technologies
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0', fontSize: '0.97rem' }}>
            Technologies I've worked with and am passionate about.
          </p>
        </motion.div>

        {/* Category grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="glass-card"
              style={{ padding: '1.75rem' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: category.color,
                  boxShadow: `0 0 10px ${category.color}66`,
                }} />
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#F1F5F9' }}>{category.title}</h3>
              </div>

              {/* Skill badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.65rem' }}>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={catIdx * 0.05 + skillIdx * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
