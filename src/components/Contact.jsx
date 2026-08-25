import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMapPin,
  FiCheck,
  FiAlertCircle,
  FiArrowRight,
  FiRotateCcw,
  FiCopy,
} from 'react-icons/fi';

/* ── 1. EmailJS CONFIGURATION (PRESERVED EXACTLY — NON-NEGOTIABLE) ── */
const EMAILJS_SERVICE_ID = 'service_esluaq8';
const EMAILJS_TEMPLATE_ID = 'template_ys5i3oh';
const EMAILJS_PUBLIC_KEY = 'TxoIlrZoDl6AXGNVS';

/* ── 2. FACTUAL CONTACT INFORMATION (PRESERVED EXACTLY) ── */
const CONTACT_CHANNELS = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'shreyasgshetty.18@gmail.com',
    href: 'mailto:shreyasgshetty.18@gmail.com',
    icon: FiMail,
    color: '#7C3AED',
    sub: 'Direct Dispatch',
    canCopy: true,
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/shreyasgshetty',
    href: 'https://github.com/shreyasgshetty',
    icon: FiGithub,
    color: '#E5E7EB',
    sub: 'Code Repositories',
    canCopy: false,
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/shreyas-g-shetty18',
    href: 'https://linkedin.com/in/shreyas-g-shetty18',
    icon: FiLinkedin,
    color: '#60A5FA',
    sub: 'Professional Network',
    canCopy: false,
  },
  {
    id: 'location',
    label: 'LOCATION',
    value: 'Bengaluru, India',
    href: null,
    icon: FiMapPin,
    color: '#F59E0B',
    sub: 'IST / UTC +5:30',
    canCopy: false,
  },
];

/**
 * Contact Section — Interactive Developer Communication Terminal
 * Fully responsive and overflow-proof across all mobile, tablet, and desktop viewports.
 * Preserves 100% of EmailJS logic and credentials while providing stacked mobile layouts,
 * tap-to-copy, animated transmission feedback, and unified communication channels.
 */
const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const formRef = useRef(null);

  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [focusedField, setFocusedField] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text) => {
    let success = false;

    // 1. Try modern Clipboard API if supported in secure context
    if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
      try {
        navigator.clipboard.writeText(text);
        success = true;
      } catch {
        success = false;
      }
    }

    if (success) return true;

    // 2. Synchronous fallback for iOS Safari, Android, and HTTP over LAN
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.contain = 'strict';
      el.style.position = 'fixed';
      el.style.left = '-9999px';
      el.style.top = '0';
      el.style.fontSize = '16pt'; // Prevents iOS Safari zoom

      const selection = document.getSelection();
      const originalRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

      document.body.appendChild(el);
      el.select();
      el.selectionStart = 0;
      el.selectionEnd = text.length;

      success = document.execCommand('copy');
      document.body.removeChild(el);

      if (originalRange && selection) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
      }
    } catch {
      success = false;
    }

    return success;
  };

  const handleCopyEmail = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    copyToClipboard('shreyasgshetty.18@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      // Reset status after 8 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 8000);
    } catch (err) {
      console.error('EmailJS transmission error:', err);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 8000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="contact-section"
    >
      {/* ── 1. LAYERED TECHNICAL BACKGROUND ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 25%, transparent 88%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 25%, transparent 88%)',
          opacity: 0.75,
        }}
      />

      {/* SVG Communication Lines */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.18,
        }}
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 120 200 L 450 200 L 600 450 L 1080 450 M 200 700 L 700 700 L 950 500"
          fill="none"
          stroke="rgba(124, 58, 237, 0.22)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle cx="120" cy="200" r="3" fill="#7C3AED" />
        <circle cx="450" cy="200" r="2.5" fill="#61DAFB" />
        <circle cx="600" cy="450" r="3.5" fill="#7C3AED" />
        <circle cx="1080" cy="450" r="3" fill="#22C55E" />
      </svg>

      {/* Interactive Reactive Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '-5%',
          width: 'min(65vw, 500px)',
          height: 'min(65vw, 500px)',
          maxWidth: '100vw',
          background: focusedField
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          transition: 'background 0.4s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 'min(55vw, 400px)',
          height: 'min(55vw, 400px)',
          maxWidth: '100vw',
          background: 'radial-gradient(circle, rgba(97, 218, 251, 0.04) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '100%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ width: '100%', maxWidth: '100%' }}
        >
          {/* ── SECTION HEADER ── */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: 'clamp(1.75rem, 4vw, 3rem)', width: '100%' }}
          >
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
                marginBottom: '0.65rem',
              }}
            >
              <span style={{ width: '18px', height: '1px', background: 'var(--accent)' }} />
              05 / CONTACT
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.9rem, 5.2vw, 3.6rem)',
                fontWeight: 900,
                color: 'var(--text-1)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '0.6rem',
                wordBreak: 'break-word',
              }}
            >
              Let's connect.
            </h2>
            <p
              style={{
                color: 'var(--text-3)',
                maxWidth: '560px',
                fontSize: 'clamp(0.85rem, 2vw, 0.94rem)',
                lineHeight: 1.65,
              }}
            >
              Have a project, opportunity, or idea? Open a communication channel.
            </p>
          </motion.div>

          {/* ── 2. TWO-COLUMN DISPATCH & COMPOSER GRID ── */}
          <div className="contact-grid">
            {/* ── LEFT COLUMN: UNIFIED COMMUNICATION CHANNELS ── */}
            <motion.div
              variants={itemVariants}
              className="contact-card-left"
            >
              <div style={{ width: '100%', minWidth: 0 }}>
                {/* Panel Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    paddingBottom: '0.75rem',
                    marginBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: 1 }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#22C55E',
                        boxShadow: '0 0 8px #22C55E',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(0.64rem, 2.2vw, 0.7rem)',
                        fontWeight: 700,
                        color: 'var(--text-1)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      CHANNELS
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: 'var(--accent-light)',
                      letterSpacing: '0.04em',
                      background: 'rgba(124, 58, 237, 0.1)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    DIRECT DISPATCH
                  </span>
                </div>

                {/* Interactive Channel Rows (Stacked Text Layout for Zero Overflow) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', width: '100%', minWidth: 0 }}>
                  {CONTACT_CHANNELS.map((item) => {
                    const Icon = item.icon;
                    const isLink = !!item.href;

                    return (
                      <div
                        key={item.id}
                        className="contact-channel-row"
                        style={{ cursor: 'default' }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            width: '100%',
                            minWidth: 0,
                          }}
                        >
                          {/* Icon Badge */}
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '8px',
                              background: `${item.color}15`,
                              border: `1px solid ${item.color}35`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: item.color,
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Icon size={16} />
                          </div>

                          {/* Content Stack */}
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '1px',
                              minWidth: 0,
                              flex: 1,
                            }}
                          >
                            {/* Top Label & Action Row */}
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '6px',
                                width: '100%',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0, flexWrap: 'wrap' }}>
                                <span
                                  style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.62rem',
                                    fontWeight: 700,
                                    color: item.color,
                                    letterSpacing: '0.06em',
                                  }}
                                >
                                  {item.label}
                                </span>
                                <span
                                  style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.55rem',
                                    color: 'var(--text-4)',
                                  }}
                                >
                                  // {item.sub}
                                </span>
                              </div>

                              {/* Right Action: Copy Button or External Link Arrow */}
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                                {item.canCopy && (
                                  <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    title="Copy email to clipboard"
                                    aria-label="Copy email to clipboard"
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '4px',
                                      background: copiedEmail ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                                      border: `1px solid ${copiedEmail ? '#22C55E' : 'rgba(255, 255, 255, 0.15)'}`,
                                      color: copiedEmail ? '#22C55E' : 'var(--text-1)',
                                      borderRadius: '6px',
                                      padding: '4px 8px',
                                      fontSize: '0.65rem',
                                      fontFamily: 'var(--font-mono)',
                                      fontWeight: 700,
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      touchAction: 'manipulation',
                                      WebkitTapHighlightColor: 'transparent',
                                      userSelect: 'none',
                                    }}
                                  >
                                    {copiedEmail ? <FiCheck size={11} /> : <FiCopy size={11} />}
                                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                                  </button>
                                )}

                                {isLink && (
                                  <a
                                    href={item.href}
                                    target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
                                    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                    style={{
                                      color: 'var(--text-4)',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      padding: '3px',
                                      textDecoration: 'none',
                                      transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = item.color; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-4)'; }}
                                    aria-label={`Open ${item.label}`}
                                  >
                                    <FiArrowRight size={14} />
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Value Display (Clickable if isLink) */}
                            {isLink ? (
                              <a
                                href={item.href}
                                target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
                                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                style={{
                                  color: 'var(--text-1)',
                                  fontSize: 'clamp(0.76rem, 2.7vw, 0.85rem)',
                                  fontWeight: 500,
                                  wordBreak: 'break-all',
                                  overflowWrap: 'anywhere',
                                  lineHeight: 1.35,
                                  marginTop: '2px',
                                  margin: 0,
                                  textDecoration: 'none',
                                  transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = item.color; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-1)'; }}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p
                                style={{
                                  color: 'var(--text-1)',
                                  fontSize: 'clamp(0.76rem, 2.7vw, 0.85rem)',
                                  fontWeight: 500,
                                  wordBreak: 'break-all',
                                  overflowWrap: 'anywhere',
                                  lineHeight: 1.35,
                                  marginTop: '2px',
                                  margin: 0,
                                }}
                              >
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Channel Availability Callout */}
              <div
                style={{
                  padding: '0.75rem 0.9rem',
                  borderRadius: '10px',
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '0.4rem',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <span className="avail-dot" style={{ flexShrink: 0 }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: 'var(--success)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    CHANNEL STATUS: ONLINE
                  </span>
                  <p
                    style={{
                      color: 'var(--text-2)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      marginTop: '2px',
                      lineHeight: 1.35,
                    }}
                  >
                    Available for internships & opportunities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: INTERACTIVE MESSAGE COMPOSER ── */}
            <motion.div
              variants={itemVariants}
              className="contact-card-right"
            >
              {/* Form Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  paddingBottom: '0.75rem',
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: 1 }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#7C3AED',
                      boxShadow: '0 0 8px #7C3AED',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(0.64rem, 2.2vw, 0.7rem)',
                      fontWeight: 700,
                      color: 'var(--text-1)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    COMPOSER
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--accent-light)',
                    letterSpacing: '0.04em',
                    background: 'rgba(124, 58, 237, 0.1)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  SECURE DISPATCH
                </span>
              </div>

              {/* AnimatePresence for Smooth Form <-> Success State Transition */}
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  /* ── SUCCESS RECEIPT STATE ── */
                  <motion.div
                    key="sent-state"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      padding: 'clamp(1.25rem, 3.5vw, 2.2rem) 0.5rem',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1.25rem',
                      minHeight: '260px',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(34, 197, 94, 0.12)',
                        border: '2px solid #22C55E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#22C55E',
                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
                      }}
                    >
                      <FiCheck size={24} />
                    </div>

                    <div style={{ width: '100%', maxWidth: '380px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: '#22C55E',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        TRANSMISSION CONFIRMED
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
                          fontWeight: 800,
                          color: 'var(--text-1)',
                          marginTop: '4px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        Message Dispatched.
                      </h3>
                      <p
                        style={{
                          color: 'var(--text-3)',
                          fontSize: '0.84rem',
                          margin: '6px auto 0 auto',
                          lineHeight: 1.55,
                        }}
                      >
                        Thank you for reaching out. Your message has been routed to my primary inbox, and I will get back to you shortly.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0.6rem 1.15rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: 'var(--text-2)',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease, color 0.2s ease',
                        touchAction: 'manipulation',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.color = 'var(--text-2)';
                      }}
                    >
                      <FiRotateCcw size={12} />
                      <span>Transmit Another Message</span>
                    </button>
                  </motion.div>
                ) : (
                  /* ── FORM COMPOSITION INTERFACE (EXACT EMAILJS FIELDS PRESERVED) ── */
                  <motion.form
                    key="form-state"
                    ref={formRef}
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', width: '100%', boxSizing: 'border-box' }}
                  >
                    {/* Name + Email Row */}
                    <div className="form-two-col">
                      {/* Name Field */}
                      <div style={{ width: '100%', minWidth: 0 }}>
                        <label
                          htmlFor="c-name"
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            color: focusedField === 'from_name' ? 'var(--accent-light)' : 'var(--text-3)',
                            marginBottom: '0.35rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          YOUR NAME *
                        </label>
                        <input
                          id="c-name"
                          name="from_name"
                          type="text"
                          required
                          value={form.from_name}
                          onChange={onChange}
                          onFocus={() => setFocusedField('from_name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="e.g. Alex Miller"
                          className="form-input"
                          style={{
                            padding: '0.7rem 0.9rem',
                            fontSize: '1rem',
                            borderColor: focusedField === 'from_name' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                            background: focusedField === 'from_name' ? 'rgba(124, 58, 237, 0.05)' : 'var(--surface-up)',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>

                      {/* Email Field */}
                      <div style={{ width: '100%', minWidth: 0 }}>
                        <label
                          htmlFor="c-email"
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            color: focusedField === 'from_email' ? 'var(--accent-light)' : 'var(--text-3)',
                            marginBottom: '0.35rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          YOUR EMAIL *
                        </label>
                        <input
                          id="c-email"
                          name="from_email"
                          type="email"
                          required
                          value={form.from_email}
                          onChange={onChange}
                          onFocus={() => setFocusedField('from_email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="alex@domain.com"
                          className="form-input"
                          style={{
                            padding: '0.7rem 0.9rem',
                            fontSize: '1rem',
                            borderColor: focusedField === 'from_email' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                            background: focusedField === 'from_email' ? 'rgba(124, 58, 237, 0.05)' : 'var(--surface-up)',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div style={{ width: '100%', minWidth: 0 }}>
                      <label
                        htmlFor="c-subject"
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: focusedField === 'subject' ? 'var(--accent-light)' : 'var(--text-3)',
                          marginBottom: '0.35rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        SUBJECT *
                      </label>
                      <input
                        id="c-subject"
                        name="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={onChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Collaboration / Project / Opportunity"
                        className="form-input"
                        style={{
                          padding: '0.7rem 0.9rem',
                          fontSize: '1rem',
                          borderColor: focusedField === 'subject' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                          background: focusedField === 'subject' ? 'rgba(124, 58, 237, 0.05)' : 'var(--surface-up)',
                          width: '100%',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Message Field with Character Counter */}
                    <div style={{ position: 'relative', width: '100%', minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <label
                          htmlFor="c-message"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            color: focusedField === 'message' ? 'var(--accent-light)' : 'var(--text-3)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          MESSAGE *
                        </label>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            color: form.message.length > 900 ? '#EF4444' : 'var(--text-4)',
                          }}
                        >
                          {form.message.length} / 1000
                        </span>
                      </div>

                      <textarea
                        id="c-message"
                        name="message"
                        required
                        maxLength={1000}
                        rows={4}
                        value={form.message}
                        onChange={onChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project, team, or opportunity..."
                        className="form-input"
                        style={{
                          padding: '0.75rem 0.9rem',
                          fontSize: '1rem',
                          minHeight: '120px',
                          resize: 'vertical',
                          lineHeight: 1.55,
                          borderColor: focusedField === 'message' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                          background: focusedField === 'message' ? 'rgba(124, 58, 237, 0.05)' : 'var(--surface-up)',
                          width: '100%',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Submit Button & Status State */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={status !== 'sending' ? { scale: 1.01 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '0.85rem 1.4rem',
                        borderRadius: '10px',
                        background: status === 'error' ? '#EF4444' : 'var(--accent)',
                        border: 'none',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        opacity: status === 'sending' ? 0.75 : 1,
                        boxShadow: '0 4px 20px rgba(124, 58, 237, 0.35)',
                        transition: 'background-color 0.2s ease, opacity 0.2s ease',
                        width: '100%',
                        minHeight: '46px',
                        touchAction: 'manipulation',
                        boxSizing: 'border-box',
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <Spinner />
                          <span>TRANSMITTING MESSAGE...</span>
                        </>
                      ) : status === 'error' ? (
                        <>
                          <FiAlertCircle size={16} />
                          <span>TRANSMISSION FAILED — RETRY</span>
                        </>
                      ) : (
                        <>
                          <span>TRANSMIT MESSAGE</span>
                          <FiSend size={14} />
                        </>
                      )}
                    </motion.button>

                    {/* Error Banner with Direct Fallback */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          key="err-banner"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          style={{
                            padding: '0.75rem 0.9rem',
                            background: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.25)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#EF4444',
                            fontSize: '0.78rem',
                            flexWrap: 'wrap',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}
                        >
                          <FiAlertCircle size={15} style={{ flexShrink: 0 }} />
                          <span style={{ wordBreak: 'break-word' }}>
                            Something went wrong. Please email directly at{' '}
                            <a
                              href="mailto:shreyasgshetty.18@gmail.com"
                              style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600, wordBreak: 'break-all' }}
                            >
                              shreyasgshetty.18@gmail.com
                            </a>
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Spinner = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 0.75s linear infinite' }}>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 60" strokeLinecap="round" />
  </svg>
);

export default Contact;
