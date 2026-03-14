import { useState, useEffect } from 'react'

export interface CartItem {
    id: string
    nombre: string
    precio: number
    img: string
    url: string
    cantidad: number
}

const STORAGE_KEY = 'carrito'

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([])

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            try {
                setCart(JSON.parse(saved))
            } catch (e) {
                console.error('Error loading cart', e)
                setCart([])
            }
        }
    }, [])

    // Save to localStorage when cart changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    }, [cart])

    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0)
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    )

    const addToCart = (product: Omit<CartItem, 'cantidad'>) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            }
            return [...prev, { ...product, cantidad: 1 }]
        })
    }

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, cantidad: item.cantidad + delta } : item
                )
                .filter((item) => item.cantidad > 0)
        )
    }

    return {
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
    }
}
