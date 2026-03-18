// Un hook es una función especial de React que maneja lógica reutilizable en componentes.
// Scroll-Driven Scale Animation progresiva para sección Sobre Nosotros.
import { useEffect, useState, RefObject } from 'react';

export const useScrollScale = (sectionRef: RefObject<HTMLElement | null>) => {
    const [scaleClass, setScaleClass] = useState('scale-0'); // Initial small state

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const isMobile = () => window.innerWidth <= 767.98;

        const updateScale = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            const sectionHeight = rect.height || 1; // Avoid division by zero

            let progress = 0;

            // Check if section is in viewport
            if (sectionTop <= windowHeight && sectionBottom >= 0) {
                if (isMobile()) {
                    progress = 1 - (sectionTop / windowHeight);
                } else {
                    if (sectionTop >= 0) {
                        const visibleHeight = Math.min(sectionHeight, windowHeight - sectionTop);
                        progress = visibleHeight / sectionHeight;
                    } else {
                        progress = 1;
                    }
                }
            } else if (sectionBottom < 0) {
                progress = 1; // Already scrolled past
            }

            progress = Math.max(0, Math.min(1, progress));

            if (isMobile()) {
                if (progress >= 0.65) setScaleClass('scale-100');
                else if (progress >= 0.25) setScaleClass('scale-50');
                else setScaleClass('scale-0');
            } else {
                if (progress >= 1) setScaleClass('scale-100');
                else if (progress >= 0.66) setScaleClass('scale-66');
                else if (progress >= 0.33) setScaleClass('scale-33');
                else setScaleClass('scale-0');
            }
        };

        window.addEventListener('scroll', updateScale, { passive: true });
        window.addEventListener('resize', updateScale);

        // Immediate check on mount and after a short delay to ensure layout is ready
        updateScale();
        const timer = setTimeout(updateScale, 100);

        return () => {
            window.removeEventListener('scroll', updateScale);
            window.removeEventListener('resize', updateScale);
            clearTimeout(timer);
        };
    }, [sectionRef]);

    return scaleClass;
};
