import { useEffect, useState } from 'react'
import productsList from '../mocks/products.json'
export function useDisplayedProducts () {
  const { products, ...productJsonInfo } = productsList
  const [filters, setFilters] = useState([])
  const [filterPrice, setFilterPrice] = useState(300)
  const [filteredProducts, setFilteredProducts] = useState(products)
  let newFilteredProducts = []

  useEffect(() => {
    console.log('useEffect filters >> ')
    const filteredList = () => {
      if (filters.length !== 0) { // no necesario si por defecto all esta selected ???
        console.log('filters 1', filters)
        if (filters.includes('All')) {
          newFilteredProducts = [products]
        } else {
          filters.forEach((filter) => {
            const otro = products.filter(product => product.category === filter)
            newFilteredProducts = [...newFilteredProducts, otro]
            console.log('2 - Otro', otro)
            console.log('3 - newFilteredProducts', newFilteredProducts)
          })
          const otro2 = newFilteredProducts.flat().filter(product => product.price < filterPrice)
          newFilteredProducts = [otro2]
          console.log('4 - Otro2', otro2)
          console.log('5 - newFilteredProducts', newFilteredProducts)
        }
        setFilteredProducts(newFilteredProducts.flat())
        console.log('newww', newFilteredProducts)
      }
      // console.log('filter Price', filterPrice)
      // if (filterPrice !== 0) {
      //   const otro = newFilteredProducts.flat().filter(product => product.price < filterPrice)// (filter.split('-').slice(-1))[0])
      //   console.log('2 - PRECIO', otro)
      //   newFilteredProducts = [otro]
      // }
      // setFilteredProducts(newFilteredProducts.flat())
      // console.log('newww', newFilteredProducts)
    }
    filteredList()
  }, [filters])

  return { filterPrice, setFilterPrice, filters, setFilters, filteredProducts, setFilteredProducts, products, ...productJsonInfo }
}

// filters.forEach((filter) => {
//   if (filter.startsWith('price')) {
//     console.log('1 -', filter)
//     const otro = newFilteredProducts.flat().filter(product => product.price < (filter.split('-').slice(-1))[0])
//     console.log('2 -', otro)
//     newFilteredProducts = [otro]
//   }
// })
