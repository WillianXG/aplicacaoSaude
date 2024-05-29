import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Main from "../../components/Corpo/main";
import styles from './home.module.css'
import Footer from "../../components/Footer/footer";
import Carrosel from "../../components/Carrossel/carrossel";
import HDER from "../../components/Header/header";

function Home(){
    return(
        <>
            <NavBar/>
            <br/>
            <br/>
            <HDER/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Carrosel/>
            <Main/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </>
    )
}

export default Home