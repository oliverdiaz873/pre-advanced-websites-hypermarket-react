import { useState, FormEvent, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

interface FormData {
    nombre: string
    email: string
    telefono: string
    mensaje: string
}

interface FormErrors {
    nombre?: string
    email?: string
    telefono?: string
    mensaje?: string
}

interface UseFormValidationReturn {
    formData: FormData
    errors: FormErrors
    isSubmitting: boolean
    handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSubmit: (e: FormEvent) => Promise<void>
    resetForm: () => void
}

// Validación detallada (Usando traducciones i18n para proveer los mensajes de error)
const validateField = (name: string, value: string, t: TFunction): string => {
    const trimmedValue = value.trim()
    
    switch (name) {
        case 'nombre':
            if (!trimmedValue) return t('contact:validation.name.required')
            if (trimmedValue.length < 2 || trimmedValue.length > 50) return t('contact:validation.name.length')
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmedValue)) return t('contact:validation.name.format')
            break
        case 'email':
            if (!trimmedValue) return t('contact:validation.email.required')
            if (trimmedValue.length > 254) return t('contact:validation.email.format')
            // Regex de grado profesional: Valida caracteres especiales permitidos, estructura de puntos y asegura un TLD alfabético de 2+ caracteres
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailRegex.test(trimmedValue)) return t('contact:validation.email.format')
            break;
        case 'telefono':
            if (trimmedValue) {
                const cleanPhone = trimmedValue.replace(/[\s-()]/g, '')
                if (!/^[0-9]{8,15}$/.test(cleanPhone)) return t('contact:validation.phone.format')
            }
            break
        case 'mensaje':
            if (!trimmedValue) return t('contact:validation.message.required')
            if (trimmedValue.length < 10 || trimmedValue.length > 500) return t('contact:validation.message.length')
            break
    }
    return ''
}

export const useFormValidation = (onSubmit?: (data: FormData) => Promise<void>): UseFormValidationReturn => {
    const { t } = useTranslation('contact')
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    })
    
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Validar en tiempo real
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        // Validar en tiempo real con la traducción
        const error = validateField(name, value, t)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        // Validar todos los campos con la traducción
        const newErrors: FormErrors = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof FormData], t)
            if (error) {
                newErrors[key as keyof FormErrors] = error
            }
        })
        
        setErrors(newErrors)
        
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true)
            
            try {
                // Ejecutar callback personalizado o simulación por defecto
                if (onSubmit) {
                    await onSubmit(formData)
                } else {
                    // Simular envío del formulario
                    await new Promise(resolve => setTimeout(resolve, 1500))
                }
            } finally {
                setIsSubmitting(false)
            }
        } else {
            // Los mensajes de error inline ya indican qué corregir
            // Se podría hacer scroll al primer campo inválido para mejor UX
            // const firstInvalid = document.querySelector('.invalid-value')
            // if (firstInvalid) firstInvalid.focus()
        }
    }

    const resetForm = () => {
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        })
        setErrors({})
        setIsSubmitting(false)
    }

    return {
        formData,
        errors,
        isSubmitting,
        handleInputChange,
        handleSubmit,
        resetForm
    }
}
