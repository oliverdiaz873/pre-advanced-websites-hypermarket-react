import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'es', name: 'Español', nativeName: 'Español' },
  { code: 'en', name: 'English', nativeName: 'English' },
];

/**
 * LanguageSelector - Architect Level Component
 * 
 * Un selector de idiomas profesional que soporta:
 * - Lazy loading de traducciones (vía i18next-http-backend)
 * - Accesibilidad (WAI-ARIA)
 * - UX sofisticada con transiciones sutiles
 * - Diseño responsive y escalable
 */
interface LanguageSelectorProps {
  /**
   * Determina el estilo visual del selector:
   * - 'dropdown': Ideal para el Header (Desktop). Muestra un botón con menú desplegable.
   * - 'inline': Ideal para el MobileNav. Muestra botones horizontales ES | EN.
   * @default 'dropdown'
   */
  variant?: 'dropdown' | 'inline';
}

/**
 * LanguageSelector - Componente de Arquitectura de Nivel Superior
 * 
 * Este componente orquesta todo el sistema de cambio de idioma de la interfaz del hipermercado.
 * Implementa un patrón de diseño flexible que permite su reutilización en diferentes contextos
 * del layout (Header vs Sidebar) manteniendo una lógica de negocio centralizada.
 * 
 * Funcionalidades clave:
 * - Detección automática del idioma activo (via i18n.resolvedLanguage).
 * - Cambio instantáneo de locale sin recarga de página.
 * - Accesibilidad completa (WAI-ARIA) para lectores de pantalla.
 * - UX optimizada con detector de clics externos para el cierre del menú.
 * - Soporte para dos variantes visuales: Dropdown (Escritorio) e Inline (Móvil).
 */
const LanguageSelector = ({ variant = 'dropdown' }: LanguageSelectorProps) => {
  const { t, i18n } = useTranslation(['common']);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Idioma actualmente activo, detectado por el motor i18next.
   * Si no se resuelve ninguno, se toma el primero definido (Español).
   */
  const currentLanguage = languages.find(lang => lang.code === i18n.resolvedLanguage) || languages[0];

  /**
   * Hook para cerrar el menú desplegable si el usuario hace clic en cualquier 
   * otra parte de la pantalla (Click-Outside Pattern).
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Orquesta el cambio de idioma global.
   * @param lng Código ISO del idioma (e.g., 'es', 'en')
   */
  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
    setIsOpen(false);
  };

  /**
   * Renderizado de la Variante Inline (Móvil)
   * Diseñada para ser incrustada directamente en listas o menús laterales.
   */
  if (variant === 'inline') {
    return (
      <div className="mobile-lang-list">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`mobile-lang-btn ${i18n.resolvedLanguage === lang.code ? 'is-active' : ''}`}
            aria-label={t(`common:switch_to_${lang.code}`)}
          >
            {lang.code.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  /**
   * Renderizado de la Variante Dropdown (Desktop)
   * Tradicional menú flotante con iconos y transiciones.
   */
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* El botón disparador también pertenece a este componente */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('common:select_language')}
      >
        <svg className="w-4 h-4 text-white shrink-0" fill="currentColor">
          <use href="#icon-world" />
        </svg>
        <span className="uppercase">{currentLanguage.code}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu Overlay */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 origin-top-right bg-gray-900 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-[1100] overflow-hidden animate-in fade-in zoom-in duration-200"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm transition-colors duration-200 ${
                  i18n.resolvedLanguage === lang.code 
                    ? 'bg-orange-500/10 text-orange-400 font-semibold' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                role="menuitem"
              >
                <span>{lang.nativeName}</span>
                {i18n.resolvedLanguage === lang.code && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
