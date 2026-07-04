import { useSelector } from 'react-redux'
import CartCard from '../Components/CartCard';
function CartPage() {
  const cart = useSelector(state => state.Cart);
  return (
    <div>
      <CartCard product={cart?.cart_data}  />
    </div>
  )
}

export default CartPage