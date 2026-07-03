import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
function PrivateRoute({ children }) {
  const authState = useSelector((state) => state.Auth)
  console.log(authState)
  if (!authState?.isAuth || !authState?.accessToken) {
    return <Navigate to="/login" replace={true} />
  }

  return children
}

export default PrivateRoute
