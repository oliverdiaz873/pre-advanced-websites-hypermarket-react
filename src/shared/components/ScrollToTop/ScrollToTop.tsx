import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Componente: ScrollToTop
 * Función: Gestiona el comportamiento del scroll de la aplicación de forma global.
 * 1. Al navegar a una ruta nueva sin hash (páginas de nivel 2 como categorías), asegura que la página comience desde arriba.
 * 2. Si la URL contiene un hash (nivel 3: #seccion), busca el elemento y realiza un scroll 
 *    suave posicionándolo en el centro del viewport para una mejor visibilidad (especialmente en móvil).
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // Caso A: Navegación simple (sin hash) -> Scroll al tope superior
        if (!hash) {
            window.scrollTo(0, 0)
        } else {
            // Caso B: Navegación con hash -> Scroll centrado en el elemento destino
            const id = hash.replace('#', '')
            
            // Usamos un pequeño delay para asegurar que el contenido lazy-loaded esté renderizado
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })
                }
            }, 150)

            return () => clearTimeout(timeoutId)
        }
    }, [pathname, hash])

    return null
}

export default ScrollToTop
