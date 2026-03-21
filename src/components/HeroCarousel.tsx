import { useState, useEffect, useCallback } from 'react'
import { getAssetUrl } from '../utils/assetUtils'
import './HeroCarousel.css'

const banners = [
    { id: 1, image: 'assets/images/banners/offers/fruits_and_vegetables.png', alt: 'Ofertas en frutas y verduras' },
    { id: 2, image: 'assets/images/banners/offers/iphone.png', alt: 'Promociones en tecnología e iPhone' },
    { id: 3, image: 'assets/images/banners/offers/wine.png', alt: 'Selección premium de vinos' },
]

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [nextSlide])

    return (
        <section className="hero-carousel-section">
            <div className="hero-carousel-container relative overflow-hidden rounded-[20px] bg-neutral-900 w-full mx-auto mt-0">
                {/* Banners Wrapper con las siguientes dimensiones 1920x750 */}
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

                {/* Navigation Controls */}
                <button
                    onClick={prevSlide}
                    className="hero-control-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"
                    aria-label="Imagen anterior"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="hero-control-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"
                    aria-label="Siguiente imagen"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators (Dots) */}
                <div className="hero-indicators absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
