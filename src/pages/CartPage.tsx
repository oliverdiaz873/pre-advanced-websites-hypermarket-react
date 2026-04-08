import { useCart } from '../features/cart/hooks/useCart'
import CartSummary from '../features/cart/components/CartSummary'
import CartItemsList from '../features/cart/components/CartItemsList'
import CartHeader from '../features/cart/components/CartHeader'
import EmptyCart from '../features/cart/components/EmptyCart'
import CartLayout from '../features/cart/components/CartLayout'
import SEOHead from '../shared/components/SEOHead'

const CartPage = () => {
    const { cart, totalItems, removeFromCart, updateQuantity } = useCart()

    if (cart.length === 0) {
        return (
            <>
                <SEOHead 
                    title="Carrito Vacío" 
                    description="Tu carrito de compras en Hipermercado Superior está vacío. ¡Explora nuestras ofertas y llena tu carrito!"
                    url="/cart"
                    noIndex={true}
                />
                <EmptyCart />
            </>
        )
    }

    return (
        <>
            <SEOHead 
                title="Mi Carrito" 
                description="Revisa los productos en tu carrito de compras de Hipermercado Superior y completa tu pedido al mejor precio."
                url="/cart"
                noIndex={true}
                jsonLd={{
                    '@type': 'WebPage',
                    name: 'Mi Carrito - Hipermercado Superior',
                    description: 'Página del carrito de compras de Hipermercado Superior.',
                    url: 'https://www.hipermercadosuperior.com/cart',
                }}
            />
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
        </>
    )
}

export default CartPage
