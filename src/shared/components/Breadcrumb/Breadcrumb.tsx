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
    const totalItems = items.length

    return (
        <nav aria-label="Breadcrumb">
            <ol className={`breadcrumb ${categoryClass}`.trim()}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1
                    const isFirst = index === 0
                    const isPenultimate = index === totalItems - 2
                    const isMiddle = !isFirst && !isPenultimate && !isLast
                    const itemClassName = [
                        'breadcrumb-item',
                        isFirst ? 'breadcrumb-item--first' : '',
                        isPenultimate ? 'breadcrumb-item--parent' : '',
                        isMiddle ? 'breadcrumb-item--middle' : '',
                        isLast ? 'breadcrumb-item--current' : '',
                        totalItems > 3 && isPenultimate ? 'breadcrumb-item--mobile-resume' : '',
                    ]
                        .filter(Boolean)
                        .join(' ')

                    if (isLast) {
                        return (
                            <li
                                key={`${item.label}-${index}`}
                                className={itemClassName}
                                aria-current="page"
                            >
                                {item.label}
                            </li>
                        )
                    }
                    return (
                        <li key={`${item.label}-${index}`} className={itemClassName}>
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
