import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import './Specialites.css';

const specialites = [
  {
    id: 1,
    name: "Pastéis de Nata",
    description: "La célèbre tartelette portugaise à la crème pâtissière, croustillante et fondante à la fois.",
    icon: "🥮",
    accent: "Spécialité Signature",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600"
  },
  {
    id: 2,
    name: "Bolas de Berlim",
    description: "Nos délicieux beignets fourrés à la crème, légers comme un nuage.",
    icon: "🍩",
    accent: "Fait Maison",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600"
  },
  {
    id: 3,
    name: "Pain Traditionnel",
    description: "Pain portugais authentique, cuit chaque jour selon les recettes ancestrales.",
    icon: "🍞",
    accent: "Frais du Jour",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
  },
  {
    id: 4,
    name: "Viennoiseries",
    description: "Croissants, pains au chocolat et autres douceurs pour bien commencer la journée.",
    icon: "🥐",
    accent: "Artisanal",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
  },
  {
    id: 5,
    name: "Pâtisseries Maison",
    description: "Une variété de gâteaux et desserts portugais préparés avec passion.",
    icon: "🎂",
    accent: "Tradition",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
  },
  {
    id: 6,
    name: "Spécialités Salées",
    description: "Poulet braisé, salade de poulpe et autres délices pour vos repas.",
    icon: "🍗",
    accent: "Sur Commande",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600"
  }
];

const Specialites = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="specialites" className="specialites-new" ref={containerRef}>
      {/* Parallax Background Elements */}
      <motion.div className="parallax-deco deco-1" style={{ y: y1 }}>
        <span>🥐</span>
      </motion.div>
      <motion.div className="parallax-deco deco-2" style={{ y: y2, rotate }}>
        <span>🍞</span>
      </motion.div>
      <motion.div className="parallax-deco deco-3" style={{ y: y1 }}>
        <span>🥮</span>
      </motion.div>

      <div className="specialites-container" ref={ref}>
        <motion.div 
          className="specialites-intro"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="intro-eyebrow">Nos Créations</span>
          <h2 className="intro-title">
            Saveurs <span className="accent">Authentiques</span>
          </h2>
          <p className="intro-text">
            Découvrez le goût du Portugal à travers nos créations artisanales, 
            préparées chaque jour avec passion et les meilleurs ingrédients.
          </p>
        </motion.div>

        <div className="specialites-showcase">
          {specialites.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`showcase-item ${hoveredId === item.id ? 'hovered' : ''} ${hoveredId && hoveredId !== item.id ? 'dimmed' : ''}`}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="item-image">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="item-overlay"></div>
              </div>
              
              <div className="item-content">
                <span className="item-number">0{index + 1}</span>
                <div className="item-icon">{item.icon}</div>
                <h3 className="item-title">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <span className="item-tag">{item.accent}</span>
              </div>

              <motion.div 
                className="item-reveal"
                initial={{ scaleX: 1 }}
                animate={isInView ? { scaleX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="specialites-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="footer-line"></div>
          <p>Venez découvrir toutes nos créations en boutique</p>
          <a href="#contact" className="footer-link">
            <span>Nous trouver</span>
            <svg viewBox="0 0 24 24" className="link-arrow">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialites;
