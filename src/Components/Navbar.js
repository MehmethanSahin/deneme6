import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaTimes } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import logo from "./ss-images/yonetirLogo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };


  return (
  
    <nav className={styles.navbar}>
     
      <div className={styles.left}>
   
        <Link to="/service" className={location.pathname !== "/" ? styles.activeLink : undefined}>Service</Link>
        <Link to="/technology" className={location.pathname !== "/"? styles.activeLink : undefined}>Technology</Link>
        <Link to="/safety" className={location.pathname !== "/" ? styles.activeLink : undefined}>Safety</Link>
        <Link to="https://medium.com/@yonetir" target="blank"  className={location.pathname !== "/" ? styles.activeLink : undefined}>Blog</Link>
      </div>
      <div className={styles.logoContainer} >
  <a href="/">
  <img 
    src={logo}
    className={styles.logo}
   
  /></a>
</div>

      <div className={styles.right}>
        <CSSTransition
          in={isMenuOpen}
          timeout={90000}
          classNames={{
            enter: styles["menu-overlay-enter"],
            enterActive: styles["menu-overlay-enter-active"],
            exit: styles["menu-overlay-exit"],
            exitActive: styles["menu-overlay-exit-active"],
          }}
          unmountOnExit
        >
          <div
            className={styles.menuOverlay}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className={styles.menuContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.menuLinks}>
                <Link to="/service" className={location.pathname === "/service" ? styles.activeLink : undefined}>Service</Link>
                <Link to="/safety" className={location.pathname === "/safety" ? styles.activeLink : undefined}>Safety</Link>
                <Link to="/technology" className={location.pathname === "/technology" ? styles.activeLink : undefined}>Technology</Link>
                <Link to="/blog" className={location.pathname === "/safety" ? styles.activeLink : undefined}>Blog</Link>
                <Link to="/faqpage" className={location.pathname !== "/faqpage" ? styles.activeLink : undefined}>FAQs</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? styles.activeLink : undefined}>Contact</Link>


              </div>
              <div className={styles.closeButton} onClick={handleMenuClick}>
                <button className={styles.close}>Close x</button>
              </div>
            </div>
          </div>
        </CSSTransition>
   
        <button
          className={`${styles.btn}  ${
            isMenuOpen ? styles.closeButton : "close"
          }`}
          onClick={handleMenuClick}
          style={{
            right: isMenuOpen ? "-1000px" : "20px",
            textAlign: "center",
          }}
        >
          {isMenuOpen ? <FaTimes /> : "Menu+"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;