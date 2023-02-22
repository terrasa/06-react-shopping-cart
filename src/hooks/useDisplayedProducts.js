import { useEffect, useState } from 'react'
import productsList from '../mocks/products.json'
export function useDisplayedProducts () {
  const { products, ...productJsonInfo } = productsList
  const [filters, setFilters] = useState(['laptops', 'smartphones'])
  const [filteredProducts, setFilteredProducts] = useState(products)
  let newFilteredProducts = []

  // const isFilter = (product) => {
  //   console.log('filtersss', filters)
  //   filters.forEach((filter) => {
  //     if (product.category === filter) {
  //       console.log(filter, product.category === filter, product)
  //       return product
  //     }
  //   })
  // }

  useEffect(() => {
    console.log('useEffect filters >> ')
    const filteredList = () => {
      if (filters.length !== 0) {
        console.log('filters 2', filters)
        // const newFilteredProducts = products.filter(isFilter) // (product => product.category === filters) // (isFilter)

        filters.forEach((filter) => {
          console.log('1 -', filter)
          const otro = products.filter(product => product.category === filter)
          console.log('2 -', otro)

          newFilteredProducts = [...newFilteredProducts, otro]
        })

        setFilteredProducts(newFilteredProducts.flat())
        // return await newfilteredProducts
        // filters.forEach((filter) => {
        //   products.filter(product => product.category === filters)
        // })
        console.log('newww', newFilteredProducts)
      }
      // return products
    }
    filteredList()
  }, [filters])

  return { filters, setFilters, filteredProducts, setFilteredProducts, products, ...productJsonInfo }
}
