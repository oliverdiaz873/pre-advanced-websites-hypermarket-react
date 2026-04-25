import { useRef } from 'react'

import { useTranslation } from 'react-i18next'
import './AboutUs.css'
import { useScrollScale } from '../hooks/useScrollScale'

const AboutUs = () => {
    const { t } = useTranslation(['home'])
    const sectionRef = useRef<HTMLElement>(null)
    const { scaleClass, scaleStyle } = useScrollScale(sectionRef)

    return (
        <section 
            ref={sectionRef}
            className={`about-us-section ${scaleClass} transition-all duration-700 w-[calc(100vw-40px)] max-w-full mx-auto mt-10 mb-6 md:mt-9 md:mb-10 bg-black text-white py-5 rounded-[20px] overflow-hidden`}
            style={scaleStyle}
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 px-5 py-4 md:px-8">
                <img
                    src="/assets/images/logo/logo_with_background.jpeg"
                    alt={t('home:about_us.logo_alt')}
                    className="w-[250px] md:w-[350px] lg:w-[450px] h-auto rounded-[15px] shrink-0"
                    loading="lazy"
                />
                <div className="max-w-[600px] text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t('home:about_us.title')}</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        {t('home:about_us.description')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
