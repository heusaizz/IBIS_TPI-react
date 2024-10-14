import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Ibis - Centro de Bioestética</h1>
            <nav>
                <a href="/">Inicio</a>
                <a href="/services">Servicios</a>
                <a href="/login">Iniciar Sesión</a>
            </nav>
        </header>
    );
}

export default Header;

