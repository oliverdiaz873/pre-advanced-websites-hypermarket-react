/**
 * Componente reutilizable para mostrar una cuadrícula de productos.
 * Utilizado en páginas como Búsqueda y Ofertas para mantener la consistencia visual.
 */
import ProductCard from './ProductCard'
import { Product } from '../../../shared/types/product'
import './ProductGrid.css'

interface ProductGridProps {
    products: (Product & {
        isOffer?: boolean
        oldPrice?: string
        discountPercentage?: number
    })[]
    className?: string
}

const ProductGrid = ({ products, className = '' }: ProductGridProps) => {
    return (
        <div className={`product-grid ${className}`}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isOffer={product.isOffer}
                    oldPrice={product.oldPrice}
                    discountPercentage={product.discountPercentage}
                />
            ))}
        </div>
    )
}

export default ProductGrid
