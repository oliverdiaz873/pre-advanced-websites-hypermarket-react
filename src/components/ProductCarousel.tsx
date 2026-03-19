/**
 * ProductCarousel - Motor técnico del carrusel.
 * Maneja únicamente la lógica de scroll, botones y layout del contenedor.
 * Es agnóstico al contenido (recibe children genéricos).
 * Diferencia con ProductCarouselSection: Este es solo el "mecanismo", 
 * mientras que la Section añade el título, fondo y mapeo de datos.
 */
import { useRef, useState, useEffect } from 'react'
import './ProductCarousel.css'

interface ProductCarouselProps {
    children: React.ReactNode
    idPrefix: string
}

const ProductCarousel = ({ children, idPrefix }: ProductCarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    // Estados para controlar la visibilidad de los botones
    const [showPrev, setShowPrev] = useState(false)
    const [showNext, setShowNext] = useState(true)

    // Función para verificar la posición del scroll y actualizar botones
    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
            // Mostrar "Prev" si hemos avanzado más allá del inicio (umbral de 30px por padding)
            setShowPrev(scrollLeft > 30) 
            // Mostrar "Next" si no hemos llegado al final (con un margen de error)
            setShowNext(scrollLeft + clientWidth < scrollWidth - 10)
        }
    }

    useEffect(() => {
        const container = containerRef.current
        if (container) {
            // Verificar estado inicial
            checkScroll()
            // Escuchar el evento de scroll
            container.addEventListener('scroll', checkScroll)
            // Escuchar cambios de tamaño de ventana por si cambia el ancho del carrusel
            window.addEventListener('resize', checkScroll)
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll)
            }
            window.removeEventListener('resize', checkScroll)
        }
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth * 0.8
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div className="productos-container-wrapper relative flex items-center justify-center">
            {/* Control Prev - Solo se muestra si showPrev es true */}
            {showPrev && (
                <button
                    onClick={() => scroll('left')}
                    className="productos-control-prev absolute left-[-44px] z-10 hidden md:flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/80 transition-all"
                    type="button"
                    id={`${idPrefix}-prev`}
                >
                    <svg
                        className="w-5 h-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                    <span className="sr-only">Anterior</span>
                </button>
            )}

            {/* Container */}
            <div
                ref={containerRef}
                className="productos-container flex w-full gap-4 md:gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
            >
                {children}
            </div>

            {/* Control Next - Solo se muestra si showNext es true */}
            {showNext && (
                <button
                    onClick={() => scroll('right')}
                    className="productos-control-next absolute right-[-44px] z-10 hidden md:flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/80 transition-all"
                    type="button"
                    id={`${idPrefix}-next`}
                >
                    <svg
                        className="w-5 h-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                    <span className="sr-only">Siguiente</span>
                </button>
            )}
        </div>
    )
}

export default ProductCarousel
