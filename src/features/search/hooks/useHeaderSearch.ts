import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { productos } from '../../../data/productos'
import { hasSearchQuery, normalizarTexto } from '../../../shared/utils/searchUtils'

/**
 * Interfaz que representa un producto en los resultados de búsqueda del header.
 * 
 * @interface HeaderSearchProduct
 * @property {string} id - Identificador único del producto (ej: 'manzana_verde')
 * @property {string} nombre - Nombre del producto en idioma base (español)
 * @property {string} imagen - Ruta a la imagen del producto
 */
export interface HeaderSearchProduct {
    id: string
    nombre: string
    imagen: string
}

/**
 * Hook personalizado para gestionar la lógica de búsqueda del header.
 * 
 * Comparte estado, filtrado y handlers para que los componentes DesktopSearch,
 * TabletSearch y MobileSearch reutilicen la misma lógica sin duplicar código.
 * 
 * CARACTERÍSTICAS:
 * - Búsqueda bilingüe: busca en español e inglés simultáneamente
 * - Filtrado en tiempo real: actualiza resultados mientras escribes
 * - Cierre automático: detecta clicks fuera del dropdown
 * - Normalización: ignora acentos y mayúsculas en búsquedas
 * - Límite de resultados: máximo 8 productos por búsqueda
 * 
 * FLUJO DE USO:
 * 1. Usuario escribe en input → onSearchChange actualiza searchTerm
 * 2. useEffect filtra productos en ES e EN
 * 3. Click en resultado → handleResultClick navega a producto
 * 4. Enter o botón submit → handleSearchSubmit navega a página de resultados
 * 
 * @hook
 * @param {Function} onResultSelect - Callback cuando usuario selecciona un producto individual
 * @param {Function} onSearchSubmit - Callback cuando usuario ejecuta búsqueda general
 * @returns {Object} Estado y handlers del buscador
 */
export const useHeaderSearch = (
    onResultSelect: (id: string) => void,
    onSearchSubmit: (term: string) => void
) => {
    const { t } = useTranslation('products')
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState<HeaderSearchProduct[]>([])
    const searchInputRef = useRef<HTMLInputElement>(null)
    const resultsRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([])
            return
        }

        const term = normalizarTexto(searchTerm)
        const filtered = productos
            .filter((product) => {
                // Buscar en nombre español
                const nombreSpanish = normalizarTexto(product.nombre)
                if (nombreSpanish.includes(term)) return true

                // Buscar en nombre inglés (traducción)
                const nombreEnglish = normalizarTexto(t(`${product.id}.name`, { defaultValue: product.nombre }))
                if (nombreEnglish.includes(term)) return true

                // Buscar en categoría
                if (normalizarTexto(product.categoria).includes(term)) return true

                return false
            })
            .slice(0, 8)

        setSearchResults(filtered)
    }, [searchTerm, t])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
                setSearchResults([])
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSearchToggle = () => {
        setIsSearchActive((current) => {
            const next = !current

            if (next) {
                setTimeout(() => searchInputRef.current?.focus(), 100)
            } else {
                setSearchTerm('')
                setSearchResults([])
            }

            return next
        })
    }

    const handleResultClick = (id: string) => {
        setSearchTerm('')
        setSearchResults([])
        setIsSearchActive(false)
        onResultSelect(id)
    }

    const handleSearchSubmit = () => {
        if (!isSearchActive) {
            setIsSearchActive(true)
            setTimeout(() => searchInputRef.current?.focus(), 100)
            return
        }

        if (!hasSearchQuery(searchTerm)) {
            setIsSearchActive(false)
            setSearchTerm('')
            setSearchResults([])
            return
        }

        const nextTerm = searchTerm.trim()
        setSearchTerm('')
        setSearchResults([])
        setIsSearchActive(false)
        onSearchSubmit(nextTerm)
    }

    return {
        isSearchActive,
        searchInputRef,
        resultsRef,
        searchResults,
        searchTerm,
        setSearchTerm,
        handleResultClick,
        handleSearchSubmit,
        handleSearchToggle,
    }
}
