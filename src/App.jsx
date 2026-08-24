import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About     = lazy(() => import('./components/About'));
const Skills    = lazy(() => import('./components/Skills'));
const Projects  = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact   = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem', minHeight: '200px', alignItems: 'center' }}>
    <div style={{
      width: '32px', height: '32px', borderRadius: '50%',
      border: '2px solid rgba(124,58,237,0.15)',
      borderTop: '2px solid #7C3AED',
      animation: 'spin 0.75s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed', inset: 0,
              background: '#080808',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              zIndex: 9999, gap: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
                fontSize: '1.6rem', color: '#fff',
                boxShadow: '0 0 48px rgba(124,58,237,0.5)',
              }}
            >
              S
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: '#525252', fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Shreyas G Shetty
            </motion.p>
            <div style={{ width: '80px', height: '1px', background: 'rgba(124,58,237,0.15)', overflow: 'hidden' }}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, #7C3AED, transparent)' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflowX: 'hidden' }}>
          {/* Global background noise */}
          <div style={{
            position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.5,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          }} />

          <Navbar />

          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <Suspense fallback={<SectionLoader />}><About /></Suspense>
            <Suspense fallback={<SectionLoader />}><Skills /></Suspense>
            <Suspense fallback={<SectionLoader />}><Projects /></Suspense>
            <Suspense fallback={<SectionLoader />}><Education /></Suspense>
            <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
          </main>

          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

const BackToTop = () => {
  const [v, setV] = useState(false);
  useEffect(() => {
    const h = () => setV(window.scrollY > 500);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <AnimatePresence>
      {v && (
        <motion.button
          key="btt"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 500,
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'var(--surface-up)', border: '1px solid var(--border-accent)',
            color: 'var(--accent-light)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem',
          }}
        >↑</motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;
