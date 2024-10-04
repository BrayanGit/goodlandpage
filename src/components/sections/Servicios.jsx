import "./css/servicios.css";

function Servicios() {
  return (
    <section id="servicios" className="py-5 servicios" style={{ backgroundColor: "#677D6A", color: "#fff" }}>
      <div className="container text-center bg-dark celda">
        <h2 className="mb-2 texto">Servicios</h2>
        <p className="parrafox">
          Ofrecemos una solucion para transportar por cantidad y/o volumen  
          articulos de growshops y jardineria para la ciudad de concepcion, hualpen, talcahuano (PLN). Se realizan 
          pedidos especiales con traslado de productos de tu grow favorito. 
          a domicilio, rápido, fácil y sencillo!
        </p>
      </div>

      <div className="container text-center bg-dark celda">
        <h2 className="mb-2 texto">Clientes</h2>
        <p className="parrafox">
          una vez en contacto con nosotros debes indicar que tipo u 
          cantidad de sustrato requires al igual que otros articulos 
          de cultivo segun horario de agendado y posterior despacho
        </p>
      </div>

      <div className="container text-center bg-dark celda">
        <h2 className="mb-2 texto">Partners</h2>
        <p className="parrafox">
          trasladamos sus productos hasta el cliente mejorando sus ventas
          debe acordar con el cliente la entrega del producto al dia siguiente
          para generar la ruta de busqueda y entrega en horario determinado.
        </p>
      </div>

    </section>
  );
}
export default Servicios;

// incorporar ina imagen background periferia ciudad aereo mini video con el texto por ensima mejor estilizado