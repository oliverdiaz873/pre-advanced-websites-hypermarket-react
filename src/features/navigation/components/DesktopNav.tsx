import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { categories } from '../../../data/categories'

const navLinkClass =
    'text-white no-underline text-base px-2.5 py-2 block text-left transition-colors duration-300 rounded-[10px] hover:bg-white/15'

const dropdownLinkClass =
    'text-white no-underline text-base px-4 py-2 block text-left transition-colors duration-300 hover:bg-white/15 flex justify-between items-center'

const subLinkClass =
    'text-white no-underline text-base px-4 py-1.5 block hover:bg-white/15'

const DesktopNav = () => {
    const { t } = useTranslation(['categories', 'header'])

    return (
        <nav
            className="hidden md:flex justify-center nav-links desktop-nav"
            role="navigation"
            aria-label={t('header:nav_aria')}
        >
            <ul className="flex gap-5 items-center list-none p-0 m-0">
                <li>
                    <Link to="/" className={navLinkClass}>
                        {t('header:nav.home')}
                    </Link>
                </li>

                <li className="relative group">
                    <button
                        className={`${navLinkClass} bg-transparent border-none cursor-pointer w-full`}
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {t('header:nav.categories')}{' '}
                        <span className="text-[0.7em] ml-0.5 opacity-80">▼</span>
                    </button>

                    <ul className="absolute top-full left-0 bg-black/90 rounded-lg min-w-[220px] hidden group-hover:flex flex-col z-[1000] list-none p-0 m-0 shadow-xl">
                        {categories.map((category) => (
                            <li key={category.id} className="relative group/sub">
                                <Link to={category.href} className={dropdownLinkClass}>
                                    {t(`categories:${category.id}`)} <span>▸</span>
                                </Link>

                                <ul className="absolute top-0 left-full bg-black/90 rounded-lg min-w-[220px] hidden group-hover/sub:flex flex-col z-[1000] list-none p-0 m-0 shadow-xl">
                                    {category.subcategories.map((sub) => {
                                        const subKey = sub.href.split('#')[1]
                                        return (
                                            <li key={sub.name}>
                                                <Link to={sub.href} className={subLinkClass}>
                                                    {t(`categories:sub.${subKey}`)}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>

                <li>
                    <Link to="/offers" className={navLinkClass}>
                        {t('header:nav.offers')}
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className={navLinkClass}>
                        {t('header:nav.contact')}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNav
