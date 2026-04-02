/**
 * @fileoverview Barrel export para todas las utilidades del proyecto
 * 
 * Este archivo centraliza las exportaciones de todas las funciones utility,
 * permitiendo imports más limpios y centralizados:
 * 
 * @example
 * ```typescript
 * // Antes (ruta larga):
 * import { getAssetUrl } from '@/utils/assetUtils'
 * import { cleanPrice } from '@/utils/priceUtils'
 * 
 * // Después (desde este index):
 * import { getAssetUrl, cleanPrice } from '@/utils'
 * ```
 */

// Assets: Resolución dinámica de rutas de imágenes/fuentes
export { getAssetUrl } from './assetUtils'

// búsqueda: Normalización de texto para búsquedas sin acentos
export { normalizarTexto } from './searchUtils'

// Precios: Formateo y extracción de precios y unidades
export { cleanPrice, unitLabel } from './priceUtils'
