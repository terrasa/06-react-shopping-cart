import { useDisplayedProducts } from './hooks/useDisplayedProducts'
import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'
import { useCart } from './hooks/useCart'

function App () {
  console.log('Selected filters')
  useDisplayedProducts()
  // useCart()
  return (
    <>
      <FilterBar />
      <CartProvider>
        <ProductsList />
        <Footer />
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
