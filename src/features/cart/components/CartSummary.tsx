import { useTranslation } from 'react-i18next'
import { useCart } from '../hooks/useCart'
import './CartSummary.css'

/**
 * CartSummary - Componente de Resumen del Carrito
 * 
 * Muestra un panel lateral con el resumen de la compra incluyendo:
 * - Total de productos en el carrito
 * - Monto total a pagar
 * - Botón para iniciar el proceso de pago
 * 
 * Se integra en la página del carrito como un aside informativo
 * que ayuda al usuario a ver rápidamente el estado de su compra.
 * 
 * INTERNACIONALIZACIÓN:
 * Soporta ES/EN con traducciones en common:cart.summary
 */
interface CartSummaryProps {
    className?: string
}

const CartSummary = ({ className = '' }: CartSummaryProps) => {
    const { t } = useTranslation('common')
    const { totalItems, totalPrice } = useCart()

    return (
        <aside className={`cart-summary ${className}`}>
            <h3 className="cart-summary__title">{t('cart.summary.title')}</h3>
            
            <div className="cart-summary__details">
                <div className="cart-summary__row">
                    <span className="cart-summary__label">{t('cart.summary.total_items')}</span>
                    <span className="cart-summary__value">{totalItems}</span>
                </div>
                
                <div className="cart-summary__row">
                    <span className="cart-summary__label">{t('cart.summary.total_price')}</span>
                    <span className="cart-summary__value cart-summary__total">${totalPrice.toLocaleString()}</span>
                </div>
            </div>

            <button className="cart-summary__pay-button">
                {t('cart.summary.pay_button')}
            </button>
        </aside>
    )
}

export default CartSummary
