import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ children, image, overlay = true, height = "60vh" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="parallax-section" style={{ minHeight: height }}>
      <motion.div 
        className="parallax-bg"
        style={{ y }}
      >
        <img src={image} alt="" />
        {overlay && <div className="parallax-overlay"></div>}
      </motion.div>
      <motion.div className="parallax-content" style={{ opacity }}>
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
