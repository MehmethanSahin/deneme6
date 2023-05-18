import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-scroll";
import SecondPage from "./SecondPage";
import Tanıtım from "./Tanıtım";


const Landing = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.backgroundImage}></div>

        <div className={styles.content}>
          <span className={styles.dikeyCizgi}></span>
          <div className={styles.slogan}>
            <h1>Less driving.</h1>
            <h1>More thriving.</h1>
          </div>
          <div className={styles.mission}>
            <p>We’re on a mission to better everyday life through robotics.</p>
          </div>

          <Link
            activeClass="active"
            to="secondPage"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          />
        </div>
      </div>
      <SecondPage />
      <Tanıtım />
    </>
  );
};

export default Landing;