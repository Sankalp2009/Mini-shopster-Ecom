import CartCard from './CartCard'
// cart data receiving and mapping component
function Cart({ data }) {
  const total = data?.reduce((acc, { price }) => {
    return acc + Math.floor(price)
  }, 0)

  return (
    <div className="cart_flex">
      <div>
        {data && data?.map((el) => <CartCard key={el.id} product={el} />)}
      </div>
      <div className="checkout_sider">
        <h2>Total</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>{total}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>30+</span>
        </div>

        <button>Place Order</button>
      </div>
    </div>
  )
}

export default Cart
