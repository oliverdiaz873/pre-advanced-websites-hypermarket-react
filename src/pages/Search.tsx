import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productos } from '../data/productos'
import ProductGrid from '../features/products/components/ProductGrid'
import { hasSearchQuery, matchesSearchQuery } from '../utils/searchUtils'
import './Search.css'

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q') ?? ''
    const trimmedQuery = query.trim()

    const matchingProducts = useMemo(
        () =>
            hasSearchQuery(trimmedQuery)
                ? productos.filter((product) =>
                      matchesSearchQuery(product.nombre, trimmedQuery)
                  )
                : [],
        [trimmedQuery]
    )

    return (
        <section className="search-page">
                <div className="search-page__hero">
                    <h1 className="search-page__title">
                        {hasSearchQuery(trimmedQuery)
                            ? `Resultados para: "${trimmedQuery}"`
                            : 'Escribe algo en el buscador'}
                    </h1>
                    <p className="search-page__summary">
                        {hasSearchQuery(trimmedQuery)
                            ? `${matchingProducts.length} producto${
                                  matchingProducts.length === 1 ? '' : 's'
                              } encontrado${
                                  matchingProducts.length === 1 ? '' : 's'
                              }.`
                            : 'Usa el buscador del encabezado para ver productos relacionados.'}
                    </p>
                </div>

                {matchingProducts.length > 0 ? (
                    <ProductGrid 
                        products={matchingProducts} 
                        className="search-page__grid" 
                    />
                ) : hasSearchQuery(trimmedQuery) ? (
                    <div className="search-page__empty">
                        <h2>No se encontraron productos</h2>
                        <p>
                            Prueba con otro nombre o una búsqueda más específica.
                        </p>
                    </div>
                ) : (
                    <div className="search-page__empty">
                        <h2>Tu búsqueda comienza en el encabezado</h2>
                        <p>
                            Escribe el nombre de un producto y presiona Enter para ver los resultados aquí.
                        </p>
                    </div>
                )}
            </section>
    )
}

export default Search
