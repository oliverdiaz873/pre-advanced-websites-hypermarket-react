import { Link } from 'react-router-dom'
import type { HeaderSearchProduct } from '../hooks/useHeaderSearch'
import { getAssetUrl } from '../../../utils/assetUtils'
import './MobileSearch.css'

interface MobileSearchProps {
    isActive: boolean
    resultsRef: React.RefObject<HTMLUListElement | null>
    searchInputRef: React.RefObject<HTMLInputElement | null>
    searchResults: HeaderSearchProduct[]
    searchTerm: string
    totalItems: number
    onResultClick: (id: string) => void
    onSearchChange: (value: string) => void
    onSearchSubmit: () => void
    onSearchToggle: () => void
}

// Component: renderiza la variante del buscador para mobile, adaptando
// el input y el dropdown de resultados al espacio reducido del header
// para priorizar la escritura y la seleccion rapida en pantallas pequenas.
const MobileSearch = ({
    isActive,
    resultsRef,
    searchInputRef,
    searchResults,
    searchTerm,
    totalItems,
    onResultClick,
    onSearchChange,
    onSearchSubmit,
    onSearchToggle,
}: MobileSearchProps) => {
    return (
        <div className={`mobile-search ${isActive ? 'is-active' : ''}`}>
            <div className={`mobile-search__field ${isActive ? 'is-active' : ''}`}>
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Buscar productos..."
                    className={`mobile-search__input search-input-modern bg-white text-black px-3 py-1.5 rounded-lg outline-none ${isActive ? 'is-active' : ''}`}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            onSearchSubmit()
                        }
                    }}
                />

                {searchResults.length > 0 && (
                    <ul ref={resultsRef} className="mobile-search__results">
                        {searchResults.map((product) => (
                            <li
                                key={product.id}
                                onClick={() => onResultClick(product.id)}
                                className="mobile-search__result"
                            >
                                <img
                                    src={getAssetUrl(product.imagen)}
                                    alt=""
                                    className="mobile-search__thumb"
                                />
                                <span className="mobile-search__label">{product.nombre}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={isActive ? onSearchSubmit : onSearchToggle}
                className="util-btn group relative"
                aria-label={isActive ? 'Buscar productos' : 'Abrir buscador'}
            >
                <svg
                    className={`util-icon w-6 h-6 transition-all duration-300 ${isActive ? 'text-red-500 scale-[2]' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    {isActive ? (
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    ) : (
                        <use href="#icon-search" />
                    )}
                </svg>
            </button>

            <Link to="/cart" className="util-btn mobile-search__cart group relative" aria-label="Ver carrito">
                <svg className="util-icon w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <use href="#icon-cart" />
                </svg>
                {totalItems > 0 && (
                    <span className="cart-badge absolute -top-1 -right-1 bg-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        {totalItems}
                    </span>
                )}
            </Link>
        </div>
    )
}

export default MobileSearch
