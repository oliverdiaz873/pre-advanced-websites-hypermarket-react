export interface Subcategory {
    name: string
    href: string
}

export interface Category {
    name: string
    id: string
    href: string
    subcategories: Subcategory[]
}

export const categories: Category[] = [
    {
        name: 'Alimentos',
        id: 'alimentos',
        href: '/category/alimentos',
        subcategories: [
            { name: 'Frutas y Verduras', href: '/category/alimentos#frutas_y_verduras' },
            { name: 'Despensa', href: '/category/alimentos#despensa' },
            { name: 'Carnes, Pescados y Mariscos', href: '/category/alimentos#carnes_pescados_mariscos' },
            { name: 'Lácteos y Huevos', href: '/category/alimentos#lacteos_y_huevos' },
            { name: 'Bebidas', href: '/category/alimentos#bebidas' },
            { name: 'Enlatados', href: '/category/alimentos#enlatados' },
        ],
    },
    {
        name: 'Electrodomésticos',
        id: 'electrodomesticos',
        href: '/category/electrodomesticos',
        subcategories: [
            { name: 'Cocina', href: '/category/electrodomesticos#cocina' },
            { name: 'Lavado', href: '/category/electrodomesticos#lavado' },
            { name: 'Climatización', href: '/category/electrodomesticos#climatizacion' },
        ],
    },
    {
        name: 'Tecnología',
        id: 'tecnologia',
        href: '/category/tecnologia',
        subcategories: [
            { name: 'Televisores', href: '/category/tecnologia#televisores' },
            { name: 'Laptops', href: '/category/tecnologia#laptops' },
            { name: 'Tablets', href: '/category/tecnologia#tablets' },
            { name: 'Celulares', href: '/category/tecnologia#celulares' },
            { name: 'Bocinas', href: '/category/tecnologia#bocinas' },
        ],
    },
    {
        name: 'Ropa',
        id: 'ropa',
        href: '/category/ropa',
        subcategories: [
            { name: 'Pantalones para Hombres', href: '/category/ropa#pantalones_para_hombres' },
            { name: 'Pantalones para Mujeres', href: '/category/ropa#pantalones_para_mujeres' },
            { name: 'Pantalones para Niños', href: '/category/ropa#pantalones_para_ninos' },
            { name: 'Trajes para Hombres', href: '/category/ropa#trajes_para_hombres' },
            { name: 'Vestidos', href: '/category/ropa#vestidos' },
        ],
    },
    {
        name: 'Muebles y Decoración',
        id: 'muebles_y_decoracion',
        href: '/category/muebles_y_decoracion',
        subcategories: [
            { name: 'Sofás', href: '/category/muebles_y_decoracion#sofas' },
            { name: 'Sillones', href: '/category/muebles_y_decoracion#sillones' },
            { name: 'Mesas', href: '/category/muebles_y_decoracion#mesas' },
            { name: 'Floreros', href: '/category/muebles_y_decoracion#floreros' },
        ],
    },
    {
        name: 'Farmacia',
        id: 'farmacia',
        href: '/category/farmacia',
        subcategories: [
            { name: 'Analgésicos', href: '/category/farmacia#analgesicos' },
            { name: 'Dermocosmética', href: '/category/farmacia#dermocosmetica' },
            { name: 'Vitaminas y Minerales', href: '/category/farmacia#vitaminas_y_minerales' },
            { name: 'Antigripales', href: '/category/farmacia#antigripales_y_resfriado' },
        ],
    },
    {
        name: 'Ferretería',
        id: 'ferreteria',
        href: '/category/ferreteria',
        subcategories: [
            { name: 'Herramientas Manuales', href: '/category/ferreteria#herramientas_manuales' },
            { name: 'Pinturas', href: '/category/ferreteria#pinturas' },
            { name: 'Electricidad', href: '/category/ferreteria#electricidad' },
            { name: 'Plomería', href: '/category/ferreteria#plomeria' },
        ],
    },
    {
        name: 'Juguetes',
        id: 'juguetes',
        href: '/category/juguetes',
        subcategories: [
            { name: 'Juguetes para Niños', href: '/category/juguetes#juguetes_para_ninos' },
            { name: 'Juguetes para Niñas', href: '/category/juguetes#juguetes_para_ninas' },
        ],
    },
]
