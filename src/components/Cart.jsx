import './Cart.css'
import { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
import { CartContext } from '../context/cart'
import { useCart } from '../hooks/useCart'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeToCart } = useCart()
  // const { cart, clearCart, addToCart, removeToCart } = useContext(CartContext)
  console.log('cesta ', cart)
  let units
  const quantityTotal = cart.forEach(item => {
    units = units + item.quantity
  })
  const cartHasItems = cart.length !== 0
  const cartTitle = cartHasItems
    ? `Hola, tienes ${cart.length} artículos y un total de ${quantityTotal} unidades en la cesta`
    : 'Hola, tu cesta de la compra está vacia'

  console.log('CCARTT', cart)

  // const { handlerClearCart } = useCart()
  // const handlerClearCart = () => {
  //   clearCart
  // }

  const handlerAddQuantity = () => {

  }

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <h3>{cartTitle}</h3>
        <ul>
          {
            cartHasItems && cart.map(item => (
              <li key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div>
                  <strong>{item.title}</strong> - {item.price} €/unid.
                </div>
                <footer>
                  <small>Unid: {item.quantity}</small>
                  <button onClick={() => removeToCart(item)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </footer>
              </li>
            ))
          }
        </ul>
        {cartHasItems &&
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>}
      </aside>

      {/* {cartHasItems &&
          `<aside className='cart'>
        <ul>
          <li>
            <img
              src=${cart.thumbnail}
              alt=${cart.title}
            />
            <div>
              <strong>${cart.title}</strong> - {cart.price} €/unid.
            </div>
            <footer>
              <small>Unid: {cart.quantity}</small>
              <button onClick={handlerAddQuantity}>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon onClick={handlerClearCart} />
        </button>
      </aside>`} */}

    </>
  )
}
