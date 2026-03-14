import { getAssetUrl } from './utils/assetUtils'

console.log('Testing getAssetUrl...')
const testPath = '/assets/images/productos/alimentos/bebidas/refresco/coca_cola.avif'
const resolved = getAssetUrl(testPath)
console.log(`Original: ${testPath}`)
console.log(`Resolved: ${resolved}`)
