import { Container, Carousel, CarouselItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function RucelModel() {
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
            src="./img/topcrop.jpg"
            alt="Primer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">IMG-principal-1</h3>
            <p className="text-white">contenido informaciones.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/bio.png"
            alt="Segundo slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">IMG-principal-2</h3>
            <p className="text-white">contenido informaciones.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/porte.png"
            alt="Tercer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">IMG-principal-3</h3>
            <p className="text-white">contenido informaciones.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </Container>
  );
}
export default RucelModel;


