import './App.css'
import productsList from './mocks/products.json'
import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'

function App () {
  const { products, ...productJsonInfo } = productsList
  return (
    <>
      <h1>Shopping Cart</h1>
      <FilterBar products={products} productJsonInfo={productJsonInfo} />
      <ProductsList products={products} productJsonInfo={productJsonInfo} />
    </>
  )
}

export default App
