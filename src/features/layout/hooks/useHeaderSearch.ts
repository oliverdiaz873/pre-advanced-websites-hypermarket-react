import { useEffect, useRef, useState } from 'react'
import { productos } from '../../../data/productos'
import { normalizarTexto } from '../../../utils/searchUtils'

export interface HeaderSearchProduct {
    id: string
    nombre: string
    imagen: string
}

// Hook: comparte el estado, el filtrado y los handlers del buscador del
// header para que desktop, tablet y mobile reutilicen la misma logica
// sin duplicar el comportamiento de apertura, cierre y seleccion.
export const useHeaderSearch = (onResultSelect: (id: string) => void) => {
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
            .filter(
                (product) =>
                    normalizarTexto(product.nombre).includes(term) ||
                    normalizarTexto(product.categoria).includes(term)
            )
            .slice(0, 8)

        setSearchResults(filtered)
    }, [searchTerm])

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

    return {
        isSearchActive,
        searchInputRef,
        resultsRef,
        searchResults,
        searchTerm,
        setSearchTerm,
        handleResultClick,
        handleSearchToggle,
    }
}
