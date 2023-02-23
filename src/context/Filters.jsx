import { createContext, useState } from 'react'
import productsList from '../mocks/products.json'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  console.log('FilterProvider')
  const [filters, setFilters] = useState(['All'])
  const [filterPrice, setFilterPrice] = useState('300')
  const { products, ...productJsonInfo } = productsList
  const [filteredProducts, setFilteredProducts] = useState(products)

  return (
    <FiltersContext.Provider value={{
      filters, setFilters, filterPrice, setFilterPrice, filteredProducts, setFilteredProducts, products, productJsonInfo
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
