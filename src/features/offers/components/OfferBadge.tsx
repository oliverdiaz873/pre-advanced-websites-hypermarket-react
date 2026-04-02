import './OfferBadge.css'

interface OfferBadgeProps {
    discountPercentage?: number
}

/**
 * OfferBadge - Un badge visual para resaltar productos en oferta.
 * Incluye un icono de fuego y muestra el porcentaje de descuento.
 */
const OfferBadge = ({ discountPercentage }: OfferBadgeProps) => {
    return (
        <div className="offer-badge" aria-label={`Producto en oferta ${discountPercentage ? `-${discountPercentage}%` : ''}`}>
            <svg className="offer-badge__icon icon-fire">
                <use href="#icon-fire" />
            </svg>
            <span className="offer-badge__text">
                {discountPercentage ? `-${discountPercentage}%` : 'OFERTA'}
            </span>
        </div>
    )
}

export default OfferBadge
