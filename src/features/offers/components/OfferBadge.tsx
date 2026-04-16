import { useTranslation } from 'react-i18next'
import './OfferBadge.css'

interface OfferBadgeProps {
    discountPercentage?: number
}

/**
 * OfferBadge - Un badge visual para resaltar productos en oferta.
 * Incluye un icono de fuego y muestra el porcentaje de descuento.
 */
const OfferBadge = ({ discountPercentage }: OfferBadgeProps) => {
    const { t } = useTranslation('offers')
    return (
        <div className="offer-badge" aria-label={t('badge.aria_label', { discount: discountPercentage ? `-${discountPercentage}%` : '' })}>
            <svg className="offer-badge__icon icon-fire">
                <use href="#icon-fire" />
            </svg>
            {discountPercentage && (
                <span className="offer-badge__text">
                    -{discountPercentage}%
                </span>
            )}
        </div>
    )
}

export default OfferBadge
