import './CartItemsList.css'
import CartItem from './CartItem'

/**
 * CartItemsList - Componente de Lista de Items del Carrito
 * 
 * Renderiza la lista de productos usando el componente CartItem.
 * Actúa como un contenedor que mapea los datos del carrito
 * a componentes individuales reutilizables.
 */
interface CartItem {
    id: string
    nombre: string
    precio: number
    cantidad: number
    img: string
}

interface CartItemsListProps {
    cart: CartItem[]
    updateQuantity: (id: string, change: number) => void
    removeFromCart: (id: string) => void
}

const CartItemsList = ({ cart, updateQuantity, removeFromCart }: CartItemsListProps) => {
    return (
        <div className="cart-items-list">
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    cantidad={item.cantidad}
                    img={item.img}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
            ))}
        </div>
    )
}

export default CartItemsList
