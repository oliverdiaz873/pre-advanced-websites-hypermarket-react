import { useEffect, useRef } from 'react'

// Hook: gestiona el comportamiento del menu en tablets entre 768px y 1199px.
// Abre submenus por clic, cierra al salir del nav y agrega accesos "Ver todo".
export const useTabletMenu = () => {
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const isTablet = () => {
            const width = window.innerWidth
            return width >= 768 && width <= 1199
        }

        const getDirectSubmenu = (element: Element | null) => {
            const sibling = element?.nextElementSibling
            return sibling instanceof HTMLUListElement ? sibling : null
        }

        const closeMenus = () => {
            nav.querySelectorAll('ul.tablet-active').forEach((submenu) => {
                submenu.classList.remove('tablet-active')
            })

            nav.querySelectorAll<HTMLElement>('[data-tablet-trigger]').forEach((trigger) => {
                if (trigger.tagName === 'BUTTON') {
                    trigger.setAttribute('aria-expanded', 'false')
                }
            })
        }

        const handleDocumentClick = (event: Event) => {
            if (!isTablet()) {
                return
            }

            const target = event.target as HTMLElement

            if (!nav.contains(target)) {
                closeMenus()
                return
            }

            const topLevelButton = target.closest('[data-tablet-trigger="level-1"]')
            if (topLevelButton && nav.contains(topLevelButton)) {
                const submenu = getDirectSubmenu(topLevelButton)
                if (!submenu) return

                event.preventDefault()
                event.stopPropagation()

                const isOpen = submenu.classList.contains('tablet-active')
                closeMenus()

                if (!isOpen) {
                    submenu.classList.add('tablet-active')
                    topLevelButton.setAttribute('aria-expanded', 'true')
                }
                return
            }

            const nestedLink = target.closest('[data-tablet-trigger="level-2"]')
            if (nestedLink && nav.contains(nestedLink)) {
                const parentLi = nestedLink.parentElement
                const submenu = getDirectSubmenu(nestedLink)
                if (!submenu) return

                event.preventDefault()
                event.stopPropagation()

                const isOpen = submenu.classList.contains('tablet-active')
                const siblings = parentLi?.parentElement?.querySelectorAll(':scope > li > ul.tablet-active')

                siblings?.forEach((menu) => {
                    if (menu !== submenu) {
                        menu.classList.remove('tablet-active')
                    }
                })

                if (isOpen) {
                    submenu.classList.remove('tablet-active')
                } else {
                    submenu.classList.add('tablet-active')
                }
            }
        }

        const handleResize = () => {
            if (!isTablet()) {
                closeMenus()
            }
        }

        document.addEventListener('click', handleDocumentClick)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return navRef
}
