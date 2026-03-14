import { useRef } from 'react'
import './ProductCarousel.css'

interface ProductCarouselProps {
    children: React.ReactNode
    idPrefix: string
}

const ProductCarousel = ({ children, idPrefix }: ProductCarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

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
            {/* Control Prev */}
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

            {/* Container */}
            <div
                ref={containerRef}
                className="productos-container flex w-full gap-4 md:gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
            >
                {children}
            </div>

            {/* Control Next */}
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
        </div>
    )
}

export default ProductCarousel
