import { useFormValidation } from '../../hooks/useFormValidation'
import './ContactForm.css'

interface ContactFormProps {
    onSubmit?: () => Promise<void>
    onSuccess?: () => void
}

const ContactForm = ({ onSubmit, onSuccess }: ContactFormProps) => {
    const { formData, errors, isSubmitting, handleInputChange, handleSubmit, resetForm } = useFormValidation(async () => {
        // Simular envío del formulario
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Ejecutar callback personalizado
        if (onSubmit) {
            await onSubmit()
        }
        
        // Ejecutar callback de éxito
        if (onSuccess) {
            onSuccess()
        }
        
        // Resetear formulario
        resetForm()
    })

    return (
        <form onSubmit={handleSubmit} className="contacto-form" noValidate>
            <h1>Contacto</h1>

            <div className="input-box mb-5 md:mb-6">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Escribe tu nombre aquí..."
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`w-full ${
                        errors.nombre 
                            ? 'invalid-value' 
                            : ''
                    }`}
                    required
                />
                {errors.nombre && (
                    <div className="error-message text-red-400 text-sm mt-1 ml-2 min-h-[16px]">
                        {errors.nombre}
                    </div>
                )}
            </div>
            
            <div className="input-box mb-5 md:mb-6">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full ${
                        errors.email 
                            ? 'invalid-value' 
                            : ''
                    }`}
                    required
                />
                {errors.email && (
                    <div className="error-message text-red-400 text-sm mt-1 ml-2 min-h-[16px]">
                        {errors.email}
                    </div>
                )}
            </div>
            
            <div className="input-box mb-5 md:mb-6">
                <label htmlFor="telefono">Teléfono (Opcional)</label>
                <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    placeholder="Escribe tu teléfono aquí..."
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`w-full ${
                        errors.telefono 
                            ? 'invalid-value' 
                            : ''
                    }`}
                />
                {errors.telefono && (
                    <div className="error-message text-red-400 text-sm mt-1 ml-2 min-h-[16px]">
                        {errors.telefono}
                    </div>
                )}
            </div>

            <div className="input-box mb-5 md:mb-6">
                <label htmlFor="mensaje">Tu Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className={`w-full ${
                        errors.mensaje 
                            ? 'invalid-value' 
                            : ''
                    }`}
                    required
                />
                {errors.mensaje && (
                    <div className="error-message text-red-400 text-sm mt-1 ml-2 min-h-[16px]">
                        {errors.mensaje}
                    </div>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    )
}

export default ContactForm
