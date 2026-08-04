import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const SOCIAL_LINKS = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/shreyasgshetty', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/shreyas-g-shetty18', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:shreyasgshetty18@gmail.com', label: 'Email' },
];

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

/**
 * Minimal dark footer with social links, nav links, and copyright.
 */
const Footer = () => {
  const handleNavClick = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(6, 182, 212, 0.1)',
      background: 'rgba(11, 15, 25, 0.9)',
      padding: '3rem 0 2rem',
      position: 'relative',
    }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)',
      }} />

      <div className="container-custom">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              color: '#fff',
              fontSize: '1rem',
            }}>
              S
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F1F5F9' }}>
              Shreyas G Shetty
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#06B6D4'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.93 }}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.07)',
                  border: '1px solid rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94A3B8',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#06B6D4';
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.07)';
                }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />


        </div>
      </div>
    </footer>
  );
};

export default Footer;
