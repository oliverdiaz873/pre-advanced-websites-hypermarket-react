const Contact = () => {
    return (
        <section className="bg-black/80 rounded-[20px] p-8 mx-auto mb-10 max-w-[800px] text-white px-4 md:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center bg-black/70 py-2 rounded-xl">Contacto</h2>

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-yellow-500">Información</h3>
                    <p className="mb-6 leading-relaxed text-gray-300">
                        ¿Tienes alguna duda o sugerencia? Estamos aquí para ayudarte.
                        Contáctanos a través de cualquiera de nuestros canales.
                    </p>

                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-500">📍</span> Av. Siempre Viva 742
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-500">📞</span> +1 (809) 555-0123
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-500">✉️</span> info@hipermercadosuperior.com
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-yellow-500">⏰</span> Lun - Sáb: 8:00 AM - 10:00 PM
                        </li>
                    </ul>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nombre</label>
                        <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:bg-white/20 outline-none" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Correo</label>
                        <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:bg-white/20 outline-none" placeholder="tu@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mensaje</label>
                        <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:bg-white/20 outline-none h-32" placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <button className="bg-[#ffcc00] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#ff9900] transition-colors w-full">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
