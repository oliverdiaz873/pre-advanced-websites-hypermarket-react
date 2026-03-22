import React from 'react'
import './LegalLayout.css'

interface LegalLayoutProps {
    title: string
    date: string
    children: React.ReactNode
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, children }) => {
    return (
        <main className="politica-container reveal">
            <h1 className="main-title">{title}</h1>

            <p><small>Última actualización: {date}</small></p>

            {children}
        </main>
    )
}

export default LegalLayout
