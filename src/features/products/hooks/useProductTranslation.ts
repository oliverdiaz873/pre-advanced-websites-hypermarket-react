import { useTranslation } from 'react-i18next'
import { Product } from '../../../shared/types/product'
import { ProductPageData } from '../../../data/productPageData'
import { formatProductPrice, unitLabel } from '../../../shared/utils/priceUtils'

/**
 * useProductTranslation - Hook para gestionar la internacionalizacion de productos.
 *
 * Este hook implementa un sistema de "Overlay & Fallback":
 * 1. Intenta buscar la traduccion en el namespace 'products'.
 * 2. Si no existe, usa el contenido original del objeto product o pageData.
 */
export const useProductTranslation = (product?: Product, pageData?: ProductPageData) => {
    const { t, i18n } = useTranslation(['products', 'common', 'categories'])
    const productId = product?.id
    const fallbackName = product?.nombre ?? t('common:product.not_found')

    const finalName = productId
        ? t(`products:${productId}.name`, { defaultValue: fallbackName })
        : fallbackName

    const finalDescription = productId
        ? t(`products:${productId}.description`, {
            defaultValue: pageData?.descripcion ?? `Disfruta de la mejor calidad con nuestro ${fallbackName}.`,
        })
        : pageData?.descripcion ?? ''

    const finalSpecs = productId && i18n.exists(`products:${productId}.specs`)
        ? t(`products:${productId}.specs`, { returnObjects: true }) as string[]
        : (pageData?.detalles ?? [])

    const rawUnit = product ? unitLabel(product) : 'unidad'
    const translatedUnit = t(`common:units.${rawUnit}`, { defaultValue: rawUnit })

    return {
        name: finalName,
        description: finalDescription,
        specs: finalSpecs,
        priceText: product
            ? formatProductPrice(product, {
                pricePrefix: t('common:product.price_prefix'),
                translatedUnit,
            })
            : '',
        labels: {
            viewDetails: t('common:product.view_details', { name: finalName }),
            addToCart: t('common:product.add_to_cart'),
            pricePrefix: t('common:product.price_prefix'),
            unit: translatedUnit,
            similarProducts: t('common:product.similar_products'),
            notFound: t('common:product.not_found'),
            clickToEnlarge: t('common:product.click_to_enlarge'),
            closeModal: t('common:product.close_modal'),
            expandedImage: t('common:product.expanded_image', { name: finalName }),
        },
        t,
    }
}
