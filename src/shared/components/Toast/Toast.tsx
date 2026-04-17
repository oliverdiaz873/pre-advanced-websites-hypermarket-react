import { useEffect } from 'react'

interface ToastProps {
    message: string
    show: boolean
    onClose: () => void
    duration?: number
    type?: 'success' | 'error' | 'warning' | 'info'
}

const Toast = ({ 
    message, 
    show, 
    onClose, 
    duration = 4000, 
    type = 'success' 
}: ToastProps) => {
    useEffect(() => {
        if (show && duration > 0) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)

            return () => clearTimeout(timer)
        }
    }, [show, duration, onClose])

    const getToastStyles = () => {
        switch (type) {
            case 'error':
                return 'bg-red-600'
            case 'warning':
                return 'bg-yellow-600'
            case 'info':
                return 'bg-blue-600'
            case 'success':
            default:
                return 'bg-green-700'
        }
    }

    return (
        <div
            className={`fixed top-5 right-5 z-[99999] ${getToastStyles()} text-white px-5 py-3.5 rounded-md text-sm transition-all duration-300 transform shadow-lg ${
                show 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            style={{ 
                zIndex: 99999,
                position: 'fixed',
                top: '20px',
                right: '20px'
            }}
        >
            <div className="flex items-center justify-between gap-3">
                <span className="font-medium">{message}</span>
                {duration === 0 && (
                    <button
                        onClick={onClose}
                        className="ml-3 text-white/80 hover:text-white transition-colors font-bold"
                        aria-label="Cerrar notificación"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    )
}

export default Toast
