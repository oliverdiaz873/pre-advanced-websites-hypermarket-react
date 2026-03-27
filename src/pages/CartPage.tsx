import { useCart } from '../hooks/useCart'
import CartSummary from '../features/cart/components/CartSummary'
import CartItemsList from '../features/cart/components/CartItemsList'
import CartHeader from '../features/cart/components/CartHeader'
import EmptyCart from '../features/cart/components/EmptyCart'
import CartLayout from '../features/cart/components/CartLayout'

const CartPage = () => {
    const { cart, totalItems, removeFromCart, updateQuantity } = useCart()

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <CartLayout>
            <CartHeader totalItems={totalItems} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lista de productos - ocupa 2/3 del espacio en desktop */}
                <div className="lg:col-span-2">
                    <CartItemsList 
                        cart={cart}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                    />
                </div>

                {/* Aside con resumen - ocupa 1/3 del espacio en desktop */}
                <div className="lg:col-span-1">
                    <CartSummary />
                </div>
            </div>
        </CartLayout>
    )
}

export default CartPage
