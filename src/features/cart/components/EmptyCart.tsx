import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './EmptyCart.css'

/**
 * EmptyCart - Componente de Carrito Vacío
 * 
 * Muestra el estado cuando no hay productos en el carrito
 * con un mensaje informativo y botón para volver a la tienda.
 * 
 * INTERNACIONALIZACIÓN:
 * Soporta ES/EN con traducciones en common:cart.empty
 */
const EmptyCart = () => {
    const { t } = useTranslation('common')
    
    return (
        <section className="empty-cart">
            <div className="empty-cart__content">
                <svg className="empty-cart__icon" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <use href="#icon-cart"/>
                </svg>
                
                <h2 className="empty-cart__title">{t('cart.empty.title')}</h2>
                <p className="empty-cart__message">{t('cart.empty.message')}</p>
                
                <Link to="/" className="empty-cart__button">
                    {t('cart.empty.button')}
                </Link>
            </div>
        </section>
    )
}

export default EmptyCart
