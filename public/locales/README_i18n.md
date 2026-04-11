# Documentación de Archivos i18n - Locales

Este documento explica la función de cada archivo de traducción en la carpeta `public/locales/`.

---

## Estructura de Carpetas

```
public/locales/
├── en/                          # Inglés (English)
│   ├── categories.json
│   ├── common.json
│   ├── contact.json
│   ├── footer.json
│   ├── header.json
│   ├── home.json
│   ├── legal.json
│   ├── offers.json
│   ├── products.json
│   └── search.json
│
└── es/                          # Español
    ├── categories.json
    ├── common.json
    ├── contact.json
    ├── footer.json
    ├── header.json
    ├── home.json
    ├── legal.json
    ├── offers.json
    ├── products.json
    └── search.json
```

---

## Descripción de Cada Archivo

### 1. **categories.json**
**Función**: Traducción de nombres de categorías de productos
- Contiene 8 categorías principales (alimentos, electrodomésticos, etc.)
- Incluye 25+ subcategorías específicas
- Usado en menús de navegación y filtros de búsqueda
- Estructura: Pares clave-valor simples + objeto `sub` para subcategorías

**Ubicación en App**: 
- Navbar/Menu de categorías
- Página de categorías
- Filtros de productos

---

### 2. **common.json**
**Función**: Elementos comunes reutilizables en toda la aplicación
- Textos genéricos (botones, etiquetas, mensajes)
- Configuración por defecto
- Unidades de medida (kg, lb, litro, etc.)
- Mensajes de SEO comunes
- Estructura breadcrumb

**Ubicación en App**:
- Barra de navegación
- Botones de acción
- Tooltips y ayudas
- Migas de pan (breadcrumb)
- Datos para motores de búsqueda

---

### 3. **contact.json**
**Función**: Contenido específico de la página de contacto
- Información de empresas/contacto
- Métodos de comunicación disponibles
- Dirección y datos de la tienda
- Formulario de contacto

**Ubicación en App**:
- Página `/contact`
- Modal de contacto
- Footer con info de contacto

---

### 4. **footer.json**
**Función**: Contenido del pie de página (footer)
- Información de la empresa (nombre, derechos)
- Enlaces a redes sociales
- Enlaces a políticas legales
- Copyright

**Ubicación en App**:
- Pie de página en todas las páginas
- Botones de redes sociales
- Referencias legales

---

### 5. **header.json**
**Función**: Contenido del encabezado y navegación principal
- Logo y branding
- Menú principal de navegación
- Opciones de usuario (login, carrito)
- Barra de búsqueda
- Enlaces principales

**Ubicación en App**:
- Barra superior de navegación
- Menú principal
- Zona de usuario/carrito

---

### 6. **home.json**
**Función**: Contenido específico de la página de inicio
- Texto hero (título, subtítulo)
- Secciones destacadas
- Descriptions
- Datos para SEO (meta tags)
- Carruseles

**Ubicación en App**:
- Página `/` (inicio)
- Banner heroico
- Secciones de oferta y productos destacados
- Información "Acerca de nosotros"

---

### 7. **legal.json**
**Función**: Contenido legal y de privacidad
- Política de privacidad
- Términos y condiciones
- Aviso legal
- Información de cookies
- Derechos del consumidor

**Ubicación en App**:
- Página `/privacy`
- Página `/terms`
- Modales de confirmación legal
- Cookie consent

---

### 8. **offers.json**
**Función**: Contenido de la página de ofertas/promociones
- Títulos y descriptions de ofertas
- Banners promosionales
- Textos de descuento
- Información de promociones vigentes
- SEO para ofertas

**Ubicación en App**:
- Página `/offers`
- Sección de ofertas destacadas
- Banners de promoción

---

### 9. **products.json**
**Función**: Información detallada de cada uno de los 184 productos
- **Nombre del producto** (name)
- **Descripción detallada** (description)
- **Especificaciones/características** (specs) - Array de 5 detalles

**Datos**: 184 productos completamente internacionalizados
- Alimentos (51)
- Electrodomésticos (24)
- Farmacia (21)
- Ferretería (20)
- Muebles y Decoración (20)
- Ropa (30)
- Juguetes (11)
- Tecnología (27)

**Ubicación en App**:
- Página de detalle de producto `/product/:id`
- Tarjetas de producto en listados
- Resultados de búsqueda

---

### 10. **search.json**
**Función**: Elementos relacionados con búsqueda y filtros
- Placeholders de búsqueda
- Etiquetas de filtros
- Mensajes de "sin resultados"
- Instrucciones de búsqueda
- Texto de ayuda

**Ubicación en App**:
- Barra de búsqueda
- Página `/search`
- Filtros de productos
- Mensajes de resultados

---

## Flujo de Cargas de Traducción

1. **Aplicación inicia** → `i18n.ts` detecta idioma
2. **HttpBackend carga** → `/locales/{idioma}/{namespace}.json`
3. **Componentes consumen** → `useTranslation()` accede a las claves
4. **Renderizado** → Textos en idioma seleccionado

---

## Estructura JSON Standard

Cada archivo sigue este patrón:

```json
{
  "_documentation": {
    "namespace": "Nombre del namespace",
    "description": "Descripción de qué contiene este archivo",
    "usage": "Dónde se usa en la app"
  },
  "clave1": "valor1",
  "clave2": "valor2",
  "seccion": {
    "subclave": "valor"
  }
}
```

---

## Agregar Nuevas Traducciones

1. Elige el namespace (archivo) correcto
2. Agrega la clave-valor en ambos idiomas (EN y ES)
3. Usa en componentes con: `const { t } = useTranslation('namespace')`
4. Accede con: `t('clave.subclave')`

---

## Verificación de Integridad

- Todos los archivos EN e ES están sincronizados
- 184 productos completamente traducidos
- Estructura JSON válida
- Sin claves huérfanas
- Compatible con i18next

---

**Última actualización**: 2026-04-11
**Total de strings traducidos**: 2000+
**Idiomas**: 2 (Español, Inglés)
