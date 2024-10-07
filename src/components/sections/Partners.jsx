import { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./css/partners.css";

function Partners() {
  const [growshops, setGrowshops] = useState([]);

  useEffect(() => {
    // Realiza la petición para obtener los datos del archivo JSON
    const fetchGrowshops = async () => {
      try {
        //const response = await fetch(process.env.PUBLIC_URL + "/growshop.json"); // Ruta al archivo JSON
        const response = await fetch("/growshop.json");
        const data = await response.json();
        setGrowshops(data);
      } catch (error) {
        console.error("Error al cargar los datos de los growshops:", error);
      }
    };

    fetchGrowshops();
  }, []);

  return (
    <section id="partners" className="py-5 partners" style={{ backgroundColor: "#414345" }}>
      <div className="container text-center">
        <h2 className="mb-4">Partners</h2>
        <p>Entregamos productos por volumen y detalles de nuestros partners!</p>

        {growshops.length > 0 ? (
          <Carousel
            indicators={false}
            interval={3000}
            className="partners-carousel"
            controls={true}
            touch={true}
          >
            {growshops.map((growshop, index) => (
              <CarouselItem key={index}>
                <br />
                <div className="carousel-item-custom">
                  <img
                    className="d-block mx-auto growshop-img"
                    src={growshop.img}
                    alt={growshop.name}
                  />
                  <h5 className="mt-3">{growshop.name}</h5>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          <p className="text-white">Cargando growshops...</p>
        )}
      </div>
    </section>
  );
}
export default Partners;



