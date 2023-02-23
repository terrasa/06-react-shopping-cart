import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { useDisplayedProducts } from './hooks/useDisplayedProducts'
import { Footer } from './components/Footer'

function App () {
  const { products, ...productJsonInfo } = useDisplayedProducts()
  console.log('Selected filters', productJsonInfo)

  return (
    <>
      <FilterBar productJsonInfo={productJsonInfo} products={products} />
      <ProductsList />
      <Footer />
    </>
  )
}

export default App
