import { useState } from 'react'
import Toast from '../shared/components/Toast'
import ContactForm from '../features/contact/components/ContactForm'
import SEOHead from '../shared/components/SEOHead'

const Contact = () => {
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    // Función para mostrar toast (Usando el componente Toast)
    const showSuccessToast = () => {
        setToastMessage('✓ ¡Mensaje enviado con éxito!')
        setShowToast(true)
    }

    return (
        <>
            {/* ── Meta tags SEO para la página de contacto ── */}
            <SEOHead
                title="Contacto"
                description="Contáctanos en Hipermercado Superior. Estamos disponibles por correo, teléfono o formulario de contacto. Atención de lunes a domingo, 8:00 AM – 10:00 PM."
                url="/contact"
                keywords="contacto hipermercado, atención al cliente, soporte, teléfono supermercado, correo hipermercado"
                jsonLd={{
                    '@type': 'ContactPage',
                    name: 'Contacto - Hipermercado Superior',
                    description: 'Página de contacto de Hipermercado Superior.',
                    url: 'https://www.hipermercadosuperior.com/contact',
                    mainEntity: {
                        '@type': 'Organization',
                        name: 'Hipermercado Superior',
                        email: 'soporte@hipermercadosuperior.com',
                        telephone: '+1-809-555-5555',
                        openingHours: 'Mo-Su 08:00-22:00',
                        contactPoint: {
                            '@type': 'ContactPoint',
                            contactType: 'customer service',
                            telephone: '+1-809-555-5555',
                            email: 'soporte@hipermercadosuperior.com',
                            availableLanguage: 'Spanish',
                        },
                    },
                }}
            />

            <section id="contacto" className="w-full px-4 py-1 md:py-1 lg:py-1 flex justify-center">
                <main className="contacto-container w-full max-w-[550px] md:max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] mx-auto my-3 md:my-10 lg:my-5 p-5 md:p-8 lg:p-9 xl:p-10 rounded-lg bg-black/80 border border-white/20 text-white">
                    <ContactForm onSuccess={showSuccessToast} />

                    <section className="contacto-info mt-5 md:mt-5">
                        <h2 className="text-xl md:text-2xl text-center mb-6 md:mb-8 pt-4 md:pt-6">Otros medios de contacto:</h2>
                        <div className="info-item text-center mb-4">
                            <p><strong>Correo:</strong> soporte@hipermercadosuperior.com</p>
                        </div>
                        <div className="info-item text-center mb-4">
                            <p><strong>Teléfono:</strong> +1 (809) 555-5555</p>
                        </div>
                        <div className="info-item text-center mb-4">
                            <p><strong>Horario:</strong> Lunes a Domingo, 8:00 AM – 10:00 PM</p>
                        </div>
                    </section>
                </main>
            </section>

            {/* Toast Notification */}
            <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
                type="success"
            />
        </>
    )
}

export default Contact
