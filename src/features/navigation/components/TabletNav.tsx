import { Link } from 'react-router-dom'
import { categories } from '../../../data/categories'
import { useTabletMenu } from '../../../hooks/useTabletMenu'
import './Navigation.css'

const navLinkClass =
    'text-white no-underline text-base px-2.5 py-2 block text-left transition-colors duration-300 rounded-[10px] hover:bg-white/15'

const dropdownLinkClass =
    'text-white no-underline text-base px-4 py-2 block text-left transition-colors duration-300 hover:bg-white/15 flex justify-between items-center'

const subLinkClass =
    'text-white no-underline text-base px-4 py-1.5 block hover:bg-white/15'

const TabletNav = () => {
    const navRef = useTabletMenu()

    return (
        <nav
            ref={navRef}
            className="hidden md:flex justify-center nav-links tablet-nav"
            role="navigation"
            aria-label="Menú principal"
        >
            <ul className="flex gap-5 items-center list-none p-0 m-0">
                <li>
                    <Link to="/" className={navLinkClass}>
                        Inicio
                    </Link>
                </li>

                <li className="relative group">
                    <button
                        className={`${navLinkClass} bg-transparent border-none cursor-pointer w-full`}
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Categorías{' '}
                        <span className="text-[0.7em] ml-0.5 opacity-80">▼</span>
                    </button>

                    <ul className="absolute top-full left-0 bg-black/90 rounded-lg min-w-[220px] hidden group-hover:flex flex-col z-[1000] list-none p-0 m-0 shadow-xl">
                        {categories.map((category) => (
                            <li key={category.id} className="relative group/sub">
                                <Link to={category.href} className={dropdownLinkClass}>
                                    {category.name} <span>▸</span>
                                </Link>

                                <ul className="absolute top-0 left-full bg-black/90 rounded-lg min-w-[220px] hidden group-hover/sub:flex flex-col z-[1000] list-none p-0 m-0 shadow-xl">
                                    {category.subcategories.map((sub) => (
                                        <li key={sub.name}>
                                            <Link to={sub.href} className={subLinkClass}>
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>

                <li>
                    <Link to="/#ofertas" className={navLinkClass}>
                        Ofertas
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className={navLinkClass}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default TabletNav
