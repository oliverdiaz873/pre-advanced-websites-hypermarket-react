import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductGrid from '../features/products/components/ProductGrid'
import { OfferFilters, EmptyOffers } from '../features/offers'
import { useOfferFilters } from '../features/offers/hooks'
import Drawer from '../shared/components/Drawer/Drawer'
import SEOHead from '../shared/components/SEOHead'
import './Offers.css'

const Offers = () => {
    const { t } = useTranslation('offers')
    const { offerProducts, sortedProducts, selectedCategory, onCategoryChange } = useOfferFilters()
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    return (
        <>
            {/* ── Meta tags SEO para la página de ofertas ── */}
            <SEOHead
                title={t('seo.title')}
                description={t('seo.description')}
                url="/offers"
                keywords={t('seo.keywords')}
                jsonLd={{
                    '@type': 'OfferCatalog',
                    name: t('seo.json_ld_name'),
                    description: t('seo.json_ld_description'),
                    url: 'https://www.hipermercadosuperior.com/offers',
                    provider: {
                        '@type': 'Organization',
                        name: 'Hipermercado Superior',
                    },
                }}
            />

            <div className="offers-page container mx-auto px-4 py-8">
            <div className="offers-header flex justify-between items-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <svg className="offers-header__icon icon-fire">
                        <use href="#icon-fire" />
                    </svg>
                    {t('header.title')}
                </h1>

                {/* Botón de Filtros solo para móviles */}
                <button 
                    className="offers-mobile-filters-btn"
                    onClick={() => setIsFiltersOpen(true)}
                >
                    <div className="offers-mobile-filters-btn__content">
                        <svg className="offers-mobile-filters-btn__icon">
                            <use href="#icon-sliders" />
                        </svg>
                        <span>{t('header.filter_btn')}</span>
                    </div>
                    {selectedCategory !== 'all' && (
                        <span className="offers-mobile-filters-active-chip">
                            {selectedCategory}
                        </span>
                    )}
                </button>
            </div>

            {/* Drawer de Filtros para móvil */}
            <Drawer
                isOpen={isFiltersOpen}
                onClose={() => setIsFiltersOpen(false)}
                title={t('filters.title')}
                position="right"
            >
                <OfferFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={(cat) => {
                        onCategoryChange(cat);
                        // Opcional: cerrar drawer al seleccionar categoría en móvil
                        // setIsFiltersOpen(false); 
                    }}
                    totalProducts={offerProducts.length}
                    filteredProducts={sortedProducts.length}
                    isDrawer={true}
                />
                
                <button 
                    className="offers-drawer-apply-btn"
                    onClick={() => setIsFiltersOpen(false)}
                >
                    {t('filters.drawer_btn', { count: sortedProducts.length })}
                </button>
            </Drawer>

            {/* Layout: Aside izquierda + Contenido derecha */}
            <div className="offers-layout">
                {/* Aside Lateral con Filtros (Oculto en móvil mediante CSS) */}
                <div className="offers-sidebar">
                    <OfferFilters
                        selectedCategory={selectedCategory}
                        onCategoryChange={onCategoryChange}
                        totalProducts={offerProducts.length}
                        filteredProducts={sortedProducts.length}
                    />
                </div>

                {/* Contenido Principal */}
                <div className="offers-main">
                    {/* Grid de Productos */}
                    {sortedProducts.length > 0 ? (
                        <ProductGrid 
                            products={sortedProducts.map(p => ({ ...p, isOffer: true }))} 
                            className="offers-grid" 
                        />
                    ) : (
                        <EmptyOffers />
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Offers
