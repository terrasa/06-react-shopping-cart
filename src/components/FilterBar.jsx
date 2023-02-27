import { useContext, useId } from 'react'
import { FiltersContext } from '../context/Filters'
import './FilterBar.css'

export function FilterBar () {
  console.log('FilterBar')
  const {
    filters, setFilters, filterPrice, setFilterPrice,
    setFilteredProducts, products, productJsonInfo
  } = useContext(FiltersContext)
  const categoriesInProducts = products.map(product => product.category)
  const [...categories] = new Set(categoriesInProducts)
  categories.unshift('All')

  const categoryFilterID = useId()
  const minPriceFilterId = useId()

  const handleFilter = (event) => {
    console.log('value', event.target.value)
    if (filters.includes(event.target.value)) return
    if (event.target.value === 'All') {
      setFilters(['All'])
    } else {
      if (filters.includes('All')) {
        const newFilters = event.target.value
        const getFilters = [newFilters]
        setFilteredProducts([])
        setFilters(getFilters)
      } else {
        const newFilters = event.target.value
        const getFilters = [...filters, newFilters]
        setFilters(getFilters)
      }
    }
  }

  const handleFilterPrice = (event) => {
    console.log('value', event.target.value)
    if (filterPrice.includes(event.target.value)) return
    const newFilters = event.target.value
    setFilterPrice(newFilters)
  }

  return (
    <section className='filter-bar-container fixed-top bg-dark z-index-1'>
      <header>
        <h1>Shopping Cart</h1>
        <p>El número de referencias disponibles en la tienda es: {productJsonInfo.total}</p>
        <p>Se muestran {productJsonInfo.limit} referencias de {productJsonInfo.total}</p>
      </header>
      <div className='filter-bar'>
        <p className='filter-bar__title'>Filtros</p>
        <div>
          <label htmlFor={categoryFilterID}>Categoría</label>
          <select name='category' id={categoryFilterID} onChange={handleFilter}>
            {
              categories.map(category => (
                <option value={category} key={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label htmlFor={minPriceFilterId}>P.V.P. menor de: </label>
          <input type='range' name='price' id={minPriceFilterId} min='50' max='2000' step='50' value='300' onChange={handleFilterPrice} />
          <span>{filterPrice}</span>
        </div>
        {/* <p className="products-displayed"> Productos mostrados: {filteredProducts.lenght - newFilteredProducts.flat().length}</p> */}
      </div>
    </section>
  )
}
