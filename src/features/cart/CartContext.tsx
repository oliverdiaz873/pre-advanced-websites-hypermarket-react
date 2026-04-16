import { createContext, useState, useCallback, useEffect, ReactNode } from 'react'

export interface CartItem {
    id: string
    nombre: string
    precio: number
    precioTexto?: string
    img: string
    unidad?: string
    cantidad: number
    isOffer?: boolean
    oldPrice?: string
    discountPercentage?: number
}

interface CartContextType {
    cart: CartItem[]
    totalItems: number
    totalPrice: number
    addToCart: (product: Omit<CartItem, 'cantidad'>) => void
    removeFromCart: (id: string) => void
    updateQuantity: (id: string, delta: number) => void
    clearCart: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = 'carrito'

/**
 * Calcula el porcentaje de descuento basado en el precio anterior y actual
 * @param oldPrice - Precio anterior formateado (ej: "RD$ 56.25")
 * @param currentPrice - Precio actual numérico
 * @returns Porcentaje de descuento redondeado
 */
const calculateDiscountPercentage = (oldPrice?: string, currentPrice?: number): number | undefined => {
    if (!oldPrice || !currentPrice) return undefined
    
    // Extraer valor numérico del oldPrice
    const numericOldPrice = parseFloat(oldPrice.replace(/[^\d.-]/g, ''))
    if (isNaN(numericOldPrice) || numericOldPrice <= 0) return undefined
    
    const discount = ((numericOldPrice - currentPrice) / numericOldPrice) * 100
    return Math.round(discount)
}

/**
 * CartProvider - Proveedor de estado global del carrito
 * Maneja persistencia en localStorage y actualización reactiva
 */
export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            return saved ? JSON.parse(saved) : []
        } catch (error) {
            console.error('Error loading cart from storage:', error)
            return []
        }
    })

    // Guardar en localStorage cuando cambien los items
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
        } catch (error) {
            console.error('Error saving cart to storage:', error)
        }
    }, [cart])

    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0)
    const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    const addToCart = useCallback((product: Omit<CartItem, 'cantidad'>) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id)
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            }
            
            // Calcular discountPercentage si es una oferta
            const discountPercentage = calculateDiscountPercentage(product.oldPrice, product.precio)
            return [...prevCart, { ...product, cantidad: 1, discountPercentage }]
        })
    }, [])

    const removeFromCart = useCallback((id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }, [])

    const updateQuantity = useCallback((id: string, delta: number) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, cantidad: item.cantidad + delta } : item
                )
                .filter((item) => item.cantidad > 0)
        )
    }, [])

    const clearCart = useCallback(() => {
        setCart([])
    }, [])

    const value: CartContextType = {
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
