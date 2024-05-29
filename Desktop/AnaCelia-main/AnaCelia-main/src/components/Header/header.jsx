import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from './header.module.css'

export default function HDER() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Bem Vindo!</h1>
              <h4 className="mb-3">Agende uma consulta agora mesmo!</h4>
              <Link to="/tratamentos">
                <MDBBtn tag="button" outline size="lg"  className={styles.customButton}>
                  Saiba mais
                </MDBBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
