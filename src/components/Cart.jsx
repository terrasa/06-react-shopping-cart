import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
// import { CartContext } from '../context/cart'
import { useCart } from '../hooks/useCart'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeToCart, totalQuantity } = useCart()

  // const { cart, clearCart, addToCart, removeToCart, totalQuantity } = useContext(CartContext)
  console.log('cesta ', cart)
  console.log('cesta totalQuantity', totalQuantity)
  // let units = 0
  // const totalQuantity = cart.forEach(item => {
  //   units = units + item.quantity
  //   console.log('items q ', item, item.quantity, units)
  // })
  const cartHasItems = cart.length !== 0
  const cartTitle = cartHasItems
    ? `Hola, tienes ${cart.length} artículos y un total de ${totalQuantity} unidades en la cesta`
    : 'Hola, tu cesta de la compra está vacia'

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
    </>
  )
}
