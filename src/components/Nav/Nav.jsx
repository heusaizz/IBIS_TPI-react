import './Nav.css';

const Nav = ({ scrollToSection, aboutRef, footerRef, contactRef }) => {
    return (
        <nav className="nav">
            <button onClick={() => scrollToSection(aboutRef)}>Sobre la institución</button>
            <button onClick={() => scrollToSection(footerRef)}>Dónde encontrarnos</button>
            <button onClick={() => scrollToSection(contactRef)}>Contacto</button>
        </nav>
    );
};

export default Nav;
