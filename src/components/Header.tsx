import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import logoImg from '../assets/images/logo/logo.png'
import { productos } from '../data/productos'
import { useCart } from '../hooks/useCart'
import { normalizarTexto } from '../utils/searchUtils'
import { getAssetUrl } from '../utils/assetUtils'
import './Header.css'
import './Navigation.css'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState<typeof productos>([])
    const { totalItems } = useCart()
    const navigate = useNavigate()

    const searchInputRef = useRef<HTMLInputElement>(null)
    const resultsRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([])
            return
        }

        const term = normalizarTexto(searchTerm)
        const filtered = productos.filter((p) =>
            normalizarTexto(p.nombre).includes(term) ||
            normalizarTexto(p.categoria).includes(term)
        ).slice(0, 8)

        setSearchResults(filtered)
    }, [searchTerm])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
                setSearchResults([])
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSearchToggle = () => {
        setIsSearchActive(!isSearchActive)
        if (!isSearchActive) {
            setTimeout(() => searchInputRef.current?.focus(), 100)
        } else {
            setSearchTerm('')
        }
    }

    const handleResultClick = (id: string) => {
        setSearchTerm('')
        setSearchResults([])
        setIsSearchActive(false)
        navigate(`/product/${id}`)
    }

    return (
        <header className="fixed top-0 left-0 w-full rounded-none xl:top-[10px] xl:left-1/2 xl:-translate-x-1/2 xl:rounded-[15px] xl:w-max xl:max-w-[calc(100vw-40px)] bg-black/80 px-2.5 py-1.5 z-[1000] flex justify-center text-white border border-white/10 shadow-lg">
            <div className={`header-container flex items-center gap-2.5 justify-between md:justify-center w-full px-0 md:px-3.5 ${isSearchActive ? 'menu-busqueda-activa' : ''}`}>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="menu-btn text-[22px] bg-transparent border-none text-white cursor-pointer transition-colors duration-300 rounded hover:bg-white/15 p-1 md:hidden"
                    aria-label="Abrir menú"
                >
                    {/* Icono de menú hamburguesa */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                        <use href="#icon-menu" />
                    </svg>
                </button>

                {/* Logo */}
                <Link to="/" className={`brand flex items-center gap-1 text-white no-underline mr-4 ${isSearchActive ? 'hidden sm:flex' : 'flex'}`}>
                    <img src={logoImg} alt="Logo" className="w-8" />
                    <h1 className="text-sm md:text-base font-bold whitespace-nowrap hidden sm:block">
                        Hipermercado Superior
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                {!isSearchActive && <DesktopNav />}

                {/* Header Utils (Search & Cart) */}
                <div className={`header-utils flex items-center gap-2 md:ml-4 ${isSearchActive ? 'flex-1 md:flex-1' : 'flex-1 md:flex-initial'} justify-end`}>
                    {/* Search Bar */}
                    <div className={`relative ${isSearchActive ? 'flex-1 md:flex-1' : 'flex-1 md:flex-initial'} flex items-center justify-end`}>
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Buscar productos..."
                            className={`search-input-modern ${isSearchActive ? 'block w-full' : 'hidden md:hidden'} bg-white text-black px-3 py-1.5 rounded-lg outline-none`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {searchResults.length > 0 && (
                            <ul ref={resultsRef} className="search-results-list absolute top-full right-0 mt-2 w-full md:w-[400px] bg-black/95 rounded-lg shadow-2xl border border-white/10 overflow-hidden z-[1100]">
                                {searchResults.map((p) => (
                                    <li
                                        key={p.id}
                                        onClick={() => handleResultClick(p.id)}
                                        className="p-3 hover:bg-white/10 cursor-pointer border-b border-white/5 flex items-center gap-3"
                                    >
                                        <img src={getAssetUrl(p.imagen)} alt="" className="w-8 h-8 object-contain bg-white rounded" />
                                        <span className="text-sm truncate">{p.nombre}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Search Toggle Button */}
                    <button
                        onClick={handleSearchToggle}
                        className="util-btn group relative"
                        aria-label={isSearchActive ? "Cerrar búsqueda" : "Buscar productos"}
                    >
                        {/* Si la búsqueda está activa se muestra el icono X (Cerrar), si no, el de Lupa (Buscar) */}
                        <svg className={`util-icon w-6 h-6 transition-all duration-300 ${isSearchActive ? 'text-red-500 scale-[2]' : ''}`} fill="currentColor" viewBox="0 0 16 16">
                            {isSearchActive ? (
                                /* Icono X (Cerrar) */
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            ) : (
                                /* Icono Lupa (Buscar) */
                                <use href="#icon-search" />
                            )}
                        </svg>
                    </button>

                    {/* Cart Button */}
                    <Link to="/cart" className={`util-btn group relative ${isSearchActive ? 'hidden sm:flex' : 'flex'}`} aria-label="Ver carrito">
                        {/* Icono de Carrito */}
                        <svg className="util-icon w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                            <use href="#icon-cart" />
                        </svg>
                        {totalItems > 0 && (
                            <span className="cart-badge absolute -top-1 -right-1 bg-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-black">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <MobileNav
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </header>
    )
}

export default Header
