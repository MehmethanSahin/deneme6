import React, { useEffect, useState } from "react";
import styles from "./SecondPage.module.css";

import video from "./ss-images/6.gif"


function SecondPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const cardPosition = document
        .getElementById("secondPage")
        .getBoundingClientRect().top;

      if (currentScrollY >= cardPosition * 0.8) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div id="secondPage" className={styles.container}>
      <h1
        className={styles.title}
        style={{
          transform: show ? "translateY(0)" : "translateY(50px)",
          opacity: show ? 1 : 0,
          transition: "all 0.5s ease",
        }}
      >
        aPark
      </h1>
      <img
        autoPlay="autoplay"
        loop="loop"
        src={video}
        alt="Nuro"
        className={`${styles.image} ${show ? styles.slideIn : ""}`}
      />
      
   
    </div>
   
  );
}

export default SecondPage;