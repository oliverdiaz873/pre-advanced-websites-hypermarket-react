import { useTranslation } from 'react-i18next'
import { useFormValidation } from '../hooks/useFormValidation'
import './ContactForm.css'

interface ContactFormProps {
    onSubmit?: () => Promise<void>
    onSuccess?: () => void
}

const ContactForm = ({ onSubmit, onSuccess }: ContactFormProps) => {
    const { t } = useTranslation('contact')
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
            <h1>{t('form.title')}</h1>

            <div className="input-box mb-5 md:mb-6">
                <label htmlFor="nombre">{t('form.labels.name')}</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder={t('form.placeholders.name')}
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
                <label htmlFor="email">{t('form.labels.email')}</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('form.placeholders.email')}
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
                <label htmlFor="telefono">{t('form.labels.phone')}</label>
                <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    placeholder={t('form.placeholders.phone')}
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
                <label htmlFor="mensaje">{t('form.labels.message')}</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    placeholder={t('form.placeholders.message')}
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
                {isSubmitting ? t('form.buttons.submitting') : t('form.buttons.submit')}
            </button>
        </form>
    )
}

export default ContactForm
