import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top decorative border */}
      <div className="footer-top-border">
        <div className="border-line"></div>
        <div className="border-ornament">✦</div>
        <div className="border-line"></div>
      </div>

      <div className="footer-content">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <span className="brand-icon">🥐</span>
              <div className="brand-text">
                <span className="brand-name">Tentation</span>
                <span className="brand-accent">Lusitane</span>
              </div>
            </div>
            <p className="brand-tagline">
              L'authenticité portugaise au cœur de Clamart depuis notre passion pour les saveurs traditionnelles.
            </p>
            
            {/* Social Links */}
            <div className="social-section">
              <span className="social-label">Suivez-nous</span>
              <div className="social-links">
                <motion.a 
                  href="https://www.instagram.com/explore/locations/2258056977851082/tentation-lusitane-clamart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/tentationlusitaneclamart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-nav"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Navigation</h4>
            <nav className="nav-links">
              <a href="#home">Accueil</a>
              <a href="#specialites">Nos Spécialités</a>
              <a href="#gateaux">Gâteaux Personnalisés</a>
              <a href="#avis">Avis Clients</a>
              <a href="#contact">Contact</a>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Nous Trouver</h4>
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <span>77 Avenue du Général de Gaulle</span>
                  <span>92140 Clamart, France</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <a href="tel:+33611197842" className="info-text phone">
                  +33 6 11 19 78 42
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            className="footer-hours"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Horaires</h4>
            <div className="hours-table">
              <div className="hours-row">
                <span className="day">Mardi - Samedi</span>
                <span className="time">7h00 - 20h00</span>
              </div>
              <div className="hours-row">
                <span className="day">Dimanche</span>
                <span className="time">7h00 - 13h00</span>
              </div>
              <div className="hours-row closed">
                <span className="day">Lundi</span>
                <span className="time">Fermé</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="bottom-divider"></div>
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} <strong>Tentation Lusitane</strong> — Tous droits réservés
            </p>
            <div className="bottom-tagline">
              <span className="flag">🇵🇹</span>
              <span>Saveurs du Portugal à Clamart</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
