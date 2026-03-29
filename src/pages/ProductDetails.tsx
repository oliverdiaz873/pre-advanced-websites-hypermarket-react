import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../data/productos'
import { productPageData } from '../data/productPageData'
import { categories } from '../data/categories'
import Breadcrumb from '../shared/components/Breadcrumb'
import ProductDetailSection from '../features/products/components/ProductDetailSection'
import ProductCarouselSection from '../features/products/components/ProductCarouselSection'

/**
 * Mapa de categoria del producto → { categoría principal, subcategoría }
 * para construir el breadcrumb correcto.
 */
const categoryBreadcrumbMap: Record<string, { categoryId: string; subHref: string; subLabel: string }> = {
    // Alimentos
    bebidas:                  { categoryId: 'alimentos', subHref: '/category/alimentos#bebidas',                  subLabel: 'Bebidas' },
    carnes_pescados_mariscos: { categoryId: 'alimentos', subHref: '/category/alimentos#carnes_pescados_mariscos', subLabel: 'Carnes, Pescados y Mariscos' },
    despensa:                 { categoryId: 'alimentos', subHref: '/category/alimentos#despensa',                 subLabel: 'Despensa' },
    enlatados:                { categoryId: 'alimentos', subHref: '/category/alimentos#enlatados',                subLabel: 'Enlatados' },
    frutas_y_verduras:        { categoryId: 'alimentos', subHref: '/category/alimentos#frutas_y_verduras',        subLabel: 'Frutas y Verduras' },
    lacteos_y_huevos:         { categoryId: 'alimentos', subHref: '/category/alimentos#lacteos_y_huevos',         subLabel: 'Lácteos y Huevos' },
    // Electrodomésticos
    cocina:                   { categoryId: 'electrodomesticos', subHref: '/category/electrodomesticos#cocina',    subLabel: 'Cocina' },
    lavado:                   { categoryId: 'electrodomesticos', subHref: '/category/electrodomesticos#lavado',    subLabel: 'Lavado' },
    climatizacion:            { categoryId: 'electrodomesticos', subHref: '/category/electrodomesticos#climatizacion', subLabel: 'Climatización' },
    // Tecnología
    televisores:              { categoryId: 'tecnologia', subHref: '/category/tecnologia#televisores', subLabel: 'Televisores' },
    laptops:                  { categoryId: 'tecnologia', subHref: '/category/tecnologia#laptops',    subLabel: 'Laptops' },
    tablets:                  { categoryId: 'tecnologia', subHref: '/category/tecnologia#tablets',    subLabel: 'Tablets' },
    celulares:                { categoryId: 'tecnologia', subHref: '/category/tecnologia#celulares',  subLabel: 'Celulares' },
    bocinas:                  { categoryId: 'tecnologia', subHref: '/category/tecnologia#bocinas',    subLabel: 'Bocinas' },
    // Ropa
    pantalones_para_hombres:  { categoryId: 'ropa', subHref: '/category/ropa#pantalones_para_hombres', subLabel: 'Pantalones para Hombres' },
    pantalones_para_mujeres:  { categoryId: 'ropa', subHref: '/category/ropa#pantalones_para_mujeres', subLabel: 'Pantalones para Mujeres' },
    pantalones_para_ninos:    { categoryId: 'ropa', subHref: '/category/ropa#pantalones_para_ninos',   subLabel: 'Pantalones para Niños' },
    trajes_para_hombres:      { categoryId: 'ropa', subHref: '/category/ropa#trajes_para_hombres',     subLabel: 'Trajes para Hombres' },
    vestidos:                 { categoryId: 'ropa', subHref: '/category/ropa#vestidos',                subLabel: 'Vestidos' },
    // Muebles y Decoración
    sofas:                    { categoryId: 'muebles_y_decoracion', subHref: '/category/muebles_y_decoracion#sofas',     subLabel: 'Sofás' },
    sillones:                 { categoryId: 'muebles_y_decoracion', subHref: '/category/muebles_y_decoracion#sillones',  subLabel: 'Sillones' },
    mesas:                    { categoryId: 'muebles_y_decoracion', subHref: '/category/muebles_y_decoracion#mesas',     subLabel: 'Mesas' },
    floreros:                 { categoryId: 'muebles_y_decoracion', subHref: '/category/muebles_y_decoracion#floreros',  subLabel: 'Floreros' },
    // Farmacia
    analgesicos:              { categoryId: 'farmacia', subHref: '/category/farmacia#analgesicos',          subLabel: 'Analgésicos' },
    dermocosmetica:           { categoryId: 'farmacia', subHref: '/category/farmacia#dermocosmetica',       subLabel: 'Dermocosmética' },
    vitaminas_y_minerales:    { categoryId: 'farmacia', subHref: '/category/farmacia#vitaminas_y_minerales', subLabel: 'Vitaminas y Minerales' },
    antigripales_y_resfriado: { categoryId: 'farmacia', subHref: '/category/farmacia#antigripales_y_resfriado', subLabel: 'Antigripales' },
    // Ferretería
    herramientas_manuales:    { categoryId: 'ferreteria', subHref: '/category/ferreteria#herramientas_manuales', subLabel: 'Herramientas Manuales' },
    pinturas_y_acabados:      { categoryId: 'ferreteria', subHref: '/category/ferreteria#pinturas_y_acabados',   subLabel: 'Pinturas y Acabados' },
    electricidad:             { categoryId: 'ferreteria', subHref: '/category/ferreteria#electricidad',          subLabel: 'Electricidad' },
    plomeria:                 { categoryId: 'ferreteria', subHref: '/category/ferreteria#plomeria',              subLabel: 'Plomería' },
    // Juguetes
    juguetes_para_ninos:      { categoryId: 'juguetes', subHref: '/category/juguetes#juguetes_para_ninos', subLabel: 'Juguetes para Niños' },
    juguetes_para_ninas:      { categoryId: 'juguetes', subHref: '/category/juguetes#juguetes_para_ninas', subLabel: 'Juguetes para Niñas' },
}

const ProductDetails = () => {
    const { productId } = useParams<{ productId: string }>()

    const product = productos.find((p) => p.id === productId)
    const pageData = productId ? productPageData[productId] : undefined

    // ── SEO: actualizar título y meta descripción ─────────────────────────────
    useEffect(() => {
        if (!product) return
        document.title = `${product.nombre} | Hipermercado Superior`
        const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
        if (metaDesc) {
            metaDesc.content = pageData?.descripcion
                ? pageData.descripcion.replace(/<[^>]*>/g, '').slice(0, 160)
                : `Compra ${product.nombre} en Hipermercado Superior. La mejor calidad al mejor precio.`
        }
        return () => {
            document.title = 'Hipermercado Superior'
        }
    }, [product, pageData])

    // ── Breadcrumb ────────────────────────────────────────────────────────────
    const breadcrumbInfo = product ? categoryBreadcrumbMap[product.categoria] : null
    const parentCategory = breadcrumbInfo
        ? categories.find((c) => c.id === breadcrumbInfo.categoryId)
        : null

    const breadcrumbItems = product && parentCategory && breadcrumbInfo
        ? [
            { label: 'Inicio', to: '/' },
            { label: 'Categorías' },
            { label: parentCategory.name, to: parentCategory.href },
            { label: breadcrumbInfo.subLabel, to: breadcrumbInfo.subHref },
            { label: product.nombre },
          ]
        : [
            { label: 'Inicio', to: '/' },
            { label: product?.nombre ?? 'Producto' },
          ]

    // ── Productos similares (misma categoría, excluir el actual) ──────────────
    const similarProducts = product
        ? productos.filter((p) => p.categoria === product.categoria && p.id !== product.id).slice(0, 8)
        : []

    if (!product) {
        return (
            <div className="text-white text-center py-20">Producto no encontrado</div>
        )
    }

    return (
        <>
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
                        title="Productos Similares"
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
