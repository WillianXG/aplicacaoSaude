import React from "react";
import NavBar from "../../components/navbar/NavBar";
import MainSobre from "../../components/mainSobre/mainSobre"; // Import corrigido: MainSobre em vez de mainSobre

function Sobre() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <body>
        <br/>
        <br/>
        <br/>
        <MainSobre /> {/* Utilize o componente MainSobre aqui */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </body>
    </>
  );
}

export default Sobre;
