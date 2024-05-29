import React from "react";
import styles from "./mainSobre.module.css";
import ana4 from "../../images/ana4.jpeg"


function mainSobre() {
  return (
    <>
     <div className={styles.mainContainer}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7094753716933!2d-43.28480698827908!3d-22.88718817918243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d149a1058f7%3A0x74aaf0a5b36f3684!2sTorre%20Norte%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1712684015097!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
  <div className={styles.texto1Container}>
    <div className={styles.Titulo}>
      <h1>Minha Clinica</h1>
    </div>

    <p>
      sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
      adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
      adskadsadskdsk adskadsadskdsk adskads
    </p>
   
  </div>
</div>

      <div className={styles.mainContainer2}>
      
        <div className={styles.texto1Container2}>
          <div className={styles.Titulo2}>
            <h1>Ana Célia</h1>
          </div>

          <p>
            sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
            adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
            adskadsadskdsk adskadsadskdsk adskads
          </p>
          <p>
            sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
            adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
            adskadsadskdsk adskadsadskdsk adskads
          </p>
        </div>
        <div className={styles.imgContainer2}>
          <img src={ana4}></img>
        </div>
      </div>

    </>
  );
}

export default mainSobre;
