import { Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Action_Type } from '../Redux/Cart_Reducer/Action'
function CartCard({ product }) {
  const { id, thumbnail, title, price } = product
  const dispatch = useDispatch()

  return (
    <div>
      <div className="cartContainer">
        <div className="cartImage">
          <img src={thumbnail} alt={title} />
        </div>

        <div className="cartContent">
          <h3>{title}</h3>
          <p>Price:${Math.floor(price)}</p>
        </div>

        <button
          className="deleteBtn"
          onClick={() => {
            dispatch({
              type: Action_Type.Remove_Cart,
              payload: id,
            })
          }}
        >
          <Trash2 />
        </button>
      </div>
      <div></div>
    </div>
  )
}

export default CartCard