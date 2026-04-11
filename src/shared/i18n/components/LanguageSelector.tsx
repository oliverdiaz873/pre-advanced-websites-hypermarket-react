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
const LanguageSelector = () => {
  const { t, i18n } = useTranslation(['common']);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.resolvedLanguage) || languages[0];

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('common:select_language')}
      >
        <svg className="w-4 h-4 text-orange-400" fill="currentColor">
          <use href="#icon-world" />
        </svg>
        <span className="hidden sm:inline uppercase">{currentLanguage.code}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 origin-top-right bg-gray-900 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-[1100] overflow-hidden"
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
