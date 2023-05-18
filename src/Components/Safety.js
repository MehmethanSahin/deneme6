import React, { useState } from "react";
import styles from "./Safety.module.css";
import Carousel from "./Carousel";
import Faq from "./Faq";

const ServiceContent = () => {
  return (
    <div className={styles.contentContainer} style={{marginBottom:"400px"}}>
      <div
        className={styles.firstTitle}
        style={{ marginBottom: "20px", color: "rgb(104,95,247" }}
      >
        You're always <span style={{ color: "black" }}>our priority.</span>
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
          style={{ marginBottom: "40px" }}
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
            <span className={styles.maddeHeader} style={{ textAlign: "left" }}>
              Safe.
            </span>

            <p className={styles.maddeP}>
              By designing a vehicle dedicated to delivering goods instead of
              carrying people, we have created safety innovations not possible
              with passenger vehicles
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
              Each critical driving system is redundant. This means that should
              any system go offline, there is a backup system in place to
              automatically take over.
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
              Our autonomous vehicles can provide convenient access to healthy
              groceries and supplies, give back the time that would have
              otherwise been spent running errands, and decrease traffic
              accident injuries.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.buttonAndText}>
        <div className={styles.buttonAndTextContainer}>
          <h2 className={styles.buttonAndTextHeader}>Safety is matter!.</h2>
        </div>
        <div className={styles.buttonAndTextP} style={{ textAlign: "center" }}>
          <p>
            Our vehicles are on-road today in Houston, Silicon Valley, and Los
            Angeles.
          </p>

          <a href="/service" style={{textDecoration:"none"}}>
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
          <h2 className={styles.buttonAndTextHeader}>On roads today.</h2>
        </div>
        <div className={styles.buttonAndTextP} style={{ textAlign: "center" }}>
          <p>
            Our vehicles are on-road today in Houston, Silicon Valley, and Los
            Angeles.
          </p>
          <a href="/Technology" style={{textDecoration:"none"}}>
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

      <div className="row" style={{display:"flex",justifyContent:"space-around", marginTop:"100px", marginBottom:"-400px"}}>
  <div className="col-6 col-lg-3">
    <div  style={{ position: 'relative', display: 'inline-block'}}>
      <img src="https://nuro.imgix.net/Safety_Next_Card_2_Small_2023-04-14-002545_vfxg.jpg?w=425&amp;fit=max&amp;auto=format&amp;auto=compress" alt=""  className= {styles.card1}/>
       <h1  className={styles.card1Header} >Have Questions?</h1>
       <a href="/FaqPage" style={{textDecoration:"none"}}> <button style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '13px', border: 'none', paddingRight: '15px', paddingLeft: '15px', color: 'white', fontFamily: 'Suisse, Sans-Serif', fontWeight: '400', backgroundColor: 'purple', borderRadius: '15px', padding: '10px', width: '50%', cursor: 'pointer' }}>View FAQs</button></a>
    </div>
  </div>
  
  <div className="col-6 col-lg-3">
    <div style={{ position: 'relative', display: 'inline-block', }}>
      <div className={styles.card2}  />
      <h1 className={styles.card2Header}>100%</h1>
      <p  className = {styles.card2P}>We use 100% renewable electricity from wind farms in Texas to power both our battery-electric vehicles and our facilities.</p>
    </div>
  </div>
  <div className="col-12 col-lg-6">
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img className={styles.card3} src="https://nuro.imgix.net/Large.jpg?w=1024&fit=max&auto=format&auto=compress" alt=""  />
      <h1 className={styles.card3header} >A transformational service starts with a custom vehicle.</h1>
      <a href="/Technology" style={{textDecoration:"none"}}> <button style={{ position: 'absolute', top: '85%', left: '26%', transform: 'translate(-50%, -50%)', fontSize: '14px', border: 'none', paddingRight: '4px', paddingLeft: '4px', color: 'white', fontFamily: 'Suisse, Sans-Serif', fontWeight: '400', backgroundColor: 'purple', borderRadius: '15px', padding: '10px', width: '30%', cursor: 'pointer' }}>Technology</button></a>
    </div>
  </div>
</div>
    </div>
  );
};


const Safety = () => {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${"http://web.archive.org/web/20221207080138im_/https://nuro.imgix.net/Nuro_Marquee_7_2022-09-14-001822.jpg?w=1920&fit=max&auto=format&auto=compress"})`,
          }}
        ></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <span className={styles.dikeyCizgi}></span>
          <div className={styles.title}>Safety</div>
          <div className={styles.description}></div>
        </div>
      </div>
      <ServiceContent />
    </>
  );
};

export default Safety;
