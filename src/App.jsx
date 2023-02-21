import './App.css'
import productsList from './mocks/products.json'
import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { useState } from 'react'

function App () {
  const { products, ...productJsonInfo } = productsList
  const [filters, setFilters] = useState([])
  console.log(filters)

  return (
    <>
      <h1>Shopping Cart</h1>
      <FilterBar filters={filters} setFilters={setFilters} products={products} productJsonInfo={productJsonInfo} />
      <ProductsList filters={filters} products={products} productJsonInfo={productJsonInfo} />
    </>
  )
}

export default App
