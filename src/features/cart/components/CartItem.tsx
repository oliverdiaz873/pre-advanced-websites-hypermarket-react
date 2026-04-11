import { Link } from 'react-router-dom'
import { memo } from 'react'
import { Product } from '../../../shared/types/product'
import { getAssetUrl } from '../../../shared/utils/assetUtils'
import { cleanPrice } from '../../../shared/utils/priceUtils'
import QuantityControls from './QuantityControls'
import { OfferBadge } from '../../offers/components'
import { useTranslation } from 'react-i18next'
import { useProductTranslation } from '../../products/hooks/useProductTranslation'
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
    const { t } = useTranslation(['common'])
    const cartProduct: Product = { id, nombre, precio, precioTexto, imagen: img, unidad } as Product
    const { name, labels } = useProductTranslation(cartProduct)

    return (
        <div className="cart-item">
            <Link
                to={`/product/${id}`}
                className="cart-item__image-link"
                aria-label={t('common:product.view_details', { name })}
            >
                <div className="cart-item__image-container">
                    {isOffer && (
                        <div className="cart-item__badge-wrapper">
                            <OfferBadge />
                        </div>
                    )}
                    <img
                        src={getAssetUrl(img)}
                        alt={name}
                        className="cart-item__image"
                    />
                </div>
            </Link>

            <div className="cart-item__content">
                <div className="cart-item__header">
                    <Link
                        to={`/product/${id}`}
                        className="cart-item__name-link"
                        aria-label={t('common:product.view_details', { name })}
                    >
                        <h3 className="cart-item__name">{name}</h3>
                    </Link>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="cart-item__remove-icon"
                        aria-label={`${t('common:product.remove')} ${name}`}
                        title="Eliminar"
                    >
                        <svg viewBox="0 0 24 24">
                            <use href="#icon-trash" />
                        </svg>
                    </button>
                </div>

                <div className="cart-item__variant">
                    <span className="cart-item__unit">${precio.toLocaleString()} / {labels.unit}</span>
                </div>

                <div className="cart-item__footer">
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

                    <QuantityControls
                        quantity={cantidad}
                        onDecrease={() => updateQuantity(id, -1)}
                        onIncrease={() => updateQuantity(id, 1)}
                        ariaLabels={{
                            decrease: t('common:cart.decrease_qty'),
                            increase: t('common:cart.increase_qty')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(CartItem)
