import HeroCarousel from '../features/home/components/HeroCarousel'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import AboutUs from '../features/home/components/AboutUs'
import { Product, productos } from '../data/productos'
import { offersData } from '../data/offers'

type OfferProduct = Product & {
    oldPrice: string
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
            return product ? { ...product, oldPrice: off.oldPrice } : null
        })
        .filter((product): product is OfferProduct => product !== null)

    return (
        <>
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
