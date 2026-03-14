import logoWithBg from '../assets/images/logo/logo_with_background.jpeg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className="about-us-section scale-100 w-[calc(100vw-40px)] max-w-full mx-auto mt-10 mb-6 md:mt-9 md:mb-10 bg-black text-white py-5 rounded-[20px] overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 px-5 py-4 md:px-8">
                <img
                    src={logoWithBg}
                    alt="Logo del Hipermercado Superior"
                    className="w-[250px] md:w-[350px] lg:w-[450px] h-auto rounded-[15px] shrink-0"
                    loading="lazy"
                />
                <div className="max-w-[600px] text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Nosotros</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        En <strong>Hipermercado Superior</strong> trabajamos para ofrecerte
                        calidad, variedad y precios justos. Nuestro compromiso es brindarte la
                        mejor experiencia de compra tanto en tienda física como online.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
