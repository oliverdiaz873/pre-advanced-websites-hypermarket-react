export interface Product {
    id: string
    nombre: string
    url: string
    categoria: string
    precio: number
    precioTexto: string
    imagen: string
}

export const productos: Product[] = [

    //--Alimentos--//

    // Bebidas
    {
        id: "coca_cola",
        nombre: "Coca Cola",
        url: "/pages/product/alimentos/bebidas/coca_cola.html",
        categoria: "bebidas",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 / 2 Litros", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/refresco/coca_cola.avif"
    },
    {
        id: "coca_cola_zero",
        nombre: "Coca Cola Zero",
        url: "/pages/product/alimentos/bebidas/coca_cola_zero.html",
        categoria: "bebidas",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 / 2 Litros", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/refresco/coca_cola_zero.avif"
    },
    {
        id: "country_club_frambuesa",
        nombre: "Country Club Frambuesa",
        url: "/pages/product/alimentos/bebidas/country_club_frambuesa.html",
        categoria: "bebidas",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 / 2 Litros", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/refresco/country_club_frambuesa.avif"
    },
    {
        id: "country_club_uva",
        nombre: "Country Club Uva",
        url: "/pages/product/alimentos/bebidas/country_club_uva.html",
        categoria: "bebidas",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 / 2 Litros", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/refresco/country_club_uva.avif"
    },
    {
        id: "gatorade_uva",
        nombre: "Gatorade Uva",
        url: "/pages/product/alimentos/bebidas/gatorade_uva.html",
        categoria: "bebidas",
        precio: 75, // número para carrito
        precioTexto: "Precio: $75", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/energizantes/gatorade_uva.avif"
    },
    {
        id: "jugo_de_naranja_rica",
        nombre: "Jugo de Naranja Rica",
        url: "/pages/product/alimentos/bebidas/jugo_naranja_rica.html",
        categoria: "bebidas",
        precio: 55, // número para carrito
        precioTexto: "Precio: $55", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/jugo/jugo_naranja_rica.avif"
    },
    {
        id: "jugo_de_pera_santal",
        nombre: "Jugo de Pera Santal",
        url: "/pages/product/alimentos/bebidas/jugo_pera_santal.html",
        categoria: "bebidas",
        precio: 30, // número para carrito
        precioTexto: "Precio: $30", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/jugo/jugo_pera_santal.avif"
    },
    {
        id: "red_bull",
        nombre: "Red Bull",
        url: "/pages/product/alimentos/bebidas/red_bull.html",
        categoria: "bebidas",
        precio: 90, // número para carrito
        precioTexto: "Precio: $90", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/bebidas/energizantes/red_bull.avif"
    },

    //Carnes, pescados y mariscos
    {
        id: "camarones_crudos",
        nombre: "Camarones Crudos",
        url: "/pages/product/alimentos/carnes_pescados_mariscos/camarones_crudos.html",
        categoria: "carnes_pescados_mariscos",
        precio: 350, // número para carrito
        precioTexto: "$350.00 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/carnes_pescados_mariscos/mariscos/camarones_crudos.avif"
    },
    {
        id: "camarones_pre_cocidos",
        nombre: "Camarones Pre-cocidos",
        url: "/pages/product/alimentos/carnes_pescados_mariscos/camarones_precocidos.html",
        categoria: "carnes_pescados_mariscos",
        precio: 400, // número para carrito
        precioTexto: "$400.00 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/carnes_pescados_mariscos/mariscos/camarones_pre-cocidos.avif"
    },
    {
        id: "carne_de_res_para_hamburguesas",
        nombre: "Carne de Res para Hamburguesas",
        url: "/pages/product/alimentos/carnes_pescados_mariscos/carne_de_res_para_hamburguesas.html",
        categoria: "carnes_pescados_mariscos",
        precio: 370, // número para carrito
        precioTexto: "$370.00 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/carnes_pescados_mariscos/res/carne_de_res.avif"
    },
    {
        id: "chuleta_de_cerdo",
        nombre: "Chuleta de Cerdo",
        url: "/pages/product/alimentos/carnes_pescados_mariscos/chuleta_de_cerdo.html",
        categoria: "carnes_pescados_mariscos",
        precio: 300, // número para carrito
        precioTexto: "$300.00 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/carnes_pescados_mariscos/cerdo/chuleta_de_cerdo.avif"
    },
    {
        id: "pollo_entero_don_pollo",
        nombre: "Pollo Entero Don Pollo",
        url: "/pages/product/alimentos/carnes_pescados_mariscos/pollo_entero_don_pollo.html",
        categoria: "carnes_pescados_mariscos",
        precio: 300, // número para carrito
        precioTexto: "$300.00 / unidad", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/carnes_pescados_mariscos/pollo/pollo.avif"
    },
    {
        id: "tilapia_roja",
        nombre: "Tilapia Roja",
        url: "/pages/product/alimentos/carnes_pescados_mariscos/tilapia_roja.html",
        categoria: "carnes_pescados_mariscos",
        precio: 250, // número para carrito
        precioTexto: "$250.00 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/carnes_pescados_mariscos/pescado/tilapia_roja.avif"
    },

    //Despensa
    {
        id: "aceite_crisol",
        nombre: "Aceite Crisol",
        url: "/pages/product/alimentos/despensa/aceite_crisol.html",
        categoria: "despensa",
        precio: 95, // número para carrito
        precioTexto: "$95.00", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/aceites/aceite_crisol.avif"
    },
    {
        id: "aceite_de_oliva_extra_virgen",
        nombre: "Aceite de Oliva Extra Virgen",
        url: "/pages/product/alimentos/despensa/aceite_oliva_extra_virgen.html",
        categoria: "despensa",
        precio: 230, // número para carrito
        precioTexto: "$230.00", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/aceites/aceite_de_oliva_extra_virgen.avif"
    },
    {
        id: "mayonesa_baldom",
        nombre: "Mayonesa Baldom",
        url: "/pages/product/alimentos/despensa/mayonesa_baldom.html",
        categoria: "despensa",
        precio: 95, // número para carrito
        precioTexto: "$95", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/aderezos_y_salsas/mayonesa_baldom.avif"
    },
    {
        id: "sal_marina_refisal",
        nombre: "Sal Marina Refisal",
        url: "/pages/product/alimentos/despensa/sal_refisal.html",
        categoria: "despensa",
        precio: 65, // número para carrito
        precioTexto: "$65.00", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/condimentos/sal_marina_refisal.jpg"
    },
    {
        id: "sazon_completo_maggi",
        nombre: "Sazón Completo Maggi",
        url: "/pages/product/alimentos/despensa/sazon_completo_maggi.html",
        categoria: "despensa",
        precio: 80, // número para carrito
        precioTexto: "$80.00", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/condimentos/sazon_completo_maggi.avif"
    },
    {
        id: "sopita_doña_gallina",
        nombre: "Sopita Doña Gallina",
        url: "/pages/product/alimentos/despensa/sopita_dona_gallina.html",
        categoria: "despensa",
        precio: 150, // número para carrito
        precioTexto: "$150 / la caja", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/condimentos/sopita_dona_gallina.avif"
    },
    {
        id: "vinagre_baldom",
        nombre: "Vinagre Baldom",
        url: "/pages/product/alimentos/despensa/vinagre_baldom.html",
        categoria: "despensa",
        precio: 87, // número para carrito
        precioTexto: "$87 / botella", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/despensa/condimentos/vinagre_baldom.avif"
    },

    //Enlatados
    {
        id: "atun_dimar",
        nombre: "Atún Dimar",
        url: "/pages/product/alimentos/enlatados/atun_dimar.html",
        categoria: "enlatados",
        precio: 120, // número para carrito
        precioTexto: "Precio: $120 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/atun_dimar.avif"
    },
    {
        id: "gandules_verdes_goya",
        nombre: "Gandules Verdes Goya",
        url: "/pages/product/alimentos/enlatados/gandules_verdes_goya.html",
        categoria: "enlatados",
        precio: 180, // número para carrito
        precioTexto: "Precio: $180 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/gandules_verdes_goya.avif"
    },
    {
        id: "habichuelas_negras_goya",
        nombre: "Habichuelas Negras Goya",
        url: "/pages/product/alimentos/enlatados/habichuelas_negras_goya.html",
        categoria: "enlatados",
        precio: 50, // número para carrito
        precioTexto: "Precio: $50 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/habichuelas_negras_goya.avif"
    },
    {
        id: "maiz_la_famosa",
        nombre: "Maíz La Famosa",
        url: "/pages/product/alimentos/enlatados/maiz_la_famosa.html",
        categoria: "enlatados",
        precio: 45, // número para carrito
        precioTexto: "Precio: $45 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/maiz_la_famosa.avif"
    },
    {
        id: "salchichas_jaja",
        nombre: "Salchichas Jajá",
        url: "/pages/product/alimentos/enlatados/salchichas_jaja.html",
        categoria: "enlatados",
        precio: 45, // número para carrito
        precioTexto: "Precio: $45 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/salchichas_jaja.avif"
    },
    {
        id: "sardinas_gord",
        nombre: "Sardinas Gord",
        url: "/pages/product/alimentos/enlatados/sardinas_gord.html",
        categoria: "enlatados",
        precio: 85, // número para carrito
        precioTexto: "Precio: $85 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/sardinas_gord.avif"
    },
    {
        id: "tomates_pelados_la_famosa",
        nombre: "Tomates Pelados La Famosa",
        url: "/pages/product/alimentos/enlatados/tomates_pelados_la_famosa.html",
        categoria: "enlatados",
        precio: 60, // número para carrito
        precioTexto: "Precio: $60 / 1 Lata", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/enlatados/tomates_pelados.avif"
    },

    //Frutas y Verduras
    {
        id: "ajies_morrones",
        nombre: "Ajíes Morrones",
        url: "/pages/product/alimentos/frutas_y_verduras/ajies_morrones.html",
        categoria: "frutas_y_verduras",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 la unidad", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/ajies_morron.avif"
    },
    {
        id: "cebollas_rojas",
        nombre: "Cebollas rojas",
        url: "/pages/product/alimentos/frutas_y_verduras/cebollas_rojas.html",
        categoria: "frutas_y_verduras",
        precio: 170, // número para carrito
        precioTexto: "Precio: $170 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/cebolla_roja.avif"
    },
    {
        id: "fresas",
        nombre: "Fresas",
        url: "/pages/product/alimentos/frutas_y_verduras/paquete_de_paquete_de_fresas.html",
        categoria: "frutas_y_verduras",
        precio: 250, // número para carrito
        precioTexto: "Precio: $250 1 paquete", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/paquete_de_fresas.avif"
    },
    {
        id: "limones_persa",
        nombre: "Limones Persa",
        url: "/pages/product/alimentos/frutas_y_verduras/limones_persa.html",
        categoria: "frutas_y_verduras",
        precio: 200, // número para carrito
        precioTexto: "Precio: $200 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/limon_persa.avif"
    },
    {
        id: "mandarinas",
        nombre: "Mandarinas",
        url: "/pages/product/alimentos/frutas_y_verduras/mandarinas.html",
        categoria: "frutas_y_verduras",
        precio: 100, // número para carrito
        precioTexto: "Precio: $100 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/mandarinas.avif"
    },
    {
        id: "manzanas_amarillas",
        nombre: "Manzanas amarillas",
        url: "/pages/product/alimentos/frutas_y_verduras/manzanas_amarillas.html",
        categoria: "frutas_y_verduras",
        precio: 50, // número para carrito
        precioTexto: "Precio: $50 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/manzana_amarilla.avif"
    },
    {
        id: "manzanas_rojas",
        nombre: "Manzanas rojas",
        url: "/pages/product/alimentos/frutas_y_verduras/manzanas_rojas.html",
        categoria: "frutas_y_verduras",
        precio: 65, // número para carrito
        precioTexto: "Precio: $65 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/manzana_roja.avif"
    },
    {
        id: "manzanas_verdes",
        nombre: "Manzanas verdes",
        url: "/pages/product/alimentos/frutas_y_verduras/manzanas_verdes.html",
        categoria: "frutas_y_verduras",
        precio: 45, // número para carrito
        precioTexto: "Precio: $45 / 1 kg", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/manzana_verde.avif"
    },
    {
        id: "pepinos",
        nombre: "Pepinos",
        url: "/pages/product/alimentos/frutas_y_verduras/pepinos.html",
        categoria: "frutas_y_verduras",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/pepino.avif"
    },
    {
        id: "tomates_de_ensalada",
        nombre: "Tomates de ensalada",
        url: "/pages/product/alimentos/frutas_y_verduras/tomates_de_ensalada.html",
        categoria: "frutas_y_verduras",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/tomate_de_ensalada.avif"
    },
    {
        id: "uvas_moradas",
        nombre: "Uvas moradas",
        url: "/pages/product/alimentos/frutas_y_verduras/uvas_moradas.html",
        categoria: "frutas_y_verduras",
        precio: 350, // número para carrito
        precioTexto: "Precio: $350 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/uva_morada.avif"
    },
    {
        id: "zanahorias",
        nombre: "Zanahorias",
        url: "/pages/product/alimentos/frutas_y_verduras/zanahorias.html",
        categoria: "frutas_y_verduras",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 1KG", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/frutas_y_verduras/zanahoria.avif"
    },

    //Lácteos y huevos
    {
        id: "huevos_don_pancho",
        nombre: "Huevos Don Pancho",
        url: "/pages/product/alimentos/lacteos_y_huevos/huevos.html",
        categoria: "lacteos_y_huevos",
        precio: 200, // número para carrito
        precioTexto: "Precio: $200 / 30 unidades", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/lacteos_y_huevos/huevos/huevos_30unidades.avif"
    },
    {
        id: "leche_entera_rica",
        nombre: "Leche Entera Rica",
        url: "/pages/product/alimentos/lacteos_y_huevos/leche_entera_rica.html",
        categoria: "lacteos_y_huevos",
        precio: 65, // número para carrito
        precioTexto: "$65.00", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/lacteos_y_huevos/leche/leche_entera_rica.avif"
    },
    {
        id: "queso_gorgonzola",
        nombre: "Queso Gorgonzola",
        url: "/pages/product/alimentos/lacteos_y_huevos/queso_gorgonzola.html",
        categoria: "lacteos_y_huevos",
        precio: 350, // número para carrito
        precioTexto: "Precio: $350 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/lacteos_y_huevos/queso/queso_gorgonzola.avif"
    },
    {
        id: "queso_gouda",
        nombre: "Queso Gouda",
        url: "/pages/product/alimentos/lacteos_y_huevos/queso_gouda.html",
        categoria: "lacteos_y_huevos",
        precio: 280, // número para carrito
        precioTexto: "Precio: $280 / 1 LB", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/lacteos_y_huevos/queso/queso_gouda.avif"
    },
    {
        id: "yogurt_de_fresa_yoka",
        nombre: "Yogurt de Fresa Yoka",
        url: "/pages/product/alimentos/lacteos_y_huevos/yogurt_fresa_yoka.html",
        categoria: "lacteos_y_huevos",
        precio: 150, // número para carrito
        precioTexto: "Precio: $150", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/lacteos_y_huevos/yogurt/yogurt_de_fresa.avif"
    },
    {
        id: "yogurt_natural_rica",
        nombre: "Yogurt Natural Rica",
        url: "/pages/product/alimentos/lacteos_y_huevos/yogurt_natural_rica.html",
        categoria: "lacteos_y_huevos",
        precio: 210, // número para carrito
        precioTexto: "Precio: $210 / 2 Litros", // texto para mostrar en resultados
        imagen: "/assets/images/productos/alimentos/lacteos_y_huevos/yogurt/yogurt_natural.avif"
    },

    //--Electrodomésticos--//

    //Climatización
    {
        id: "aire_acondicionado_tecnomaster",
        nombre: "Aire Acondicionado tecnomaster",
        url: "/pages/product/electrodomesticos/climatizacion/aire_acondicionado_tecnomaster.html",
        categoria: "climatizacion",
        precio: 33000, // número para carrito
        precioTexto: "Precio: $33,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/climatizacion/aire_acondicionado/aire_acondicionado_tecnomaster.png"
    },
    {
        id: "aire_acondicionado_whirlpool",
        nombre: "Aire Acondicionado whirlpool",
        url: "/pages/product/electrodomesticos/climatizacion/aire_acondicionado_whirlpool.html",
        categoria: "climatizacion",
        precio: 40000, // número para carrito
        precioTexto: "Precio: $40,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/climatizacion/aire_acondicionado/aire_acondicionado_whirlpool.png"
    },
    {
        id: "ventilador_daiwa",
        nombre: "Ventilador Daiwa",
        url: "/pages/product/electrodomesticos/climatizacion/ventilador_daiwa.html",
        categoria: "climatizacion",
        precio: 15000, // número para carrito
        precioTexto: "Precio: $15,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/climatizacion/ventiladores/ventilador_daiwa.png"
    },
    {
        id: "ventilador_kdk",
        nombre: "Ventilador KDK",
        url: "/pages/product/electrodomesticos/climatizacion/ventilador_kdk.html",
        categoria: "climatizacion",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/climatizacion/ventiladores/ventilador_kdk.avif"
    },
    {
        id: "ventilador_pequeno",
        nombre: "Ventilador Pequeño",
        url: "/pages/product/electrodomesticos/climatizacion/ventilador_pequeno.html",
        categoria: "climatizacion",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/climatizacion/ventiladores/ventilador_pequeno.png"
    },
    {
        id: "ventilador_de_techo_kdk",
        nombre: "Ventilador de Techo KDK",
        url: "/pages/product/electrodomesticos/climatizacion/ventilador_techo_kdk.html",
        categoria: "climatizacion",
        precio: 20000, // número para carrito
        precioTexto: "Precio: $20,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/climatizacion/ventiladores_de_techo/ventilador_de_techo_kdk.avif"
    },

    //Cocina
    {
        id: "bebedero_tecnomaster",
        nombre: "Bebedero tecnomaster",
        url: "/pages/product/electrodomesticos/cocina/bebedero_tecnomaster.html",
        categoria: "cocina",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/cocina/bebedero/bebedero_tecnomaster.avif"
    },
    {
        id: "cilindro_de_gas_duragas",
        nombre: "Cilindro de gas Duragas",
        url: "/pages/product/electrodomesticos/cocina/cilindro_duragas.html",
        categoria: "cocina",
        precio: 5200, // número para carrito
        precioTexto: "Precio: $5,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/cocina/cilindros_de_gas/cilindro_de_gas_duragas.avif"
    },
    {
        id: "estufa_lg",
        nombre: "Estufa LG",
        url: "/pages/product/electrodomesticos/cocina/estufa_lg.html",
        categoria: "cocina",
        precio: 66000, // número para carrito
        precioTexto: "Precio: $66,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/cocina/estufas/estufa_lg.avif"
    },
    {
        id: "extractor_de_grasa_drija",
        nombre: "Extractor de grasa drija",
        url: "/pages/product/electrodomesticos/cocina/extractor_drija.html",
        categoria: "cocina",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/cocina/extractor_de_grasa/extractor_de_grasa_drija.avif"
    },
    {
        id: "freezer_7_pies",
        nombre: "Freezer 7 Pies",
        url: "/pages/product/electrodomesticos/cocina/freezer_7_pies.html",
        categoria: "cocina",
        precio: 16500, // número para carrito
        precioTexto: "Precio: $16,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/cocina/freezer/freezer_7pies.png"
    },
    {
        id: "nevera_lg_grande_moderna",
        nombre: "Nevera LG Grande Moderna",
        url: "/pages/product/electrodomesticos/cocina/nevera_lg.html",
        categoria: "cocina",
        precio: 80000, // número para carrito
        precioTexto: "Precio: $80,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/cocina/neveras/nevera_lg.png"
    },

    //Lavado
    {
        id: "lavadora_dimensions",
        nombre: "Lavadora Dimensions",
        url: "/pages/product/electrodomesticos/lavado/lavadora_dimensions.html",
        categoria: "lavado",
        precio: 10000, // número para carrito
        precioTexto: "Precio: $10,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/lavado/lavadora/lavadora_dimensions.png"
    },
    {
        id: "lavadora_frigidaire",
        nombre: "Lavadora Frigidaire",
        url: "/pages/product/electrodomesticos/lavado/lavadora_frigidaire.html",
        categoria: "lavado",
        precio: 35000, // número para carrito
        precioTexto: "Precio: $35,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/lavado/lavadora/lavadora_frigidaire.png"
    },
    {
        id: "lavadora_lg",
        nombre: "Lavadora LG",
        url: "/pages/product/electrodomesticos/lavado/lavadora_lg.html",
        categoria: "lavado",
        precio: 53000, // número para carrito
        precioTexto: "Precio: $53,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/lavado/lavadora/lavadora_lg.avif"
    },
    {
        id: "lavadora_y_secadora_lg",
        nombre: "Lavadora y Secadora LG",
        url: "/pages/product/electrodomesticos/lavado/lavadora_secadora_lg.html",
        categoria: "lavado",
        precio: 55000, // número para carrito
        precioTexto: "Precio: $55,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/lavado/lavadora_y_secadora/lavadora_y_secadora_lg.avif"
    },
    {
        id: "lavadora_y_secadora_tecnomaster",
        nombre: "Lavadora y Secadora tecnomaster",
        url: "/pages/product/electrodomesticos/lavado/lavadora_tecnomaster.html",
        categoria: "lavado",
        precio: 40000, // número para carrito
        precioTexto: "Precio: $40,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/electrodomesticos/lavado/lavadora_y_secadora/lavadora_y_secadora_tecnomaster.png"
    },
    //--Farmacia--//

    //Analgésicos
    {
        id: "equate_analgesico",
        nombre: "Equate Analgésico",
        url: "/pages/product/farmacia/analgesicos/equate_analgesico.html",
        categoria: "analgesicos",
        precio: 1000, // número para carrito
        precioTexto: "Precio: $1000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/analgesicos/equate.avif"
    },
    {
        id: "flanax_analgesico",
        nombre: "Flanax Analgésico",
        url: "/pages/product/farmacia/analgesicos/flanax.html",
        categoria: "analgesicos",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/analgesicos/flanax.png"
    },
    {
        id: "thera_gesic_analgesico",
        nombre: "Thera-Gesic Analgésico",
        url: "/pages/product/farmacia/analgesicos/thera_gesic.html",
        categoria: "analgesicos",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/analgesicos/thera-gesic.avif"
    },
    {
        id: "tylenol_analgesico",
        nombre: "Tylenol Analgésico",
        url: "/pages/product/farmacia/analgesicos/tylenol.html",
        categoria: "analgesicos",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/analgesicos/tylenol.avif"
    },
    {
        id: "vaporizing_analgesico",
        nombre: "Vaporizing Analgésico",
        url: "/pages/product/farmacia/analgesicos/vaporizing.html",
        categoria: "analgesicos",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/analgesicos/vaporizing.avif"
    },

    //Antigripales y resfriados
    {
        id: "antiflu_des",
        nombre: "Antiflu-Des",
        url: "/pages/product/farmacia/antigripales_y_resfriado/antiflu_Des.html",
        categoria: "antigripales_y_resfriado",
        precio: 1000, // número para carrito
        precioTexto: "Precio: $1,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/antigripales/antiflu-des.avif"
    },
    {
        id: "coldyflu",
        nombre: "Coldyflu",
        url: "/pages/product/farmacia/antigripales_y_resfriado/coldyflu.html",
        categoria: "antigripales_y_resfriado",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/antigripales/coldyflu.avif"
    },
    {
        id: "mucinex",
        nombre: "Mucinex",
        url: "/pages/product/farmacia/antigripales_y_resfriado/mucinex.html",
        categoria: "antigripales_y_resfriado",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/antigripales/mucinex.avif"
    },
    {
        id: "nyquil",
        nombre: "NyQuil",
        url: "/pages/product/farmacia/antigripales_y_resfriado/nyquil.html",
        categoria: "antigripales_y_resfriado",
        precio: 3500, // número para carrito
        precioTexto: "Precio: $3,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/antigripales/nyquil.avif"
    },
    {
        id: "theraflu",
        nombre: "Theraflu",
        url: "/pages/product/farmacia/antigripales_y_resfriado/theraflu.html",
        categoria: "antigripales_y_resfriado",
        precio: 2200, // número para carrito
        precioTexto: "Precio: $2,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/antigripales/theraflu.avif"
    },

    //Dermocosmética
    {
        id: "cerave_acido_hialuronico",
        nombre: "Cerave Ácido Hialurónico",
        url: "/pages/product/farmacia/dermocosmetica/acido_hialuronico.html",
        categoria: "dermocosmetica",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/dermocosmetica/cerave_acido_hyaluronico.avif"
    },
    {
        id: "hidratante_cerave",
        nombre: "Hidratante Cerave",
        url: "/pages/product/farmacia/dermocosmetica/hidratante_cerave.html",
        categoria: "dermocosmetica",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/dermocosmetica/hidratante_cerave.jpg"
    },
    {
        id: "hidratante_eucerin",
        nombre: "Hidratante Eucerin",
        url: "/pages/product/farmacia/dermocosmetica/hidratante_eucerin.html",
        categoria: "dermocosmetica",
        precio: 2200, // número para carrito
        precioTexto: "Precio: $2,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/dermocosmetica/hidratante_eucerin.avif"
    },
    {
        id: "hidratante_cerave_grande",
        nombre: "Hidratante Cerave Grande",
        url: "/pages/product/farmacia/dermocosmetica/hidratante_grande.html",
        categoria: "dermocosmetica",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/dermocosmetica/hidratante_cerave_grande.avif"
    },
    {
        id: "retinol",
        nombre: "Retinol",
        url: "/pages/product/farmacia/dermocosmetica/retinol.html",
        categoria: "dermocosmetica",
        precio: 1100, // número para carrito
        precioTexto: "Precio: $1,100", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/dermocosmetica/retinol.avif"
    },
    {
        id: "serum_vitamina_c",
        nombre: "Serum Vitamina C",
        url: "/pages/product/farmacia/dermocosmetica/serum_vitaminac.html",
        categoria: "dermocosmetica",
        precio: 1400, // número para carrito
        precioTexto: "Precio: $1,400", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/dermocosmetica/serum_vitaminc.avif"
    },

    //Vitaminas y Minerales
    {
        id: "flintstones",
        nombre: "Flintstones Multivitamínico para niños",
        url: "/pages/product/farmacia/vitaminas_y_minerales/flintstones.html",
        categoria: "vitaminas_y_minerales",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/vitaminas_y_minerales/flintstones.avif"
    },
    {
        id: "Multivitaminico",
        nombre: "Multivitamínico",
        url: "/pages/product/farmacia/vitaminas_y_minerales/Multivitaminico.html",
        categoria: "vitaminas_y_minerales",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/vitaminas_y_minerales/multivitaminico.avif"
    },
    {
        id: "omega3",
        nombre: "Omega 3",
        url: "/pages/product/farmacia/vitaminas_y_minerales/omega3.html",
        categoria: "vitaminas_y_minerales",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/vitaminas_y_minerales/omega3.avif"
    },
    {
        id: "Vitafusion",
        nombre: "Vitafusion",
        url: "/pages/product/farmacia/vitaminas_y_minerales/vitafusion.html",
        categoria: "vitaminas_y_minerales",
        precio: 1300, // número para carrito
        precioTexto: "Precio: $1,300", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/vitaminas_y_minerales/vitafusion.avif"
    },
    {
        id: "vitamina_c",
        nombre: "Vitamina C",
        url: "/pages/product/farmacia/vitaminas_y_minerales/vitaminac.html",
        categoria: "vitaminas_y_minerales",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/farmacia/vitaminas_y_minerales/vitaminac.avif"
    },

    //--Ferretería--//

    //electricidad
    {
        id: "bombillas_led",
        nombre: "Bombillas LED",
        url: "/pages/product/ferreteria/electricidad/bombillas_led.html",
        categoria: "electricidad",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/electricidad/bombillas_led.avif"
    },
    {
        id: "bombillas",
        nombre: "Bombillas",
        url: "/pages/product/ferreteria/electricidad/bombillas.html",
        categoria: "electricidad",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/electricidad/bombillas.avif"
    },
    {
        id: "extension_electrica",
        nombre: "Extensión Eléctrica",
        url: "/pages/product/ferreteria/electricidad/extension.html",
        categoria: "electricidad",
        precio: 3300, // número para carrito
        precioTexto: "Precio: $3,300", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/electricidad/extension_electrica.avif"
    },
    {
        id: "linterna",
        nombre: "Linterna",
        url: "/pages/product/ferreteria/electricidad/linterna.html",
        categoria: "electricidad",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/electricidad/linterna.png"
    },
    {
        id: "toma_corriente",
        nombre: "Toma Corriente",
        url: "/pages/product/ferreteria/electricidad/toma_corriente.html",
        categoria: "electricidad",
        precio: 5500, // número para carrito
        precioTexto: "Precio: $5,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/electricidad/toma_corriente.png"
    },

    //Herramientas Manuales
    {
        id: "destornillador",
        nombre: "Destornillador",
        url: "/pages/product/ferreteria/herramientas_manuales/destornillador.html",
        categoria: "herramientas_manuales",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/herramientas_manuales/destornillador.png"
    },
    {
        id: "llave_de_tuerca",
        nombre: "Llave de Tuerca",
        url: "/pages/product/ferreteria/herramientas_manuales/llave_de_tuerca.html",
        categoria: "herramientas_manuales",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/herramientas_manuales/llave_de_tuerca.png"
    },
    {
        id: "martillo",
        nombre: "Martillo",
        url: "/pages/product/ferreteria/herramientas_manuales/martillo.html",
        categoria: "herramientas_manuales",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/herramientas_manuales/martillo.png"
    },
    {
        id: "pinza",
        nombre: "Pinza",
        url: "/pages/product/ferreteria/herramientas_manuales/pinza.html",
        categoria: "herramientas_manuales",
        precio: 500, // número para carrito
        precioTexto: "Precio: $500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/herramientas_manuales/pinza.avif"
    },
    {
        id: "sierra_de_mano",
        nombre: "Sierra de Mano",
        url: "/pages/product/ferreteria/herramientas_manuales/sierra_de_mano.html",
        categoria: "herramientas_manuales",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/herramientas_manuales/sierra_de_mano.avif"
    },

    //Pinturas y Acabados
    {
        id: "brocha",
        nombre: "Brocha",
        url: "/pages/product/ferreteria/pinturas_y_acabados/brocha.html",
        categoria: "pinturas_y_acabados",
        precio: 500, // número para carrito
        precioTexto: "Precio: $500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/pintura/brocha.avif"
    },
    {
        id: "kit_de_pintura",
        nombre: "Kit de Pintura",
        url: "/pages/product/ferreteria/pinturas_y_acabados/kit_de_pintura.html",
        categoria: "pinturas_y_acabados",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/pintura/kit_de_pintura.avif"
    },
    {
        id: "pinturas_tropical",
        nombre: "Pinturas Tropical",
        url: "/pages/product/ferreteria/pinturas_y_acabados/pinturas_tropical.html",
        categoria: "pinturas_y_acabados",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/pintura/pinturas_tropical.avif"
    },
    {
        id: "pinturas_tucan",
        nombre: "Pinturas Tucán",
        url: "/pages/product/ferreteria/pinturas_y_acabados/pinturas_tucan.html",
        categoria: "pinturas_y_acabados",
        precio: 2700, // número para carrito
        precioTexto: "Precio: $2,700", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/pintura/pinturas_tucan.avif"
    },
    {
        id: "rodillo_de_pintura",
        nombre: "Rodillo de Pintura",
        url: "/pages/product/ferreteria/pinturas_y_acabados/rodillo_de_pintura.html",
        categoria: "pinturas_y_acabados",
        precio: 1400, // número para carrito
        precioTexto: "Precio: $1,400", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/pintura/rodillo_de_pintura.avif"
    },

    //Plomería
    {
        id: "grifo_moderno",
        nombre: "Grifo Moderno",
        url: "/pages/product/ferreteria/plomeria/grifo_moderno.html",
        categoria: "plomeria",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/plomeria/grifo_moderno.avif"
    },
    {
        id: "grifo",
        nombre: "Grifo",
        url: "/pages/product/ferreteria/plomeria/grifo.html",
        categoria: "plomeria",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/plomeria/grifo.avif"
    },
    {
        id: "manguera_de_jardin",
        nombre: "Manguera de Jardín",
        url: "/pages/product/ferreteria/plomeria/manguera_de_jardin.html",
        categoria: "plomeria",
        precio: 3100, // número para carrito
        precioTexto: "Precio: $3,100", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/plomeria/manguera_de_jardin.jpeg"
    },
    {
        id: "manguera",
        nombre: "Manguera",
        url: "/pages/product/ferreteria/plomeria/manguera.html",
        categoria: "plomeria",
        precio: 2400, // número para carrito
        precioTexto: "Precio: $2,400", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/plomeria/manguera.avif"
    },
    {
        id: "tubo_de_drenaje",
        nombre: "Tubo de Drenaje",
        url: "/pages/product/ferreteria/plomeria/tubo.html",
        categoria: "plomeria",
        precio: 600, // número para carrito
        precioTexto: "Precio: $600", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ferreteria/plomeria/tubo_drenaje.avif"
    },

    //--Juguetes--//

    //juguetes para ninas
    {
        id: "muñeca_baby_doll",
        nombre: "Muñeca Baby Doll",
        url: "/pages/product/juguetes/juguetes_para_ninas/baby_doll.html",
        categoria: "juguetes_para_ninas",
        precio: 500, // número para carrito
        precioTexto: "Precio: $500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_ninas/baby_doll.avif"
    },
    {
        id: "muñeca_barbie",
        nombre: "Muñeca Barbie",
        url: "/pages/product/juguetes/juguetes_para_ninas/barbie.html",
        categoria: "juguetes_para_ninas",
        precio: 1000, // número para carrito
        precioTexto: "Precio: $1,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_ninas/barbie.avif"
    },
    {
        id: "juguetes_de_peluqueria",
        nombre: "Juguetes de Peluquería",
        url: "/pages/product/juguetes/juguetes_para_ninas/juguetes_peluqueria.html",
        categoria: "juguetes_para_ninas",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_ninas/juguetes_de_peluqueria.avif"
    },
    {
        id: "kit_de_maquillaje",
        nombre: "Kit de Maquillaje",
        url: "/pages/product/juguetes/juguetes_para_ninas/kit_de_maquillaje.html",
        categoria: "juguetes_para_ninas",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_ninas/kit_de_maquillaje.avif"
    },
    {
        id: "pinta_uñas",
        nombre: "Pinta Uñas",
        url: "/pages/product/juguetes/juguetes_para_ninas/pinta_unas.html",
        categoria: "juguetes_para_ninas",
        precio: 1400, // número para carrito
        precioTexto: "Precio: $1,400", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_ninas/pinta_unas.avif"
    },

    //juguetes para niños
    {
        id: "auto_azul",
        nombre: "Auto Azul",
        url: "/pages/product/juguetes/juguetes_para_niños/auto_azul.html",
        categoria: "juguetes_para_niños",
        precio: 1800, // número para carrito
        precioTexto: "Precio: $1,800", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_niños/auto_azul.avif"
    },
    {
        id: "avion_de_juguete",
        nombre: "Avión de Juguete",
        url: "/pages/product/juguetes/juguetes_para_niños/avion_juguete.html",
        categoria: "juguetes_para_niños",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_niños/avion.avif"
    },
    {
        id: "autos_hot_wheels",
        nombre: "Autos Hot Wheels",
        url: "/pages/product/juguetes/juguetes_para_niños/hot_wheels.html",
        categoria: "juguetes_para_niños",
        precio: 3500, // número para carrito
        precioTexto: "Precio: $3,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_niños/autos_hot_wheels.avif"
    },
    {
        id: "legos_de_creeper",
        nombre: "Legos de Creeper",
        url: "/pages/product/juguetes/juguetes_para_niños/legos_creeper.html",
        categoria: "juguetes_para_niños",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_niños/lego_creeper.avif"
    },
    {
        id: "legos_de_minecraft",
        nombre: "Legos de Minecraft",
        url: "/pages/product/juguetes/juguetes_para_niños/legos_minecraft.html",
        categoria: "juguetes_para_niños",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/juguetes/juguetes_para_niños/lego_minecraft.avif"
    },

    //--Muebles y Decoración--//

    //Floreros
    {
        id: "florero_de_plantas",
        nombre: "Florero de Plantas",
        url: "/pages/product/muebles_y_decoracion/floreros/florero_de_plantas.html",
        categoria: "floreros",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/floreros/florero_de_plantas.avif"
    },
    {
        id: "florero_de_vidrio",
        nombre: "Florero de Vidrio",
        url: "/pages/product/muebles_y_decoracion/floreros/florero_de_vidrio.html",
        categoria: "floreros",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/floreros/florero_de_vidrio.avif"
    },
    {
        id: "jarron",
        nombre: "Jarrón",
        url: "/pages/product/muebles_y_decoracion/floreros/jarron.html",
        categoria: "floreros",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/floreros/jarron.avif"
    },
    {
        id: "jarrones",
        nombre: "Jarrones",
        url: "/pages/product/muebles_y_decoracion/floreros/jarrones.html",
        categoria: "floreros",
        precio: 3500, // número para carrito
        precioTexto: "Precio: $3,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/floreros/jarrones.avif"
    },
    {
        id: "tulipanes",
        nombre: "Tulipanes",
        url: "/pages/product/muebles_y_decoracion/floreros/tulipanes.html",
        categoria: "floreros",
        precio: 4200, // número para carrito
        precioTexto: "Precio: $4,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/floreros/tulipanes.avif"
    },

    //Mesas
    {
        id: "Mesa_de_Madera",
        nombre: "Mesa de Madera",
        url: "/pages/product/muebles_y_decoracion/mesas/mesa_de_madera.html",
        categoria: "mesas",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/mesas/mesa_madera.avif"
    },
    {
        id: "mesa_de_noche",
        nombre: "Mesa de Noche",
        url: "/pages/product/muebles_y_decoracion/mesas/mesa_de_noche.html",
        categoria: "mesas",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/mesas/mesa_de_noche.avif"
    },
    {
        id: "mesa_moderna",
        nombre: "Mesa Moderna",
        url: "/pages/product/muebles_y_decoracion/mesas/mesa_moderna.html",
        categoria: "mesas",
        precio: 6300, // número para carrito
        precioTexto: "Precio: $6,300", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/mesas/mesa_moderna.avif"
    },
    {
        id: "mesa_oscura",
        nombre: "Mesa Oscura",
        url: "/pages/product/muebles_y_decoracion/mesas/mesa_oscura.html",
        categoria: "mesas",
        precio: 8000, // número para carrito
        precioTexto: "Precio: $8,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/mesas/mesa_oscura.avif"
    },
    {
        id: "mesa_pequena",
        nombre: "Mesa Pequeña",
        url: "/pages/product/muebles_y_decoracion/mesas/mesa_pequena.html",
        categoria: "mesas",
        precio: 12500, // número para carrito
        precioTexto: "Precio: $12,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/mesas/mesa_pequena.avif"
    },

    //Sillones
    {
        id: "sillon_amarillo",
        nombre: "Sillón Amarillo",
        url: "/pages/product/muebles_y_decoracion/sillones/sillon_amarillo.html",
        categoria: "sillones",
        precio: 4500, // número para carrito
        precioTexto: "Precio: $4,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sillon/sillon_amarillo.avif"
    },
    {
        id: "sillon_azul",
        nombre: "Sillón Azul",
        url: "/pages/product/muebles_y_decoracion/sillones/sillon_azul.html",
        categoria: "sillones",
        precio: 5500, // número para carrito
        precioTexto: "Precio: $5,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sillon/sillon_azul.avif"
    },
    {
        id: "sillon_blanco",
        nombre: "Sillón Blanco",
        url: "/pages/product/muebles_y_decoracion/sillones/sillon_blanco.html",
        categoria: "sillones",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sillon/sillon_blanco.avif"
    },
    {
        id: "sillon_gris",
        nombre: "Sillón Gris",
        url: "/pages/product/muebles_y_decoracion/sillones/sillon_gris.html",
        categoria: "sillones",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sillon/sillon_gris.avif"
    },
    {
        id: "sillon_verde",
        nombre: "Sillón Verde",
        url: "/pages/product/muebles_y_decoracion/sillones/sillon_verde.html",
        categoria: "sillones",
        precio: 7000, // número para carrito
        precioTexto: "Precio: $7,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sillon/sillon_verde.avif"
    },

    //Sofás
    {
        id: "sofa_cama_blanco",
        nombre: "Sofá Cama Blanco",
        url: "/pages/product/muebles_y_decoracion/sofas/sofa_cama_blanco.html",
        categoria: "sofas",
        precio: 9000, // número para carrito
        precioTexto: "Precio: $9,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sofa/sofa_cama_blanco.png"
    },
    {
        id: "Sofa_gris",
        nombre: "Sofá Gris",
        url: "/pages/product/muebles_y_decoracion/sofas/sofa_gris.html",
        categoria: "sofas",
        precio: 8000, // número para carrito
        precioTexto: "Precio: $8,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sofa/sofa_gris.avif"
    },
    {
        id: "Sofa_media_luna",
        nombre: "Sofá Media Luna",
        url: "/pages/product/muebles_y_decoracion/sofas/sofa_media_luna.html",
        categoria: "sofas",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sofa/sofa_media_luna.avif"
    },
    {
        id: "Sofa_negro",
        nombre: "Sofá Negro",
        url: "/pages/product/muebles_y_decoracion/sofas/sofa_negro.html",
        categoria: "sofas",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sofa/sofa_negro.avif"
    },
    {
        id: "Sofa_verde",
        nombre: "Sofá Verde",
        url: "/pages/product/muebles_y_decoracion/sofas/sofa_verde.html",
        categoria: "sofas",
        precio: 14000, // número para carrito
        precioTexto: "Precio: $14,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/muebles_y_decoracion/sofa/sofa_verde.avif"
    },

    //--Ropa--//

    //Pantalones para Hombres
    {
        id: "pantalon_negro",
        nombre: "Pantalón Negro",
        url: "/pages/product/ropa/pantalones_para_hombres/pantalon_negro.html",
        categoria: "pantalones_para_hombres",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_hombres/pantalon_negro.avif"
    },
    {
        id: "pantalones_de_golf",
        nombre: "Pantalones de Golf",
        url: "/pages/product/ropa/pantalones_para_hombres/pantalones_de_golf.html",
        categoria: "pantalones_para_hombres",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_hombres/pantalones_de_golf.avif"
    },
    {
        id: "pantalones_deportivos_joggers",
        nombre: "Pantalones Deportivos Joggers",
        url: "/pages/product/ropa/pantalones_para_hombres/pantalones_deportivos_joggers.html",
        categoria: "pantalones_para_hombres",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_hombres/pantalones_deportivos_joggers.avif"
    },
    {
        id: "pantalones_jeans",
        nombre: "Pantalones Jeans",
        url: "/pages/product/ropa/pantalones_para_hombres/pantalones_jeans.html",
        categoria: "pantalones_para_hombres",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_hombres/pantalones_jeans.avif"
    },
    {
        id: "pantalones_joggers",
        nombre: "Pantalones Joggers",
        url: "/pages/product/ropa/pantalones_para_hombres/pantalones_joggers.html",
        categoria: "pantalones_para_hombres",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_hombres/pantalones_joggers.avif"
    },

    // Pantalones para Mujeres

    {
        id: "leggings_de_licra",
        nombre: "Leggings de Licra",
        url: "/pages/product/ropa/pantalones_para_mujeres/leggings.html",
        categoria: "pantalones_para_mujeres",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_mujeres/licra.avif"
    },
    {
        id: "pantalon_acampanado",
        nombre: "Pantalón Acampanado",
        url: "/pages/product/ropa/pantalones_para_mujeres/pantalon_acampanado.html",
        categoria: "pantalones_para_mujeres",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_mujeres/pantalon_acampanado.avif"
    },
    {
        id: "pantalon_casual",
        nombre: "Pantalón Casual",
        url: "/pages/product/ropa/pantalones_para_mujeres/pantalon_casual.html",
        categoria: "pantalones_para_mujeres",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_mujeres/pantalon_casual.avif"
    },
    {
        id: "pantalon_jean",
        nombre: "Pantalón Jean",
        url: "/pages/product/ropa/pantalones_para_mujeres/pantalon_jean.html",
        categoria: "pantalones_para_mujeres",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_mujeres/pantalon_jean_mujer.avif"
    },
    {
        id: "pantalon_liso_mujer",
        nombre: "Pantalón Liso Mujer",
        url: "/pages/product/ropa/pantalones_para_mujeres/pantalon_liso.html",
        categoria: "pantalones_para_mujeres",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_mujeres/pantalon_liso_mujer.avif"
    },

    // Pantalones para niños
    {
        id: "jean_para_niños",
        nombre: "Jean para niños",
        url: "/pages/product/ropa/pantalones_para_niños/jean_para_niños.html",
        categoria: "pantalones_para_niños",
        precio: 1000, // número para carrito
        precioTexto: "Precio: $1,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_niños/jean_niños.avif"
    },
    {
        id: "licra_para_niños",
        nombre: "Licra para niños",
        url: "/pages/product/ropa/pantalones_para_niños/licra_para_niños.html",
        categoria: "pantalones_para_niños",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_niños/licra.avif"
    },
    {
        id: "pantalon_deportivo",
        nombre: "Pantalón Deportivo",
        url: "/pages/product/ropa/pantalones_para_niños/pantalon_deportivo.html",
        categoria: "pantalones_para_niños",
        precio: 2300, // número para carrito
        precioTexto: "Precio: $2,300", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_niños/pantalon_deportivo.avif"
    },
    {
        id: "pantalon_liso",
        nombre: "Pantalón Liso",
        url: "/pages/product/ropa/pantalones_para_niños/pantalon_liso.html",
        categoria: "pantalones_para_niños",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_niños/pantalon_liso.avif"
    },
    {
        id: "pantalones_lisos_para_niños",
        nombre: "Pantalones Lisos para niños",
        url: "/pages/product/ropa/pantalones_para_niños/pantalones_lisos.html",
        categoria: "pantalones_para_niños",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/pantalones_para_niños/pantalon_para_niños.avif"
    },

    // Trajes para Hombres
    {
        id: "traje_2_piezas",
        nombre: "Traje 2 Piezas",
        url: "/pages/product/ropa/trajes_para_hombres/traje_2piezas.html",
        categoria: "trajes_para_hombres",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/trajes_para_hombre/traje_2piezas.avif"
    },
    {
        id: "traje_azul",
        nombre: "Traje Azul",
        url: "/pages/product/ropa/trajes_para_hombres/traje_azul.html",
        categoria: "trajes_para_hombres",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/trajes_para_hombre/traje_azul.avif"
    },
    {
        id: "traje_completo",
        nombre: "Traje Completo",
        url: "/pages/product/ropa/trajes_para_hombres/traje_completo.html",
        categoria: "trajes_para_hombres",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/trajes_para_hombre/traje_completo.avif"
    },
    {
        id: "traje_elegante",
        nombre: "Traje Elegante",
        url: "/pages/product/ropa/trajes_para_hombres/traje_elegante.html",
        categoria: "trajes_para_hombres",
        precio: 3500, // número para carrito
        precioTexto: "Precio: $3,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/trajes_para_hombre/traje_elegante.avif"
    },
    {
        id: "traje_negro",
        nombre: "Traje Negro",
        url: "/pages/product/ropa/trajes_para_hombres/traje_negro.html",
        categoria: "trajes_para_hombres",
        precio: 4200, // número para carrito
        precioTexto: "Precio: $4,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/trajes_para_hombre/traje_negro.avif"
    },

    //Vestidos
    {
        id: "vestido_ajustado",
        nombre: "Vestido Ajustado",
        url: "/pages/product/ropa/vestidos/vestido_ajustado.html",
        categoria: "vestidos",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/vestido_de_mujer/vestido_ajustado.avif"
    },
    {
        id: "vestido_cuello_cuadrado",
        nombre: "Vestido de Cuello Cuadrado",
        url: "/pages/product/ropa/vestidos/vestido_de_cuello_cuadrado.html",
        categoria: "vestidos",
        precio: 4500, // número para carrito
        precioTexto: "Precio: $4,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/vestido_de_mujer/vestido_cuello_cuadrado.avif"
    },
    {
        id: "vestido_de_invierno",
        nombre: "Vestido de Invierno",
        url: "/pages/product/ropa/vestidos/vestido_de_invierno.html",
        categoria: "vestidos",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/vestido_de_mujer/vestido_de_invierno.avif"
    },
    {
        id: "vestido_elegante",
        nombre: "Vestido Elegante",
        url: "/pages/product/ropa/vestidos/vestido_elegante.html",
        categoria: "vestidos",
        precio: 3500, // número para carrito
        precioTexto: "Precio: $3,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/vestido_de_mujer/vestido_elegante.avif"
    },
    {
        id: "vestido_negro",
        nombre: "Vestido Negro",
        url: "/pages/product/ropa/vestidos/vestido_negro.html",
        categoria: "vestidos",
        precio: 4200, // número para carrito
        precioTexto: "Precio: $4,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/ropa/vestido_de_mujer/vestido_negro.avif"
    },

    //--Tecnología--//

    //Bocinas
    {
        id: "bocina_aiwa",
        nombre: "Bocina Aiwa",
        url: "/pages/product/tecnologia/bocinas/bocina_Aiwa.html",
        categoria: "bocinas",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/bocina/bocina_aiwa.png"
    },
    {
        id: "bocina_lg",
        nombre: "Bocina LG",
        url: "/pages/product/tecnologia/bocinas/bocina_lg.html",
        categoria: "bocinas",
        precio: 4500, // número para carrito
        precioTexto: "Precio: $4,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/bocina/bocina_lg.png"
    },
    {
        id: "bocina_samsung",
        nombre: "Bocina Samsung",
        url: "/pages/product/tecnologia/bocinas/bocina_samsung.html",
        categoria: "bocinas",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/bocina/bocina_samsung.avif"
    },
    {
        id: "bocina_stage",
        nombre: "Bocina Stage",
        url: "/pages/product/tecnologia/bocinas/bocina_stage.html",
        categoria: "bocinas",
        precio: 5500, // número para carrito
        precioTexto: "Precio: $5,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/bocina/bocina_stage.png"
    },
    {
        id: "bocina_tecnomaster",
        nombre: "Bocina tecnomaster",
        url: "/pages/product/tecnologia/bocinas/bocina_tecnomaster.html",
        categoria: "bocinas",
        precio: 9000, // número para carrito
        precioTexto: "Precio: $9,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/bocina/bocina_tecnomaster.avif"
    },

    //Celulares
    {
        id: "celular_samsung_a26",
        nombre: "Celular Samsung A26",
        url: "/pages/product/tecnologia/celulares/celular_a26.html",
        categoria: "celulares",
        precio: 40000, // número para carrito
        precioTexto: "Precio: $40,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/celulares/celular_samsung_a26.png"
    },
    {
        id: "celular_samsung_a35",
        nombre: "Celular Samsung A35",
        url: "/pages/product/tecnologia/celulares/celular_a35.html",
        categoria: "celulares",
        precio: 23000, // número para carrito
        precioTexto: "Precio: $23,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/celulares/celular_samsung_a35.png"
    },
    {
        id: "celular_s24_ultra",
        nombre: "Celular S24 Ultra",
        url: "/pages/product/tecnologia/celulares/celular_s24.html",
        categoria: "celulares",
        precio: 55000, // número para carrito
        precioTexto: "Precio: $55,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/celulares/celular_s24ultra.png"
    },
    {
        id: "iphone_14",
        nombre: "iPhone 14",
        url: "/pages/product/tecnologia/celulares/iphone_14.html",
        categoria: "celulares",
        precio: 35000, // número para carrito
        precioTexto: "Precio: $35,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/celulares/iphone14.avif"
    },
    {
        id: "iphone_14_pro",
        nombre: "iPhone 14 Pro",
        url: "/pages/product/tecnologia/celulares/iphone_14pro.html",
        categoria: "celulares",
        precio: 42000, // número para carrito
        precioTexto: "Precio: $42,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/celulares/iphone14pro.webp"
    },

    //Laptops
    {
        id: "laptop_asus",
        nombre: "Laptop Asus",
        url: "/pages/product/tecnologia/laptops/laptop_asus.html",
        categoria: "laptops",
        precio: 45000, // número para carrito
        precioTexto: "Precio: $45,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/laptops/laptop_asus.png"
    },
    {
        id: "laptop_dell",
        nombre: "Laptop Dell",
        url: "/pages/product/tecnologia/laptops/laptop_dell.html",
        categoria: "laptops",
        precio: 48000, // número para carrito
        precioTexto: "Precio: $48,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/laptops/laptop_dell.png"
    },
    {
        id: "laptop_dragonx",
        nombre: "Laptop DragonX",
        url: "/pages/product/tecnologia/laptops/laptop_dragonx.html",
        categoria: "laptops",
        precio: 54000, // número para carrito
        precioTexto: "Precio: $54,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/laptops/laptop_dragonx.png"
    },
    {
        id: "laptop_hp",
        nombre: "Laptop HP",
        url: "/pages/product/tecnologia/laptops/laptop_hp.html",
        categoria: "laptops",
        precio: 56000, // número para carrito
        precioTexto: "Precio: $56,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/laptops/laptop_hp.png"
    },
    {
        id: "laptop_lenovo",
        nombre: "Laptop Lenovo",
        url: "/pages/product/tecnologia/laptops/laptop_lenovo.html",
        categoria: "laptops",
        precio: 70000, // número para carrito
        precioTexto: "Precio: $70,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/laptops/laptop_lenovo.png"
    },

    //Tablets
    {
        id: "tablet_apple",
        nombre: "Tablet Apple",
        url: "/pages/product/tecnologia/tablets/tablet_apple.html",
        categoria: "tablets",
        precio: 30000, // número para carrito
        precioTexto: "Precio: $30,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/tablets/tablet_apple.avif"
    },
    {
        id: "tablet_rted",
        nombre: "Tablet RTED",
        url: "/pages/product/tecnologia/tablets/tablet_rted.html",
        categoria: "tablets",
        precio: 23000, // número para carrito
        precioTexto: "Precio: $23,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/tablets/tablet_rted.avif"
    },
    {
        id: "tablet_samsung",
        nombre: "Tablet Samsung",
        url: "/pages/product/tecnologia/tablets/tablet_samsung.html",
        categoria: "tablets",
        precio: 26000, // número para carrito
        precioTexto: "Precio: $26,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/tablets/tablet_samsung.avif"
    },
    {
        id: "tablet_tcl",
        nombre: "Tablet TCL",
        url: "/pages/product/tecnologia/tablets/tablet_tcl.html",
        categoria: "tablets",
        precio: 15000, // número para carrito
        precioTexto: "Precio: $15,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/tablets/tablet_tcl.png"
    },
    {
        id: "tablet_tecnomaster",
        nombre: "Tablet tecnomaster",
        url: "/pages/product/tecnologia/tablets/tablet_tecnomaster.html",
        categoria: "tablets",
        precio: 22000, // número para carrito
        precioTexto: "Precio: $22,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/tablets/tablet_tecnomaster.avif"
    },

    //Televisores
    {
        id: "televisor_led_50",
        nombre: "Televisor LED 50 Pulgadas",
        url: "/pages/product/tecnologia/televisores/televisor_led_50.html",
        categoria: "televisores",
        precio: 36500, // número para carrito
        precioTexto: "Precio: $36,500", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/televisores/tv_led_50pulgadas.png"
    },
    {
        id: "televisor_led_lg",
        nombre: "Televisor LED LG",
        url: "/pages/product/tecnologia/televisores/televisor_lg.html",
        categoria: "televisores",
        precio: 57000, // número para carrito
        precioTexto: "Precio: $57,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/televisores/tv_led_lg.png"
    },
    {
        id: "televisor_led_samsung",
        nombre: "Televisor LED Samsung",
        url: "/pages/product/tecnologia/televisores/televisor_samsung_led.html",
        categoria: "televisores",
        precio: 56000, // número para carrito
        precioTexto: "Precio: $56,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/televisores/tv_led_samsung.avif"
    },
    {
        id: "televisor_led_tecnomaster",
        nombre: "Televisor LED tecnomaster",
        url: "/pages/product/tecnologia/televisores/televisor_tecnomaster.html",
        categoria: "televisores",
        precio: 55200, // número para carrito
        precioTexto: "Precio: $55,200", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/televisores/tv_led_tecnomaster.avif"
    },
    {
        id: "televisor_samsung_75_pulgadas",
        nombre: "Televisor Samsung 75 pulgadas",
        url: "/pages/product/tecnologia/televisores/tv_samsung_75.html",
        categoria: "televisores",
        precio: 44000, // número para carrito
        precioTexto: "Precio: $44,000", // texto para mostrar en resultados
        imagen: "/assets/images/productos/tecnologia/televisores/tv_samsung.png"
    },

];

