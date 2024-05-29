import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="custom-bg-color text-center text-lg-start text-muted">
      {/* Seção 1 */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
        <div>
          <a href="https://w.app/ClinicaPsique" className="me-4 text-reset">
             <MDBIcon
                    fab
                    icon="whatsapp"
                    color="success"
                  />
          </a>
          <a href="mailto:acpnasci2305@gmail.com" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/anacelianascimento.psi/"
            className="me-4 text-reset"
          >
            <MDBIcon color="danger" fab icon="instagram" />
          </a>
        </div>
      </section>

      {/* Seção 2 */}
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* MDBCol 1 */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Sobre Ana Célia
              </h6>
              <p>
              Ana Célia Neuropsicóloga dedicada e comprometida com seus pacientes. Sempre com alvo de alcançar o Bem estar.
              </p>
            </MDBCol>

            {/* MDBCol 2 */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Link Úteis</h6>
              <div className="icon-container"> {/* Aplicando a mesma classe icon-container */}
                <p>
                  <a
                    href="https://www.instagram.com/anacelianascimento.psi/"
                    className="text-reset"
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="/contato" className="text-reset">
                    Fale conosco
                  </a>
                </p>
                <p>
                  <a
                    href="https://w.app/ClinicaPsique"
                    className="text-reset"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </MDBCol>

            {/* MDBCol 3 */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contatos</h6>
              <div className="icon-container">
                <p>
                  <MDBIcon icon="home" className="icon home-icon" />
                  Torre NorteShopping, 901 - Rio de Janeiro
                </p>
                <p>
                  <MDBIcon icon="envelope" className="icon envelope-icon" />
                  contatositeanacelia@gmail.com
                </p>
                <p>
                  <MDBIcon
                    fab
                    icon="whatsapp"
                    className="icon whatsapp-icon"
                  />
                  +55 21 96805-6868
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
