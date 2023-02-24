import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'
              alt='Iphone'
            />
            <div>
              <strong>iPhone</strong> - €1448
            </div>
            <footer>
              <small>Unid: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
