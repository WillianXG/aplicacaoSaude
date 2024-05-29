import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from './contacts.module.css'
import Footer from  '../../components/Footer/footer'
import MyForm from "../../components/Form/form";
import IconsForm from "../../components/iconsform/iconsform"; // Importe o componente iconsForm com a primeira letra maiúscula
import Modal from "../../components/Modal/modal";

function Contato() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Entre em contato conosco</h1>
      <br/>
      <br/>
      <Modal/>
      <MyForm/>
      <IconsForm/> {/* Use IconsForm como faria com qualquer outro componente */}
      </body>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Contato;
