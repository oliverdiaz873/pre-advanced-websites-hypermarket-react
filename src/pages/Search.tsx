import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { products } from '../data/products'
import ProductGrid from '../features/products/components/ProductGrid'
import { SEOHead } from '../shared/components'
import { hasSearchQuery, matchesSearchQuery } from '../shared/utils/searchUtils'
import './Search.css'

const Search = () => {
    const { t } = useTranslation(['search', 'products'])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q') ?? ''
    const trimmedQuery = query.trim()

    const matchingProducts = useMemo(
        () => {
            if (!hasSearchQuery(trimmedQuery)) return []
            
            const searchResults = products.filter((product) => {
                // Buscamos tanto en el nombre original como en el traducido (para fallback o idiomas cruzados)
                const translatedName = t(`products:${product.id}.name`, { defaultValue: product.nombre })
                
                return matchesSearchQuery(product.nombre, trimmedQuery) || 
                       matchesSearchQuery(translatedName, trimmedQuery)
            })
            return searchResults
        },
        [trimmedQuery, t]
    )

    /* ── Título y descripción dinámicos según la búsqueda ──────── */
    const pageTitle = hasSearchQuery(trimmedQuery)
        ? t('search:seo.title_query', { query: trimmedQuery })
        : t('search:seo.title_empty')

    const pageDescription = hasSearchQuery(trimmedQuery)
        ? t('search:seo.desc_query', { count: matchingProducts.length, query: trimmedQuery })
        : t('search:seo.desc_empty')

    return (
        <>
            {/* ── Meta tags SEO dinámicas para la página de búsqueda ── */}
            <SEOHead
                title={pageTitle}
                description={pageDescription}
                url="/search"
                keywords={t('search:seo.keywords')}
                noIndex={!hasSearchQuery(trimmedQuery)}
                jsonLd={hasSearchQuery(trimmedQuery) ? {
                    '@type': 'SearchResultsPage',
                    name: t('search:seo.json_ld_name', { query: trimmedQuery }),
                    description: pageDescription,
                    url: `https://www.hipermercadosuperior.com/search?q=${encodeURIComponent(trimmedQuery)}`,
                    mainEntity: {
                        '@type': 'ItemList',
                        numberOfItems: matchingProducts.length,
                        name: t('search:seo.json_ld_items', { query: trimmedQuery }),
                    },
                } : undefined}
            />

            <section className="search-page">
                <div className="search-page__hero">
                    <h1 className="search-page__title">
                        {hasSearchQuery(trimmedQuery)
                            ? t('search:hero.title_query', { query: trimmedQuery })
                            : t('search:hero.title_empty')}
                    </h1>
                    <p className="search-page__summary">
                        {hasSearchQuery(trimmedQuery)
                            ? t('search:hero.summary_query', { count: matchingProducts.length })
                            : t('search:hero.summary_empty')}
                    </p>
                </div>

                {matchingProducts.length > 0 ? (
                    <ProductGrid 
                        products={matchingProducts} 
                        className="search-page__grid" 
                    />
                ) : hasSearchQuery(trimmedQuery) ? (
                    <div className="search-page__empty">
                        <h2>{t('search:empty_state.no_results.title')}</h2>
                        <p>{t('search:empty_state.no_results.desc')}</p>
                    </div>
                ) : (
                    <div className="search-page__empty">
                        <h2>{t('search:empty_state.start_search.title')}</h2>
                        <p>{t('search:empty_state.start_search.desc')}</p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Search

