import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
// import { useState } from 'react'
import { useDisplayedProducts } from './hooks/useDisplayedProducts'

function App () {
  const { filters, setFilters, filteredProducts, setFilteredProducts, products, ...productJsonInfo } = useDisplayedProducts()
  // const [filters, setFilters] = useState([])
  console.log('Selected filters', filters)

  return (
    <>
      <FilterBar filters={filters} setFilters={setFilters} productJsonInfo={productJsonInfo} products={products} />
      <ProductsList filteredProducts={filteredProducts} />
    </>
  )
}

export default App
