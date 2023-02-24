import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // setCart([...cart, product])
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    console.log('productInCartIndex', productInCartIndex)
    console.log('DATA product', product)
    console.log('DATA cart', cart)
    // if (cart.includes(product)) {
    //   const productInCartIndex2 = cart.indexOf(product)
    //   console.log('productInCartIndex2', productInCartIndex2)
    // }

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      console.log('newCart', newCart)

      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product, // Añadimos quantity como un elemnto más del objeto product
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
