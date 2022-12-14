export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const results = await response.json();
  return results;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export async function getProductsFromQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export async function getProductsFromCategory(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export async function getProductsFromProduct(PRODUCT_ID) {
  const url = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
}
