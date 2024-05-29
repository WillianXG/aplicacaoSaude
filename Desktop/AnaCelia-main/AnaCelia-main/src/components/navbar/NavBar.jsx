import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import MyForm from "../../components/Form/form";
import logo from "../../images/logo.png";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const toggleNav = () => {
    setIsActive(!isActive);
    document.body.classList.toggle(styles.noScroll, !isActive); // Adiciona ou remove a classe noScroll
  };

  const closeNav = () => {
    setIsActive(false);
    document.body.classList.remove(styles.noScroll); // Remove a classe noScroll
  };

  const isScreenSmall = useMediaQuery({ maxWidth: 755 });

  useEffect(() => {
    return () => {
      document.body.classList.remove(styles.noScroll); // Certifique-se de remover a classe quando o componente é desmontado
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
          <a href="/" className={`${styles.logo} ${styles.customLink}`}>
            {isScreenSmall ? (
              <Link>
              <img
                className={styles.logoCell}
                src={logo}
                alt="Logo"
                width="50px"
                height="50px"
              />
              </Link>
              
            ) : (
              <h1>Psicóloga Ana Célia do Nascimento</h1>
            )}
          </a>
          <button className={styles.hamburger} onClick={toggleNav}></button>
          <ul className={styles.navList}>
            <li>
              <div className={styles.optBtn}>
                <Link to="/" className={styles.navBtn} onClick={closeNav}>
                  Inicio
                </Link>
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
                <Link to="/sobre" className={styles.navBtn} onClick={closeNav}>
                  Sobre
                </Link>
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
                <Link
                  to="/tratamentos"
                  className={styles.navBtn}
                  onClick={closeNav}
                >
                  Tratamentos
                </Link>
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
                <Link onClick={toggleOpen}>
                  Fale conosco
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle style={{textAlign: 'center'}}>Fale conosco</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><MyForm/></MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default NavBar;
