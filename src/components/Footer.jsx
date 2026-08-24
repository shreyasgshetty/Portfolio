import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const SOCIALS = [
  { icon: <FiGithub size={16} />,   href: 'https://github.com/shreyasgshetty',           label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/shreyas-g-shetty18',   label: 'LinkedIn' },
  { icon: <FiMail size={16} />,     href: 'mailto:shreyasgshetty.18@gmail.com',            label: 'Email' },
];

const NAV = ['Home','About','Skills','Projects','Education','Contact'];

const Footer = () => {
  const go = section => document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Thin violet cap */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      <div className="wrap" style={{ padding: '5rem 1.25rem 2.5rem' }}>
        {/* Large statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            letterSpacing: '-0.04em',
            color: 'var(--text-1)',
            lineHeight: 1.05,
            marginBottom: '0.75rem',
          }}>
            Let's build something{' '}
            <span style={{ color: 'var(--accent-light)' }}>great</span>
            <span style={{ color: 'var(--a2)' }}>.</span>
          </p>
          <p style={{ color: 'var(--text-3)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
            shreyasgshetty.18@gmail.com
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2.5rem' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2rem',
          alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '2.5rem',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#fff', fontSize: '0.85rem' }}>S</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)' }}>Shreyas G Shetty</span>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem 0.75rem' }}>
            {NAV.map(l => (
              <button key={l} onClick={() => go(l)} style={{
                background: 'none', border: 'none',
                color: 'var(--text-3)', fontSize: '0.8rem',
                cursor: 'pointer', fontFamily: 'var(--font-sans)',
                padding: '0.2rem 0', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; }}
              >{l}</button>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {SOCIALS.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-3)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p style={{ color: 'var(--text-4)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
          © {new Date().getFullYear()} Shreyas G Shetty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
