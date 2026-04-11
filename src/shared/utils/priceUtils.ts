/**
 * @fileoverview Utilidades para procesamiento de precios y unidades
 * 
 * Este módulo centraliza la lógica de formateo de precios y extracción
 * de unidades de medida para evitar duplicación entre ProductCard y CartItem.
 * 
 * Usadas en:
 * - ProductCard: Mostrar precios en grid de productos
 * - CartItem: Mostrar precios en carrito
 * - ProductDetails: Detalles del producto
 */

import { Product } from '../types/product'

/**
 * Extrae el precio numérico limpio de una cadena de texto formateado
 * 
 * Función de transformación que:
 * 1. Quita el prefijo "Precio: "
 * 2. Extrae el formato monetario ($1,200.50)
 * 3. Retorna solo el número formateado
 * 
 * @param text - Texto con formato (ej: "Precio: $1,200.50 / kg")
 * @returns Precio limpio (ej: "$1,200.50")
 * 
 * @example
 * ```typescript
 * cleanPrice("Precio: $2,500.00") // "$2,500.00"
 * cleanPrice("$1,200.50 / unidad") // "$1,200.50"
 * ```
 * 
 * Beneficio: Permite mostrar precios consistentemente en toda la app
 */
export const cleanPrice = (text: string): string => {
    // Remove common labels like "Precio: " or "Price: " (case insensitive)
    const cleaned = text.replace(/^[a-z]+:\s*/i, '').trim()
    const match = cleaned.match(/(\$?\d+(?:,\d+)?(?:\.\d+)?)/)
    return match ? match[1] : cleaned
}

/**
 * Obtiene la etiqueta de unidad de medida de un producto
 * 
 * Prioridad de resolución:
 * 1. Campo explícito `product.unidad` si existe
 * 2. Texto después de "/" en `precioTexto` (ej: "kg", "litro")
 * 3. Cualquier texto descriptivo después del precio
 * 4. Fallback a "unidad" si no se encuentra nada
 * 
 * @param product - Objeto Product con información del producto
 * @returns Etiqueta de unidad (ej: "kg", "unidad", "litro", "paquete")
 * 
 * @example
 * ```typescript
 * // Product con unidad explícita
 * unitLabel({ nombre: "Arroz", unidad: "kg" }) // "kg"
 * 
 * // Product con precio que incluye unidad
 * unitLabel({ nombre: "Leche", precioTexto: "Precio: $2.50 / litro" }) // "litro"
 * 
 * // Product sin unidad definida
 * unitLabel({ nombre: "Plátano", precioTexto: "Precio: $1.20" }) // "unidad"
 * ```
 * 
 * Beneficio: Consistencia en la visualización de unidades de medida
 */
export const unitLabel = (product: Product): string => {
    // Prioridad 1: Campo unidad explícito (más preciso)
    const explicit = product.unidad?.trim()
    if (explicit) return explicit

    // Prioridad 2: Texto después del "/" en precioTexto
    const raw = product.precioTexto?.trim()
    if (raw) {
        const parts = raw.split('/')
        if (parts.length > 1) {
            const last = parts[parts.length - 1].trim().replace(/\.$/, '')
            if (last) return last
        }

        // Prioridad 3: Cualquier texto descriptivo después del precio
        const afterPrecio = raw.replace(/^Precio:\s*/i, '').replace(/^\$[\d.,]+\s*/i, '').trim()
        if (afterPrecio) return afterPrecio
    }

    // Fallback: "unidad" genérico
    return 'unidad'
}

interface FormatPriceOptions {
    pricePrefix?: string
    translatedUnit?: string
}

/**
 * Construye una etiqueta de precio localizada para la UI.
 *
 * Mantiene el comportamiento anterior:
 * - Si el producto tiene unidad explícita o `precioTexto` incluye un formato `/ unidad`,
 *   la conserva.
 * - Si no la tiene, solo muestra el precio.
 */
export const formatProductPrice = (
    product: Product,
    { pricePrefix = 'Precio: ', translatedUnit }: FormatPriceOptions = {}
): string => {
    const price = `$${product.precio.toLocaleString()}`
    const hasExplicitUnit = Boolean(product.unidad?.trim())
    const hasInlineUnit = product.precioTexto?.includes('/') ?? false

    if (!hasExplicitUnit && !hasInlineUnit) {
        return `${pricePrefix}${price}`
    }

    const unit = translatedUnit ?? unitLabel(product)
    return `${pricePrefix}${price} / ${unit}`
}
