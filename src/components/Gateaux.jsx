import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Gateaux.css';

// Import des images
import image1 from '../assets/image 1.jpg';
import image2 from '../assets/image 2.jpg';
import image3 from '../assets/image 3.jpg';
import image4 from '../assets/image 4.jpg';
import image5 from '../assets/image 5.jpg';
import image6 from '../assets/image 6.jpg';
import image7 from '../assets/image 7.jpeg';
import image8 from '../assets/image 8.jpeg';
import image9 from '../assets/image 9.jpeg';
import image10 from '../assets/image 10.jpg';

const gateauxImages = [
  { id: 1, src: image1, alt: "Gâteau personnalisé 1" },
  { id: 2, src: image2, alt: "Gâteau personnalisé 2" },
  { id: 3, src: image3, alt: "Gâteau personnalisé 3" },
  { id: 4, src: image4, alt: "Gâteau personnalisé 4" },
  { id: 5, src: image5, alt: "Gâteau personnalisé 5" },
  { id: 6, src: image6, alt: "Gâteau personnalisé 6" },
  { id: 7, src: image7, alt: "Gâteau personnalisé 7" },
  { id: 8, src: image8, alt: "Gâteau personnalisé 8" },
  { id: 9, src: image9, alt: "Gâteau personnalisé 9" },
  { id: 10, src: image10, alt: "Gâteau personnalisé 10" },
];

const Gateaux = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi - à remplacer par EmailJS ou autre service
    try {
      // Ici on peut intégrer EmailJS
      // await emailjs.send('service_id', 'template_id', formData, 'public_key');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="gateaux" className="gateaux" ref={ref}>
      <div className="gateaux-bg-pattern"></div>
      
      <motion.div 
        className="gateaux-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Sur Mesure</span>
        <h2 className="section-title">Gâteaux d'Anniversaire</h2>
        <p className="section-description">
          Créez des souvenirs inoubliables avec nos gâteaux personnalisés. 
          Chaque création est unique, conçue spécialement pour votre célébration.
        </p>
      </motion.div>

      {/* Galerie de gâteaux */}
      <motion.div 
        className="gateaux-gallery"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="gallery-grid">
          {gateauxImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span>Voir</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal image */}
      {selectedImage && (
        <motion.div 
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </motion.div>
        </motion.div>
      )}

      {/* Formulaire de commande */}
      <motion.div 
        className="booking-section"
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="booking-content">
          <div className="booking-info">
            <h3>Réservez Votre Gâteau</h3>
            <p>
              Envoyez-nous votre demande et nous vous contacterons pour créer 
              le gâteau parfait pour votre occasion spéciale.
            </p>
            <div className="booking-features">
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span>Design Personnalisé</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🍰</span>
                <span>Saveurs au Choix</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📞</span>
                <span>Consultation Gratuite</span>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom Complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="06 XX XX XX XX"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date de l'événement</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group full">
              <label htmlFor="message">Décrivez votre gâteau idéal *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                placeholder="Type de gâteau, thème, nombre de personnes, allergies..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="loading">Envoi en cours...</span>
              ) : (
                <span>Envoyer ma Demande</span>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p 
                className="status-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Demande envoyée ! Nous vous contacterons très bientôt.
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p 
                className="status-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Une erreur est survenue. Veuillez réessayer.
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Gateaux;
