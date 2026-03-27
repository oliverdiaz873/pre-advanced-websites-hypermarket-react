import React from 'react'
import './CartLayout.css'

/**
 * CartLayout - Componente de Layout del Carrito
 * 
 * Proporciona la estructura visual contenedora para el carrito
 * con estilos consistentes, espaciado responsive y diseño.
 * Es reutilizable y mantiene la coherencia visual.
 */
interface CartLayoutProps {
    children: React.ReactNode
    className?: string
}

const CartLayout = ({ children, className = '' }: CartLayoutProps) => {
    return (
        <section className={`cart-layout ${className}`}>
            {children}
        </section>
    )
}

export default CartLayout
