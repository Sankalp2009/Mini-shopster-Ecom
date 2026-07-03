const InitialState = {
  isLoading: false,
  isError: false,
  Error: null,
  isAuth: false,
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
        isAuth: false,
        accessToken: null,
      }
    case 'Login_Success':
      return {
        ...currentState,
        isLoading: false,
        isError: false,
        Error: null,
        isAuth: true,
        accessToken: payload.Token,
      }

    case 'Login_Failure':
      return {
        ...currentState,
        isLoading: false,
        isError: true,
        isAuth: false,
        Error: payload.error,
        accessToken: null,
      }

    case 'Logout':
      return {
        ...currentState,
        isLoading: false,
        isError: false,
        Error: null,
        isAuth: false,
        accessToken: null,
      }
    default:
      return currentState
  }
}

export { reducer }
