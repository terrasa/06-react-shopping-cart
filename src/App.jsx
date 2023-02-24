import { useDisplayedProducts } from './hooks/useDisplayedProducts'
import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  console.log('Selected filters')
  useDisplayedProducts()

  return (
    <>
      <FilterBar />
      <CartProvider>
        <Cart />
        <ProductsList />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
