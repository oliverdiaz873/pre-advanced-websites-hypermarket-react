import './OfferBadge.css'

/**
 * OfferBadge - Un badge visual para resaltar productos en oferta.
 * Incluye un icono de fuego y una animación de pulso "caliente".
 */
const OfferBadge = () => {
    return (
        <div className="offer-badge" aria-label="Producto en oferta">
            <svg className="offer-badge__icon">
                <use href="#icon-fire" />
            </svg>
            <span className="offer-badge__text">OFERTA</span>
        </div>
    )
}

export default OfferBadge
