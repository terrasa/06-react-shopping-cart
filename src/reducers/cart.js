export const cartInitialState = []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)

        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case CART_ACTION_TYPES.REMOVE_TO_CART: {
      const { id } = actionPayload
      const checkProductInCart = (actionPayload) => {
        const productInCartIndex = state.findIndex(item => item.id === id)
        return productInCartIndex
      }
      const productInCartIndex = checkProductInCart(actionPayload)
      if (state[productInCartIndex].quantity === 1) {
        return state.filter(item => item.id !== id)
      }

      const newState = structuredClone(state)
      newState[productInCartIndex].quantity -= 1
      return newState
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      return cartInitialState
    }
  }
  return state
}
