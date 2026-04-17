import { useState, useMemo } from 'react'
import { Product } from '../../../shared/types/product'
import { products } from '../../../data/products'
import { calculateDiscountPercentage, offersData } from '../../../data/offers'
import { categories } from '../../../data/categories'

interface OfferProduct extends Product {
    oldPrice: string
    discountPercentage: number
}

interface UseOfferFiltersReturn {
    offerProducts: OfferProduct[]
    filteredProducts: OfferProduct[]
    sortedProducts: OfferProduct[]
    selectedCategory: string
    onCategoryChange: (categoryId: string) => void
}

/**
 * Hook para gestionar la lógica de filtrado y ordenamiento de ofertas
 * Encapsula:
 * - Mapeo de offersData a productos con información de descuento
 * - Filtrado por categoría (manejando la conversión de subcategorías)
 * - Ordenamiento por descuento (mayor a menor)
 *
 * @returns Objeto con productos filtrados, estado de categoría seleccionada y callbacks
 */
export const useOfferFilters = (): UseOfferFiltersReturn => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    // Helper: Mapear categoría principal a sus subcategorías
    // Los productos usan subcategorías (frutas_y_verduras, bebidas, etc)
    // pero el filtro selecciona categorías principales (alimentos, electrodomesticos, etc)
    // Este helper convierte la categoría principal a su lista de subcategorías
    const getSubcategoriesForCategory = (categoryId: string): string[] => {
        const category = categories.find((cat) => cat.id === categoryId)
        if (!category) return []
        return category.subcategories.map((sub) => {
            // Las subcategorías están en el href como hash (#frutas_y_verduras)
            // Extraemos el nombre después del #
            const parts = sub.href.split('#')
            return parts[1] || ''
        })
    }

    // Obtener productos en oferta con información de descuento
    const offerProducts: OfferProduct[] = useMemo(() => {
        return offersData
            .map((off) => {
                const product = products.find((p) => p.id === off.id)
                return product
                    ? {
                        ...product,
                        oldPrice: off.oldPrice,
                        discountPercentage: calculateDiscountPercentage(product.precio, off.oldPrice),
                    }
                    : null
            })
            .filter((product): product is OfferProduct => product !== null)
    }, [])

    // Filtrar por categoría
    const filteredProducts: OfferProduct[] = useMemo(() => {
        if (selectedCategory === 'all') {
            return offerProducts
        }

        // Obtener todas las subcategorías de la categoría seleccionada
        const subcategories = getSubcategoriesForCategory(selectedCategory)

        // Filtrar productos cuya categoría esté en las subcategorías
        return offerProducts.filter((p) => subcategories.includes(p.categoria))
    }, [offerProducts, selectedCategory])

    // Ordenar por mayor descuento (por defecto, sin opción de cambiar)
    const sortedProducts: OfferProduct[] = useMemo(() => {
        return [...filteredProducts].sort((a, b) => b.discountPercentage - a.discountPercentage)
    }, [filteredProducts])

    return {
        offerProducts,
        filteredProducts,
        sortedProducts,
        selectedCategory,
        onCategoryChange: setSelectedCategory,
    }
}
