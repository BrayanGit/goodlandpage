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
            src="./img/topcrop.png"
            alt="Primer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">TopCrop Sustratos</h3>
            <p className="text-white">Fibra de coco y perlita.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/biobizz.png"
            alt="Segundo slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">BioBizz</h3>
            <p className="text-white">Fibra de coco y perlita.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/terraplus.png"
            alt="Tercer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">Terra Professional Plus</h3>
            <p className="text-white">Fibra de coco y perlita.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/plagron.png"
            alt="Tercer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">Plagron Mix</h3>
            <p className="text-white">Fibra de coco y perlita.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            src="./img/bioterra.png"
            alt="Tercer slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh', borderRadius: '0px' }}  // Ajusta el tamaño sin distorsión
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h3 className="text-white">Bio Terra Plus</h3>
            <p className="text-white">Fibra de coco y perlita.</p>
          </Carousel.Caption>
        </CarouselItem>

      </Carousel>
    </Container>
  );
}
export default RucelModel;


