import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/assetUtils'

const CartPage = () => {
    const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart()

    if (cart.length === 0) {
        return (
            <section className="bg-black/80 rounded-[20px] p-8 mx-auto mb-10 max-w-[800px] text-white text-center">
                <h2 className="text-2xl font-bold mb-6">Tu Carrito está vacío</h2>
                <p className="mb-8">¡Explora nuestros productos y llena tu carrito!</p>
                <Link to="/" className="bg-[#ffcc00] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#ff9900] transition-colors inline-block">
                    Volver a la Tienda
                </Link>
            </section>
        )
    }

    return (
        <section className="bg-black/80 rounded-[20px] p-8 mx-auto mb-10 max-w-[1000px] text-white px-4 md:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center bg-black/70 py-2 rounded-xl">Tu Carrito ({totalItems})</h2>

            <div className="space-y-4 mb-8">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <img src={getAssetUrl(item.img)} alt={item.nombre} className="w-20 h-20 object-contain bg-white rounded-lg p-1" />

                        <div className="flex-1">
                            <h3 className="font-semibold">{item.nombre}</h3>
                            <p className="text-yellow-500">${item.precio}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{item.cantidad}</span>
                            <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>

                        <div className="text-right min-w-[100px]">
                            <p className="font-bold">${item.precio * item.cantidad}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-xs hover:underline mt-1"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-gray-400">Total a pagar:</p>
                    <p className="text-3xl font-bold text-yellow-500">${totalPrice.toLocaleString()}</p>
                </div>

                <button className="bg-green-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-green-700 transition-colors w-full md:w-fit text-lg shadow-lg">
                    Finalizar Compra
                </button>
            </div>
        </section>
    )
}

export default CartPage
