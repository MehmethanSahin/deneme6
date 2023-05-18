import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    
    <div className={styles.container}>
      
      
      <div className={styles.overlay}></div>
      <div className={styles.content}>
      
        <div className={styles.title}>How Nuro <span>delivery works.</span></div>
        <img src="https://nuro.imgix.net/grab-your-order.jpg?w=1024&fit=max&auto=format&auto=compress"/>
        <div className={styles.description}>
         
        </div>
      </div>
    </div>
  );
};

export default Service;