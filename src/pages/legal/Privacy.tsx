import LegalLayout from '../../features/layout/components/LegalLayout'
import SEOHead from '../../shared/components/SEOHead'
import { useTranslation } from 'react-i18next'

const Privacy = () => {
    const { t } = useTranslation(['legal'])

    return (
        <>
            {/* ── Meta tags SEO para la política de privacidad ── */}
            <SEOHead
                title={t('legal:privacy.seo.title')}
                description={t('legal:privacy.seo.description')}
                url="/legal/privacy"
                keywords={t('legal:privacy.seo.keywords')}
                jsonLd={{
                    '@type': 'WebPage',
                    name: `${t('legal:privacy.title')} - Hipermercado Superior`,
                    description: t('legal:privacy.seo.json_ld_desc'),
                    url: 'https://www.hipermercadosuperior.com/legal/privacy',
                    dateModified: '2026-03-21',
                    publisher: {
                        '@type': 'Organization',
                        name: 'Hipermercado Superior',
                    },
                }}
            />

            <LegalLayout title={t('legal:privacy.title')} date={t('legal:privacy.date')}>
                <p>{t('legal:privacy.intro')}</p>

                <h2>{t('legal:privacy.sections.1.title')}</h2>
                <p>{t('legal:privacy.sections.1.content')}</p>

                <h2>{t('legal:privacy.sections.2.title')}</h2>
                <p>{t('legal:privacy.sections.2.content')}</p>

                <h2>{t('legal:privacy.sections.3.title')}</h2>
                <p>{t('legal:privacy.sections.3.content')}</p>

                <h2>{t('legal:privacy.sections.4.title')}</h2>
                <p>{t('legal:privacy.sections.4.content')}</p>

                <h2>{t('legal:privacy.sections.5.title')}</h2>
                <p>{t('legal:privacy.sections.5.content')}</p>

                <h2>{t('legal:privacy.sections.6.title')}</h2>
                <p>
                    {t('legal:privacy.sections.6.content')}{' '}
                    <strong>soporte@hipermercado.com</strong>.
                </p>
            </LegalLayout>
        </>
    )
}

export default Privacy
