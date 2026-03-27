import { useCart } from '../../../hooks/useCart'
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
 */
interface CartSummaryProps {
    className?: string
}

const CartSummary = ({ className = '' }: CartSummaryProps) => {
    const { totalItems, totalPrice } = useCart()

    return (
        <aside className={`cart-summary ${className}`}>
            <h3 className="cart-summary__title">Resumen de la Compra</h3>
            
            <div className="cart-summary__details">
                <div className="cart-summary__row">
                    <span className="cart-summary__label">Total de productos:</span>
                    <span className="cart-summary__value">{totalItems}</span>
                </div>
                
                <div className="cart-summary__row">
                    <span className="cart-summary__label">Total a pagar:</span>
                    <span className="cart-summary__value cart-summary__total">${totalPrice.toLocaleString()}</span>
                </div>
            </div>

            <button className="cart-summary__pay-button">
                Pagar Ahora
            </button>
        </aside>
    )
}

export default CartSummary
