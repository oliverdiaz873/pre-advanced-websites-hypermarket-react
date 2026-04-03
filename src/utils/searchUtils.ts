/**
 * @fileoverview Utilidades para búsqueda y normalización de texto
 * 
 * Este módulo proporciona funciones auxiliares para procesar y normalizar
 * texto antes de realizar búsquedas, permitiendo búsquedas case-insensitive
 * y sin acentos.
 */

/**
 * Normaliza un texto para búsqueda eliminando acentos y convirtiendo a minúsculas
 * 
 * Proceso:
 * 1. Convierte a minúsculas
 * 2. Normaliza a NFD (descompone caracteres acentuados)
 * 3. Remueve marcas diacríticas (acentos, tildes, etc.)
 * 
 * @param texto - Texto a normalizar
 * @returns Texto normalizado sin acentos y en minúsculas
 * 
 * @example
 * ```typescript
 * normalizarTexto("Arroz") // "arroz"
 * normalizarTexto("Mozzarella") // "mozzarella"
 * normalizarTexto("Ají") // "aji"
 * normalizarTexto("CAFÉ") // "cafe"
 * ```
 * 
 * Útil para:
 * - Búsquedas de productos insensibles a acentos
 * - Comparaciones de nombres sin considerar mayúsculas/minúsculas
 * - Filtrado de categorías
 */
export const normalizarTexto = (texto: string): string => {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

export const hasSearchQuery = (texto: string): boolean => texto.trim().length > 0

export const matchesSearchQuery = (value: string, query: string): boolean => {
    if (!hasSearchQuery(query)) return false
    return normalizarTexto(value).includes(normalizarTexto(query))
}

