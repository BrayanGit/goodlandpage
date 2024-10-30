import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./css/nosotros.css";

function Nosotros() {
  return (
    <section className="py-3 nosotrostyle" >
      <Accordion className="custom-accordion">
        <Accordion.Item eventKey="0" className="custom-accordion-item">
          <Accordion.Header style={{ color: "goldenrod" }} className="custom-accordion-header">GOODLAND</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">SUSTRATOS EN STOCK</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <ul>
              <li>light-mix BioBizz 50L</li>
              <li>CompleteMix TopCrop 50L</li>
              <li>Professional Plus Canna 50L</li>
              <li>BioTerraPlus BioCanna 50L</li>
              <li>LightMix Plagron 50L</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Nosotros;


