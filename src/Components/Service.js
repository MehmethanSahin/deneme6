import React from "react";
import styles from "./Service.module.css";
import Faq from "./Faq";


const ServiceContent = () => {

  const serviceItems = [
    {
      title: "1. Order from one of our partners.",
      imageUrl:
        "https://nuro.imgix.net/Order_2021-04-09-212232.jpg?w=1024&fit=max&auto=format&auto=compress",
      description:
        "If you’re in one of our service areas, place a delivery order with one of our partners in their app, then select “autonomous vehicle” when you check out.",
    },
    {
      title: "2. We’ll keep you updated.",
      imageUrl:
        "https://nuro.imgix.net/Keep-you-updated_2021-04-09-212240.jpg?w=1024&fit=max&auto=format&auto=compress",
      description:
      "Once a Nuro vehicle picks up your order and is on the way, we’ll text you a link to track its progress."
    },
    {
      title: "3. Grab your order.",
      imageUrl:
        "https://nuro.imgix.net/grab-your-order.jpg?w=1024&fit=max&auto=format&auto=compress",
      description:
      "We’ll text you an access code to retrieve your delivery at the curb. Your order will be secured in its own compartment."
    },
  ];
  return (
    <div className={styles.contentContainer} style={{textAlign: "center", fontSize:"38.94px", fontFamily:"Suisse,sans-serif",fontWeight:"490",letterSpacing:"-1.20821",marginTop:'70px',marginBottom:'0px'}}>
      <div style={{marginBottom: "20px"}} className={styles.serviceheader} >
        How Nuro <span style={{color: "rgb(104,95,247"}}>delivery works.</span>
      </div>
      <img src="https://nuro.imgix.net/grab-your-order.jpg?w=1024&fit=max&auto=format&auto=compress" alt="Delivery" style={{borderRadius:'40px', width:'90%'}} />
      <div className={styles.textContainer}>
          <div className={styles.leftText}>
            <p className={styles.ServiceFirstp}>
            Nuro makes your life easier 
            </p>
            
           
          </div>
          <div className={styles.rightText}>
          <p className={styles.secondP}>
  Our vehicles were made to give you back the time you spend running
  errands. Our service is safe, contactless, and simple to use.
</p>
          </div>
        </div>
        {/* Madde ve görseller bölümü */ }
        <div style={{ marginTop: "90px", marginRight:"30px",marginLeft:"30px" }}>
  {serviceItems.map((partner, index) => (
    
    <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }} className={styles.madde}>
      <img
        src={partner.imageUrl}
        alt={partner.name}
        className={styles.maddeImg}
        
       
       
        
       
      
        
      />
      <div style={{ width: "100%" }}>
        <h1 className={styles.maddeHeader}>{partner.title}</h1>
        <p  className={styles.maddeText}>{partner.description}</p>
      </div>
      
     
    
    
    </div>
    
  ))}


</div>
<Faq />
</div>


 
    
  );
  
};


const Service = () => {
  return (
    <>
    
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${"https://nuro.imgix.net/Nuro_Marquee_3_2022-09-14-001624.jpg?w=1920&fit=max&auto=format&auto=compress"})` }}
      ></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.dikeyCizgi}></span>
        <div className={styles.title}>Service</div>
        <div className={styles.description}>
          
        </div>
      </div>
  
    <ServiceContent />
    </>
  );
};



export default Service;
