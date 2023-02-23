import { createContext, useState } from 'react'
import productsList from '../mocks/products.json'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(['All'])
  const [filterPrice, setFilterPrice] = useState('300')
  const { products } = productsList
  const [filteredProducts, setFilteredProducts] = useState(products)

  return (
    <FiltersContext.Provider value={{
      filters, setFilters, filterPrice, setFilterPrice, filteredProducts, setFilteredProducts
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
