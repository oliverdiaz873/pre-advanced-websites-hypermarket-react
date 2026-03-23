import { useEffect, useRef } from 'react'

// Menú multinivel por clic para tablets (768px - 1199px)
// Rango: Tablets estándar incluyendo iPad en modo retrato y landscape
// Cubre: iPad Mini (768-1024px), iPad Air (820-1180px), iPad Pro 11" (834-1194px)
// También cubre Surface Go (768-1366px), Samsung Galaxy Tab (800-1280px), Google Nest Hub (1024-1280px)
export const useTabletMenu = () => {
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        // Detectar si está en el rango de tablets
        const isTablet = () => {
            const width = window.innerWidth
            return width >= 768 && width <= 1199
        }

        if (!isTablet()) return

        console.log('Modo tablet detectado - Menú por clic activado')

        // Función para agregar "Ver todos los productos"
        const agregarVerTodosLosProductos = () => {
            if (!navRef.current) return

            // Nivel 3: Alimentos, Electrodomésticos, etc (dentro de Categorías)
            const nivel3Links = navRef.current.querySelectorAll('nav[aria-label="Menú principal"] > ul > li > ul > li.relative')

            nivel3Links.forEach((nivel3Link) => {
                const parentLi = nivel3Link as HTMLElement
                const submenu = parentLi.querySelector('ul')
                const link = parentLi.querySelector('a')
                const href = link?.getAttribute('href')

                if (submenu && href && href !== '#') {
                    if (submenu.querySelector('.ver-todos-btn')) return

                    const verTodosLi = document.createElement('li')
                    verTodosLi.className = 'ver-todos-btn'
                    verTodosLi.innerHTML = `
                        <a href="${href}" style="
                            border-top: 1px solid rgba(255,255,255,0.1); 
                            margin-top: 5px; 
                            padding-top: 8px; 
                            color: #ffcc00; 
                            font-weight: bold;
                            text-align: center;
                            display: block;
                            font-size: 14px;
                        ">
                            Ver todo en esta sección ▸
                        </a>
                    `
                    submenu.appendChild(verTodosLi)
                }
            })
        }

        // Manejar clics nivel 2 (Categorías)
        const manejarClicNivel2 = (e: Event) => {
            if (window.innerWidth > 1199) return

            const target = e.target as HTMLElement
            const link = target.closest('nav[aria-label="Menú principal"] > ul > li.relative > a')
            
            if (!link) return

            const parentLi = link.parentElement
            if (!parentLi) return

            const submenu = parentLi.querySelector('ul')
            if (!submenu) return

            e.preventDefault()
            e.stopPropagation()

            const isActive = submenu.classList.contains('tablet-active')

            // Cerrar todo
            if (navRef.current) {
                navRef.current.querySelectorAll('nav[aria-label="Menú principal"] ul').forEach(ul => {
                    ul.classList.remove('tablet-active')
                })
            }

            if (!isActive) {
                submenu.classList.add('tablet-active')
            }
        }

        // Manejar clics nivel 3 (Alimentos, etc)
        const manejarClicNivel3 = (e: Event) => {
            if (window.innerWidth > 1199) return

            const target = e.target as HTMLElement
            const link = target.closest('nav[aria-label="Menú principal"] > ul > li > ul > li.relative > a')
            
            if (!link) return

            const parentLi = link.parentElement
            if (!parentLi) return

            const submenu = parentLi.querySelector('ul')
            if (!submenu) return

            e.preventDefault()
            e.stopPropagation()

            const isActive = submenu.classList.contains('tablet-active')

            // Cerrar otros niveles 3 del mismo padre
            const parentUl = parentLi.parentElement
            if (parentUl) {
                parentUl.querySelectorAll('ul').forEach(ul => {
                    ul.classList.remove('tablet-active')
                })
            }

            if (!isActive) {
                submenu.classList.add('tablet-active')
            }
        }

        // Cerrar menús al hacer clic fuera
        const manejarClicFuera = (e: Event) => {
            const target = e.target as HTMLElement
            if (!target.closest('.nav-links') && navRef.current) {
                navRef.current.querySelectorAll('.nav-links ul').forEach(submenu => {
                    submenu.classList.remove('tablet-active')
                })
            }
        }

        // Manejar cambios de tamaño de ventana
        const manejarResize = () => {
            if (!isTablet() && navRef.current) {
                // Limpiar si ya no es tablet
                navRef.current.querySelectorAll('.nav-links ul').forEach(submenu => {
                    submenu.classList.remove('tablet-active')
                })
            }
        }

        // Inicializar
        agregarVerTodosLosProductos()

        // Agregar event listeners
        document.addEventListener('click', manejarClicNivel2)
        document.addEventListener('click', manejarClicNivel3)
        document.addEventListener('click', manejarClicFuera)
        window.addEventListener('resize', manejarResize)

        // Cleanup
        return () => {
            document.removeEventListener('click', manejarClicNivel2)
            document.removeEventListener('click', manejarClicNivel3)
            document.removeEventListener('click', manejarClicFuera)
            window.removeEventListener('resize', manejarResize)
        }
    }, [])

    return navRef
}
