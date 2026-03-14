import ProductCard from './ProductCard'
import ProductCarousel from './ProductCarousel'
import { productos } from '../data/productos'

const featuredIds = [
    'tv_samsung_75',
    'nevera_lg_grande_moderna',
    'ventilador_daiwa',
    'sofa_cama_blanco',
    'carne_de_res_para_hamburguesas',
    'pollo_entero_don_pollo',
]

const FeaturedProducts = () => {
    const featuredProducts = productos.filter((p) => featuredIds.includes(p.id))

    return (
        <section className="productos-destacados bg-black/80 rounded-[20px] p-5 md:py-7.5 md:px-[56px] mx-auto mb-10 max-w-[1280px] xl:max-w-[calc(100vw-100px)] lg:max-w-[calc(100vw-86px)]" id="productos-destacados">
            <div className="container mx-auto">
                <h2 className="text-xl md:text-2xl text-white bg-black/70 px-4 py-2 rounded-xl mb-5 w-fit mx-auto text-center font-bold">
                    Productos Destacados
                </h2>

                <ProductCarousel idPrefix="productos-destacados">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ProductCarousel>
            </div>
        </section>
    )
}

export default FeaturedProducts
