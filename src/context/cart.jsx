import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  const checkProductInCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    return productInCartIndex
  }

  const addToCart = product => {
    // setCart([...cart, product])
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    console.log('DATA cart', cart)

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

  useEffect(() => {
    if (cart.length === 0) return
    let units = 0
    cart.forEach(item => {
      units = (units + item.quantity)
      console.log('items q ', item, item.quantity, units)
    })
    setTotalQuantity(units)
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
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
