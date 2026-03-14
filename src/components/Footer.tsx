import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-global">
            <div className="footer-content">
                {/* Derechos reservados */}
                <small>
                    &copy; 2026 Hipermercado Superior. Todos los derechos reservados.
                </small>

                {/* Redes Sociales */}
                <div className="social-icons">
                    <a
                        href="https://facebook.com/tuweb"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Visítanos en Facebook"
                        className="social-link"
                    >
                        <svg aria-hidden="true">
                            <use href="#icon-facebook" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/tuweb"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Visítanos en X (antes Twitter)"
                        className="social-link"
                    >
                        <svg aria-hidden="true">
                            <use href="#icon-x" />
                        </svg>
                    </a>
                    <a
                        href="https://instagram.com/tuweb"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Visítanos en Instagram"
                        className="social-link"
                    >
                        <svg aria-hidden="true">
                            <use href="#icon-instagram" />
                        </svg>
                    </a>
                </div>

                {/* Enlaces legales */}
                <div className="footer-links">
                    <a href="/legal/privacy.html" title="Política de Privacidad">
                        Política de Privacidad
                    </a>
                    <span className="separator">|</span>
                    <a href="/legal/terms.html" title="Términos de Uso">
                        Términos de Uso
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
