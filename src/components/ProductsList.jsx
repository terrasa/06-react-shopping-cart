import './ProductsList.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import { useContext } from 'react'
import { FiltersContext } from '../context/Filters'
// import { useCart } from '../hooks/useCart'
import { CartContext } from '../context/cart'

export function ProductsList () {
  const { filteredProducts } = useContext(FiltersContext)
  const { cart, addToCart, removeToCart } = useContext(CartContext)
  console.log('ProductsList', filteredProducts)

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {filteredProducts.map(product => {
          const isProductInCart = checkProductInCart(product)

          return ( // slice(0, 10)
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
                  <p>{product.stock} unid.</p>
                </div>
                <div className='box-info'>
                  <p className='box-info__title'>PVP</p>
                  <p>{product.price}€/unid.</p>
                </div>
                <div className='cart-actions'>
                  {
                  isProductInCart &&
                    <button onClick={() => removeToCart(product)}>
                      <RemoveFromCartIcon />
                    </button>
                  }
                  <button onClick={() => addToCart(product)}>
                    <AddToCartIcon />
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
