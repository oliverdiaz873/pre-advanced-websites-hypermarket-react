/**
 * Componente ProductGrid que usa el componente ProductCard en la página de Search
 */
import ProductCard from '../../products/components/ProductCard'
import { Product } from '../../../data/productos'
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
