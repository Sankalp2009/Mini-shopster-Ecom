import { Action_Type } from '../Redux/Cart_Reducer/Action'
import { useDispatch } from 'react-redux'

function ProductCard({ product }) {
  
  const { thumbnail, title, price, category } = product
  const dispatch = useDispatch()

  return (
    <div className="product-card">
      {/* Image */}

      <div className="product-image-wrapper">
        <img src={thumbnail} alt={title} className="product-image" />
      </div>

      {/* Content */}

      <div className="product-content">
        <h3 className="product-title">{title}</h3>

        <h3>
          <span style={{ color: 'Green' }}>Category</span> : {category}
        </h3>

        <p className="product-price">₹ {Math.floor(price)}</p>
      </div>

      <button
        className="add-cart-btn"
        onClick={() => {
          dispatch({
            type: Action_Type.Add_cart,
            payload: product,
          })
        }}
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard
