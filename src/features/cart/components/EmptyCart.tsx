import { Link } from 'react-router-dom'
import './EmptyCart.css'

/**
 * EmptyCart - Componente de Carrito Vacío
 * 
 * Muestra el estado cuando no hay productos en el carrito
 * con un mensaje informativo y botón para volver a la tienda.
 */
const EmptyCart = () => {
    return (
        <section className="empty-cart">
            <div className="empty-cart__content">
                <svg className="empty-cart__icon" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <use href="#icon-cart"/>
                </svg>
                
                <h2 className="empty-cart__title">Tu Carrito está vacío</h2>
                <p className="empty-cart__message">¡Explora nuestros productos y llena tu carrito!</p>
                
                <Link to="/" className="empty-cart__button">
                    Volver a la Tienda
                </Link>
            </div>
        </section>
    )
}

export default EmptyCart
