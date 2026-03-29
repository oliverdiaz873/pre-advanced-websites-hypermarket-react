import { useState } from 'react'
import { Product } from '../../../data/productos'
import AddToCartButton from '../../cart/components/AddToCartButton'
import { getAssetUrl } from '../../../utils/assetUtils'
import { ProductPageData } from '../../../data/productPageData'
import './ProductDetailSection.css'

interface ProductDetailSectionProps {
    product: Product
    pageData?: ProductPageData
}

/**
 * Componente que renderiza la sección principal de detalles de un producto.
 * 
 * Se encarga de mostrar la información detallada (imagen con lightbox, nombre,
 * precio, descripción enriquecida, viñetas de detalles técnicos) y de proveer 
 * el botón para agregar dicho producto al carrito de compras utilizando el componente AddToCartButton.
 * 
 * @param {ProductDetailSectionProps} props - Las propiedades del componente.
 * @param {Product} props.product - Objeto con la información básica del producto (id, nombre, precio, imagen, etc).
 * @param {ProductPageData} [props.pageData] - Objeto opcional (diccionario) con los datos extendidos del producto (descripción larga y detalles/especificaciones). Si no se provee, muestra valores por defecto.
 */
const ProductDetailSection = ({ product, pageData }: ProductDetailSectionProps) => {
    const [modalOpen, setModalOpen] = useState(false)

    const description = pageData?.descripcion ??
        `Disfruta de la mejor calidad con nuestro ${product.nombre}. En Hipermercado Superior nos esforzamos por ofrecerte siempre lo mejor.`

    const detalles = pageData?.detalles ?? []

    return (
        <section className="producto-detalle">
            <div className="contenedor-producto">

                {/* Imagen con modal lightbox */}
                <figure className="imagen-producto">
                    <img
                        src={getAssetUrl(product.imagen)}
                        alt={product.nombre}
                        onClick={() => setModalOpen(true)}
                        title="Haz clic para ampliar"
                    />
                </figure>

                {/* Modal lightbox */}
                <div
                    className={`modal-imagen${modalOpen ? ' modal-activo' : ''}`}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Imagen ampliada de ${product.nombre}`}
                    onClick={() => setModalOpen(false)}
                >
                    {/* El div completo sirve de área de cierre */}
                    <img
                        src={getAssetUrl(product.imagen)}
                        alt={`${product.nombre} ampliado`}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>

                {/* Información del producto */}
                <div className="info-producto">
                    <h1>{product.nombre}</h1>
                    <p className="precio">{product.precioTexto}</p>

                    <p className="descripcion">
                        {description}
                    </p>

                    {detalles.length > 0 && (
                        <ul className="detalles">
                            {detalles.map((detalle, i) => (
                                <li key={i}>{detalle}</li>
                            ))}
                        </ul>
                    )}

                    {/* componente AddtoCartButton */}
                    <div style={{ marginTop: '20px' }}>
                        <AddToCartButton product={product} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetailSection
