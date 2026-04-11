import { useTranslation } from 'react-i18next'
import { categories } from '../../../data/categories'
import './OfferFilters.css'

interface OfferFiltersProps {
    selectedCategory: string
    onCategoryChange: (category: string) => void
    totalProducts: number
    filteredProducts: number
    isDrawer?: boolean
}

/**
 * Componente de filtros para ofertas.
 * 
 * NOTA DE ARQUITECTURA: Patrón de Composición + Responsive Rendering.
 * - Este componente es agnóstico a su contenedor.
 * - En Desktop: Se inyecta en un sidebar lateral estático.
 * - En Móviles: Se compone dentro de un Drawer para optimizar el espacio (Estrategia de renderizado condicional).
 */
const OfferFilters = ({
    selectedCategory,
    onCategoryChange,
    totalProducts,
    filteredProducts,
    isDrawer = false,
}: OfferFiltersProps) => {
    const { t } = useTranslation(['offers', 'categories'])

    return (
        <div className={`offer-filters ${isDrawer ? 'offer-filters--drawer' : ''}`}>
            {!isDrawer && (
                <div className="offer-filters__header">
                    <h2 className="offer-filters__title">{t('offers:filters.title')}</h2>
                    <div className="offer-filters__badge">
                        {filteredProducts} / {totalProducts}
                    </div>
                </div>
            )}

            {/* Sección de Categorías */}
            <div className="offer-filters__section">
                
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
                        {t('offers:filters.all_categories')}
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
                            {t(`categories:${category.id}`)}
                        </label>
                    </div>
                ))}
            </div>

            {/* Info de filtros */}
            <div 
                className="offer-filters__info"
                dangerouslySetInnerHTML={{ __html: t('offers:filters.info', { filtered: filteredProducts, total: totalProducts }) }}
            />
        </div>
    )
}

export default OfferFilters
