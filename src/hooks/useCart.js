import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  console.log('useCart >> ')
  const { context } = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return {
    context
  }

  // const { cart, setTotalQuantity, totalQuantity } = useContext(CartContext)
  // useEffect(() => {
  //   let units = 0
  //   async function cartList () {
  //     const newTotal = await cart.forEach(item => {
  //       units = units + item.quantity
  //       console.log('items q ', item, item.quantity, units)
  //     })
  //     setTotalQuantity(await newTotal)
  //   }
  //   cartList()
  // }, [cart, totalQuantity])
}
