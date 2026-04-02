import { categories } from '../../../data/categories'
import './OfferFilters.css'

interface OfferFiltersProps {
    selectedCategory: string
    onCategoryChange: (category: string) => void
    totalProducts: number
    filteredProducts: number
}

const OfferFilters = ({
    selectedCategory,
    onCategoryChange,
    totalProducts,
    filteredProducts,
}: OfferFiltersProps) => {

    return (
        <aside className="offer-filters">
            <div className="offer-filters__header">
                <h2 className="offer-filters__title">Filtros</h2>
                <div className="offer-filters__badge">
                    {filteredProducts} / {totalProducts}
                </div>
            </div>

            {/* Sección de Categorías */}
            <div className="offer-filters__section">
                <h3 className="offer-filters__section-title">Categoría</h3>
                
                <div className="offer-filters__option">
                    <input
                        type="radio"
                        id="category-all"
                        name="category"
                        value="all"
                        checked={selectedCategory === 'all'}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="offer-filters__radio"
                    />
                    <label htmlFor="category-all" className="offer-filters__label">
                        Todas las categorías
                    </label>
                </div>

                {categories.map((category) => (
                    <div key={category.id} className="offer-filters__option">
                        <input
                            type="radio"
                            id={`category-${category.id}`}
                            name="category"
                            value={category.id}
                            checked={selectedCategory === category.id}
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="offer-filters__radio"
                        />
                        <label htmlFor={`category-${category.id}`} className="offer-filters__label">
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>

            {/* Info de filtros */}
            <div className="offer-filters__info">
                <p>
                    Mostrando <strong>{filteredProducts}</strong> de <strong>{totalProducts}</strong> ofertas
                </p>
            </div>
        </aside>
    )
}

export default OfferFilters
