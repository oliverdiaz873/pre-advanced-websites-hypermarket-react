import { useParams } from 'react-router-dom'
import { productos } from '../data/productos'
import ProductCard from '../features/products/components/ProductCard'

const Category = () => {
    const { categoryId } = useParams()

    const categoryProducts = productos.filter(
        (p) => p.categoria.toLowerCase() === categoryId?.toLowerCase()
    )

    const categoryName = categoryId
        ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace('_', ' ')
        : 'Categoría'

    return (
        <section className="bg-black/80 rounded-[20px] p-5 md:py-7.5 md:px-[56px] mx-auto mb-10 max-w-[1280px] min-h-[500px] px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-xl md:text-2xl text-white bg-black/70 px-4 py-2 rounded-xl mb-8 w-fit mx-auto text-center font-bold">
                    {categoryName}
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {categoryProducts.length > 0 ? (
                        categoryProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-white text-center py-20">No se encontraron productos en esta categoría.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Category
