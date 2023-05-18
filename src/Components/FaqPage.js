import React from "react";
import styles from "./Service.module.css";
import Faq from "react-faq-component";


const FaqContent = () => {

    const data = {
        title: "FAQs (How it works)",
        rows: [
          {
            title: <p className={styles.faqP}>Lorem ipsum dolor sit amet</p>,
            content: <p  style={{textAlign:"left"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.</p>,
          },
          {
            title: <p className={styles.faqP}>Nunc maximus, magna at ultricies elementum</p>,
            content:
              <p  style={{textAlign:"left"}} >"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."</p>,
          },
          {
            title: <p  className={styles.faqP} >Curabitur laoreet, mauris vel blandit fringilla</p>,
            content: <p  style={{textAlign:"left"}} >Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. </p>,
          },
          {
            title: <p className={styles.faqP} >What is the package version</p>,
            content: <p style={{textAlign:"left"}}>current version is 1.2.1</p>,
          },
          {
            title: <p className={styles.faqP} >Lorem ipsum dolor sit amet</p>,
            content: <p  style={{textAlign:"left"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.</p>,
          },
          {
            title: <p className={styles.faqP}>Nunc maximus, magna at ultricies elementum</p>,
            content:
              <p  style={{textAlign:"left"}} >"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."</p>,
          },
         
        ],
      };

      const style = {
        bgColor: "#FFFFFF",
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: "grey",
        rowContentPaddingTop: "10px",
        rowContentPaddingBottom: "10px",
        rowContentPaddingLeft: "5px",
        rowTitleTextSize:"26px",
        rowContentTextSize: "16px",
        arrowColor: "purple",
       
      
      };

      const config = {
        animate: true,
        //-- arrowIcon: "V",
        tabFocus: true,
        expandIcon: "+",
        collapseIcon: "-",
      };

      return (
          <div style={{ backgroundColor: "#FFFFFF", padding: "60px", height:"60%" }}>
            <Faq data={data} styles={style} config={config} />
          </div>
        );
}

export default function FaqPage() {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{ backgroundColor: "#F7F7F5", height: "80%" }}
        ></div>

        <div>
          <span className={styles.dikeyCizgi} style={{ marginTop: "60px" }}></span>
          <div
            className={styles.title}
            style={{ fontSize: "84px", lineHeight: "75px", justifyContent: "center", alignContent: "center" }}
          >
            FAQs
          </div>
          <div className={styles.description}></div>
        </div>
      </div>
      <FaqContent />
    </>
  );
};




