import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Avis.css';

const avisGoogle = [
  {
    id: 1,
    name: "Marie L.",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Les pastéis de nata sont tout simplement divins ! Un vrai goût du Portugal. Le personnel est très accueillant et les prix sont raisonnables. Je recommande vivement !",
    avatar: "ML"
  },
  {
    id: 2,
    name: "Jean-Pierre D.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Excellente boulangerie portugaise ! Le pain est frais tous les jours et les viennoiseries sont délicieuses. Les gâteaux d'anniversaire sont magnifiques et savoureux.",
    avatar: "JP"
  },
  {
    id: 3,
    name: "Sofia M.",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Uma padaria portuguesa autêntica em Clamart! Os pastéis de nata são perfeitos, como em Lisboa. Muito recomendado!",
    avatar: "SM"
  },
  {
    id: 4,
    name: "Thomas B.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "J'ai commandé un gâteau d'anniversaire personnalisé pour ma fille et c'était parfait ! Très beau et délicieux. Merci Tentation Lusitane !",
    avatar: "TB"
  },
  {
    id: 5,
    name: "Catherine R.",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Les bolas de Berlim sont incroyables ! Moelleux et la crème est délicieuse. Je viens ici tous les week-ends maintenant.",
    avatar: "CR"
  },
  {
    id: 6,
    name: "Antonio S.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Finalmente uma pastelaria portuguesa de qualidade na região! Produtos frescos, sabores autênticos. O frango assado também é excelente!",
    avatar: "AS"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
      ))}
    </div>
  );
};

const Avis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="avis" className="avis" ref={ref}>
      <div className="avis-decoration"></div>
      
      <motion.div 
        className="avis-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Témoignages</span>
        <h2 className="section-title">Ce Que Disent Nos Clients</h2>
        <div className="google-rating">
          <span className="google-logo">G</span>
          <div className="rating-info">
            <div className="rating-stars">
              <StarRating rating={5} />
              <span className="rating-number">5.0</span>
            </div>
            <span className="rating-count">Basé sur les avis Google</span>
          </div>
        </div>
      </motion.div>

      <div className="avis-container">
        <motion.div 
          className="avis-track"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {avisGoogle.map((avis, index) => (
            <motion.div
              key={avis.id}
              className="avis-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="avis-header-card">
                <div className="avis-avatar">{avis.avatar}</div>
                <div className="avis-meta">
                  <h4>{avis.name}</h4>
                  <span className="avis-date">{avis.date}</span>
                </div>
                <div className="google-icon">G</div>
              </div>
              <StarRating rating={avis.rating} />
              <p className="avis-text">{avis.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="avis-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a 
          href="https://www.google.com/maps/place/77+Av.+du+G%C3%A9n%C3%A9ral+de+Gaulle,+92140+Clamart" 
          target="_blank" 
          rel="noopener noreferrer"
          className="google-review-btn"
        >
          <span className="btn-icon">G</span>
          Laisser un avis sur Google
        </a>
      </motion.div>
    </section>
  );
};

export default Avis;
