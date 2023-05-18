import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail(''); 
    }
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setIsSubmitted(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.linksWrapper}>
            <div className={styles.linksColumn}>
              <a href="#" className={styles.link}>Blog</a>
              <a href="#" className={styles.link}>Hakkımızda</a>
              <a href="#" className={styles.link}>Kariyer</a>
            </div>
            <div className={styles.linksColumn}>
              <a href="#" className={styles.link}>Blog</a>
              <a href="#" className={styles.link}>Hakkımızda</a>
              <a href="#" className={styles.link}>Kariyer</a>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h4 className={styles.title}>Bize Ulaşın</h4>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className={styles.input}
              value={email}
              onChange={handleInputChange}
            />
            <button type="submit" className={styles.button}>
              {isSubmitted ? 'Teşekkürler!' : 'Gönder'}
            </button>
          </form>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
            <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
            <a href="#" className={styles.socialLink}><i className="fab fa-linkedin"></i></a>
          </div>
          <div className={styles.copyRight}>©2023 Yönetir</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;