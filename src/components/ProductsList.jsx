import './ProductsList.css'
import { AddToCartIcon } from './icons'
import { useEffect, useState } from 'react'

export function ProductsList ({ filters, products, productJsonInfo }) {
  // const [category, setCategory] = useState()
  console.log('filters ', filters)
  console.log('products ', products)

  const [productsFiltered, setProductsFiltered] = useState(products)

  console.log('productsFiltered ', productsFiltered)

  useEffect(() => {
    const filteredList = async () => {
      if (filters.length !== 0) {
        const newProductsFiltered = await products.filter(product => product.category === filters)
        setProductsFiltered(await newProductsFiltered)
        console.log('newProductsFiltered ', newProductsFiltered)
        console.log('productsFiltered ', productsFiltered)
        return await newProductsFiltered
      }
      return products
    }
    const { newProductsFiltered } = filteredList()
    console.log('aaaa ', newProductsFiltered)
  }, [filters])

  console.log('productsFiltered xxx', productsFiltered)

  return (
    <main className='products'>

      <ul>
        {productsFiltered.map(product => (
          <li key={product.id} className='products__card'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className='product__card__box--flex'>
              <div className='box-info'>
                <p className='box-info__title'>Category</p>
                <p>{product.category}</p>
              </div>
              <div className='box-info'>
                <p className='box-info__title'>Descuento %</p>
                <p>{product.discountPercentage}</p>
              </div>
            </div>
            <img src={product.thumbnail} alt={product.title} />
            <div className='product__card__box--flex'>
              <div className='box-info'>
                <p className='box-info__title'>Stock</p>
                <p>{product.stock} unidades</p>
              </div>
              <div className='box-info'>
                <p className='box-info__title'>PVP</p>
                <p>{product.price}€/unid.</p>
              </div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

    </main>
  )
}
