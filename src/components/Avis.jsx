import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Avis.css';

const avisGoogle = [
  {
    id: 1,
    name: "Steven",
    rating: 5,
    date: "Il y a une semaine",
    text: "Des pâtisseries absolument délicieuses ! Je suis un client occasionnel, mais chaque passage est un vrai plaisir. Les saveurs me rappellent les goûts de mon enfance au Portugal, un vrai voyage nostalgique à chaque bouchée. Les patrons sont adorables et très attentionnés !",
    avatar: "S"
  },
  {
    id: 2,
    name: "SAMA TRAORE",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Une véritable pépite à Clamart ! La boulangerie Tentation Lusitane propose des produits d'une qualité exceptionnelle. L'accueil est toujours chaleureux, souriant et attentionné, ce qui donne envie de revenir à chaque visite. L'endroit est propre et agréable.",
    avatar: "ST"
  },
  {
    id: 3,
    name: "Tatiana Delaye",
    rating: 5,
    date: "Il y a 3 mois",
    text: "Superbe boulangerie très accueillante, le personnel est très gentil et bienveillant. Les sandwichs sont excellents ! Il y a du choix et tout est bien garni. Bravo !",
    avatar: "TD"
  },
  {
    id: 4,
    name: "Laurent Vrignaud",
    rating: 5,
    date: "Il y a 6 mois",
    text: "Nous revoilà au Portugal ! Beaucoup de choix en pâtisserie portugaise, ainsi que l'équipe très agréable.",
    avatar: "LV"
  },
  {
    id: 5,
    name: "MICKAEL VV",
    rating: 3,
    date: "Il y a 2 semaines",
    text: "Cela fait plusieurs fois que je vais chercher des sandwichs, choix très important et assez copieux dans l'ensemble. Bon, certains sandwichs ont une association d'ingrédients étonnante. Prix dans la moyenne, gros avantage on peut payer facilement.",
    avatar: "MV"
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
              <span className="rating-number">4.6</span>
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
