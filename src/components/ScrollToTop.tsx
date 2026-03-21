import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    // Escucha activamente a la ruta actual de la aplicación
    const { pathname } = useLocation()

    // Cada vez que la ruta (pathname) cambie, ejecuta un scroll forzado hacia la coordenada tope (X: 0, Y: 0)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop
