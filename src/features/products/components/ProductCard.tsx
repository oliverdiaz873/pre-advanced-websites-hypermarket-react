import { Link } from 'react-router-dom'
import { memo } from 'react'
import { Product } from '../../../shared/types/product'
import { getAssetUrl } from '../../../shared/utils/assetUtils'
import { cleanPrice } from '../../../shared/utils/priceUtils'
import { OfferBadge } from '../../offers/components'
import AddToCartButton from '../../cart/components/AddToCartButton'
import { useProductTranslation } from '../hooks/useProductTranslation'
import './ProductCard.css'

interface ProductCardProps {
    product: Product
    isOffer?: boolean
    oldPrice?: string
    discountPercentage?: number
}

const ProductCard = ({ product, isOffer, oldPrice, discountPercentage }: ProductCardProps) => {
    const { name, labels } = useProductTranslation(product)

    return (
        <article className={`producto product-card ${isOffer ? 'offer-card' : ''} block shrink-0 snap-start`}>
            {/* Si el producto es una oferta, mostramos el badge de fuego */}
            {isOffer && <OfferBadge discountPercentage={discountPercentage} />} 
            
            <Link
                to={`/product/${product.id}`}
                className="product-card__overlay-link"
                aria-label={labels.viewDetails}
            ></Link>

            <div className="producto-img-container">
                <img src={getAssetUrl(product.imagen)} alt={name} loading="lazy" />
            </div>

            {/* Lógica de precio: Si es oferta y tiene precio antiguo, mostramos el bloque de descuento.
                De lo contrario, mostramos solo el precio normal. */}
            <div className="price-block-container">
                <div className="price-block">
                    {isOffer && oldPrice ? (
                        <>
                            <ins className="precio-nuevo">{cleanPrice(product.precioTexto)}</ins>
                            <del className="precio-antiguo">{cleanPrice(oldPrice)}</del>
                        </>
                    ) : (
                        <p className="producto-price">{cleanPrice(product.precioTexto)}</p>
                    )}
                </div>
                <p className="producto-unit-format">
                    ${product.precio.toLocaleString()} / {labels.unit}
                </p>
            </div>

            <h3 className="producto-title">{name}</h3>

            <AddToCartButton product={product} />
        </article>
    )
}

export default memo(ProductCard)
