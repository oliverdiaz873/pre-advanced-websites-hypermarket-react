export const normalizarTexto = (texto: string): string => {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

export const irAResultados = (texto: string) => {
    const q = encodeURIComponent(texto.trim())
    window.location.href = `/pages/search/index.html?q=${q}`
}
