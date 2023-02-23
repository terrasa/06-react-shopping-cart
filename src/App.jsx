import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { useDisplayedProducts } from './hooks/useDisplayedProducts'
import { Footer } from './components/Footer'

function App () {
  const { filteredProducts, setFilteredProducts, products, ...productJsonInfo } = useDisplayedProducts()
  console.log('Selected filters')

  return (
    <>
      <FilterBar filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} productJsonInfo={productJsonInfo} products={products} />
      <ProductsList filteredProducts={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
