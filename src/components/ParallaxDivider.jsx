import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './ParallaxDivider.css';

const ParallaxDivider = ({ image, text, dark = true }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={ref} className={`parallax-divider ${dark ? 'dark' : 'light'}`}>
      <motion.div 
        className="parallax-image-wrapper"
        style={{ y, scale }}
      >
        <img src={image} alt="" />
      </motion.div>
      
      <div className="parallax-overlay"></div>
      
      <motion.div 
        className="parallax-text-content"
        style={{ opacity, y: textY }}
      >
        <div className="quote-mark">"</div>
        <p className="quote-text">{text}</p>
        <div className="quote-decoration">
          <span></span>
          <span className="deco-diamond">◆</span>
          <span></span>
        </div>
      </motion.div>

      {/* Corners */}
      <div className="divider-corner top-left"></div>
      <div className="divider-corner top-right"></div>
      <div className="divider-corner bottom-left"></div>
      <div className="divider-corner bottom-right"></div>
    </section>
  );
};

export default ParallaxDivider;
