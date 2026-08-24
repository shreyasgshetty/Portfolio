import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiArrowRight } from 'react-icons/fi';

const NAV_LINKS = [
  { num: '01', label: 'Home',      href: '#home' },
  { num: '02', label: 'About',     href: '#about' },
  { num: '03', label: 'Skills',    href: '#skills' },
  { num: '04', label: 'Projects',  href: '#projects' },
  { num: '05', label: 'Education', href: '#education' },
  { num: '06', label: 'Contact',   href: '#contact' },
];

/**
 * High-Performance Persistent Morphing Navigation System
 * - RAF-throttled scroll listener handles lazy-loaded sections flawlessly.
 * - Bottom-of-page detection ensures Contact is reliably highlighted.
 * - Instant activeSection update on click for immediate gliding pill animation.
 * - Zero continuous React re-renders past scroll thresholds.
 */
const Navbar = () => {
  const [scrolled,         setScrolled]         = useState(false);
  const [activeSection,    setActiveSection]    = useState('home');
  const [menuOpen,         setMenuOpen]         = useState(false);
  const [isMobile,         setIsMobile]         = useState(typeof window !== 'undefined' ? window.innerWidth <= 840 : false);
  const [hoveredLink,      setHoveredLink]      = useState(null);
  const [isLogoHovered,    setIsLogoHovered]    = useState(false);

  const lastScrolledRef = useRef(false);
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  /* ── Responsive Viewport Listener ── */
  useEffect(() => {
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth <= 840);
      }, 100);
    };

    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  /* ── Robust Scroll & Active Section Tracking (Compatible with Lazy Loading) ── */
  useEffect(() => {
    let rafId = null;
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));

    const checkScrollState = () => {
      const scrollY = window.scrollY;

      // 1. Update scrolled morphing state
      const isPastThreshold = scrollY > 25;
      if (isPastThreshold !== lastScrolledRef.current) {
        lastScrolledRef.current = isPastThreshold;
        setScrolled(isPastThreshold);
      }

      // 2. Check if at the bottom of the page (Contact section)
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        if (activeSectionRef.current !== 'contact') {
          setActiveSection('contact');
        }
        return;
      }

      // 3. Scan section offsets from bottom to top
      const scrollPosition = scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          if (activeSectionRef.current !== sectionIds[i]) {
            setActiveSection(sectionIds[i]);
          }
          break;
        }
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          checkScrollState();
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial and periodic checks to catch lazy-loaded components
    const t1 = setTimeout(checkScrollState, 100);
    const t2 = setTimeout(checkScrollState, 500);
    const t3 = setTimeout(checkScrollState, 1200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  /* ── Lock Body Scroll & Keyboard Escape Handler ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    const id = href.slice(1);
    setActiveSection(id);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── DESKTOP & MOBILE NAVIGATION HEADER ── */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: scrolled && !isMobile ? '12px 1.25rem' : '0',
          transition: 'padding 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <motion.div
          layout
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: scrolled && !isMobile ? '880px' : 'var(--max-w)',
            height: scrolled && !isMobile ? '52px' : '68px',
            borderRadius: scrolled && !isMobile ? '100px' : '0px',
            background: scrolled
              ? 'rgba(12, 12, 15, 0.92)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
            borderBottom: scrolled
              ? '1px solid rgba(124, 58, 237, 0.22)'
              : '1px solid transparent',
            borderTop: scrolled && !isMobile
              ? '1px solid rgba(124, 58, 237, 0.22)'
              : '1px solid transparent',
            borderLeft: scrolled && !isMobile
              ? '1px solid rgba(124, 58, 237, 0.22)'
              : '1px solid transparent',
            borderRight: scrolled && !isMobile
              ? '1px solid rgba(124, 58, 237, 0.22)'
              : '1px solid transparent',
            boxShadow: scrolled
              ? '0 12px 30px rgba(0, 0, 0, 0.45)'
              : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled && !isMobile ? '0 1.25rem' : '0 1.5rem',
            margin: '0 auto',
            transition: 'max-width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-color 0.2s ease, border-color 0.2s ease',
          }}
        >
          {/* ── Logo ── */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            onHoverStart={() => setIsLogoHovered(true)}
            onHoverEnd={() => setIsLogoHovered(false)}
            whileTap={{ scale: 0.96 }}
            aria-label="Shreyas G Shetty - Go to homepage"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              cursor: 'pointer',
            }}
          >
            {/* Monogram S Icon */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '0.92rem',
                color: '#FFFFFF',
                flexShrink: 0,
                transform: isLogoHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: isLogoHovered ? '0 0 16px rgba(124, 58, 237, 0.6)' : 'none',
              }}
            >
              S
            </div>

            {/* Logo Wordmark */}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.98rem',
                color: 'var(--text-1)',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Shreyas
              <span
                style={{
                  color: isLogoHovered ? '#FFFFFF' : 'var(--accent-light)',
                  display: 'inline-block',
                  transition: 'color 0.2s ease',
                }}
              >
                .
              </span>
            </span>
          </motion.a>

          {/* ── Desktop Nav Links (Centrally Balanced) ── */}
          {!isMobile && (
            <nav
              aria-label="Main page navigation"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                position: 'relative',
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const isHovered = hoveredLink === link.href;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    onHoverStart={() => setHoveredLink(link.href)}
                    onHoverEnd={() => setHoveredLink(null)}
                    whileHover={{ y: -1.5 }}
                    whileTap={{ scale: 0.96 }}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      position: 'relative',
                      padding: '0.42rem 0.85rem',
                      borderRadius: '100px',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 600 : 500,
                      textDecoration: 'none',
                      color: isActive ? 'var(--text-1)' : isHovered ? 'var(--text-1)' : 'var(--text-3)',
                      transition: 'color 0.15s ease',
                      letterSpacing: '0.01em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Sliding Active Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '100px',
                          background: 'rgba(124, 58, 237, 0.14)',
                          border: '1px solid rgba(124, 58, 237, 0.32)',
                        }}
                      />
                    )}

                    {/* Active Accent Dot */}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '3px',
                          width: '3px',
                          height: '3px',
                          borderRadius: '50%',
                          background: 'var(--accent-light)',
                        }}
                      />
                    )}

                    <span style={{ position: 'relative', zIndex: 1 }}>{link.label}</span>
                  </motion.a>
                );
              })}
            </nav>
          )}

          {/* ── Desktop Resume CTA Button ── */}
          {!isMobile && (
            <motion.a
              href="/Resume_V2.pdf"
              download="Shreyas_G_Shetty_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Download Resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.42rem 0.95rem',
                borderRadius: '100px',
                background: 'rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.35)',
                color: 'var(--accent-light)',
                fontWeight: 600,
                fontSize: '0.78rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              }}
            >
              <FiDownload size={13} />
              <span>Resume</span>
            </motion.a>
          )}

          {/* ── Mobile Hamburger Button ── */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-command-panel"
              style={{
                background: 'rgba(19, 19, 22, 0.9)',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                borderRadius: '8px',
                color: menuOpen ? 'var(--accent-light)' : 'var(--text-1)',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
                transition: 'border-color 0.2s ease',
              }}
            >
              {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          )}
        </motion.div>
      </motion.header>

      {/* ── MOBILE BACKDROP ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 1001,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── MOBILE COMMAND PANEL (DRAWER) ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-command-panel"
            key="mobile-drawer"
            role="dialog"
            aria-label="Navigation Menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 1002,
              width: 'min(78vw, 300px)',
              background: 'rgba(11, 11, 14, 0.97)',
              borderLeft: '1px solid rgba(124, 58, 237, 0.2)',
              boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* ── Drawer Header ── */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.4rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      color: '#FFFFFF',
                    }}
                  >
                    S
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      color: 'var(--text-1)',
                    }}
                  >
                    Shreyas<span style={{ color: 'var(--accent-light)' }}>.</span>
                  </span>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '7px',
                    color: 'var(--text-3)',
                    cursor: 'pointer',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* ── Numbered Nav Items ── */}
              <nav
                style={{
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.slice(1);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                        background: isActive
                          ? 'rgba(124, 58, 237, 0.12)'
                          : 'transparent',
                        border: isActive
                          ? '1px solid rgba(124, 58, 237, 0.3)'
                          : '1px solid transparent',
                        transition: 'background-color 0.15s ease, color 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            fontWeight: 700,
                            color: isActive ? 'var(--accent-light)' : 'var(--text-4)',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {link.num}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.92rem',
                            fontWeight: isActive ? 600 : 500,
                          }}
                        >
                          {link.label}
                        </span>
                      </div>

                      {isActive && (
                        <span style={{ color: 'var(--accent-light)', display: 'flex' }}>
                          <FiArrowRight size={14} />
                        </span>
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* ── Drawer Footer (Status & Resume CTA) ── */}
            <div
              style={{
                padding: '1.25rem 1.25rem 1.5rem 1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Availability Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 10px',
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.18)',
                  borderRadius: '8px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--success)',
                }}
              >
                <span className="avail-dot" />
                <span>OPEN TO OPPORTUNITIES</span>
              </div>

              {/* Full-Width Mobile Resume Button */}
              <a
                href="/Resume_V2.pdf"
                download="Shreyas_G_Shetty_Resume.pdf"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  height: '46px',
                  borderRadius: '10px',
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                }}
              >
                <FiDownload size={15} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
