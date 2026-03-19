import { Link } from 'react-router-dom'
import { Product } from '../data/productos'
import { useCart } from '../hooks/useCart'
import { getAssetUrl } from '../utils/assetUtils'
import OfferBadge from './OfferBadge'
import './ProductCard.css'

interface ProductCardProps {
    product: Product
    isOffer?: boolean
    oldPrice?: string
}

const ProductCard = ({ product, isOffer, oldPrice }: ProductCardProps) => {
    const { addToCart } = useCart()

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            img: product.imagen,
            url: product.url,
        })
    }

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
            {isOffer && oldPrice ? (
                <div className="price-block offer">
                    <ins className="precio-nuevo">{cleanPrice(product.precioTexto)}</ins>
                    <del className="precio-antiguo">{cleanPrice(oldPrice)}</del>
                </div>
            ) : (
                <div className="price-block">
                    <p className="producto-price">{cleanPrice(product.precioTexto)}</p>
                </div>
            )}

            <h3 className="producto-title">{product.nombre}</h3>

            <button
                onClick={handleAdd}
                className="btn-agregar product-card__add-btn"
                id={product.id}
            >
                Agregar
            </button>
        </article>
    )
}

export default ProductCard
