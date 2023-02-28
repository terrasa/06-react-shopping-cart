import { createContext, useEffect, useReducer, useState } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeToCart = product => dispatch({
    type: 'REMOVE_TO_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeToCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeToCart, clearCart } = useCartReducer()
  // const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  // const updateInfoCart = (product) => dispatch({ type: 'UPDATE_INFO_CART' })

  // const checkProductInCart = (product) => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   return productInCartIndex
  // }

  // const addToCart = product => {
  //   // setCart([...cart, product])
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   console.log('DATA cart', cart)

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)

  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product, // Añadimos quantity como un elemnto más del objeto product
  //       quantity: 1
  //     }
  //   ]))
  // }

  // const removeToCart = (product) => {
  //   const productInCartIndex = checkProductInCart(product)
  //   if (cart[productInCartIndex].quantity === 1) {
  //     setCart(prevState => prevState.filter(item => item.id !== product.id))
  //     return
  //   }

  //   const newCart = structuredClone(cart)
  //   newCart[productInCartIndex].quantity -= 1
  //   setCart(newCart)
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  useEffect(() => {
    if (state.length === 0) return
    let units = 0
    state.forEach(item => {
      units = (units + item.quantity)
    })
    setTotalQuantity(units)
  }, [state])

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeToCart,
      clearCart,
      totalQuantity,
      setTotalQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
