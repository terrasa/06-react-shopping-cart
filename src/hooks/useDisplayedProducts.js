import { useContext, useEffect } from 'react'
import { FiltersContext } from '../context/Filters'
import productsList from '../mocks/products.json'

export function useDisplayedProducts () {
  const { products, ...productJsonInfo } = productsList
  const {
    filters, setFilters, filterPrice, setFilterPrice,
    filteredProducts, setFilteredProducts
  } = useContext(FiltersContext)

  let newFilteredProducts = []

  useEffect(() => {
    console.log('useEffect filters >> ', filters)
    const filteredList = () => {
      if (filters.length !== 0) { // no necesario si por defecto all esta selected ???
        if (filters.includes('All')) {
          newFilteredProducts = [products]
        } else {
          filters.forEach((filter) => {
            const filterByCategory = products.filter(product => product.category === filter)
            newFilteredProducts = [...newFilteredProducts, filterByCategory]
          })
        }
      }

      const filterByPrice = newFilteredProducts.flat().filter(product => product.price < filterPrice)
      newFilteredProducts = [filterByPrice]

      setFilteredProducts(newFilteredProducts.flat())
    }
    filteredList()
  }, [filters, filterPrice])

  return { products, ...productJsonInfo }
}
