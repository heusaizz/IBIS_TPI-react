import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Reemplaza Switch por Routes
import { useRef } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home"; // Si tienes un componente Home, o puedes agregar contenido en la raíz
import './App.css'; // Estilos globales

function App() {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const contactRef = useRef(null);

  // Función para hacer scroll a secciones específicas de la página
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="App">
        {/* Componente Header con el logo y botón de iniciar sesión */}
        <Header />
        
        {/* Componente Nav para la navegación entre secciones */}
        <Nav
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          footerRef={footerRef}
          contactRef={contactRef}
        />

        {/* rutas para diferentes páginas (login, register, home) */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home aboutRef={aboutRef} contactRef={contactRef} />} />
        </Routes>

        {/* Footer con la información de contacto */}
        <Footer footerRef={footerRef} />
      </div>
    </Router>
  );
}

export default App;
