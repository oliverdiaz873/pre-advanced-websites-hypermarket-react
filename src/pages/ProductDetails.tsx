import { useParams } from 'react-router-dom'
import { productos } from '../data/productos'
import { useCart } from '../hooks/useCart'
import { getAssetUrl } from '../utils/assetUtils'

const ProductDetails = () => {
    const { productId } = useParams()
    const { addToCart } = useCart()

    const product = productos.find((p) => p.id === productId)

    if (!product) {
        return (
            <div className="text-white text-center py-20">Producto no encontrado</div>
        )
    }

    return (
        <section className="bg-black/80 rounded-[20px] p-8 mx-auto mb-10 max-w-[1000px] text-white px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 bg-white rounded-xl p-8 flex items-center justify-center">
                    <img src={getAssetUrl(product.imagen)} alt={product.nombre} className="max-h-[400px] object-contain" />
                </div>

                <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{product.nombre}</h2>
                    <p className="text-xl text-yellow-500 font-semibold mb-6">{product.precioTexto}</p>

                    <div className="border-t border-white/10 pt-6 mb-8">
                        <p className="text-gray-300 leading-relaxed">
                            Disfruta de la mejor calidad con nuestro {product.nombre}.
                            En Hipermercado Superior nos esforzamos por ofrecerte siempre lo mejor de la categoría {product.categoria}.
                        </p>
                    </div>

                    <button
                        onClick={() => addToCart({
                            id: product.id,
                            nombre: product.nombre,
                            precio: product.precio,
                            img: product.imagen,
                            url: product.url
                        })}
                        className="bg-[#ffcc00] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#ff9900] transition-colors w-full md:w-fit"
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
