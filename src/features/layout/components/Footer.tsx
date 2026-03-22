import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-global">
            <div className="footer-content">
                <small>
                    &copy; 2026 Hipermercado Superior. Todos los derechos reservados.
                </small>

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

                <div className="footer-links">
                    <Link to="/legal/privacy" title="Política de Privacidad">
                        Política de Privacidad
                    </Link>
                    <span className="separator">|</span>
                    <Link to="/legal/terms" title="Términos de Uso">
                        Términos de Uso
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
