import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { productos } from '../../../data/productos'
import { hasSearchQuery, normalizarTexto } from '../../../shared/utils/searchUtils'

export interface HeaderSearchProduct {
    id: string
    nombre: string
    imagen: string
}

// Hook: comparte el estado, el filtrado y los handlers del buscador del
// header para que desktop, tablet y mobile reutilicen la misma logica
// sin duplicar el comportamiento de apertura, cierre y seleccion.
// IMPORTANTE: Busca en ambos idiomas (español e inglés) para encontrar
// productos sin importar el idioma de la interfaz.
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
