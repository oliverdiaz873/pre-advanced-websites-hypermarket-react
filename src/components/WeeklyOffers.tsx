import ProductCard from './ProductCard'
import ProductCarousel from './ProductCarousel'
import { productos } from '../data/productos'

const offers = [
    { id: 'manzanas_verdes', oldPrice: 'RD$ 56.25' },
    { id: 'huevos_don_pancho', oldPrice: 'RD$ 222.22' },
    { id: 'freezer_7_pies', oldPrice: 'RD$ 19,411' },
    { id: 'celular_samsung_a26', oldPrice: 'RD$ 44,444' },
    { id: 'cilindro_de_gas_duragas', oldPrice: 'RD$ 6,117' },
    { id: 'coca_cola_zero', oldPrice: 'RD$ 84.21' },
]

const WeeklyOffers = () => {
    const offerProducts = offers.map((off) => {
        const product = productos.find((p) => p.id === off.id)
        return product ? { ...product, oldPrice: off.oldPrice } : null
    }).filter(p => p !== null) as any[]

    return (
        <section className="productos-destacados mt-12 md:mt-20 bg-black/80 rounded-[20px] p-5 md:py-7.5 md:px-[56px] mx-auto mb-10 max-w-[1280px] xl:max-w-[calc(100vw-100px)] lg:max-w-[calc(100vw-86px)]" id="ofertas">
            <div className="container mx-auto">
                <h2 className="text-xl md:text-2xl text-white bg-black/70 px-4 py-2 rounded-xl mb-5 w-fit mx-auto text-center font-bold">
                    Ofertas de la Semana
                </h2>

                <ProductCarousel idPrefix="ofertas">
                    {offerProducts.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            isOffer={true}
                            oldPrice={p.oldPrice}
                        />
                    ))}
                </ProductCarousel>
            </div>
        </section>
    )
}

export default WeeklyOffers
