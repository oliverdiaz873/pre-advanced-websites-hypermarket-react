import { Link } from 'react-router-dom'
import './Breadcrumb.css'

export interface BreadcrumbItem {
    label: string
    to?: string
}

interface BreadcrumbProps {
    /** p. ej. breadcrumb-category para estilos de página de categoría */
    variant?: 'category' | 'default'
    items: BreadcrumbItem[]
}

const Breadcrumb = ({ variant = 'default', items }: BreadcrumbProps) => {
    const categoryClass = variant === 'category' ? 'breadcrumb-category' : ''

    return (
        <nav aria-label="Breadcrumb">
            <ol className={`breadcrumb ${categoryClass}`.trim()}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1
                    if (isLast) {
                        return (
                            <li key={`${item.label}-${index}`} aria-current="page">
                                {item.label}
                            </li>
                        )
                    }
                    return (
                        <li key={`${item.label}-${index}`}>
                            {item.to ? (
                                <Link to={item.to}>{item.label}</Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumb
