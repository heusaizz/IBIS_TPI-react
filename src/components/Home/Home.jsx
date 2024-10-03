import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ aboutRef, contactRef }) => {
    return (
        <div className="home">
            {/* Sección "Sobre la Institución" */}
            <section ref={aboutRef} className="about-section">
                <h2>Sobre la Institución</h2>
                <p>
                    Bienvenidos a <strong>IBIS</strong>, tu centro de estética de confianza.
                    Nos especializamos en ofrecer servicios de belleza y bienestar adaptados
                    a tus necesidades. Nuestro equipo de expertos está comprometido a brindarte
                    la mejor experiencia para ayudarte a sentirte y verte mejor.
                </p>
            </section>

            {/* Sección "Contacto" */}
            <section ref={contactRef} className="contact-section">
                <h2>Contacto</h2>
                <p>Para más información o para hacer una cita, contáctanos a través de:</p>
                <ul>
                    <li>Teléfono: +123 456 789</li>
                    <li>Email: contacto@ibis.com</li>
                </ul>
            </section>
        </div>
    );
};

// Validación de props con PropTypes
Home.propTypes = {
    aboutRef: PropTypes.object.isRequired,
    contactRef: PropTypes.object.isRequired,
};

export default Home;
