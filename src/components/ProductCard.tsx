import { Link } from 'react-router-dom'
import { Product } from '../data/productos'
import { useCart } from '../hooks/useCart'
import { getAssetUrl } from '../utils/assetUtils'
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

    return (
        <article className={`producto product-card ${isOffer ? 'offer-card' : ''} block shrink-0 snap-start`}>
            <Link
                to={`/product/${product.id}`}
                className="product-card__overlay-link"
                aria-label={`Ver detalles de ${product.nombre}`}
            ></Link>

            <div className="producto-img-container">
                <img src={getAssetUrl(product.imagen)} alt={product.nombre} loading="lazy" />
            </div>

            <h3 className="producto-title">{product.nombre}</h3>

            {isOffer && oldPrice ? (
                <div className="price-block">
                    <div className="price-line">
                        <span className="texto-antes">Antes:</span>
                        <del className="precio-antiguo">{oldPrice}</del>
                    </div>
                    <div className="price-line">
                        <span className="texto-ahora">Ahora:</span>
                        <ins className="precio-nuevo">{product.precioTexto.replace('Precio: ', '')}</ins>
                    </div>
                </div>
            ) : (
                <p className="producto-price">{product.precioTexto}</p>
            )}

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
