import { useSelector } from 'react-redux'
import Cart from '../Components/Cart'
// cart data transfer component
function CartPage() {
  const cart = useSelector((state) => state.Cart?.cart_data)

  return (
    <div>
      <Cart data={cart} />
    </div>
  )
}

export default CartPage