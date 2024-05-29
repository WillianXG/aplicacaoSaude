import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home'; 
import Sobre from './pages/About/about'; 
import Contatos from './pages/Contacts/contacts'; 
import Tratamentos from './pages/Tratamentos/tratamentos'; 
import ScrollToTop from './components/scrolltop/scrolltop'
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className="bg-custom">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/tratamentos' element={<Tratamentos />} />
          <Route path='/contato' element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
