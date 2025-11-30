import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const cards = [
    {
      id: 'location',
      icon: <FaMapMarkerAlt />,
      title: 'Notre Adresse',
      content: '77 Avenue du Général de Gaulle',
      subContent: '92140 Clamart, France',
      color: '#C9A227'
    },
    {
      id: 'phone',
      icon: <FaPhone />,
      title: 'Téléphone',
      content: '+33 6 11 19 78 42',
      subContent: 'Appelez-nous',
      color: '#B85C38',
      link: 'tel:+33611197842'
    },
    {
      id: 'hours',
      icon: <FaClock />,
      title: 'Horaires',
      content: 'Mar-Sam: 7h-20h',
      subContent: 'Dim: 7h-13h | Lun: Fermé',
      color: '#2D5A3D'
    }
  ];

  return (
    <section id="contact" className="contact-innovative" ref={containerRef}>
      {/* Background Elements */}
      <div className="contact-bg-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity }
          }}
        />
        <motion.div 
          className="shape shape-2"
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity }
          }}
        />
      </div>

      <div className="contact-wrapper" ref={ref}>
        {/* Left Side - Interactive Map */}
        <motion.div 
          className="contact-visual"
          style={{ y: imageY }}
        >
          <div className="visual-frame">
            <div className="frame-corner top-left"></div>
            <div className="frame-corner top-right"></div>
            <div className="frame-corner bottom-left"></div>
            <div className="frame-corner bottom-right"></div>
            
            <div className="map-3d-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.5!2d2.26!3d48.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s77+Avenue+du+G%C3%A9n%C3%A9ral+de+Gaulle%2C+92140+Clamart!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localisation"
              ></iframe>
              <div className="map-overlay-gradient"></div>
            </div>

            <motion.div 
              className="floating-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="badge-icon">📍</span>
              <div className="badge-content">
                <span className="badge-title">Tentation Lusitane</span>
                <span className="badge-subtitle">Clamart, France</span>
              </div>
            </motion.div>
          </div>

          <motion.a 
            href="https://www.google.com/maps/dir//77+Avenue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+92140+Clamart"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-floating-btn"
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Itinéraire</span>
            <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="contact-info-side"
          style={{ y: contentY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-eyebrow">Venez Nous Voir</span>
            <h2 className="contact-title">
              Notre
              <span className="title-accent"> Boutique</span>
            </h2>
            <p className="contact-intro">
              Au cœur de Clamart, découvrez notre univers de saveurs portugaises 
              authentiques dans une ambiance chaleureuse.
            </p>
          </motion.div>

          {/* Interactive Cards */}
          <div className="info-cards-stack">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`info-card-3d ${activeCard === card.id ? 'active' : ''}`}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ '--card-color': card.color }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  z: 50
                }}
              >
                {card.link ? (
                  <a href={card.link} className="card-inner">
                    <div className="card-icon-wrapper">
                      {card.icon}
                    </div>
                    <div className="card-text">
                      <span className="card-label">{card.title}</span>
                      <span className="card-value">{card.content}</span>
                      <span className="card-sub">{card.subContent}</span>
                    </div>
                    <div className="card-arrow">
                      <FaArrowRight />
                    </div>
                  </a>
                ) : (
                  <div className="card-inner">
                    <div className="card-icon-wrapper">
                      {card.icon}
                    </div>
                    <div className="card-text">
                      <span className="card-label">{card.title}</span>
                      <span className="card-value">{card.content}</span>
                      <span className="card-sub">{card.subContent}</span>
                    </div>
                  </div>
                )}
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div 
            className="social-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <span className="social-label">Suivez notre aventure</span>
            <div className="social-buttons">
              <motion.a 
                href="#" 
                className="social-btn instagram"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-btn facebook"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
