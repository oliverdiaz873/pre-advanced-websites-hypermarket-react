import { useEffect, useMemo } from 'react'
import { useParams, useLocation, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { categories } from '../data/categories'
import { productos } from '../data/productos'
import {
    sectionSlugToProductCategoria,
    subcategorySlugFromHref,
} from '../data/categorySectionMap'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import Breadcrumb from '../shared/components/Breadcrumb'
import SEOHead from '../shared/components/SEOHead'

const Category = () => {
    const { categoryId } = useParams()
    const location = useLocation()
    const { t } = useTranslation(['categories', 'common'])

    const category = useMemo(
        () => categories.find((c) => c.id === categoryId),
        [categoryId]
    )

    const hashSlug = location.hash.replace(/^#/, '')

    const breadcrumbItems = useMemo(() => {
        if (!category) return []
        const base = [
            { label: t('common:breadcrumb.home'), to: '/' },
            { label: t('common:breadcrumb.categories') },
            { label: t(`categories:${category.id}`) },
        ]
        if (!hashSlug) return base

        const sub = category.subcategories.find(
            (s) => subcategorySlugFromHref(s.href) === hashSlug
        )
        if (!sub) return base

        return [
            { label: t('common:breadcrumb.home'), to: '/' },
            { label: t('common:breadcrumb.categories') },
            { label: t(`categories:${category.id}`), to: category.href },
            { label: t(`categories:sub.${hashSlug}`) },
        ]
    }, [category, hashSlug, t])

    const sectionsToRender = useMemo(() => {
        if (!category) return []
        return category.subcategories
            .map((sub) => {
                const slug = subcategorySlugFromHref(sub.href)
                const productCategoria = sectionSlugToProductCategoria(slug)
                const sectionProducts = productos.filter(
                    (p) => p.categoria === productCategoria
                )
                return { sub, slug, sectionProducts }
            })
            .filter((row) => row.sectionProducts.length > 0)
    }, [category])

    useEffect(() => {
        if (!hashSlug) return
        const t = window.setTimeout(() => {
            const el = document.getElementById(hashSlug)
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        return () => window.clearTimeout(t)
    }, [categoryId, hashSlug, location.key])

    if (!categoryId || !category) {
        return <Navigate to="/" replace />
    }

    /* ── Datos SEO dinámicos según la categoría ──────────────────── */
    const translatedCategoryName = t(`categories:${category.id}`)
    const translatedSubcategoryNames = category.subcategories
        .map((s) => {
            const slug = subcategorySlugFromHref(s.href)
            return t(`categories:sub.${slug}`)
        })
        .join(', ')

    const seoTitle = translatedCategoryName
    const seoDescription = `Explora nuestra selección de ${translatedCategoryName} en Hipermercado Superior: ${translatedSubcategoryNames}. Los mejores productos al mejor precio.`
    const seoKeywords = `${translatedCategoryName.toLowerCase()}, ${translatedSubcategoryNames.toLowerCase()}, hipermercado, compras online`

    return (
        <>
            {/* ── Meta tags SEO dinámicas para la categoría ── */}
            <SEOHead
                title={seoTitle}
                description={seoDescription}
                url={`/category/${category.id}`}
                keywords={seoKeywords}
                jsonLd={{
                    '@type': 'CollectionPage',
                    name: `${translatedCategoryName} - Hipermercado Superior`,
                    description: seoDescription,
                    url: `https://www.hipermercadosuperior.com/category/${category.id}`,
                    mainEntity: {
                        '@type': 'ItemList',
                        name: translatedCategoryName,
                        numberOfItems: sectionsToRender.reduce((acc, s) => acc + s.sectionProducts.length, 0),
                        itemListElement: category.subcategories.map((sub, i) => ({
                            '@type': 'ListItem',
                            position: i + 1,
                            name: t(`categories:sub.${subcategorySlugFromHref(sub.href)}`),
                        })),
                    },
                    provider: {
                        '@type': 'Organization',
                        name: 'Hipermercado Superior',
                    },
                }}
            />

            <Breadcrumb variant="category" items={breadcrumbItems} />

            <div className="category-page-content w-full pb-6 pt-[5rem] md:pt-[5.25rem] xl:pt-[5.25rem]">
                {sectionsToRender.map(({ sub, slug, sectionProducts }, index) => (
                    // Reusing ProductCarouselSection component to display each subcategory
                    // with translated titles and filtered products from the current category
                    <ProductCarouselSection
                        key={slug}
                        title={t(`categories:sub.${slug}`)}
                        products={sectionProducts}
                        id={slug}
                        idPrefix={slug.replace(/[^a-z0-9]+/gi, '_')}
                        className={
                            index === 0
                                ? 'category-page-first-carousel'
                                : ''
                        }
                    />
                ))}
            </div>
        </>
    )
}

export default Category
