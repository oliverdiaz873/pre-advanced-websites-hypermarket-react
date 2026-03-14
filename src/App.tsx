import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Icons from './components/Icons'

function App() {
    return (
        <Router>
            <Icons />
            <div className="min-h-screen bg-[#1e1e1e] text-white">
                <Header />

                {/* Spacer for fixed header */}
                <div className="h-[60px] xl:h-[85px]"></div>

                <main className="px-4 pt-0 pb-4 md:px-8 md:pt-0 md:pb-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:categoryId" element={<Category />} />
                        <Route path="/product/:productId" element={<ProductDetails />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}

export default App
