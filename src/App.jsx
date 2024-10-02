import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          footerRef={footerRef}
          contactRef={contactRef}
        />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            {/* Aquí puedes agregar contenido de la página principal */}
          </Route>
        </Switch>

        <Footer footerRef={footerRef} />
      </div>
    </Router>
  );
}

export default App;
