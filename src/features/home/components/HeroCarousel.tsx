import { useState, useEffect, useCallback, useRef } from 'react'
import { getAssetUrl } from '../../../utils/assetUtils'
import './HeroCarousel.css'

const banners = [
    { id: 1, image: 'assets/images/banners/offers/fruits_and_vegetables.png', alt: 'Ofertas en frutas y verduras' },
    { id: 2, image: 'assets/images/banners/offers/iphone.png', alt: 'Promociones en tecnología e iPhone' },
    { id: 3, image: 'assets/images/banners/offers/wine.png', alt: 'Selección premium de vinos' },
]

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            nextSlide()
        }
        if (isRightSwipe) {
            prevSlide()
        }
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [nextSlide])

    return (
        <section className="hero-carousel-section">
            <div 
                ref={containerRef}
                className="hero-carousel-container relative overflow-hidden rounded-[20px] bg-neutral-900 w-full mx-auto mt-0"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Banners Wrapper con las siguientes dimensiones 1920x700 */}
                <div
                    className="hero-slides-wrapper flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {banners.map((banner) => (
                        <div key={banner.id} className="banner w-full h-full flex-shrink-0">
                            <img
                                src={getAssetUrl(banner.image)}
                                alt={banner.alt}
                                className="w-full h-full object-cover"
                                onError={(e) => console.error('Error loading banner:', banner.image, e)}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Controls - Hidden on mobile and tablet */}
                <button
                    onClick={prevSlide}
                    className="hero-control-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 text-white rounded-full items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 lg:flex lg:opacity-100 hidden"
                    aria-label="Imagen anterior"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="hero-control-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 text-white rounded-full items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 lg:flex lg:opacity-100 hidden"
                    aria-label="Siguiente imagen"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators (Dots) - Hidden on mobile, visible on tablet and desktop */}
                <div className="hero-indicators absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 z-10 hidden md:flex">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125 w-6' : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroCarousel
