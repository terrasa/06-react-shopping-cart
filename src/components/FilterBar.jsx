import './FilterBar.css'

export function FilterBar ({ filters, setFilters, productJsonInfo, products }) {
  console.log('FilterBar')
  const categoriesInProducts = products.map(product => product.category)
  const [...categories] = new Set(categoriesInProducts) // console.log([...new Set(numbers)]);

  console.log('categories', categories)
  console.log('categories SET', new Set(categories))

  const handleFilter = (event) => {
    if (filters === event.target.name) return
    const newFilters = event.target.name
    setFilters(newFilters)
  }
  // const price = document.querySelector('#price')
  // const output = document.querySelector('.price-output')

  // output.textContent = price.value

  // price.addEventListener('input', () => {
  //   output.textContent = price.value
  // })
  // <output className='price-output' for='price' />

  return (
    <section className='fixed-top bg-dark z-index-1'>
      <header>
        <h1>Shopping Cart</h1>
        <p>El número de referencias disponibles en la tienda es: {productJsonInfo.total}</p>
        <p>Se muestran {productJsonInfo.limit} referencias de {productJsonInfo.total}</p>
      </header>
      <div className='filter-bar'>
        <p className='filter-bar__title'>Filtros</p>
        <button name='laptops' onClick={handleFilter}>
          Categoría laptops
        </button>
        <div>
          <label htmlFor='category'>Categoría</label>
          <select name='category' id='category'>
            {
              categories.map(category => (
                <option value={category} key={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label htmlFor='price'>Rango de precio</label>
          <input type='range' name='price' id='price' min='5' max='2000' />
        </div>
      </div>
    </section>
  )
}
