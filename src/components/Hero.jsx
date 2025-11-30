import { motion } from 'framer-motion';
import { useRef } from 'react';
import './Hero.css';
import gifFond from '../assets/background.gif';

const Hero = () => {
  const ref = useRef(null);

  return (
    <section id="home" ref={ref} className="hero">
      {/* GIF Background */}
      <div className="hero-video-container">
        <img 
          src={gifFond} 
          alt="Bakery background" 
          className="hero-gif"
        />
        <div className="hero-video-overlay"></div>
        <div className="hero-grain"></div>
      </div>

      <motion.div 
        className="hero-content"
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <span className="badge-flag">🇵🇹</span>
          <span className="badge-text">Artisan Portugais à Clamart</span>
        </motion.div>

        <div className="hero-title-wrapper">
          <motion.h1 className="hero-title">
            {["Tentation", "Lusitane"].map((word, i) => (
              <motion.span
                key={word}
                className={`hero-title-word ${i === 1 ? 'accent' : ''}`}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.8 + i * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          className="hero-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.3, ease: "easeInOut" }}
        />

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Pastéis de Nata • Bolas de Berlim • Viennoiseries • Gâteaux Personnalisés
        </motion.p>

        <motion.div 
          className="hero-cta-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <motion.a 
            href="#specialites" 
            className="hero-btn primary"
            whileHover={{ scale: 1.05, letterSpacing: "0.15em" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Découvrir</span>
            <svg viewBox="0 0 24 24" className="btn-arrow">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
          <motion.a 
            href="#gateaux" 
            className="hero-btn secondary"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Commander un Gâteau
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>

      {/* Decorative corners */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </section>
  );
};

export default Hero;
