import React from "react";
import styles from "./main.module.css";
import ana3 from "../../images/ana3.jpeg"
import ana4 from "../../images/ana4.jpeg"
function Main() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <img src={ana3}></img>
        </div>
        <div className={styles.texto1Container}>
          <p className={styles.texto_1}>
            Ana Célia é uma psicóloga com mais de 5 anos de experiência, especializada em terapia cognitivo-comportamental.<br/> Ela acredita no poder da escuta empática e do acolhimento,
            proporcionando um espaço seguro para que seus pacientes<br/> possam explorar suas emoções e desenvolver estratégias eficazes para lidar com os desafios da vida.
          </p>
          
        </div>
      </div>
      <div className={styles.mainContainer2}>

        <div className={styles.texto1Container2}>

          <p className={styles.texto_2}>
          Em sua prática clínica, Ana Célia atende adultos e adolescentes,<br/> oferecendo suporte em questões como ansiedade, depressão, estresse,
           autoestima, relacionamentos e transições de vida.<br/> Seu objetivo é ajudar os pacientes a alcançarem um bem-estar emocional e 
           uma vida mais equilibrada.
          </p>
        </div>
        <div className={styles.imgContainer2}>
          <img src={ana4}></img>
        </div>
      </div>

    </>
  );
}

export default Main;
