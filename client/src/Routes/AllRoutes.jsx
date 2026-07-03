import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import CartPage from '../Pages/CartPage'
import Login from '../Pages/Login'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default AllRoutes
