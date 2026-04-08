
import { useContext } from 'react'
import { CartContext, CartItem } from '../CartContext'

/**
 * Hook para acceder al estado y métodos del carrito
 * Debe usarse dentro de un componente que esté dentro de CartProvider
 */
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart debe ser usado dentro de CartProvider')
    }
    return context
}

// Exportar CartItem para compatibilidad con código existente
export type { CartItem }
