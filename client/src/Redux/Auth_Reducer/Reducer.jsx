const InitialState = {
  isLoading: false,
  isError: false,
  Error: null,
  accessToken: null,
}

const reducer = (currentState = InitialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'Login_Request':
      return {
        ...currentState,
        isLoading: true,
        isError: false,
        Error: null,
        accessToken: null,
      }
    case 'Login_Success':
      return {
        ...currentState,
        isLoading: false,
        isError: false,
        Error: null,
        accessToken: payload.token,
      }

    case 'Login_Failure':
      return {
        ...currentState,
        isLoading: false,
        isError: true,
        Error: payload.error,
        accessToken: null,
      }

    case 'Logout':
      return {
        ...currentState,
        isLoading: false,
        isError: false,
        Error: null,
        accessToken: null,
      }
    default:
      return currentState
  }
}

export { reducer }
