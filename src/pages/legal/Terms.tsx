import LegalLayout from '../../features/layout/components/LegalLayout'
import SEOHead from '../../shared/components/SEOHead'
import { useTranslation } from 'react-i18next'

const Terms = () => {
    const { t } = useTranslation(['legal', 'header'])

    return (
        <>
            {/* ── Meta tags SEO para los términos de uso ── */}
            <SEOHead
                title={t('legal:terms.seo.title')}
                description={t('legal:terms.seo.description')}
                url="/legal/terms"
                keywords={t('legal:terms.seo.keywords')}
                jsonLd={{
                    '@type': 'WebPage',
                    name: `${t('legal:terms.title')} - ${t('header:brand')}`,
                    description: t('legal:terms.seo.json_ld_desc'),
                    url: 'https://www.hipermercadosuperior.com/legal/terms',
                    dateModified: '2026-03-21',
                    publisher: {
                        '@type': 'Organization',
                        name: t('header:brand'),
                    },
                }}
            />

            <LegalLayout title={t('legal:terms.title')} date={t('legal:terms.date')}>
                <p>{t('legal:terms.intro')}</p>

                <h2>{t('legal:terms.sections.1.title')}</h2>
                <p>{t('legal:terms.sections.1.content')}</p>

                <h2>{t('legal:terms.sections.2.title')}</h2>
                <p>{t('legal:terms.sections.2.content')}</p>

                <h2>{t('legal:terms.sections.3.title')}</h2>
                <p>{t('legal:terms.sections.3.content')}</p>

                <h2>{t('legal:terms.sections.4.title')}</h2>
                <p>{t('legal:terms.sections.4.content')}</p>

                <h2>{t('legal:terms.sections.5.title')}</h2>
                <p>{t('legal:terms.sections.5.content')}</p>

                <h2>{t('legal:terms.sections.6.title')}</h2>
                <p>{t('legal:terms.sections.6.content')}</p>

                <h2>{t('legal:terms.sections.7.title')}</h2>
                <p>{t('legal:terms.sections.7.content')}</p>

                <h2>{t('legal:terms.sections.8.title')}</h2>
                <p>
                    {t('legal:terms.sections.8.content')}{' '}
                    <strong>{t('legal:terms.sections.8.email')}</strong>.
                </p>
            </LegalLayout>
        </>
    )
}

export default Terms
