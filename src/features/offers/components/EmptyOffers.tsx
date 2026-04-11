import { useTranslation } from 'react-i18next'
import './EmptyOffers.css'

/**
 * EmptyOffers - Componente de Ofertas Vacías
 * 
 * Muestra el estado cuando no hay productos en la categoría
 * de ofertas seleccionada con un mensaje informativo.
 */
const EmptyOffers = () => {
    const { t } = useTranslation('offers')
    return (
        <section className="empty-offers">
            <div className="empty-offers__content">
                <svg className="empty-offers__icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                
                <h2 className="empty-offers__title">{t('empty.title')}</h2>
                <p className="empty-offers__message">
                    {t('empty.message')}
                </p>
            </div>
        </section>
    )
}

export default EmptyOffers
