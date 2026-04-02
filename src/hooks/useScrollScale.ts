import { CSSProperties, RefObject, useEffect, useState } from 'react'

interface ScrollScaleState {
    scaleClass: string
    scaleStyle?: CSSProperties
}

export const useScrollScale = (sectionRef: RefObject<HTMLElement | null>) => {
    const [scrollScale, setScrollScale] = useState<ScrollScaleState>({
        scaleClass: 'scale-0',
    })

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const isMobile = () => window.innerWidth <= 767.98

        const getDesktopScaleClass = (progress: number) => {
            if (progress >= 1) return 'scale-100'
            if (progress >= 0.66) return 'scale-66'
            if (progress >= 0.33) return 'scale-33'
            return 'scale-0'
        }

        const updateScale = () => {
            const rect = section.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const sectionTop = rect.top
            const sectionBottom = rect.bottom
            const sectionHeight = rect.height || 1
            const mobile = isMobile()

            let progress = 0

            if (sectionTop <= windowHeight && sectionBottom >= 0) {
                if (mobile) {
                    // En móvil comprimimos el rango de activación para que la expansión
                    // ocurra antes y se sienta más ágil con scroll corto.
                    const startPoint = windowHeight * 0.9
                    const endPoint = windowHeight * 0.35
                    progress = (startPoint - sectionTop) / Math.max(1, startPoint - endPoint)
                } else if (sectionTop >= 0) {
                    const visibleHeight = Math.min(sectionHeight, windowHeight - sectionTop)
                    progress = visibleHeight / sectionHeight
                } else {
                    progress = 1
                }
            } else if (sectionBottom < 0) {
                progress = 1
            }

            progress = Math.max(0, Math.min(1, progress))

            if (mobile) {
                // Aceleramos y suavizamos el progreso para evitar saltos bruscos
                // cuando el usuario hace scroll rápido en pantallas pequeñas.
                const acceleratedProgress = Math.min(1, progress * 1.35)
                const easedProgress = 1 - Math.pow(1 - acceleratedProgress, 3)
                const mobileScale = 0.88 + easedProgress * 0.12

                setScrollScale({
                    scaleClass: 'scale-100',
                    scaleStyle: {
                        transform: `scale(${mobileScale})`,
                        opacity: 0.82 + easedProgress * 0.18,
                    },
                })
                return
            }

            setScrollScale({
                scaleClass: getDesktopScaleClass(progress),
                scaleStyle: undefined,
            })
        }

        let frameId = 0
        const requestScaleUpdate = () => {
            if (frameId) return

            // requestAnimationFrame sincroniza la animación con el repintado
            // del navegador y mejora la fluidez frente a un throttle fijo.
            frameId = window.requestAnimationFrame(() => {
                frameId = 0
                updateScale()
            })
        }

        window.addEventListener('scroll', requestScaleUpdate, { passive: true })
        window.addEventListener('resize', requestScaleUpdate)

        updateScale()
        const timer = window.setTimeout(updateScale, 100)

        return () => {
            window.removeEventListener('scroll', requestScaleUpdate)
            window.removeEventListener('resize', requestScaleUpdate)
            window.clearTimeout(timer)

            if (frameId) {
                window.cancelAnimationFrame(frameId)
            }
        }
    }, [sectionRef])

    return scrollScale
}
