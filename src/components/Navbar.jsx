import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/logo.png";
import "./sections/css/navbar.css";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} className="shadow-sm text-light natbar">
      <Container>
        <Navbar.Brand href="#">
          <img style={{ borderRadius: "50%" }} src={logo} alt="logo" width="50" />
          <span className='goodland'>Goodland</span>
        </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: "rgb(105, 117, 101)" }}
            aria-controls="navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto flex-row">
              <Nav.Link className='enlace' style={{ color: "#34E89E" }} href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link className='enlace' style={{ color: "#34E89E" }} href="#partners">Partners</Nav.Link>
              <Nav.Link className='enlace' style={{ color: "#34E89E" }} href="#servicios">Servicios</Nav.Link>
              <Nav.Link className='enlace' style={{ color: "#34E89E" }} href="#contacto">Contacto</Nav.Link>
              <Nav.Link className='enlace' style={{ color: "#34E89E" }} href="#horario">Horario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CustomNavbar;
