import './QuantityControls.css'

/**
 * QuantityControls - Componente de Controles de Cantidad
 * 
 * Maneja los botones para aumentar/disminuir la cantidad
 * de un producto en el carrito. Es reutilizable y accesible.
 */
interface QuantityControlsProps {
    quantity: number
    onDecrease: () => void
    onIncrease: () => void
    ariaLabels: {
        decrease: string
        increase: string
    }
}

const QuantityControls = ({ 
    quantity, 
    onDecrease, 
    onIncrease, 
    ariaLabels 
}: QuantityControlsProps) => {
    return (
        <div className="quantity-controls">
            <button
                onClick={onDecrease}
                className="quantity-controls__btn"
                aria-label={ariaLabels.decrease}
            >
                -
            </button>
            <span className="quantity-controls__display">{quantity}</span>
            <button
                onClick={onIncrease}
                className="quantity-controls__btn"
                aria-label={ariaLabels.increase}
            >
                +
            </button>
        </div>
    )
}

export default QuantityControls
