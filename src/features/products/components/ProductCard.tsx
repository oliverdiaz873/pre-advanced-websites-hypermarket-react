import { Link } from 'react-router-dom'
import { Product } from '../../../data/productos'
import { getAssetUrl } from '../../../utils/assetUtils'
import OfferBadge from './OfferBadge'
import AddToCartButton from '../../cart/components/AddToCartButton'
import './ProductCard.css'

interface ProductCardProps {
    product: Product
    isOffer?: boolean
    oldPrice?: string
}

/** Texto después de "/" en precioTexto, o cantidad+unidad si no hay barra; fallback "unidad". */
function unitLabel(product: Product): string {
    const explicit = product.unidad?.trim()
    if (explicit) return explicit
    const raw = product.precioTexto
    const parts = raw.split('/')
    if (parts.length > 1) {
        const last = parts[parts.length - 1].trim().replace(/\.$/, '')
        if (last) return last
    }
    const afterPrecio = raw.replace(/^Precio:\s*/i, '').replace(/^\$[\d.,]+\s*/i, '').trim()
    if (afterPrecio) return afterPrecio
    return 'unidad'
}

const ProductCard = ({ product, isOffer, oldPrice }: ProductCardProps) => {

    const cleanPrice = (text: string) => {
        const cleaned = text.replace('Precio: ', '').trim()
        const match = cleaned.match(/(\$?\d+(?:,\d+)?(?:\.\d+)?)/)
        return match ? match[1] : cleaned
    }

    return (
        <article className={`producto product-card ${isOffer ? 'offer-card' : ''} block shrink-0 snap-start`}>
            {/* Si el producto es una oferta, mostramos el badge de fuego */}
            {isOffer && <OfferBadge />} 
            
            <Link
                to={`/product/${product.id}`}
                className="product-card__overlay-link"
                aria-label={`Ver detalles de ${product.nombre}`}
            ></Link>

            <div className="producto-img-container">
                <img src={getAssetUrl(product.imagen)} alt={product.nombre} loading="lazy" />
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
                    ${product.precio.toLocaleString()} / {unitLabel(product)}
                </p>
            </div>

            <h3 className="producto-title">{product.nombre}</h3>

            <AddToCartButton product={product} />
        </article>
    )
}

export default ProductCard
