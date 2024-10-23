import { Container, Carousel, CarouselItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./css/nosotros.css";

function Nosotros() {
  return (
    <Container 
      fluid
      className="p-0" // Elimina cualquier padding/margen del container para ocupar todo el ancho
      style={{ backgroundColor: '#40534C' }} // Fondo opcional para el contenedor
    >
      <Carousel 
        controls={true}
        indicators={true}
        interval={10000}  // Cambia las imágenes cada 10 segundos
        className="w-100"  // Asegura que ocupe el 100% del ancho
        style={{ maxHeight: '80vh' }}  // Altura máxima del carrusel
      >
        <CarouselItem>
          <img
            src="./img/goodone.jpg"
            alt="Primer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/goodtwo.jpg"
            alt="Primer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/goodtree.jpg"
            alt="Primer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
        </CarouselItem>
      </Carousel>
    </Container>
  );
}
export default Nosotros;
// crear ekl promt parea corregir las vistas de los carouseles
// crear un nuevo caroucel paresido al rucel reorganizar los ruceles

