import { Carousel } from "react-bootstrap";
import "./css/nosotros.css";

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-full">
      <Carousel className="carousel-full">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/good1.jpg"
            alt="Imagen 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/good2.jpg"
            alt="Imagen 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/good3.jpg"
            alt="Imagen 3"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/good4.jpg"
            alt="Imagen 4"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/good5.jpg"
            alt="Imagen 5"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/good6.jpg"
            alt="Imagen 6"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Nosotros;


