import { Carousel, CarouselItem } from "react-bootstrap";
import "./css/nosotros.css";

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-full">
      <Carousel className="carousel-full">
        <CarouselItem>
          <img
            className="d-block w-100"
            //src="/img/good1.png"
            src={process.env.PUBLIC_URL + "/img/good1.png"}
            alt="Imagen 1"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            //src="/img/good2.png"
            src={process.env.PUBLIC_URL + "/img/good2.png"}
            alt="Imagen 2"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            //src="/img/good3.png"
            src={process.env.PUBLIC_URL + "/img/good3.png"}
            alt="Imagen 3"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            //src="/img/good4.png"
            src={process.env.PUBLIC_URL + "/img/good4.png"}
            alt="Imagen 4"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            //src="/img/good5.png"
            src={process.env.PUBLIC_URL + "/img/good5.png"}
            alt="Imagen 5"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            //src="/img/good6.png"
            src={process.env.PUBLIC_URL + "/img/good6.png"}
            alt="Imagen 6"
          />
        </CarouselItem>
      </Carousel>
    </section>
  );
}
export default Nosotros;
// crear ekl promt parea corregir las vistas de los carouseles

