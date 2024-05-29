import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdb-react-ui-kit";
import styles from "./iconsform.module.css"; // Importe os estilos do arquivo CSS

export default function IconsForm() {
  return (
    <div className={styles.iconContainer}>
      <h1>Caso prefira outros meios de comunicação</h1>
      <div className={styles.icons}>
        <a href="https://w.app/ClinicaPsique">
          <MDBIcon fab icon="whatsapp" className={styles.icon1} />
        </a>
        <a href="https://www.instagram.com/anacelianascimento.psi/">
          <MDBIcon fab icon="instagram" className={styles.icon2} />
        </a>
        <a href="https://seu-link-do-telefone">
          <MDBIcon fas icon="phone-alt" className={styles.icon3} />
        </a>
      </div>
    </div>
  );
}
