import HeroCarousel from '../features/home/components/HeroCarousel'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import AboutUs from '../features/home/components/AboutUs'
import SEOHead from '../shared/components/SEOHead'
import { useTranslation } from 'react-i18next'
import { productos } from '../data/productos'
import { Product } from '../shared/types/product'
import { calculateDiscountPercentage, offersData } from '../data/offers'

type OfferProduct = Product & {
    oldPrice: string
    discountPercentage: number
}

const featuredIds = [
    'televisor_samsung_75_pulgadas',
    'nevera_lg',
    'ventilador_daiwa',
    'sofa_cama_blanco',
    'carne_de_res_para_hamburguesas',
    'pollo_entero_don_pollo',
    'atun_dimar',
]

const Home = () => {
    const { t } = useTranslation(['home'])
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
                title={t('home:seo.title')}
                description={t('home:seo.description')}
                url="/"
                keywords={t('home:seo.keywords')}
                jsonLd={{
                    '@type': 'Organization',
                    name: 'Hipermercado Superior',
                    url: 'https://www.hipermercadosuperior.com',
                    logo: 'https://www.hipermercadosuperior.com/assets/images/logo/logo.png',
                    description: t('home:seo.description'),
                    contactPoint: {
                        '@type': 'ContactPoint',
                        contactType: 'customer service',
                        availableLanguage: ['Spanish', 'English'],
                    },
                    sameAs: [],
                }}
            />

            <HeroCarousel />
            
            <ProductCarouselSection 
                title={t('home:sections.offers')}
                products={offerProducts}
                id="ofertas"
                idPrefix="offers"
                isOffer={true}
            />

            <ProductCarouselSection 
                title={t('home:sections.featured')}
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
