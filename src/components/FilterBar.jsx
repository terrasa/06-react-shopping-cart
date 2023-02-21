import './FilterBar.css'

export function FilterBar ({ products, productJsonInfo }) {
  return (
    <section>
      <header>
        <p>El número de referencias disponibles en la tienda es: {productJsonInfo.total}</p>
        <p>Se muestran {productJsonInfo.limit} referencias de {productJsonInfo.total}</p>
      </header>
      <div className='filter-bar'>
        <p className='filter-bar__title'>Filtros</p>
        <button>
          Categoría
        </button>
        <button>
          Precio Ascendente
        </button>
      </div>
    </section>
  )
}
