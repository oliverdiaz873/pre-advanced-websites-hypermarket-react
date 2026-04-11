import React from 'react'
import { useTranslation } from 'react-i18next'
import './LegalLayout.css'

interface LegalLayoutProps {
    title: string
    date: string
    children: React.ReactNode
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, children }) => {
    const { t } = useTranslation(['legal'])
    return (
        <main className="politica-container reveal">
            <h1 className="main-title">{title}</h1>

            <p><small>{t('legal:last_updated')}: {date}</small></p>

            {children}
        </main>
    )
}

export default LegalLayout
