import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFire,
  FaSearch,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiJira,
  SiLinux,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

/* ── 1. FULL-STACK CORE ARCHITECTURE (Visual Anchor Flow) ── */
const FULL_STACK_CORE = [
  { name: 'React',      id: 'react',   icon: FaReact,   color: '#61DAFB', role: 'Frontend UI',  spec: 'Hooks · State' },
  { name: 'REST APIs',  id: 'rest',    icon: TbApi,     color: '#10B981', role: 'Protocol',     spec: 'JSON · Endpoints' },
  { name: 'Node.js',    id: 'node',    icon: FaNodeJs,  color: '#22C55E', role: 'Runtime',      spec: 'Async I/O' },
  { name: 'Express.js', id: 'express', icon: SiExpress, color: '#E5E7EB', role: 'Server',       spec: 'Middleware · Routing' },
  { name: 'MongoDB',    id: 'mongodb', icon: SiMongodb, color: '#47A248', role: 'Database',     spec: 'Document / NoSQL' },
  { name: 'SQL',        id: 'sql',     icon: SiMysql,   color: '#38BDF8', role: 'Relational',   spec: 'Schema · Queries' },
];

/* ── 2. ROW 1 SPECIALIZED CATEGORIES (Languages, Frontend, Backend) ── */
const ROW_CATEGORIES = [
  {
    num: '01',
    id: 'languages',
    title: 'Languages',
    accent: '#F59E0B',
    skills: [
      { name: 'Java',       id: 'java',   icon: FaJava,   color: '#F89820', meta: 'OOP / DSA' },
      { name: 'Python',     id: 'python', icon: FaPython, color: '#38BDF8', meta: 'ML / Scripting' },
      { name: 'JavaScript', id: 'js',     icon: FaJs,     color: '#F7DF1E', meta: 'ES6+ / Web' },
    ],
  },
  {
    num: '02',
    id: 'frontend',
    title: 'Frontend',
    accent: '#61DAFB',
    skills: [
      { name: 'React',        id: 'react', icon: FaReact,       color: '#61DAFB', meta: 'Components' },
      { name: 'HTML',         id: 'html',  icon: FaHtml5,       color: '#E34F26', meta: 'Semantic' },
      { name: 'CSS',          id: 'css',   icon: FaCss3Alt,     color: '#1572B6', meta: 'Layouts' },
      { name: 'Tailwind CSS', id: 'tw',    icon: SiTailwindcss, color: '#38BDF8', meta: 'Utility-First' },
    ],
  },
  {
    num: '03',
    id: 'backend',
    title: 'Backend & APIs',
    accent: '#7C3AED',
    skills: [
      { name: 'Node.js',    id: 'node',    icon: FaNodeJs, color: '#22C55E', meta: 'Event-Driven' },
      { name: 'Express.js', id: 'express', icon: SiExpress, color: '#E5E7EB', meta: 'REST Framework' },
      { name: 'REST APIs',  id: 'rest',    icon: TbApi,    color: '#10B981', meta: 'API Design' },
    ],
  },
];

/* ── 3. DATABASE SYSTEMS DATA (Structured with Rich Architecture Details) ── */
const DATABASE_SKILLS = [
  {
    name: 'MongoDB',
    id: 'mongodb',
    icon: SiMongodb,
    color: '#47A248',
    type: 'DOCUMENT / NOSQL',
    desc: 'Flexible JSON-like documents, collections & aggregation pipelines',
  },
  {
    name: 'MySQL',
    id: 'mysql',
    icon: SiMysql,
    color: '#00758F',
    type: 'RELATIONAL / RDBMS',
    desc: 'ACID-compliant relational schema, indexed queries & joins',
  },
  {
    name: 'Neo4j',
    id: 'neo4j',
    icon: SiNeo4J,
    color: '#008CC1',
    type: 'GRAPH DATABASE',
    desc: 'Node & edge relationship graphs, Cypher query language',
  },
];

/* ── 4. TOOLS & PLATFORMS DATA (Structured in Compact 2-Column Pairs) ── */
const TOOL_SKILLS = [
  { name: 'Git',                  id: 'git',      icon: FaGitAlt, color: '#F05032', meta: 'Version Control' },
  { name: 'GitHub',               id: 'github',   icon: FaGithub, color: '#FFFFFF', meta: 'Collaboration' },
  { name: 'Firebase',             id: 'firebase', icon: FaFire,   color: '#FFCA28', meta: 'Cloud Platform' },
  { name: 'Postman',              id: 'postman',  icon: SiPostman,color: '#FF6C37', meta: 'API Testing' },
  { name: 'Jira',                 id: 'jira',     icon: SiJira,   color: '#2684FF', meta: 'Task Tracking' },
  { name: 'Autopsy',              id: 'autopsy',  icon: FaSearch, color: '#A78BFA', meta: 'Digital Forensics' },
  { name: 'Linux Forensic Tools', id: 'linux',    icon: SiLinux,  color: '#FCC624', meta: 'CLI & Forensics' },
];

/* ── 5. INTERACTIVE TECHNOLOGY RELATIONSHIP GRAPH ── */
const TECH_RELATIONS = {
  react:   ['node', 'express', 'mongodb', 'rest', 'tw', 'sql'],
  node:    ['react', 'express', 'mongodb', 'rest', 'mysql', 'sql'],
  express: ['react', 'node', 'mongodb', 'rest', 'mysql', 'sql'],
  mongodb: ['node', 'express', 'react', 'rest'],
  sql:     ['node', 'express', 'java', 'python', 'mysql'],
  mysql:   ['node', 'express', 'java', 'python', 'sql'],
  neo4j:   ['mongodb', 'mysql', 'python'],
  rest:    ['react', 'node', 'express', 'postman'],
  java:    ['python', 'mysql', 'sql'],
  python:  ['java', 'mysql', 'neo4j'],
  git:     ['github', 'jira'],
  github:  ['git', 'jira'],
  jira:    ['git', 'github'],
  postman: ['rest', 'node', 'express'],
};

/**
 * Skills Section — Symmetrical Engineering Toolkit & Operating Surface
 * Features a controlled 12-column layout with equal row heights, rich database topology,
 * balanced 2-column tools, and a distinct layered technical background environment.
 */
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.06 });
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const isRelated = (techId) => {
    if (!hoveredTech) return true;
    if (hoveredTech === techId) return true;
    const relatedList = TECH_RELATIONS[hoveredTech] || [];
    return relatedList.includes(techId);
  };

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(5rem, 12vh, 8rem) 0',
        background: 'linear-gradient(135deg, #08080B 0%, #0B0A10 45%, #08090C 100%)',
        overflow: 'hidden',
      }}
    >
      {/* ── LAYERED TECHNICAL WORKSPACE BACKGROUND ── */}
      {/* 1. Visible 56px Technical Grid with Radial Edge Mask */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 30%, transparent 90%)',
          opacity: 0.95,
        }}
      />

      {/* 2. Vector Circuit Architecture Traces Behind Cards */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.45,
        }}
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <path
          d="M 150 120 L 1050 120 M 600 120 L 600 350 M 200 480 L 1000 480 M 350 480 L 350 780 M 850 480 L 850 780"
          fill="none"
          stroke="rgba(124, 58, 237, 0.18)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        {/* Subtle Circuit Junction Nodes */}
        <circle cx="150" cy="120" r="2.5" fill="#7C3AED" opacity="0.6" />
        <circle cx="1050" cy="120" r="2.5" fill="#61DAFB" opacity="0.6" />
        <circle cx="600" cy="120" r="3" fill="#A78BFA" opacity="0.7" />
        <circle cx="600" cy="350" r="2.5" fill="#7C3AED" opacity="0.6" />
        <circle cx="200" cy="480" r="2.5" fill="#10B981" opacity="0.6" />
        <circle cx="1000" cy="480" r="2.5" fill="#F59E0B" opacity="0.6" />
        <circle cx="350" cy="780" r="2.5" fill="#10B981" opacity="0.6" />
        <circle cx="850" cy="780" r="2.5" fill="#A78BFA" opacity="0.6" />
      </svg>

      {/* 3. 3 Ambient Colored Light Sources */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '-6%',
          width: 'min(65vw, 600px)',
          height: 'min(65vw, 600px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.09) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '45%',
          right: '25%',
          width: 'min(50vw, 450px)',
          height: 'min(50vw, 450px)',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: 'min(55vw, 500px)',
          height: 'min(55vw, 500px)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── SECTION HEADER ── */}
          <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-light)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '0.8rem',
              }}
            >
              <span style={{ width: '18px', height: '1px', background: 'var(--accent)' }} />
              02 / TECHNICAL STACK
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                fontWeight: 900,
                color: 'var(--text-1)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '0.75rem',
              }}
            >
              What I build with.
            </h2>
            <p
              style={{
                color: 'var(--text-3)',
                maxWidth: '520px',
                fontSize: '0.92rem',
                lineHeight: 1.75,
              }}
            >
              Technologies, frameworks, and tools I work with across software engineering, full-stack development, and backend systems.
            </p>
          </motion.div>

          {/* ── 1. FULL-STACK CORE ANCHOR CARD (Span 12 / Full Width) ── */}
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '1.25rem',
              background: 'rgba(14, 14, 19, 0.94)',
              border: '1px solid rgba(124, 58, 237, 0.35)',
              borderRadius: '16px',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(124, 58, 237, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Bar with Status Beacon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#61DAFB',
                    boxShadow: '0 0 8px #61DAFB',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  FULL-STACK CORE // ARCHITECTURE
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  color: 'var(--accent-light)',
                  letterSpacing: '0.06em',
                }}
              >
                MERN + REST DATA PIPELINE
              </span>
            </div>

            {/* Core Tech Module Flow with Integrated Architecture Indicators */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                gap: '0.75rem',
              }}
            >
              {FULL_STACK_CORE.map((tech) => {
                const Icon = tech.icon;
                const isHovered = hoveredTech === tech.id;
                const active = isRelated(tech.id);

                return (
                  <div
                    key={tech.id}
                    onMouseEnter={() => setHoveredTech(tech.id)}
                    onMouseLeave={() => setHoveredTech(null)}
                    tabIndex={0}
                    onFocus={() => setHoveredTech(tech.id)}
                    onBlur={() => setHoveredTech(null)}
                    style={{
                      background: isHovered
                        ? 'rgba(255, 255, 255, 0.07)'
                        : 'rgba(255, 255, 255, 0.025)',
                      border: isHovered
                        ? `1px solid ${tech.color}`
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '0.9rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      cursor: 'pointer',
                      boxShadow: isHovered ? `0 4px 20px ${tech.color}25` : 'none',
                      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                      opacity: active ? 1 : 0.6,
                      transition: 'transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
                      outline: 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '1.25rem', color: tech.color, display: 'flex' }}>
                        <Icon />
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.58rem',
                          color: isHovered ? tech.color : 'var(--text-4)',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {tech.role}
                      </span>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          color: isHovered ? 'var(--text-1)' : 'var(--text-2)',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {tech.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: 'var(--text-3)',
                          marginTop: '2px',
                        }}
                      >
                        {tech.spec}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── 2. ROW 1: EQUAL 3-COLUMN TRIO (Languages, Frontend, Backend) ── */}
          <div className="skills-tri-row">
            {ROW_CATEGORIES.map((cat) => {
              const isCatHovered = hoveredCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    background: 'rgba(12, 12, 16, 0.82)',
                    border: isCatHovered
                      ? `1px solid ${cat.accent}45`
                      : '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '14px',
                    padding: '1.25rem 1.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isCatHovered ? `0 8px 25px ${cat.accent}12` : 'none',
                    opacity: hoveredCategory !== null && !isCatHovered ? 0.85 : 1,
                    transition: 'border-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  {/* Category Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      paddingBottom: '0.65rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: cat.accent,
                        }}
                      >
                        {cat.num}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: 'var(--text-1)',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {cat.title}
                      </h3>
                    </div>

                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: cat.accent,
                      }}
                    />
                  </div>

                  {/* Skills Module Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      const isHovered = hoveredTech === skill.id;
                      const active = isRelated(skill.id);

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredTech(skill.id)}
                          onMouseLeave={() => setHoveredTech(null)}
                          tabIndex={0}
                          onFocus={() => setHoveredTech(skill.id)}
                          onBlur={() => setHoveredTech(null)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '7px',
                            padding: '0.45rem 0.8rem',
                            borderRadius: '8px',
                            background: isHovered
                              ? 'rgba(255, 255, 255, 0.08)'
                              : 'rgba(255, 255, 255, 0.03)',
                            border: isHovered
                              ? `1px solid ${skill.color}`
                              : '1px solid rgba(255, 255, 255, 0.07)',
                            color: isHovered ? 'var(--text-1)' : 'var(--text-2)',
                            cursor: 'pointer',
                            transform: isHovered ? 'translateY(-1.5px)' : 'translateY(0)',
                            boxShadow: isHovered ? `0 2px 12px ${skill.color}20` : 'none',
                            opacity: active ? 1 : 0.6,
                            transition: 'transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease, color 0.2s ease',
                            outline: 'none',
                          }}
                        >
                          <span style={{ fontSize: '0.95rem', color: skill.color, display: 'flex' }}>
                            <Icon />
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {skill.name}
                          </span>
                          {skill.meta && (
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.58rem',
                                color: isHovered ? skill.color : 'var(--text-4)',
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1px 5px',
                                borderRadius: '4px',
                                transition: 'color 0.2s ease',
                              }}
                            >
                              {skill.meta}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── 3. ROW 2: BALANCED 2-COLUMN DUAL (Database Systems & Tools & Platforms) ── */}
          <div className="skills-dual-row">
            {/* ── 04 DATABASE SYSTEMS (Rich Architecture & Persistence Topology) ── */}
            <div
              onMouseEnter={() => setHoveredCategory('database')}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                background: 'rgba(12, 12, 16, 0.82)',
                border: hoveredCategory === 'database'
                  ? '1px solid rgba(16, 185, 129, 0.45)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '1.25rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: hoveredCategory === 'database' ? '0 8px 25px rgba(16, 185, 129, 0.12)' : 'none',
                opacity: hoveredCategory !== null && hoveredCategory !== 'database' ? 0.85 : 1,
                transition: 'border-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.9rem',
                    paddingBottom: '0.65rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#10B981',
                      }}
                    >
                      04
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--text-1)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      DATABASE SYSTEMS
                    </h3>
                  </div>

                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#10B981',
                    }}
                  />
                </div>

                {/* Database Modules (Rich, structured stack) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {DATABASE_SKILLS.map((db) => {
                    const Icon = db.icon;
                    const isHovered = hoveredTech === db.id;
                    const active = isRelated(db.id);

                    return (
                      <div
                        key={db.id}
                        onMouseEnter={() => setHoveredTech(db.id)}
                        onMouseLeave={() => setHoveredTech(null)}
                        tabIndex={0}
                        onFocus={() => setHoveredTech(db.id)}
                        onBlur={() => setHoveredTech(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.55rem 0.85rem',
                          borderRadius: '8px',
                          background: isHovered ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0.025)',
                          border: isHovered ? `1px solid ${db.color}` : '1px solid rgba(255, 255, 255, 0.06)',
                          cursor: 'pointer',
                          opacity: active ? 1 : 0.6,
                          transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                          transition: 'transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease',
                          outline: 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <span style={{ fontSize: '1.1rem', color: db.color, display: 'flex' }}>
                            <Icon />
                          </span>
                          <div>
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-1)' }}>
                              {db.name}
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-4)', marginLeft: '8px' }}>
                              {db.type}
                            </span>
                          </div>
                        </div>

                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: isHovered ? db.color : 'var(--text-3)', textAlign: 'right', display: 'none' }} className="desktop-db-desc">
                          {db.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Database Topology Footer Strip */}
              <div
                style={{
                  paddingTop: '0.65rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: 'var(--text-4)', letterSpacing: '0.08em' }}>
                  STORAGE ARCHITECTURE
                </span>
                <span style={{ color: '#10B981', fontWeight: 600 }}>
                  DOC · RELATIONAL · GRAPH
                </span>
              </div>
            </div>

            {/* ── 05 TOOLS & PLATFORMS (Compact 2-Column Balanced Grid) ── */}
            <div
              onMouseEnter={() => setHoveredCategory('tools')}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                background: 'rgba(12, 12, 16, 0.82)',
                border: hoveredCategory === 'tools'
                  ? '1px solid rgba(167, 139, 250, 0.45)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '1.25rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: hoveredCategory === 'tools' ? '0 8px 25px rgba(167, 139, 250, 0.12)' : 'none',
                opacity: hoveredCategory !== null && hoveredCategory !== 'tools' ? 0.85 : 1,
                transition: 'border-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.9rem',
                    paddingBottom: '0.65rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#A78BFA',
                      }}
                    >
                      05
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--text-1)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      TOOLS & PLATFORMS
                    </h3>
                  </div>

                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#A78BFA',
                    }}
                  />
                </div>

                {/* Compact 2-Column Grid of Tool Chips */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                    gap: '0.5rem',
                  }}
                >
                  {TOOL_SKILLS.map((skill) => {
                    const Icon = skill.icon;
                    const isHovered = hoveredTech === skill.id;
                    const active = isRelated(skill.id);

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredTech(skill.id)}
                        onMouseLeave={() => setHoveredTech(null)}
                        tabIndex={0}
                        onFocus={() => setHoveredTech(skill.id)}
                        onBlur={() => setHoveredTech(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '7px',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '8px',
                          background: isHovered
                            ? 'rgba(255, 255, 255, 0.08)'
                            : 'rgba(255, 255, 255, 0.03)',
                          border: isHovered
                            ? `1px solid ${skill.color}`
                            : '1px solid rgba(255, 255, 255, 0.07)',
                          color: isHovered ? 'var(--text-1)' : 'var(--text-2)',
                          cursor: 'pointer',
                          transform: isHovered ? 'translateY(-1.5px)' : 'translateY(0)',
                          boxShadow: isHovered ? `0 2px 12px ${skill.color}20` : 'none',
                          opacity: active ? 1 : 0.6,
                          transition: 'transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease, color 0.2s ease',
                          outline: 'none',
                        }}
                      >
                        <span style={{ fontSize: '0.95rem', color: skill.color, display: 'flex', flexShrink: 0 }}>
                          <Icon />
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tools Ecosystem Footer Strip */}
              <div
                style={{
                  paddingTop: '0.65rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ color: 'var(--text-4)', letterSpacing: '0.08em' }}>
                  DEV OPERATIONS
                </span>
                <span style={{ color: '#A78BFA', fontWeight: 600 }}>
                  VCS · CLOUD · AGILE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
