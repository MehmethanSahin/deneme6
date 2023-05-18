import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactHeader}>
        <h1>Contact</h1>
      </div>

      <div className={styles.info}>
        <h2>Contact Us</h2>
        <p>
          Nuro Headquarters, Ankara, Turkey{" "}
          <MdLocationOn className={styles.contactIcon} />
        </p>
        <p>
          +90 312 123 4567 <AiOutlinePhone className={styles.contactIcon} />
        </p>
        <p>
          info@nuro.ai <AiOutlineMail className={styles.contactIcon} />
        </p>
      </div>

      <div style={{ width: "100%" }}>
        <iframe
          title="Nuro Location"
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=an%C4%B1tkabir+(Y%C3%B6netir)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure area map
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
