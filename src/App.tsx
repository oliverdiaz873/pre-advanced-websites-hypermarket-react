import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './features/cart/CartContext'
import ScrollToTop from './shared/utils/ScrollToTop'
import Header from './features/layout/components/Header'
import Footer from './features/layout/components/Footer'
import Icons from './shared/components/Icons'

// Lazy load pages para mejor performance
const Home = lazy(() => import('./pages/Home'))
const Category = lazy(() => import('./pages/Category'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const CartPage = lazy(() => import('./pages/CartPage'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/legal/Privacy'))
const Terms = lazy(() => import('./pages/legal/Terms'))

// Loading fallback component
const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">
            <div className="h-12 w-12 border-4 border-gray-300 border-t-orange-500 rounded-full"></div>
        </div>
    </div>
)

function App() {
    return (
        <CartProvider>
            <Router>
                <ScrollToTop />
                <Icons />
                <div className="min-h-screen flex flex-col">
                    <Header />

                    {/* Spacer for fixed header */}
                    <div className="h-[60px] xl:h-[85px]"></div>

                    <main className="flex-1 pt-0 pb-4 md:pt-0 md:pb-8">
                        <Suspense fallback={<LoadingFallback />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/category/:categoryId" element={<Category />} />
                                <Route path="/product/:productId" element={<ProductDetails />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/legal/privacy" element={<Privacy />} />
                                <Route path="/legal/terms" element={<Terms />} />
                            </Routes>
                        </Suspense>
                    </main>

                    <Footer />
                </div>
            </Router>
        </CartProvider>
    )
}

export default App
