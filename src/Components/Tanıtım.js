import React, { useEffect, useRef, useState } from "react";
import styles from "./Tanıtım.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Tanıtım() {
  const imagesRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const titlesRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isVisibleTitle, setIsVisibleTitle] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const images = imagesRefs.map((ref) => ref.current.querySelector("img"));
    const observers = images.map((image, index) => {
      return new IntersectionObserver(
        (entries) => {
          setIsVisible((prevState) => {
            const newState = [...prevState];
            newState[index] = entries[0].isIntersecting;
            return newState;
          });
        },
        {
          rootMargin: "-100px 0px",
        }
      );
    });
    images.forEach((image, index) => observers[index].observe(image));
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const titles = titlesRefs.map((ref) => ref.current.querySelector("h1"));
    const observers = titles.map((title, index) => {
      return new IntersectionObserver(
        (entries) => {
          setIsVisibleTitle((prevState) => {
            const newState = [...prevState];
            newState[index] = entries[0].isIntersecting;
            return newState;
          });
        },
        {
          rootMargin: "-100px 0px",
        }
      );
    });
    titles.forEach((title, index) => observers[index].observe(title));
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const images = imagesRefs.map((ref) => ref.current.querySelector("img"));
    images.forEach((image, index) => {
      if (isVisible[index]) {
        image.style.opacity = 1;
        image.style.transition = "opacity 2s ease-in-out";
      } else {
        image.style.opacity = 0;
      }
    });
  }, [isVisible]);

  useEffect(() => {
    const titles = titlesRefs.map((ref) => ref.current.querySelector("h1"));
    titles.forEach((title, index) => {
      if (isVisibleTitle[index]) {
        title.style.opacity = 1;
        title.style.transition = "opacity 0.7s ease-in-out";
      } else {
        title.style.opacity = 0;
      }
    });
  }, [isVisibleTitle]);

  return (
    <div
      className="App"
      ref={titlesRefs[0]}
      style={{ justifyContent: "center", marginTop: "30px" }}
    >
      <h1 className={styles.header}>
        Delivering the things you love and a little more time to enjoy them.
      </h1>
      <div className={styles.containerTanıtım} style={{ textAlign: "center" }}>
        <div ref={imagesRefs[0]} className={styles.sunumImg}>
          <img
            src="https://nuro.imgix.net/nuro_delivering.jpg?w=1920&fit=max&auto=format&auto=compress"
            title="Nuro Delivering"
            className={styles.sunumImg}
            style={{
              width: "93%",
              borderRadius: "40px",
              marginBottom: "90px",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0,
            }}
          />
        </div>
        <div ref={titlesRefs[1]}>
          <h1 className={styles.header}>Making roads safer for everyone.</h1>
        </div>
        <div ref={imagesRefs[1]} className={styles.sunumImg}>
          <img
            src="https://nuro.imgix.net/nuro_making_roads_safe.jpg?w=1920&fit=max&auto=format&auto=compress"
            title="Nuro Road"
            className={styles.sunumImg}
            style={{
              width: "93%",
              borderRadius: "40px",
              marginBottom: "90px",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0,
            }}
          />
        </div>
        <div ref={titlesRefs[2]}>
          <h1 className={styles.header}>
            And running every errand with zero emissions.
          </h1>
        </div>
        <div ref={imagesRefs[2]} className={styles.sunumImg}>
          <img
            src="https://nuro.imgix.net/nuro_zero_emission.jpg?w=1920&fit=max&auto=format&auto=compress"
            title="Nuro Delivery"
            style={{
              width: "93%",
              borderRadius: "40px",
              marginBottom: "90px",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0,
            }}
          />
        </div>
        <div ref={titlesRefs[3]}>
          <h1 className={styles.header}>
            Here to make your everyday a little better.
          </h1>
        </div>
        <div ref={imagesRefs[3]}>
          <img
            src="https://nuro.imgix.net/nuro_delivering.jpg?w=1920&fit=max&auto=format&auto=compress"
            title="Nuro Team"
            style={{
              width: "100%",
              marginBottom: "90px",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0,
            }}
          />
        </div>
        <div
        style={{ display: "flex", justifyContent: "center", marginTop: "-70px" }}
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
    </div>
  );
}

export default Tanıtım;
