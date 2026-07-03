import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import CartPage from '../Pages/CartPage'
import Login from '../Pages/Login'
import PrivateRoute from '../Components/PrivateRoute'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default AllRoutes
