/**
 * Utility to resolve asset paths dynamically in a Vite/React environment.
 * Uses Vite's glob import to pre-load all possible asset URLs.
 */

// Basic glob that works for most Vite versions to get URLs
const allAssets = import.meta.glob('../assets/**/*', {
    eager: true,
    import: 'default'
})

export const getAssetUrl = (path: string) => {
    if (!path) return ''

    // Normalize path: "/assets/images/..." -> "assets/images/..."
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path

    // Try several possible key formats that Vite might use
    const possibleKeys = [
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

    // In dev mode, this log will help see why it's failing
    if (import.meta.env.DEV) {
        console.warn(`[AssetUtils] ❌ Resolution failed for: "${path}"`)
        console.debug(`[AssetUtils] Keys tried:`, possibleKeys)
        console.debug(`[AssetUtils] Total keys available: ${Object.keys(allAssets).length}`)
        if (Object.keys(allAssets).length > 0) {
            console.debug(`[AssetUtils] First 3 keys available:`, Object.keys(allAssets).slice(0, 3))
        }
    }

    // Fallback to original path
    return path
}
