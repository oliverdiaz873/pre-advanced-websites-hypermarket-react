import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { HeaderSearchProduct } from '../hooks/useHeaderSearch'
import { getAssetUrl } from '../../../shared/utils/assetUtils'
import './TabletSearch.css'

/**
 * Props del componente TabletSearch.
 * 
 * @interface TabletSearchProps
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
interface TabletSearchProps {
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
 * Componente de búsqueda optimizado para tablet (768px - 1199px).
 * 
 * CARACTERÍSTICAS:
 * - Balance logo-search: mantiene logo visible mientras hay espacio
 * - Input flexible: expande usando el espacio disponible al activarse
 * - Carrito oculto: se oculta cuando la búsqueda está activa
 * - Breakpoint específico: solo se renderiza en 768px - 1199px (CSS media query)
 * - Dropdown 400px: ancho máximo aprovechando el espacio de tablet
 * - Enfoque UX: mantiene marca visible pero prioriza búsqueda
 * 
 * LAYOUT TABLET (768px - 1199px):
 * [Logo] [Search Field (flexible)] [Cart]
 *                    ↓ (cuando activo)
 *       [Search Input (expand)] [Search Results]
 * 
 * ESTILOS:
 * - Display: flex con flex: 1 1 auto para crecer
 * - Search field activo: width: 100% tomando todo el espacio
 * - Resultados: min(400px, 100%) - máximo 400px pero responsivo
 * - Media query: @media (min-width: 768px) and (max-width: 1199px)
 * - Carrito: display: none cuando tablet-search.is-active
 * 
 * DIFERENCIAS CON DESKTOP/MOBILE:
 * - Vs Desktop: menos espacio, logo obligatorio visible
 * - Vs Mobile: más espacio, carrito visible cuando no busca
 * 
 * @component
 * @returns {JSX.Element} UI del buscador para tablet
 */
const TabletSearch = ({
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
}: TabletSearchProps) => {
    const { t } = useTranslation(['search', 'common', 'products'])
    return (
        <div className={`tablet-search ${isActive ? 'is-active' : ''}`}>
            <div className={`tablet-search__field ${isActive ? 'is-active' : ''}`}>
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder={t('search:input.placeholder')}
                    className={`tablet-search__input search-input-modern bg-white text-black px-3 py-1.5 rounded-lg outline-none ${isActive ? 'is-active' : ''}`}
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
                    <ul ref={resultsRef} className="tablet-search__results">
                        {searchResults.map((product) => (
                            <li
                                key={product.id}
                                onClick={() => onResultClick(product.id)}
                                className="tablet-search__result"
                            >
                                <img
                                    src={getAssetUrl(product.imagen)}
                                    alt=""
                                    className="tablet-search__thumb"
                                />
                                <span className="tablet-search__label">{t(`products:${product.id}.name`, { defaultValue: product.nombre })}</span>
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

            <Link to="/cart" className="util-btn tablet-search__cart group relative" aria-label={t('header:cart_label')}>
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

export default TabletSearch
