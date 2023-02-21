import productsList from '../mocks/products.json'

export function useDisplayedProducts () {
  const { products, ...productJsonInfo } = productsList

  return { products, ...productJsonInfo }
}
