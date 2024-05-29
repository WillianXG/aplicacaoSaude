import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./carrossel.css"


export default function Carrosel() {
  return (
    <>
    <div className="carousel-container">
    <h1 className="carousel-title">Conheça nossa clínica!</h1>
      <MDBCarousel className="meu-carousel" showControls showIndicators={false} touch={false}>
        <MDBCarouselItem itemId={1}>
          <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
    </>
  );
}