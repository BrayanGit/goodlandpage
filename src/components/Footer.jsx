import { Container } from 'react-bootstrap';
import "./sections/css/footer.css";

function Footer() {
  return (
    <footer className="fouter py-3 fixed-bottom">
      <Container>
        <p className="text-center text-white mb-0 tex-footer">©2024 Create By BW&BW Programing. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
export default Footer;
