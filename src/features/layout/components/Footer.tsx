import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
    const { t } = useTranslation(['footer'])
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-global">
            <div className="footer-content">
                <small>
                    &copy; {currentYear} {t('footer:company_name')}. {t('footer:rights_reserved')}
                </small>

                <div className="social-icons">
                    <a
                        href="https://facebook.com/tuweb"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label={t('footer:social.facebook')}
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
                        aria-label={t('footer:social.x')}
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
                        aria-label={t('footer:social.instagram')}
                        className="social-link"
                    >
                        <svg aria-hidden="true">
                            <use href="#icon-instagram" />
                        </svg>
                    </a>
                </div>

                <div className="footer-links">
                    <Link to="/legal/privacy" title={t('footer:links.privacy')}>
                        {t('footer:links.privacy')}
                    </Link>
                    <span className="separator">|</span>
                    <Link to="/legal/terms" title={t('footer:links.terms')}>
                        {t('footer:links.terms')}
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
