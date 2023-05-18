import React, { useState } from "react";
import styles from "./Technology.module.css";
import Carousel from "./Carousel";

const ServiceContent = () => {
  return (
    <div
      className={styles.contentContainer}
      style={{
        textAlign: "center",
        fontSize: "38.94px",
        fontFamily: "Suisse,sans-serif",
        fontWeight: "490",
        letterSpacing: "-1.20821",
        marginTop: "70px",
        marginBottom: "0px",
      }}
    >
      <div style={{ marginBottom: "20px" }} className={styles.technologyheader}>
        We’re reimagining{" "}
        <span style={{ color: "rgb(104,95,247" }}>local delivery.</span>
      </div>
      <img
        src="https://nuro.imgix.net/nuro_technology_hero_2021-04-09-175416.jpg?w=1920&fit=max&auto=format&auto=compress"
        alt="Delivery"
        style={{ borderRadius: "40px", width: "90%" }}
      />
      <div className={styles.textContainer}>
        <div className={styles.leftText}>
          <p className={styles.ServiceFirstp}>
            It’s time for robots to do the driving.
          </p>
        </div>
        <div className={styles.rightText}>
          <p className={styles.secondP}>
            Our custom autonomous delivery vehicles are designed to drive in
            neighborhoods. And because they only carry goods, they prioritize
            the safety of others. It’s a safer, smarter approach to everyday
            errands.
          </p>
        </div>
      </div>
      {/* Madde ve görseller bölümü */}
      <div style={{ marginTop: "0px", boxSizing: "border-box" }}>
        <div
          className={styles.technologyheader2}
          style={{ marginBottom: "40px", marginTop: "90px" }}
        >
          Technology<span style={{ color: "rgb(104,95,247" }}> advantage.</span>
        </div>
        <div className={styles.threeImgflex}>
          <div className={styles.threeImgSize}>
            <img
              src="https://nuro.imgix.net/nuro_small_on_purpose.jpg?w=768&fit=max&auto=format&auto=compress"
              alt="Image 1"
              className={styles.threeImg}
            />
            <span className={styles.maddeHeader}>Small on purpose.</span>

            <p className={styles.maddeP}>
              Small vehicles make a big difference. Our narrow vehicle allows
              for better passive and dynamic safety. This helps prevent
              pedestrian fatalities on roads.
            </p>

            <p className={styles.maddeP}>
              And, since our vehicles only carry goods, we can turn safety
              innovation inside out, shifting our focus to protecting those
              outside the vehicle.
            </p>
          </div>
          <div className={styles.threeImgSize}>
            <img
              className={styles.threeImg}
              src="https://nuro.imgix.net/nuro_smarter_stack.jpg?w=768&fit=max&auto=format&auto=compress"
              alt="Image 2"
            />
            <span className={styles.maddeHeader}>Reliable.</span>
            <p className={styles.maddeP}>
              The R2 features 360° and thermal cameras, as well as lidar and
              radar for a rich representation of the road.
            </p>
            <p className={styles.maddeP}>
              We build our own HD maps, and our AV stack combines engineered and
              machine-learned components for maximum robustness. Everything is
              backed by a redundant collision prevention system.
            </p>
          </div>
          <div className={styles.threeImgSize}>
            <img
              src="https://nuro.imgix.net/nuro_production.jpg?w=768&fit=max&auto=format&auto=compress"
              alt="Image 3"
              className={styles.threeImg}
            />
            <span className={styles.maddeHeader}>Helpfull.</span>
            <p className={styles.maddeP}>
              We make smart decisions and craft custom components when it
              enhances the performance of our vehicles.
            </p>
            <p className={styles.maddeP}>
              That allows us to build the best system without being limited by
              the constraints of existing vehicles.
            </p>
          </div>
        </div>
      </div>

      <Carousel />
      <div className={styles.buttonAndText}>
        <div className={styles.buttonAndTextContainer}>
          <h2 className={styles.buttonAndTextHeader}>
            Safety is important for us.
          </h2>
        </div>
        <div className={styles.buttonAndTextP} style={{ textAlign: "center" }}>
          <p>
            Our vehicles are on-road today in Houston, Silicon Valley, and Los
            Angeles.
          </p>
          <a href="/FaqPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px",
                display: "block",
                backgroundColor: "purple",
                color: "white",
                borderRadius: "20px",
                textAlign: "left",
                paddingLeft: "50px",
                paddingRight: "50px",
                border: "none",
                justifyContent: "start",
                margin: "0 auto",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Keşfet
            </button>
          </a>
        </div>
      </div>

      <img
        src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        style={{ width: "95%", borderRadius: "15px" }}
      />

      <div className={styles.buttonAndText}>
        <div className={styles.buttonAndTextContainer}>
          <h2 className={styles.buttonAndTextHeader}>
            All we do just safety houses.
          </h2>
        </div>
        <div className={styles.buttonAndTextP} style={{ textAlign: "center" }}>
          <p>
            Our vehicles are on-road today in Houston, Silicon Valley, and Los
            Angeles.
          </p>
          <a href="/FaqPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px",
                display: "block",
                backgroundColor: "purple",
                color: "white",
                borderRadius: "20px",
                textAlign: "left",
                paddingLeft: "50px",
                paddingRight: "50px",
                border: "none",
                justifyContent: "start",
                margin: "0 auto",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Keşfet
            </button>{" "}
          </a>
        </div>
      </div>
      {/* Kartlar bölümü */}
      <img
        src="https://media.gettyimages.com/id/88858589/photo/security-camera.jpg?s=612x612&w=0&k=20&c=UBxQRdbL21CvcuY7G7r6USRSKNbo2MvIu0eN8cAqTkg="
        style={{ width: "95%", borderRadius: "15px" }}
      />

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <div className="row">
          <div className="col-6 col-lg-3">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="https://nuro.imgix.net/Safety_Next_Card_2_Small_2023-04-14-002545_vfxg.jpg?w=425&amp;fit=max&amp;auto=format&amp;auto=compress"
                alt=""
                className={styles.card1}
              />
              <h1 className={styles.card1Header}>Have Questions?</h1>
              <a href="/FaqPage">
                <button
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "13px",
                    border: "none",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    color: "white",
                    fontFamily: "Suisse, Sans-Serif",
                    fontWeight: "400",
                    backgroundColor: "purple",
                    borderRadius: "15px",
                    padding: "10px",
                    width: "50%",
                    cursor: "pointer",
                  }}
                >
                  View FAQs
                </button>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div className={styles.card2} />
              <h1 className={styles.card2Header}>100%</h1>
              <p className={styles.card2P}>
                We use 100% renewable electricity from wind farms in Texas to
                power both our battery-electric vehicles and our facilities.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className={styles.card3}
                src="https://nuro.imgix.net/Large.jpg?w=1024&fit=max&auto=format&auto=compress"
                alt=""
              />
              <h1 className={styles.card3header}>
                A transformational service starts with a custom vehicle.
              </h1>
              <a href="/Safety">
                <button
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "26%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "14px",
                    border: "none",
                    paddingRight: "4px",
                    paddingLeft: "4px",
                    color: "white",
                    fontFamily: "Suisse, Sans-Serif",
                    fontWeight: "400",
                    backgroundColor: "purple",
                    borderRadius: "15px",
                    padding: "10px",
                    width: "30%",
                    cursor: "pointer",
                  }}
                >
                  Safety
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${"https://www.kpmglaw.be/media/1799/surveillance-camera-1200x600px.jpg?anchor=center&mode=crop&width=1200&height=600&rnd=132569950470000000"})`,
          }}
        ></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <span className={styles.dikeyCizgi}></span>
          <div className={styles.title}>Technology</div>
          <div className={styles.description}></div>
        </div>
      </div>
      <ServiceContent />
    </>
  );
};

export default Service;
