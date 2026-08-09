import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

// ─────────────────────────────────────────────────────────────
// EmailJS credentials — fill these in after setup:
//  1. Sign up free at https://www.emailjs.com
//  2. Add an Email Service (Gmail) → copy the Service ID
//  3. Create an Email Template → copy the Template ID
//     Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//  4. Go to Account → API Keys → copy your Public Key
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_esluaq8';
const EMAILJS_TEMPLATE_ID = 'template_ys5i3oh';
const EMAILJS_PUBLIC_KEY = 'TxoIlrZoDl6AXGNVS';


const CONTACT_INFO = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'shreyasgshetty.18@gmail.com',
    href: 'mailto:shreyasgshetty.18@gmail.com',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/shreyasgshetty',
    href: 'https://github.com/shreyasgshetty',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreyas-g-shetty18',
    href: 'https://linkedin.com/in/shreyas-g-shetty18',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
];

/**
 * Contact section with info cards and an animated contact form.
 */
const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('sent');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  });

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-200px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#F1F5F9' }}>
            Let's Connect
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0', fontSize: '0.97rem' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact info */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CONTACT_INFO.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(15, 20, 35, 0.6)',
                  border: '1px solid rgba(6, 182, 212, 0.1)',
                  borderRadius: '12px',
                  transition: 'border-color 0.3s',
                  textDecoration: 'none',
                  cursor: info.href ? 'pointer' : 'default',
                }}
                as={info.href ? 'a' : 'div'}
                onClick={() => info.href && window.open(info.href, info.href.startsWith('mailto') ? '_self' : '_blank')}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.35)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.1)'}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06B6D4',
                  flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{info.label}</p>
                  <p style={{ color: '#F1F5F9', fontWeight: 500, fontSize: '0.9rem' }}>{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <div style={{
              marginTop: '0.5rem',
              padding: '1rem 1.25rem',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', flexShrink: 0, boxShadow: '0 0 8px #10B981' }} />
              <p style={{ color: '#10B981', fontSize: '0.875rem', fontWeight: 600 }}>
                Available for internships and opportunities
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div {...fadeUp(0.2)}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>Name *</label>
                  <input
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input"
                    style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>Email *</label>
                  <input
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                    style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>Subject *</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can I help?"
                  className="form-input"
                  style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input"
                  style={{ padding: '0.7rem 1rem', fontSize: '0.9rem', resize: 'vertical', minHeight: '130px' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={status === 'sending'}
                className="btn-glow"
                style={{
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: status === 'sending' ? 0.8 : 1,
                }}
              >
                <FiSend size={16} />
                <span>
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : status === 'error' ? '✗ Failed — try again' : 'Send Message'}
                </span>
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: '#10B981', textAlign: 'center', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: '#F87171', textAlign: 'center', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  Something went wrong. Please email me directly at shreyasgshetty18@gmail.com
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
