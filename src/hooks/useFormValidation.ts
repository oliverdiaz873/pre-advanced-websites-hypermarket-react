import { useState, FormEvent, ChangeEvent } from 'react'

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

// Validación detallada (Usando estados de React en lugar de clases CSS)
const validateField = (name: string, value: string): string => {
    const trimmedValue = value.trim()
    
    switch (name) {
        case 'nombre':
            if (!trimmedValue) return 'El nombre es obligatorio.'
            if (trimmedValue.length < 2 || trimmedValue.length > 50) return 'El nombre debe tener entre 2 y 50 caracteres.'
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmedValue)) return 'El nombre solo puede contener letras y espacios.'
            break
        case 'email':
            if (!trimmedValue) return 'El correo es obligatorio.'
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return 'El formato del correo no es válido.'
            break
        case 'telefono':
            if (trimmedValue) {
                const cleanPhone = trimmedValue.replace(/[\s\-\(\)]/g, '')
                if (!/^[0-9]{8,15}$/.test(cleanPhone)) return 'El formato del teléfono no es válido. Use 8-15 dígitos (ej: 8095555555 o (809) 555-5555).'
            }
            break
        case 'mensaje':
            if (!trimmedValue) return 'El mensaje es obligatorio.'
            if (trimmedValue.length < 10 || trimmedValue.length > 500) return 'El mensaje debe tener entre 10 y 500 caracteres.'
            break
    }
    return ''
}

export const useFormValidation = (onSubmit?: (data: FormData) => Promise<void>): UseFormValidationReturn => {
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
        
        // Validar en tiempo real
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        // Validar todos los campos
        const newErrors: FormErrors = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof FormData])
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
