import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';

/* ── EmailJS — PRESERVED EXACTLY ─────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'service_esluaq8';
const EMAILJS_TEMPLATE_ID = 'template_ys5i3oh';
const EMAILJS_PUBLIC_KEY  = 'TxoIlrZoDl6AXGNVS';

const INFO = [
  { icon: <FiMail size={18} />,     label: 'Email',    value: 'shreyasgshetty.18@gmail.com',       href: 'mailto:shreyasgshetty.18@gmail.com', color: '#7C3AED' },
  { icon: <FiGithub size={18} />,   label: 'GitHub',   value: 'github.com/shreyasgshetty',         href: 'https://github.com/shreyasgshetty', color: '#A3A3A3' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/shreyas-g-shetty18', href: 'https://linkedin.com/in/shreyas-g-shetty18', color: '#60A5FA' },
  { icon: <FiMapPin size={18} />,   label: 'Location', value: 'Bengaluru, India',                  href: null, color: '#F59E0B' },
];

const rgba = (hex, a) => {
  if (!hex.startsWith('#')) return hex;
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
};

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.06 });
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('sent');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const up = (d = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section id="contact" ref={ref} style={{ position: 'relative', padding: '8rem 0', background: 'var(--bg-alt)', overflow: 'hidden' }}>

      {/* Violet glow */}
      <div style={{ position: 'absolute', top: '30%', right: '-8%', width: '40vw', height: '40vw', maxWidth: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div {...up()} style={{ marginBottom: '4rem', maxWidth: '600px' }}>
          <div className="eyebrow">Contact</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', marginBottom: '1rem' }}>
            Let's Connect
          </h2>
          <p style={{ color: 'var(--text-3)', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* ── Info column ── */}
          <motion.div {...up(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {INFO.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                onClick={() => info.href && window.open(info.href, info.href.startsWith('mailto') ? '_self' : '_blank')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.1rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  cursor: info.href ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (info.href) {
                    e.currentTarget.style.borderColor = rgba(info.color, 0.35);
                    e.currentTarget.style.background = 'var(--surface-up)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--surface)';
                }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '9px', background: rgba(info.color, 0.1), border: `1px solid ${rgba(info.color, 0.22)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: info.color, flexShrink: 0 }}>
                  {info.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{info.label}</p>
                  <p style={{ color: 'var(--text-2)', fontWeight: 500, fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{
                padding: '0.9rem 1.1rem',
                background: 'rgba(34,197,94,0.05)',
                border: '1px solid rgba(34,197,94,0.18)',
                borderRadius: 'var(--r-md)',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}
            >
              <span className="avail-dot" style={{ flexShrink: 0 }} />
              <p style={{ color: '#22C55E', fontSize: '0.83rem', fontWeight: 600 }}>
                Available for internships and opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* ── Form column ── */}
          <motion.div {...up(0.18)}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-xl)',
                padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}
            >
              {/* Name + Email */}
              <div className="form-two-col">
                <Field id="c-name" label="Name" name="from_name" value={form.from_name} onChange={onChange} placeholder="Your name" />
                <Field id="c-email" label="Email" name="from_email" type="email" value={form.from_email} onChange={onChange} placeholder="your@email.com" />
              </div>

              <Field id="c-subject" label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="How can I help?" />

              {/* Message */}
              <div>
                <label htmlFor="c-message" style={labelStyle}>Message *</label>
                <textarea
                  id="c-message" name="message"
                  value={form.message} onChange={onChange}
                  required rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input"
                  style={{ padding: '0.75rem 1rem', resize: 'vertical', minHeight: '130px', fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '0.9rem',
                  borderRadius: 'var(--r-md)',
                  background: status === 'error' ? '#EF4444' : status === 'sent' ? '#22C55E' : 'var(--accent)',
                  border: 'none', color: '#fff', fontWeight: 700,
                  fontSize: '0.9rem', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.75 : 1,
                  transition: 'all 0.22s',
                  boxShadow: status === 'idle' ? '0 4px 24px rgba(124,58,237,0.3)' : 'none',
                }}
              >
                {status === 'sending' ? <><Spinner /> Sending...</> :
                 status === 'sent'    ? <><FiCheck size={16} /> Sent!</> :
                 status === 'error'   ? <><FiAlertCircle size={16} /> Failed — try again</> :
                                        <><FiSend size={15} /> Send Message</>}
              </motion.button>

              {/* Banners */}
              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ padding: '0.75rem 1rem', background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.22)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: '8px', color: '#22C55E', fontSize: '0.85rem', fontWeight: 500 }}>
                    <FiCheck size={15} style={{ flexShrink: 0 }} /> Thanks! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div key="err" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.22)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontSize: '0.85rem', fontWeight: 500 }}>
                    <FiAlertCircle size={15} style={{ flexShrink: 0 }} /> Something went wrong. Email me directly at shreyasgshetty.18@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const labelStyle = {
  display: 'block', color: 'var(--text-3)',
  fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
  marginBottom: '0.45rem', letterSpacing: '0.1em', textTransform: 'uppercase',
};

const Field = ({ id, label, ...props }) => (
  <div>
    <label htmlFor={id} style={labelStyle}>{label} *</label>
    <input id={id} className="form-input" required style={{ padding: '0.7rem 1rem' }} {...props} />
  </div>
);

const Spinner = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 0.75s linear infinite' }}>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 60" strokeLinecap="round" />
  </svg>
);

export default Contact;
