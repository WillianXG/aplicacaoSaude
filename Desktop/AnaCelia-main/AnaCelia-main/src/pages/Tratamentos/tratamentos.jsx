import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/Footer/footer';
import Card from '../../components/Tratamentos/tratamentos';
import "./tratamentos.css";
import Projetos from "../../components/CardTramento/TratamentoAPi";


function TratamentoPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div>
        <br/>
        <br/>
        <br/>
        <Card/>
        <br/>
        <br/>
        <br/>
        <Projetos/>
        <br/>
      </div>
      <Footer/>
    </>
  );
}

export default TratamentoPage;
