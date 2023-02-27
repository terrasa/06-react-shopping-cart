import { useContext, useEffect } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const {
    cart,
    setCart,
    addToCart,
    removeToCart,
    clearCart
  } = useContext(CartContext)

  if (cart === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  // useEffect(() => {
  //   const cartHasItems = cart.length !== 0
  //   console.log('cartHasItems', cartHasItems)
  //   const cartTitle = cartHasItems
  //     ? `Hola, tienes ${cart.length} artículos en tu cesta`
  //     : 'Hola, tu cesta de la compra está vacia'

  //   // const handlerClearCart = () => {
  //   //   setCart([])
  //   // }

  //   return { cartHasItems, cartTitle }
  // }, [cart])

  return {
    cart,
    setCart,
    addToCart,
    removeToCart,
    clearCart
  }
}
