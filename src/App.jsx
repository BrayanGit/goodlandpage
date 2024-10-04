import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importa los estilos de AOS
//import "./App.css";
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Nosotros from './components/sections/Nosotros';
import Servicios from './components/sections/Servicios';
import Contacto from './components/sections/Contacto';
import Partners from './components/sections/Partners';
import Horario from './components/sections/Horario';
import Rucel from "./components/Rucel";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración de la animación
      easing: 'ease-in-out', // Suavidad
      once: true, // Animar solo una vez cuando aparece el elemento
    });
  }, []);

  return (
    <>
      <CustomNavbar />
      <main className="mt-2 pt-2">
        {/* Añade animaciones a las diferentes secciones */}
        <section data-aos="fade-up">
          <Rucel />
        </section>
        <section data-aos="fade-up" >
          <Nosotros />
        </section>
        <section data-aos="fade-up" >
          <Partners />
        </section>
        <section data-aos="fade-up" >
          <Servicios />
        </section>
        <section data-aos="fade-up">
          <Contacto />
        </section>
        <section data-aos="fade-up">
          <Horario />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
// aqui se puede tirar el footer dentro de un seccion para que el footer quede fijo en la parte inferior de la pagina

