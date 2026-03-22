import { useEffect, useMemo } from 'react'
import { useParams, useLocation, Navigate } from 'react-router-dom'
import { categories } from '../data/categories'
import { productos } from '../data/productos'
import {
    sectionSlugToProductCategoria,
    subcategorySlugFromHref,
} from '../data/categorySectionMap'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import Breadcrumb from '../shared/components/Breadcrumb'

const Category = () => {
    const { categoryId } = useParams()
    const location = useLocation()

    const category = useMemo(
        () => categories.find((c) => c.id === categoryId),
        [categoryId]
    )

    const hashSlug = location.hash.replace(/^#/, '')

    const breadcrumbItems = useMemo(() => {
        if (!category) return []
        const base = [
            { label: 'Inicio', to: '/' },
            { label: 'Categorías' },
            { label: category.name },
        ]
        if (!hashSlug) return base

        const sub = category.subcategories.find(
            (s) => subcategorySlugFromHref(s.href) === hashSlug
        )
        if (!sub) return base

        return [
            { label: 'Inicio', to: '/' },
            { label: 'Categorías' },
            { label: category.name, to: category.href },
            { label: sub.name },
        ]
    }, [category, hashSlug])

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

    return (
        <>
            <Breadcrumb variant="category" items={breadcrumbItems} />

            <div className="category-page-content w-full pb-6 pt-[5rem] md:pt-[5.25rem] xl:pt-[5.25rem]">
                {sectionsToRender.map(({ sub, slug, sectionProducts }, index) => (
                    <ProductCarouselSection
                        key={slug}
                        title={sub.name}
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
