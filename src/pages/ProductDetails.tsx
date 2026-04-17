import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { productPageData } from '../data/productPageData'
import { categories } from '../data/categories'
import { Breadcrumb, SEOHead } from '../shared/components'
import ProductDetailSection from '../features/products/components/ProductDetailSection'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'
import { useTranslation } from 'react-i18next'
import { useProductTranslation } from '../features/products/hooks/useProductTranslation'

/**
 * Mapa de categoria del producto: { categoría principal, subcategoría }
 * para construir el breadcrumb correcto.
 */
// Eliminamos categoryBreadcrumbMap hardcodeado y usamos la data de categories.ts directamente

/**
 * ProductDetails — Pagina de detalle de producto individual.
 * 
 * Este componente es responsable de:
 * 1. Obtener el ID del producto desde la URL mediante react-router-dom.
 * 2. Buscar la información básica del producto en el catálogo central (productos.ts).
 * 3. Encontrar datos editoriales adicionales (descripciones ricas, specs) en productPageData.ts.
 * 4. Gestionar el SEO dinámico (meta tags, open graph y JSON-LD de tipo Product) usando SEOHead.
 * 5. Renderizar el breadcrumb dinámico basado en la categoría del producto.
 * 6. Mostrar el cuerpo del producto y una sección de productos similares.
 */
const ProductDetails = () => {
    const { productId } = useParams<{ productId: string }>()
    const { t } = useTranslation(['categories', 'common', 'header'])

    const product = products.find((p) => p.id === productId)
    const pageData = productId ? productPageData[productId] : undefined

    // Hook para traducciones del producto
    const { name, description, labels, t: productT } = useProductTranslation(product, pageData)

    // ── Preparamos datos SEO ──────────────────────────────────────────────────
    const seoDescription = description.replace(/<[^>]*>/g, '').slice(0, 160)
    const seoKeywords = productT('common:seo.keywords', { 
        name, 
        category: productT(`categories:sub.${product?.categoria}`, { defaultValue: product?.categoria || '' })
    })

    // ── Breadcrumb Dinámico ───────────────────────────────────────────────────
    const breadcrumbItems = (() => {
        if (!product) return [{ label: t('common:breadcrumb.home'), to: '/' }]

        // Buscamos a qué categoría pertenece el producto recorriendo las categorías estáticas
        const parentCategory = categories.find((cat) =>
            cat.subcategories.some((sub) => sub.href.includes(`#${product.categoria}`))
        )

        const subcategory = parentCategory?.subcategories.find((sub) =>
            sub.href.includes(`#${product.categoria}`)
        )

        const items = [
            { label: t('common:breadcrumb.home'), to: '/' },
            { label: t('common:breadcrumb.categories') },
        ]

        if (parentCategory) {
            items.push({
                label: t(`categories:${parentCategory.id}`),
                to: parentCategory.href
            })
        }

        if (subcategory) {
            items.push({
                label: t(`categories:sub.${product.categoria}`),
                to: subcategory.href
            })
        }

        items.push({ label: name })
        return items
    })()

    const similarProducts = product
        ? products.filter((p) => p.categoria === product.categoria && p.id !== product.id).slice(0, 8)
        : []

    if (!product) {
        return (
            <div className="text-white text-center py-20">{labels.notFound}</div>
        )
    }

    return (
        <>
            {/* ── Meta tags SEO dinámicas para el producto ── */}
            <SEOHead
                title={name}
                description={seoDescription}
                url={`/product/${product.id}`}
                keywords={seoKeywords}
                image={product.imagen}
                jsonLd={{
                    '@type': 'Product',
                    name: name,
                    image: product.imagen,
                    description: seoDescription,
                    sku: product.id,
                    brand: {
                        '@type': 'Brand',
                        name: t('header:brand'),
                    },
                    offers: {
                        '@type': 'Offer',
                        url: `https://www.hipermercadosuperior.com/product/${product.id}`,
                        priceCurrency: 'DOP',
                        price: product.precio,
                        itemCondition: 'https://schema.org/NewCondition',
                        availability: 'https://schema.org/InStock',
                    },
                }}
            />

            {/* Breadcrumb */}
            <Breadcrumb variant="category" items={breadcrumbItems} />

            {/* Main - contenedor para la vista de producto */}
            <main style={{ minHeight: '100vh', boxSizing: 'border-box' }}>

                {/* Sección del detalle del producto */}
                <div style={{ padding: '0 20px', maxWidth: '1280px', margin: '0 auto' }}>
                    <ProductDetailSection product={product} pageData={pageData} />
                </div>

                {/* Sección de productos similares */}
                {similarProducts.length > 0 && (
                    <ProductCarouselSection
                        title={labels.similarProducts}
                        products={similarProducts}
                        id="productos-similares"
                        idPrefix="similares"
                    />
                )}

            </main>
        </>
    )
}

export default ProductDetails
