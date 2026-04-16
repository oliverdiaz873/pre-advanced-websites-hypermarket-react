import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { HeaderSearchProduct } from '../hooks/useHeaderSearch'
import { getAssetUrl } from '../../../shared/utils/assetUtils'
import './DesktopSearch.css'

/**
 * Props del componente DesktopSearch.
 * 
 * @interface DesktopSearchProps
 * @property {boolean} isActive - Indica si el buscador está activo (input expandido)
 * @property {React.RefObject<HTMLUListElement>} resultsRef - Referencia al DOM para detectar clicks fuera
 * @property {React.RefObject<HTMLInputElement>} searchInputRef - Referencia al input para focus automático
 * @property {HeaderSearchProduct[]} searchResults - Array de productos encontrados
 * @property {string} searchTerm - Término actual de búsqueda
 * @property {number} totalItems - Total de items en carrito (para badge)
 * @property {Function} onResultClick - Callback al hacer click en un resultado
 * @property {Function} onSearchChange - Callback al escribir en el input
 * @property {Function} onSearchSubmit - Callback al presionar Enter o botón submit
 * @property {Function} onSearchToggle - Callback para abrir/cerrar buscador
 */
interface DesktopSearchProps {
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

/**
 * Componente de búsqueda optimizado para desktop.
 * 
 * CARACTERÍSTICAS:
 * - Input expandible: comienza oculto, se expande al activarse
 * - Dropdown de resultados: mostrado debajo del input con máximo 8 items
 * - Integración con carrito: botón de carrito con badge de cantidad
 * - Animaciones: cambios suaves de tamaño y color
 * - Responsive: se oculta en viewports menores a 1200px
 * - Accesibilidad: aria-labels con contexto (submit/open/close)
 * 
 * LAYOUT DESKTOP:
 * [Search Input (expandible)] [Cart Button] [Language Selector]
 *           ↓
 *   [Dropdown Resultados]
 * 
 * ESTILOS:
 * - Input: 400px cuando activo, flex automático
 * - Resultados: dropdown con scroll, max-height 250px
 * - Botón: tamaño 6x6, cambia color a rojo cuando activo
 * 
 * @component
 * @returns {JSX.Element} UI del buscador para desktop
 */
const DesktopSearch = ({
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
}: DesktopSearchProps) => {
    const { t } = useTranslation(['search', 'common', 'products'])
    return (
        <div className="desktop-search">
            <div className={`desktop-search__field ${isActive ? 'is-active' : ''}`}>
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder={t('search:input.placeholder')}
                    className={`desktop-search__input search-input-modern bg-white text-black px-3 py-1.5 rounded-lg outline-none ${isActive ? 'is-active' : ''}`}
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
                    <ul ref={resultsRef} className="desktop-search__results">
                        {searchResults.map((product) => (
                            <li
                                key={product.id}
                                onClick={() => onResultClick(product.id)}
                                className="desktop-search__result"
                            >
                                <img
                                    src={getAssetUrl(product.imagen)}
                                    alt={t(`products:${product.id}.name`, { defaultValue: product.nombre })}
                                    className="desktop-search__thumb"
                                />
                                <span className="desktop-search__label">{t(`products:${product.id}.name`, { defaultValue: product.nombre })}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={isActive ? onSearchSubmit : onSearchToggle}
                className="util-btn group relative"
                aria-label={isActive ? t('search:button.submit') : t('search:button.open')}
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

            <Link to="/cart" className="util-btn group relative" aria-label={t('header:cart_label')}>
                <svg className="util-icon w-6 h-6 md:w-[27px] md:h-[27px]" fill="currentColor" viewBox="0 0 16 16">
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

export default DesktopSearch
