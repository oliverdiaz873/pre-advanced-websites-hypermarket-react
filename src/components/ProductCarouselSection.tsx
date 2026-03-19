/**
 * ProductCarouselSection - Estructura de bloque de carrusel por sección.
 * Se encarga de:
 * 1. Definir el contenedor de la sección (fondo, padding, ID).
 * 2. Renderizar el título de la sección.
 * 3. Transformar los datos de productos en ProductCards.
 * 4. Utilizar ProductCarousel como su "motor" de movimiento.
 */
import ProductCard from './ProductCard'
import ProductCarousel from './ProductCarousel'
import './ProductCarouselSection.css'

interface ProductCarouselSectionProps {
    title: string
    products: any[]
    id: string
    idPrefix: string
    isOffer?: boolean
    className?: string
}

const ProductCarouselSection = ({
    title,
    products,
    id,
    idPrefix,
    isOffer = false,
    className = ""
}: ProductCarouselSectionProps) => {
    return (
        <section 
            className={`product-carousel-section ${className}`} 
            id={id}
        >
            <div className="w-full">
                <h2 className="product-carousel-section__title">
                    {title}
                </h2>

                <ProductCarousel idPrefix={idPrefix}>
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            isOffer={isOffer}
                            oldPrice={p.oldPrice}
                        />
                    ))}
                </ProductCarousel>
            </div>
        </section>
    )
}

export default ProductCarouselSection
