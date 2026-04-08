import HeroCarousel from '../features/home/components/HeroCarousel'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import AboutUs from '../features/home/components/AboutUs'
import SEOHead from '../shared/components/SEOHead'
import { productos } from '../data/productos'
import { Product } from '../shared/types/product'
import { calculateDiscountPercentage, offersData } from '../data/offers'

type OfferProduct = Product & {
    oldPrice: string
    discountPercentage: number
}

const featuredIds = [
    'tv_samsung_75',
    'nevera_lg_grande_moderna',
    'ventilador_daiwa',
    'sofa_cama_blanco',
    'carne_de_res_para_hamburguesas',
    'pollo_entero_don_pollo',
    'atun_dimar',
]

const Home = () => {
    const featuredProducts = productos.filter((p) => featuredIds.includes(p.id))

    const offerProducts: OfferProduct[] = offersData
        .map((off) => {
            const product = productos.find((p) => p.id === off.id)
            return product
                ? {
                    ...product,
                    oldPrice: off.oldPrice,
                    discountPercentage: calculateDiscountPercentage(product.precio, off.oldPrice),
                }
                : null
        })
        .filter((product): product is OfferProduct => product !== null)

    return (
        <>
            {/* ── Meta tags SEO para la página principal ── */}
            <SEOHead
                title="Compras inteligentes y productos de calidad"
                description="Hipermercado Superior: tu destino para compras inteligentes. Encuentra la mejor selección de alimentos, electrónica, hogar y más con ofertas exclusivas y precios imbatibles."
                url="/"
                keywords="hipermercado, compras online, supermercado, ofertas, productos frescos, calidad, ahorro, electrodomésticos, alimentos"
                jsonLd={{
                    '@type': 'Organization',
                    name: 'Hipermercado Superior',
                    url: 'https://www.hipermercadosuperior.com',
                    logo: 'https://www.hipermercadosuperior.com/assets/images/logo/logo.png',
                    description: 'Tu destino para compras inteligentes con la mejor selección de productos de calidad.',
                    contactPoint: {
                        '@type': 'ContactPoint',
                        contactType: 'customer service',
                        availableLanguage: 'Spanish',
                    },
                    sameAs: [],
                }}
            />

            <HeroCarousel />
            
            <ProductCarouselSection 
                title="Ofertas de la Semana"
                products={offerProducts}
                id="ofertas"
                idPrefix="offers"
                isOffer={true}
            />

            <ProductCarouselSection 
                title="Productos Destacados"
                products={featuredProducts}
                id="productos-destacados"
                idPrefix="featured"
                className="mt-6 md:mt-8"
            />

            <AboutUs />
        </>
    )
}

export default Home
