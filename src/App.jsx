import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/Footer';

// Lazy-loaded sections for performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

/** Section loading fallback */
const SectionLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem', minHeight: '200px' }}>
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '3px solid rgba(6, 182, 212, 0.15)',
      borderTop: '3px solid #06B6D4',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

/**
 * Root application component.
 * Manages page load animation and assembles all sections.
 */
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Brief loading screen for premium feel
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Animated page loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#0B0F19',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              gap: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#fff',
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)',
              }}
            >
              S
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ color: '#64748B', fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}
            >
              Loading portfolio...
            </motion.p>
            <div style={{
              width: '120px',
              height: '2px',
              background: 'rgba(6, 182, 212, 0.1)',
              borderRadius: '1px',
              overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #06B6D4, #3B82F6)', borderRadius: '1px' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main app */}
      {!loading && (
        <div style={{ minHeight: '100vh', background: '#0B0F19', position: 'relative', overflowX: 'hidden' }}>
          {/* Floating particles */}
          <ParticlesBackground />

          {/* Sticky navbar */}
          <Navbar />

          {/* Main content */}
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />

            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Skills />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Projects />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Education />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </main>

          <Footer />

          {/* Back to top button */}
          <BackToTop />
        </div>
      )}
    </>
  );
}

/** Floating back-to-top button */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 500,
            boxShadow: '0 4px 20px rgba(6, 182, 212, 0.35)',
            fontSize: '1.2rem',
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;
