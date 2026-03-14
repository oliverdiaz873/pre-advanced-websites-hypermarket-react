import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

interface MobileNavProps {
    isOpen: boolean
    onClose?: () => void
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const [openSubcategories, setOpenSubcategories] = useState<string[]>([])

    const toggleCategory = (name: string) => {
        setOpenCategory((prev) => (prev === name ? null : name))
        setOpenSubcategories([])
    }

    const toggleSubcategory = (name: string) => {
        setOpenSubcategories((prev) =>
            prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
        )
    }

    const handleLinkClick = () => {
        if (onClose) onClose()
    }

    if (!isOpen) return null

    return (
        <nav
            id="mobile-menu"
            className="fixed top-[49px] left-0 w-full bg-black/95 text-white z-[999] max-h-[calc(100vh-49px)] overflow-y-auto py-5 shadow-xl"
            aria-label="Menú móvil"
        >
            <ul className="list-none p-0 m-0">
                {/* Inicio */}
                <li className="px-5 py-2.5 border-b border-white/10">
                    <Link to="/" className="block" onClick={handleLinkClick}>
                        Inicio
                    </Link>
                </li>

                {/* Categorías acordeón */}
                <li className="px-5 py-2.5 border-b border-white/10">
                    <button
                        onClick={() => toggleCategory('categorias')}
                        className="w-full text-left flex justify-between items-center"
                    >
                        Categorías{' '}
                        <span
                            className={`text-[0.7em] opacity-70 transition-transform duration-300 ${openCategory === 'categorias' ? 'rotate-180' : ''
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {openCategory === 'categorias' && (
                        <ul className="pl-5 mt-2 list-none p-0">
                            {categories.map((category) => (
                                <li key={category.id} className="border-b border-white/5">
                                    <button
                                        onClick={() => toggleSubcategory(category.id)}
                                        className="w-full text-left py-3 flex justify-between items-center text-sm"
                                    >
                                        {category.name}
                                        <span
                                            className={`opacity-50 transition-transform duration-300 ${openSubcategories.includes(category.id) ? 'rotate-90' : ''
                                                }`}
                                        >
                                            ▸
                                        </span>
                                    </button>

                                    {openSubcategories.includes(category.id) && (
                                        <ul className="pl-4 pb-2 text-[13px] list-none p-0">
                                            {category.subcategories.map((sub) => (
                                                <li key={sub.name}>
                                                    <Link
                                                        to={sub.href}
                                                        className="block py-2"
                                                        onClick={handleLinkClick}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                {/* Ofertas */}
                <li className="px-5 py-2.5 border-b border-white/10">
                    <Link to="/#ofertas" className="block" onClick={handleLinkClick}>
                        Ofertas
                    </Link>
                </li>

                {/* Contacto */}
                <li className="px-5 py-2.5 border-b border-white/10">
                    <Link to="/contact" className="block" onClick={handleLinkClick}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNav
