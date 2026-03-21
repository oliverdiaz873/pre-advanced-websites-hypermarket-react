import { useState, useEffect, useCallback } from 'react'

export interface CartItem {
    id: string
    nombre: string
    precio: number
    img: string
    url: string
    cantidad: number
}

const STORAGE_KEY = 'carrito'

// =============== ESTADO GLOBAL ===============
// Mantenemos el carrito y los suscriptores en el scope del módulo
// para que cualquier componente que use el hook tenga la misma información.
let globalCart: CartItem[] = []
let listeners: Array<() => void> = []

// Carga inicial sincrónica desde localStorage
try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
        globalCart = JSON.parse(saved)
    }
} catch (e) {
    console.error('Error loading cart', e)
}

// Función para notificar a todos los componentes que escuchan el carrito
function emitChange() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(globalCart))
    for (const listener of listeners) {
        listener()
    }
}

export const useCart = () => {
    // Cada componente guarda una copia local sincronizada
    const [localCart, setLocalCart] = useState<CartItem[]>(globalCart)

    // Suscribir el componente a los cambios del carrito global
    useEffect(() => {
        const listener = () => setLocalCart(globalCart)
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }, [])

    const totalItems = localCart.reduce((acc, item) => acc + item.cantidad, 0)
    const totalPrice = localCart.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    )

    const addToCart = useCallback((product: Omit<CartItem, 'cantidad'>) => {
        const existing = globalCart.find((item) => item.id === product.id)
        if (existing) {
            globalCart = globalCart.map((item) =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        } else {
            globalCart = [...globalCart, { ...product, cantidad: 1 }]
        }
        emitChange()
    }, [])

    const removeFromCart = useCallback((id: string) => {
        globalCart = globalCart.filter((item) => item.id !== id)
        emitChange()
    }, [])

    const updateQuantity = useCallback((id: string, delta: number) => {
        globalCart = globalCart
            .map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + delta } : item
            )
            .filter((item) => item.cantidad > 0)
        emitChange()
    }, [])

    return {
        cart: localCart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
    }
}
