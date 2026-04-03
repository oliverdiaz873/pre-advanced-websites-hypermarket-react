import ProductCard from '../features/products/components/ProductCard'
import { OfferFilters, EmptyOffers } from '../features/offers'
import { useOfferFilters } from '../features/offers/hooks'
import './Offers.css'

const Offers = () => {
    const { offerProducts, sortedProducts, selectedCategory, onCategoryChange } = useOfferFilters()

    return (
        <div className="offers-page container mx-auto px-4 py-8">
            <div className="offers-header mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <svg className="offers-header__icon icon-fire">
                        <use href="#icon-fire" />
                    </svg>
                    Ofertas
                </h1>
                <p className="text-white/70">
                    Encuentra las mejores promociones y descuentos del hipermercado
                </p>
            </div>

            {/* Layout: Aside izquierda + Contenido derecha */}
            <div className="offers-layout">
                {/* Aside Lateral con Filtros */}
                <OfferFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                    totalProducts={offerProducts.length}
                    filteredProducts={sortedProducts.length}
                />

                {/* Contenido Principal */}
                <div className="offers-main">
                    {/* Grid de Productos */}
                    {sortedProducts.length > 0 ? (
                        <div className="offers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {sortedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    isOffer={true}
                                    oldPrice={product.oldPrice}
                                    discountPercentage={product.discountPercentage}
                                />
                            ))}
                        </div>
                    ) : (
                        <EmptyOffers />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Offers
