import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const checkProductInCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    return productInCartIndex
  }

  const addToCart = product => {
    // setCart([...cart, product])
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    console.log('DATA cart', cart)
    // if (cart.includes(product)) {
    //   const productInCartIndex2 = cart.indexOf(product)
    //   console.log('productInCartIndex2', productInCartIndex2)
    // }

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)

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

  const removeToCart = (product) => {
    const productInCartIndex = checkProductInCart(product)
    console.log('remove ', cart[productInCartIndex].quantity)
    if (cart[productInCartIndex].quantity === 1) {
      setCart(prevState => prevState.filter(item => item.id !== product.id))
      return
    }

    const newCart = structuredClone(cart)
    newCart[productInCartIndex].quantity -= 1
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      removeToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
