/**
 * SEOHead — Componente reutilizable para gestionar meta tags SEO por página.
 *
 * Utiliza react-helmet-async para inyectar dinámicamente las etiquetas
 * <title>, meta description, Open Graph, Twitter Cards y JSON-LD (Schema.org)
 * en el <head> del documento, según la página activa.
 *
 * Uso básico:
 *   <SEOHead
 *     title="Resultados de Búsqueda"
 *     description="Encuentra rápidamente los productos que buscas."
 *     url="/search"
 *   />
 *
 * Uso con JSON-LD (datos estructurados):
 *   <SEOHead
 *     title="Ofertas"
 *     description="Las mejores ofertas..."
 *     url="/offers"
 *     jsonLd={{
 *       '@type': 'OfferCatalog',
 *       name: 'Ofertas de la semana',
 *       ...
 *     }}
 *   />
 */

import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

/* ── Constantes del sitio ─────────────────────────────────────────── */
/* ── Constantes del sitio ─────────────────────────────────────────── */
const BASE_URL = 'https://www.hipermercadosuperior.com'
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/logo/logo.png`
const THEME_COLOR = '#ef4444'
const AUTHOR = 'Oliver Antonio Díaz'
const TWITTER_SITE = '@hipermercadosuperior'

/* ── Tipos ────────────────────────────────────────────────────────── */

/** Datos de la imagen para Open Graph / Twitter */
interface SEOImage {
    /** URL de la imagen (absoluta o relativa) */
    url: string
    /** Texto alternativo descriptivo de la imagen */
    alt?: string
    /** Ancho en píxeles (recomendado: 1200) */
    width?: number
    /** Alto en píxeles (recomendado: 630) */
    height?: number
}

/** Props del componente SEOHead */
interface SEOHeadProps {
    /** Título de la página (se le agrega " | Hipermercado Superior" al final) */
    title: string
    /** Meta description para motores de búsqueda (máx. ~160 caracteres recomendado) */
    description: string
    /** Ruta relativa de la página, ej: "/search" */
    url?: string
    /** Imagen para Open Graph / Twitter Cards */
    image?: SEOImage | string
    /** Tipo Open Graph (por defecto "website") */
    type?: string
    /** Si es true, se usa noindex, nofollow en vez de index, follow */
    noIndex?: boolean
    /** Palabras clave para la meta tag keywords */
    keywords?: string
    /**
     * Datos estructurados JSON-LD (Schema.org).
     * Pasar el objeto sin @context, se agrega automáticamente.
     * Ejemplo: { '@type': 'Organization', name: '...' }
     */
    jsonLd?: Record<string, unknown>
}

const SEOHead = ({
    title,
    description,
    url = '',
    image,
    type = 'website',
    noIndex = false,
    keywords,
    jsonLd,
}: SEOHeadProps) => {
    const { t, i18n } = useTranslation(['header', 'footer'])
    const siteName = t('header:brand')
    const currentLocale = i18n.language === 'es' ? 'es_ES' : 'en_US'

    /* ── Título completo con el nombre del sitio ────────────────── */
    const fullTitle = `${title} | ${siteName}`

    /* ── URL canónica completa ──────────────────────────────────── */
    const canonicalUrl = `${BASE_URL}${url}`

    /* ── Normalizar la imagen (acepta string o SEOImage) ────────── */
    const imageData: SEOImage =
        typeof image === 'string'
            ? { url: image }
            : image ?? { url: DEFAULT_IMAGE }

    const absoluteImageUrl = imageData.url.startsWith('http')
        ? imageData.url
        : `${BASE_URL}${imageData.url}`

    const imageAlt = imageData.alt ?? t('home:about_us.logo_alt')
    const imageWidth = imageData.width ?? 1200
    const imageHeight = imageData.height ?? 630

    /* ── JSON-LD con @context automático ────────────────────────── */
    const jsonLdScript = jsonLd
        ? JSON.stringify({ '@context': 'https://schema.org', ...jsonLd })
        : null

    return (
        <Helmet>
            {/* ── Meta etiquetas básicas ─────────────────────────── */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={AUTHOR} />
            <meta
                name="robots"
                content={noIndex ? 'noindex, nofollow' : 'index, follow'}
            />
            <meta name="copyright" content={`${AUTHOR}. ${t('footer:rights_reserved')}`} />
            <meta name="theme-color" content={THEME_COLOR} />

            {/* ── Enlace canónico ────────────────────────────────── */}
            <link rel="canonical" href={canonicalUrl} />

            {/* ── Open Graph (Facebook, LinkedIn, WhatsApp, etc.) ── */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={absoluteImageUrl} />
            <meta property="og:image:alt" content={imageAlt} />
            <meta property="og:image:width" content={String(imageWidth)} />
            <meta property="og:image:height" content={String(imageHeight)} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={currentLocale} />

            {/* ── Twitter Cards ──────────────────────────────────── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={TWITTER_SITE} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImageUrl} />
            <meta name="twitter:image:alt" content={imageAlt} />

            {/* ── JSON-LD datos estructurados (Schema.org) ───────── */}
            {jsonLdScript && (
                <script type="application/ld+json">{jsonLdScript}</script>
            )}
        </Helmet>
    )
}

export default SEOHead
