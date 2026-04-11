const fs = require('fs');

// Leer el archivo de productos
const productsTs = fs.readFileSync('./src/data/productos.ts', 'utf8');
const productIds = [...productsTs.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);

// Leer el JSON de inglés
const enProducts = JSON.parse(fs.readFileSync('./public/locales/en/products.json', 'utf8'));
const enProductIds = Object.keys(enProducts).sort();

// Leer el JSON de español
const esProducts = JSON.parse(fs.readFileSync('./public/locales/es/products.json', 'utf8'));
const esProductIds = Object.keys(esProducts).sort();

console.log('========== VALIDACIÓN DE PRODUCTOS ==========\n');
console.log('Total products in datos: ' + productIds.length);
console.log('Total EN translations: ' + enProductIds.length);
console.log('Total ES translations: ' + esProductIds.length);
console.log('\n========== ANÁLISIS ==========\n');

// Encontrar no traducidos
const notInEn = productIds.filter(id => !enProductIds.includes(id));
const notInEs = productIds.filter(id => !esProductIds.includes(id));

if (notInEn.length > 0) {
  console.log('❌ NOT translated to English: ' + notInEn.length);
  notInEn.forEach(id => console.log('   - ' + id));
} else {
  console.log('✓ ALL products translated to English');
}

console.log('');

if (notInEs.length > 0) {
  console.log('❌ NOT translated to Spanish: ' + notInEs.length);
  notInEs.forEach(id => console.log('   - ' + id));
} else {
  console.log('✓ ALL products translated to Spanish');
}

console.log('\n========== PRODUCTOS INVENTADOS ==========\n');

// Inventados
const extraEn = enProductIds.filter(id => !productIds.includes(id));
const extraEs = esProductIds.filter(id => !productIds.includes(id));

if (extraEn.length > 0) {
  console.log('⚠️  Invented products in EN: ' + extraEn.length);
  extraEn.forEach(id => console.log('   - ' + id));
} else {
  console.log('✓ No invented products in EN');
}

console.log('');

if (extraEs.length > 0) {
  console.log('⚠️  Invented products in ES: ' + extraEs.length);
  extraEs.forEach(id => console.log('   - ' + id));
} else {
  console.log('✓ No invented products in ES');
}

console.log('\n========== RESUMEN ==========\n');
const allGood = notInEn.length === 0 && notInEs.length === 0 && extraEn.length === 0 && extraEs.length === 0;
if (allGood) {
  console.log('✓ ¡VALIDACIÓN EXITOSA! Todos los ' + productIds.length + ' productos están correctamente internacionalizados.');
} else {
  console.log('❌ Se encontraron problemas en la internacionalización.');
}
