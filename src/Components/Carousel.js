import React,{useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ss1 from './ss-images/ss1.png';
import ss2 from './/ss-images/ss2.png';
import ss3 from './/ss-images/ss3.png';
import ss4 from './/ss-images/ss4.png';
import ss5 from './/ss-images/ss5.png';
import ss6 from './/ss-images/ss6.png';
import ss7 from './/ss-images/ss7.png';
import ss8 from './/ss-images/ss8.png';
import ss9 from './/ss-images/ss9.png';
import ss10 from './/ss-images/ss10.png';
import ss11E from './/ss-images/ss11.png';
import styles from "./Carousel.module.css";

const Slider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChanged = (event) => {
    setCurrentSlideIndex(event.item);
  };
  const items = [
    <div key="1"><img  style ={{width:"200px"}} src={ss1} alt="Slide 1" /></div>,
    <div key="2"><img style ={{width:"200px"}} src={ss2} alt="Slide 2" /></div>,
    <div key="3"><img  style ={{width:"200px"}} src={ss3} alt="Slide 3" /></div>,
    <div key="4"><img  style ={{width:"200px"}} src={ss4} alt="Slide 4" /></div>,
    <div key="5"><img  style ={{width:"200px"}} src={ss5} alt="Slide 5" /></div>,
    <div key="6"><img  style ={{width:"200px"}} src={ss6} alt="Slide 6" /></div>,
    <div key="7"><img style ={{width:"200px"}} src={ss7} alt="Slide 7" /></div>,
    <div key="8"><img style ={{width:"200px"}} src={ss8} alt="Slide 8" /></div>,
    <div key="9"><img style ={{width:"200px"}} src={ss9} alt="Slide 9" /></div>,
    <div key="10"><img style ={{width:"200px"}} src={ss10} alt="Slide 10" /></div>,
    <div key="11"><img style ={{width:"200px"}} src={ss11E} alt="Slide 11" /></div>,
  ];

  const slides = [
    {
      title: 'P2',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'N2',
      paragraph: 'Donec euismod felis quis tortor sagittis maximus.'
    },
    {
      title: 'Z2',
      paragraph: 'LOREM İPSUM MOBİL.'
    },
    {
      title: 'Y2',
      paragraph: 'LOREM.'
    }
  ];

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

 
  const renderPrevButton = () => (
    <button
      className={styles.sliderArrowPrev}
      onClick={() => {
        if (currentSlideIndex === slides.length - 1) {
          setCurrentSlideIndex(0);
        } else {
          setCurrentSlideIndex(currentSlideIndex + 1);
        }
      }}
    >
      {'<'}

    </button>
  );
  
  const renderNextButton = () => (
    <button
      className={styles.sliderArrowNext}

      
    >
      {'>'}
    </button>
  );
  
 
  

  return (
    <div className={styles.slider} style={{backgroundColor:" #232323", padding:"70px", boxSizing:"border-box",width:"100%", marginTop:"100px"}}>
        <div className={styles.sliderConteiner} style={{color:"white",display:"flex", justifyContent:"space-between"}}>
        <h1 className={styles.Sliderheader} >Nuro's family
of vehicles.</h1>
        <p className={styles.sliderP}>Our on-road fleet is made up of three autonomous vehicles. Each vehicle has its own role to play in our strategic approach to deployment.</p>


        </div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlayInterval={3000}
        autoPlayDirection="ltr"
        autoPlay={true}
        fadeOutAnimation={true}
        disableAutoPlayOnAction={true}
        dotsDisabled={false}
        buttonsDisabled={false}
        className={styles.carousel}
        disableDotsControls ={true}
        controlsStrategy ="default"
        autoPlayStrategy = "action"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        onSlideChanged={handleSlideChanged}
        
        
        
      />
      <div className={styles.slideInfo}>
      <p className={styles.betweenArrowP}>{slides[currentSlideIndex]?.paragraph}</p>

      </div>
    </div>
    
  );
};

export default Slider;