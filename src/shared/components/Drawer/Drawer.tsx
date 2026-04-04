import { useEffect, ReactNode } from 'react'
import './Drawer.css'

interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: ReactNode
    position?: 'left' | 'right'
}

/**
 * Drawer - Componente genérico de panel deslizable
 * 
 * Implementa una Estrategia de Renderizado Responsivo:
 * En pantallas pequeñas (móviles/tablets) actúa como el contenedor principal para 
 * componentes de filtrado o navegación, permitiendo una experiencia "App-like"
 * mientras libera espacio en la interfaz principal.
 * 
 * Proporciona una interfaz lateral que se desliza sobre el contenido principal.
 * Incluye bloqueo de scroll del body y cierre al hacer clic fuera (backdrop).
 */
const Drawer = ({ 
    isOpen, 
    onClose, 
    title, 
    children, 
    position = 'right' 
}: DrawerProps) => {
    
    // Bloquear scroll del body cuando el drawer está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            {/* Backdrop: Fondo oscurecido */}
            <div 
                className={`drawer-backdrop ${isOpen ? 'is-open' : ''}`} 
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel del Drawer */}
            <aside className={`drawer drawer--${position} ${isOpen ? 'is-open' : ''}`}>
                <div className="drawer__header">
                    <h2 className="drawer__title">{title}</h2>
                    <button 
                        className="drawer__close" 
                        onClick={onClose}
                        aria-label="Cerrar panel"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="drawer__content">
                    {children}
                </div>
            </aside>
        </>
    )
}

export default Drawer
