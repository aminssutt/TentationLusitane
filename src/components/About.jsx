import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2015", label: "Année de création" },
    { number: "100+", label: "Produits artisanaux" },
    { number: "1000+", label: "Clients satisfaits" },
    { number: "100%", label: "Fait maison" }
  ];

  return (
    <section className="about" ref={ref}>
      <div className="about-bg"></div>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Notre Histoire</span>
          <h2 className="section-title">L'Art de la Pâtisserie Portugaise</h2>
          <div className="about-description">
            <p>
              <strong>Tentation Lusitane</strong> est née de la passion pour les saveurs 
              authentiques du Portugal. Installée au cœur de Clamart, notre boulangerie-pâtisserie 
              perpétue les traditions centenaires de l'art culinaire portugais.
            </p>
            <p>
              Chaque jour, nos artisans préparent avec amour nos célèbres <em>Pastéis de Nata</em>, 
              ces petites tartelettes à la crème qui ont fait la renommée de notre pays. Nous 
              confectionnons également des <em>Bolas de Berlim</em>, du pain traditionnel et 
              une variété de pâtisseries qui raviront vos papilles.
            </p>
            <p>
              Notre spécialité ? Les <strong>gâteaux d'anniversaire personnalisés</strong>. 
              Véritables œuvres d'art comestibles, ils sont créés sur mesure pour rendre 
              vos célébrations inoubliables.
            </p>
          </div>

          <div className="about-signature">
            <span className="signature-text">— L'équipe Tentation Lusitane</span>
            <span className="signature-icon">🇵🇹</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-grid">
            <div className="visual-card main">
              <div className="card-content">
                <span className="card-emoji">🥮</span>
                <span className="card-label">Pastéis de Nata</span>
                <span className="card-desc">Notre signature</span>
              </div>
            </div>
            <div className="visual-card secondary">
              <div className="card-content">
                <span className="card-emoji">🍩</span>
                <span className="card-label">Bolas de Berlim</span>
              </div>
            </div>
            <div className="visual-card secondary">
              <div className="card-content">
                <span className="card-emoji">🎂</span>
                <span className="card-label">Gâteaux Custom</span>
              </div>
            </div>
          </div>
          
          <div className="azulejo-decoration">
            <div className="azulejo-tile"></div>
            <div className="azulejo-tile"></div>
            <div className="azulejo-tile"></div>
            <div className="azulejo-tile"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="about-stats"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
