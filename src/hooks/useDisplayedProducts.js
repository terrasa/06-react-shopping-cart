import { useEffect, useState } from 'react'
import productsList from '../mocks/products.json'
export function useDisplayedProducts () {
  const { products, ...productJsonInfo } = productsList
  const [filters, setFilters] = useState([])
  // const [filterPrice, setFilterPrice] = useState([])
  const [filteredProducts, setFilteredProducts] = useState(products)
  let newFilteredProducts = []

  useEffect(() => {
    console.log('useEffect filters >> ')
    const filteredList = () => {
      if (filters.length !== 0) {
        console.log('filters 2', filters)

        filters.forEach((filter) => {
          if (filter.startsWith('price')) {
            console.log('1 -', filter)
            const otro = newFilteredProducts.flat().filter(product => product.price < (filter.split('-').slice(-1))[0])
            console.log('2 -', otro)
            newFilteredProducts = [otro]
          } else {
            console.log('1 -', filter)
            const otro = products.filter(product => product.category === filter)
            console.log('2 -', otro)
            newFilteredProducts = [...newFilteredProducts, otro]
          }
        })

        setFilteredProducts(newFilteredProducts.flat())
        console.log('newww', newFilteredProducts)
      }
    }
    filteredList()
  }, [filters])

  return { filters, setFilters, filteredProducts, setFilteredProducts, products, ...productJsonInfo }
}
