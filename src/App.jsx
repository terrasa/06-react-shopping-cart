import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { useState } from 'react'
import { useDisplayedProducts } from './hooks/useDisplayedProducts'

function App () {
  const { products, ...productJsonInfo } = useDisplayedProducts()
  const [filters, setFilters] = useState([])
  console.log('Selected filters', filters)

  return (
    <>
      <FilterBar filters={filters} setFilters={setFilters} products={products} productJsonInfo={productJsonInfo} />
      <ProductsList filters={filters} products={products} productJsonInfo={productJsonInfo} />
    </>
  )
}

export default App
