import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Lo que tus manos necesitan.</h2>
            <button className="cta-button">Programa tu cita acá</button>
            <section className="services-section">
                <h3>Conocé nuestros servicios</h3>
                <div className="service-list">
                    <div className="service-item">
                        <img src="path_to_manicure_image" alt="Manicura" />
                        <p>Manicura</p>
                    </div>
                    <div className="service-item">
                        <img src="path_to_podology_image" alt="Podología" />
                        <p>Podología</p>
                    </div>
                    <div className="service-item">
                        <img src="path_to_hair_image" alt="Peluquería" />
                        <p>Peluquería</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
