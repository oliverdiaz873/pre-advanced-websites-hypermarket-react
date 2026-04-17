import { useTranslation } from 'react-i18next'
import { useCart } from '../features/cart/hooks/useCart'
import CartSummary from '../features/cart/components/CartSummary'
import CartItemsList from '../features/cart/components/CartItemsList'
import CartHeader from '../features/cart/components/CartHeader'
import EmptyCart from '../features/cart/components/EmptyCart'
import CartLayout from '../features/cart/components/CartLayout'
import { SEOHead } from '../shared/components'

const CartPage = () => {
    const { t } = useTranslation('common')
    const { cart, totalItems, removeFromCart, updateQuantity } = useCart()

    if (cart.length === 0) {
        return (
            <>
                <SEOHead 
                    title={t('cart.seo.empty_title')} 
                    description={t('cart.seo.empty_description')}
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
                title={t('cart.seo.title')} 
                description={t('cart.seo.description')}
                url="/cart"
                noIndex={true}
                jsonLd={{
                    '@type': 'WebPage',
                    name: t('cart.seo.jsonld_name'),
                    description: t('cart.seo.jsonld_description'),
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
