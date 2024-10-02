import './Footer.css';

const Footer = ({ footerRef }) => {
    return (
        <footer ref={footerRef} className="footer">
            <h3>Dónde encontrarnos</h3>
            <p>Dirección: Calle Belleza, 123, Ciudad Ejemplo</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: contacto@ibis.com</p>
        </footer>
    );
};

export default Footer;
