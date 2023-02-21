import './FilterBar.css'

export function FilterBar ({ filters, setFilters, products, productJsonInfo }) {
  console.log('FilterBar')
  const handleFilter = (event) => {
    if (filters === event.target.name) return
    const newFilters = event.target.name
    setFilters(newFilters)
  }

  return (
    <section className='fixed-top bg-dark'>
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
        <button>
          Precio Ascendente
        </button>
      </div>
    </section>
  )
}
