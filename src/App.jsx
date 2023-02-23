import { ProductsList } from './components/ProductsList'
import { FilterBar } from './components/FilterBar'
import { useDisplayedProducts } from './hooks/useDisplayedProducts'
import { Footer } from './components/Footer'

function App () {
  const { filterPrice, setFilterPrice, filters, setFilters, filteredProducts, setFilteredProducts, products, ...productJsonInfo } = useDisplayedProducts()
  console.log('Selected filters', filters)

  return (
    <>
      <FilterBar filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} filterPrice={filterPrice} setFilterPrice={setFilterPrice} filters={filters} setFilters={setFilters} productJsonInfo={productJsonInfo} products={products} />
      <ProductsList filteredProducts={filteredProducts} />
      <Footer filters={filters} filterPrice={filterPrice} />
    </>
  )
}

export default App
