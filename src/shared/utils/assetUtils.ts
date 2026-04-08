/**
 * @fileoverview Utilidades para resolver rutas de assets en entorno Vite/React
 * 
 * Este módulo maneja la carga dinámica de assets (imágenes, fuentes, etc.)
 * desde la carpeta /assets usando el sistema de glob imports de Vite.
 * 
 * Ventajas:
 * - Rutas seguras en tiempo de compilación
 * - Compatible con bundling y optimización de Vite
 * - Logs de debugging en modo desarrollo
 */

/**
 * Glob import de Vite que pre-carga todas las URLs de assets disponibles
 * Esta es la manera recomendada para trabajar con assets en Vite
 */
const allAssets = import.meta.glob('../../assets/**/*', {
    eager: true,
    import: 'default'
})

/**
 * Resuelve la URL completa de un asset dado su ruta relativa
 * 
 * @param path - Ruta del asset (ej: "images/productos/alimentos/arroz.png")
 * @returns URL del asset o la ruta original si no se encontró
 * 
 * @example
 * ```typescript
 * const imageUrl = getAssetUrl('images/logo/logo-primary.svg')
 * // Retorna la URL compilada por Vite
 * ```
 */
export const getAssetUrl = (path: string) => {
    if (!path) return ''

    // Normalizar ruta: "/assets/images/..." -> "assets/images/..."
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path

    // Intentar varios formatos de clave que Vite podría usar
    const possibleKeys = [
        `../../${normalizedPath}`,
        `../${normalizedPath}`,
        `./${normalizedPath}`,
        normalizedPath,
        `/${normalizedPath}`
    ]

    for (const key of possibleKeys) {
        if (allAssets[key]) {
            return allAssets[key] as string
        }
    }

    // Búsqueda robusta final: Si nada de lo anterior funcionó, buscar por sufijo
    // Esto previene errores ante cambios futuros en la profundidad de carpetas
    const foundKey = Object.keys(allAssets).find(key => 
        key.endsWith(normalizedPath) || normalizedPath.endsWith(key.replace(/^\.\.\/|^\.\/|^\//, ''))
    )

    if (foundKey) {
        return allAssets[foundKey] as string
    }

    // En desarrollo, mostrar logs para debugging si falló completamente
    if (import.meta.env.DEV) {
        console.warn(`[AssetUtils] ❌ Resolución fallida para: "${path}"`)
        console.debug(`[AssetUtils] Claves intentadas:`, possibleKeys)
        console.debug(`[AssetUtils] Total de claves disponibles: ${Object.keys(allAssets).length}`)
        if (Object.keys(allAssets).length > 0) {
            console.debug(`[AssetUtils] Primera clave disponible: "${Object.keys(allAssets)[0]}"`)
        }
    }

    // Fallback: retornar la ruta original si no se encontró
    return path
}
