import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './shared/utils/ScrollToTop'
import Header from './features/layout/components/Header'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import Contact from './pages/Contact'
import Privacy from './pages/legal/Privacy'
import Terms from './pages/legal/Terms'
import Footer from './features/layout/components/Footer'
import Icons from './shared/components/Icons'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Icons />
            <div className="min-h-screen">
                <Header />

                {/* Spacer for fixed header */}
                <div className="h-[60px] xl:h-[85px]"></div>

                <main className="pt-0 pb-4 md:pt-0 md:pb-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:categoryId" element={<Category />} />
                        <Route path="/product/:productId" element={<ProductDetails />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/legal/privacy" element={<Privacy />} />
                        <Route path="/legal/terms" element={<Terms />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}

export default App
