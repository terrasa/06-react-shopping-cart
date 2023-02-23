import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { useDisplayedProducts } from './hooks/useDisplayedProducts'
import { Footer } from './components/Footer'

function App () {
  console.log('Selected filters')
  useDisplayedProducts()

  return (
    <>
      <FilterBar />
      <ProductsList />
      <Footer />
    </>
  )
}

export default App
