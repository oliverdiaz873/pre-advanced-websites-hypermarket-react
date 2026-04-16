import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DesktopNav from '../../navigation/components/DesktopNav'
import TabletNav from '../../navigation/components/TabletNav'
import MobileNav from '../../navigation/components/MobileNav'
import { DesktopSearch, TabletSearch, MobileSearch, useHeaderSearch } from '../../search'
import logoImg from '../../../assets/images/logo/logo.png'
import { useCart } from '../../cart/hooks/useCart'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../../../shared/i18n/components/LanguageSelector'
import './Header.css'
import '../../navigation/components/Navigation.css'

type ViewportMode = 'mobile' | 'tablet' | 'desktop'

const getViewportMode = (): ViewportMode => {
    const width = window.innerWidth

    if (width < 768) return 'mobile'
    if (width < 1200) return 'tablet'
    return 'desktop'
}

// Component: orquesta el header principal y decide, segun el viewport,
// que navegacion y que variante del buscador deben renderizarse para
// mantener separada la experiencia de desktop, tablet y mobile.
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [viewportMode, setViewportMode] = useState<ViewportMode>(() => getViewportMode())
    const { totalItems } = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const { t } = useTranslation(['header'])

    const {
        isSearchActive,
        searchInputRef,
        resultsRef,
        searchResults,
        searchTerm,
        setSearchTerm,
        handleResultClick,
        handleSearchSubmit,
        handleSearchToggle,
    } = useHeaderSearch(
        (id) => navigate(`/product/${id}`),
        (term) => navigate(`/search?q=${encodeURIComponent(term)}`)
    )

    useEffect(() => {
        const handleResize = () => {
            setViewportMode(getViewportMode())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const showBrand = viewportMode !== 'mobile' || !isSearchActive
    const showNavigation = !isSearchActive && viewportMode !== 'mobile'

    return (
        <header className="fixed top-0 left-0 w-full rounded-none xl:top-[10px] xl:left-1/2 xl:-translate-x-1/2 xl:rounded-[15px] xl:w-max xl:max-w-[calc(100vw-40px)] bg-black/80 px-2.5 py-1.5 z-[1000] flex justify-center text-white border border-white/10 shadow-lg">
            <div className="header-container flex items-center gap-2.5 justify-between md:justify-center w-full px-0 md:px-3.5">
                {viewportMode === 'mobile' && (
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="menu-btn text-[22px] bg-transparent border-none text-white cursor-pointer transition-colors duration-300 rounded hover:bg-white/15 p-1"
                        aria-label={t(isMobileMenuOpen ? 'header:menu_close' : 'header:menu_open')}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                            <use href="#icon-menu" />
                        </svg>
                    </button>
                )}

                {showBrand && (
                    <Link to="/" className="brand flex items-center gap-1 text-white no-underline mr-4">
                        <img src={logoImg} alt="Logo" className="w-8" />
                        {isHomePage ? (
                            <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
                                {t('header:brand')}
                            </h1>
                        ) : (
                            <span className="text-sm md:text-base font-bold whitespace-nowrap">
                                {t('header:brand')}
                            </span>
                        )}
                    </Link>
                )}

                {showNavigation && viewportMode === 'desktop' && <DesktopNav />}
                {showNavigation && viewportMode === 'tablet' && <TabletNav />}

                {viewportMode === 'desktop' && (
                    <DesktopSearch
                        isActive={isSearchActive}
                        resultsRef={resultsRef}
                        searchInputRef={searchInputRef}
                        searchResults={searchResults}
                        searchTerm={searchTerm}
                        totalItems={totalItems}
                        onResultClick={handleResultClick}
                        onSearchChange={setSearchTerm}
                        onSearchSubmit={handleSearchSubmit}
                        onSearchToggle={handleSearchToggle}
                    />
                )}

                {viewportMode === 'tablet' && (
                    <TabletSearch
                        isActive={isSearchActive}
                        resultsRef={resultsRef}
                        searchInputRef={searchInputRef}
                        searchResults={searchResults}
                        searchTerm={searchTerm}
                        totalItems={totalItems}
                        onResultClick={handleResultClick}
                        onSearchChange={setSearchTerm}
                        onSearchSubmit={handleSearchSubmit}
                        onSearchToggle={handleSearchToggle}
                    />
                )}

                {viewportMode === 'mobile' && (
                    <MobileSearch
                        isActive={isSearchActive}
                        resultsRef={resultsRef}
                        searchInputRef={searchInputRef}
                        searchResults={searchResults}
                        searchTerm={searchTerm}
                        totalItems={totalItems}
                        onResultClick={handleResultClick}
                        onSearchChange={setSearchTerm}
                        onSearchSubmit={handleSearchSubmit}
                        onSearchToggle={handleSearchToggle}
                    />
                )}

                <div className="flex items-center gap-2 ml-2">
                    <div className="hidden md:block">
                        <LanguageSelector />
                    </div>
                </div>
            </div>

            {viewportMode === 'mobile' && (
                <MobileNav
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    )
}

export default Header
