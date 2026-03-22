import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Si hay un hash en la URL (ej: #cocina), NO hacemos scroll al top.
        // El hash navigation se maneja en el componente destino.
        if (!hash) {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

export default ScrollToTop
