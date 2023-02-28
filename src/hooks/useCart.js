import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  console.log('useCart >> ')
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
