const InitialState = {
  cart_data: [],
}

const reducer = (currentState = InitialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'Add_Cart': {
      // check duplication
      const duplicates = currentState.cart_data.some(
        (item) => item.id === payload.id
      )
      if (duplicates) {
        return currentState.cart_data
      }

      return {
        ...currentState,
        cart_data: [currentState.cart_data, payload],
      }
    }
    case 'Remove_Cart':
      return {
        ...currentState,
        cart_data: currentState.cart_data.filter(
          (item) => item.id !== payload.id
        ),
      }
    default:
      return currentState
  }
}

export { reducer }
