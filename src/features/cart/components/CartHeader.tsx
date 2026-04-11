import { useTranslation } from 'react-i18next'
import './CartHeader.css'

/**
 * CartHeader - Componente de Encabezado del Carrito
 * 
 * Muestra el título del carrito con el icono y el contador
 * de productos. Es reutilizable y accesible.
 */
interface CartHeaderProps {
    totalItems: number
}

const CartHeader = ({ totalItems }: CartHeaderProps) => {
    const { t } = useTranslation('common')
    return (
        <header className="cart-header">
            <svg className="cart-header__icon" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <use href="#icon-cart"/>
            </svg>
            <h2 className="cart-header__title">{t('cart.header_title')} ({totalItems})</h2>
        </header>
    )
}

export default CartHeader
