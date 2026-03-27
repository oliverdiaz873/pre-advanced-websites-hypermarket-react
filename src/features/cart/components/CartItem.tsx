import { getAssetUrl } from '../../../utils/assetUtils'
import QuantityControls from './QuantityControls'
import OfferBadge from '../../products/components/OfferBadge'
import './CartItem.css'

/**
 * CartItem - Componente Individual de Item del Carrito
 * 
 * Representa un solo producto en el carrito con información detallada:
 * - Imagen del producto
 * - Nombre y precio con formato
 * - Badge de oferta si aplica
 * - Precio anterior si es oferta
 * - Unidad de medida
 * - Controles de cantidad
 * - Subtotal y botón de eliminación
 */
interface CartItemProps {
    id: string
    nombre: string
    precio: number
    precioTexto?: string
    cantidad: number
    img: string
    unidad?: string
    isOffer?: boolean
    oldPrice?: string
    updateQuantity: (id: string, change: number) => void
    removeFromCart: (id: string) => void
}

const CartItem = ({ 
    id, 
    nombre, 
    precio, 
    precioTexto,
    cantidad, 
    img, 
    unidad,
    isOffer = false,
    oldPrice,
    updateQuantity, 
    removeFromCart 
}: CartItemProps) => {
    const subtotal = precio * cantidad

    const cleanPrice = (text: string) => {
        const cleaned = text.replace('Precio: ', '').trim()
        const match = cleaned.match(/(\$?\d+(?:,\d+)?(?:\.\d+)?)/)
        return match ? match[1] : cleaned
    }

    const unitLabel = () => {
        if (unidad) return unidad
        if (precioTexto) {
            const parts = precioTexto.split('/')
            if (parts.length > 1) {
                const last = parts[parts.length - 1].trim().replace(/\.$/, '')
                if (last) return last
            }
        }
        return 'unidad'
    }

    return (
        <div className="cart-item">
            {/* Badge de oferta */}
            {isOffer && <OfferBadge />}
            
            <img 
                src={getAssetUrl(img)} 
                alt={nombre} 
                className="cart-item__image"
            />

            <div className="cart-item__info">
                <h3 className="cart-item__name">{nombre}</h3>
                
                {/* Bloque de precios */}
                <div className="cart-item__price-block">
                    {isOffer && oldPrice ? (
                        <>
                            <ins className="cart-item__new-price">${precio.toLocaleString()}</ins>
                            <del className="cart-item__old-price">${cleanPrice(oldPrice)}</del>
                        </>
                    ) : (
                        <p className="cart-item__price">${precio.toLocaleString()}</p>
                    )}
                </div>
                
                {/* Unidad de medida */}
                <p className="cart-item__unit">
                    ${precio.toLocaleString()} / {unitLabel()}
                </p>

                <QuantityControls
                    quantity={cantidad}
                    onDecrease={() => updateQuantity(id, -1)}
                    onIncrease={() => updateQuantity(id, 1)}
                    ariaLabels={{
                        decrease: "Disminuir cantidad",
                        increase: "Aumentar cantidad"
                    }}
                />
            </div>

            <div className="cart-item__actions">
                <p className="cart-item__subtotal">${subtotal.toLocaleString()}</p>
                <button
                    onClick={() => removeFromCart(id)}
                    className="cart-item__remove-btn"
                    aria-label={`Eliminar ${nombre} del carrito`}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default CartItem
