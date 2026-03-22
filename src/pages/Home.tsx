import HeroCarousel from '../features/home/components/HeroCarousel'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import AboutUs from '../features/home/components/AboutUs'
import { productos } from '../data/productos'

const featuredIds = [
    'tv_samsung_75',
    'nevera_lg_grande_moderna',
    'ventilador_daiwa',
    'sofa_cama_blanco',
    'carne_de_res_para_hamburguesas',
    'pollo_entero_don_pollo',
    'atun_dimar',
]

const offersData = [
    { id: 'manzanas_verdes', oldPrice: 'RD$ 56.25' },
    { id: 'huevos_don_pancho', oldPrice: 'RD$ 222.22' },
    { id: 'freezer_7_pies', oldPrice: 'RD$ 19,411' },
    { id: 'celular_samsung_a26', oldPrice: 'RD$ 44,444' },
    { id: 'cilindro_de_gas_duragas', oldPrice: 'RD$ 6,117' },
    { id: 'coca_cola_zero', oldPrice: 'RD$ 84.21' },
    { id: 'limones_persa', oldPrice: 'RD$ 250.00' },
]

const Home = () => {
    const featuredProducts = productos.filter((p) => featuredIds.includes(p.id))

    const offerProducts = offersData.map((off) => {
        const product = productos.find((p) => p.id === off.id)
        return product ? { ...product, oldPrice: off.oldPrice } : null
    }).filter(p => p !== null) as any[]

    return (
        <>
            <HeroCarousel />
            
            <ProductCarouselSection 
                title="Productos Destacados"
                products={featuredProducts}
                id="productos-destacados"
                idPrefix="featured"
            />

            <ProductCarouselSection 
                title="Ofertas de la Semana"
                products={offerProducts}
                id="ofertas"
                idPrefix="offers"
                isOffer={true}
                className="mt-12 md:mt-20"
            />

            <AboutUs />
        </>
    )
}

export default Home
