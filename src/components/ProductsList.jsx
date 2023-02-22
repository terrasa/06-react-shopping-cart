import './ProductsList.css'
import { AddToCartIcon } from './icons'
// import { useEffect, useState } from 'react'

export function ProductsList ({ filteredProducts }) {
  // console.log('ProductsList')
  // console.log('ProductsList', filteredProducts)

  return (
    <main className='products'>

      <ul>
        {filteredProducts.map(product => ( // slice(0, 10)
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
