import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { FiltersContext } from '../context/Filters'
import './Footer.css'

export function Footer () {
  console.log('Footer >> ')

  const { filters, filterPrice } = useContext(FiltersContext)
  const { cart } = useContext(CartContext)

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(filterPrice, null, 2)
      }
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
      {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
