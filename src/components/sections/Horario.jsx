import "./css/horario.css";

function Horario() {
  return (
    <section id="horario" className="py-5 horario" style={{ backgroundColor: "#677D6A", color: "#fff" }}>
      <div style={{ borderRadius: "30px" }} className="container text-center bg-dark">
        <h2 className="mb-4 tit">Horario</h2>
        <p className="parafox">
          <i className="fa-solid fa-clock"></i>{" "}
          Lunes a Viernes - 09:00 a 18:00 Hrs
          <p>
            <i className="fa-solid fa-check"></i>{" "}
            Pedidos: 09:00 - 12:00
            Despacho: 13:00 - 18:00
          </p>
        </p>
        <p className="parafox">
          <i className="fa-solid fa-clock"></i>{" "}
          Sábados - 10:00 a 17:00 Hrs
          <p>
            <i className="fa-solid fa-check"></i>{" "}
            Pedidos: 09:00 - 13:00
            Despacho: 13:30 - 17:00
          </p>
        </p>
      </div>
      <br />
      <br />
    </section>
  );
}
export default Horario;
//agregar algun icono estilizado 