import './Footer.css';

const Footer = ({ footerRef }) => {
    return (
        <footer ref={footerRef} className="footer">
            <h3>Dónde encontrarnos</h3>
            <p>Dirección: 9 de Julio, 1010, Rosario, Santa Fe</p>
            <p>Teléfono: +54 9 341 351 3466</p>
            <p>Email: ibisrosario1207@gmail.com</p>
        </footer>
    );
};

export default Footer;
