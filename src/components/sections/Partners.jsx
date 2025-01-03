import { Carousel, CarouselItem } from "react-bootstrap";
import "./css/partners.css";

function Partners() {

  return (
    <section id="partners" className="py-3 partners" style={{ backgroundColor: "" }}>
      <div className="container text-center">
        <h2 className="mb-4">Partners</h2>
        <p>Entregamos productos por volumen y detalles de nuestros partners!</p>

        <Carousel
          controls={true}
          indicators={true}
          interval={10000}
          className="partners-carousel"
        >
          <CarouselItem>
            <div className="carousel-item-custom">
              <br />
              <img
                src="./img/pinkgrow.png"
                alt="primero"
                className="growshop-img"
              />
              <h5>VaporiumTerre</h5>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item-custom">
              <br />
              <img
                src="./img/locogrow.png"
                alt="segundo"
                className="growshop-img"
              />
              <h5>Psycodelicium</h5>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item-custom">
              <br />
              <img
                src="./img/jaja.png"
                alt="tercero"
                className="growshop-img"
              />
              <h5>MrCannabis</h5>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item-custom">
              <br />
              <img
                src="./img/grow.png"
                alt="cuarto"
                className="growshop-img"
              />
              <h5>MiGrow</h5>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item-custom">
              <br />
              <img
                src="./img/oveja-verde.png"
                alt="quinto"
                className="growshop-img"
              />
              <h5>Oveja Verde</h5>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
}
export default Partners;




