import { useContext, useEffect } from 'react'
import { FiltersContext } from '../context/Filters'

export function useDisplayedProducts () {
  console.log('useDisplayProducts >> ')

  const { filters, filterPrice, setFilteredProducts, products } = useContext(FiltersContext)

  let newFilteredProducts = []

  useEffect(() => {
    console.log('useEffect filters >> ')
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
}
