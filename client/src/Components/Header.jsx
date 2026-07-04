import Search from './Search'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { Action_Type } from '../Redux/Auth_Reducer/Action'

function Header() {
  const cart = useSelector((state) => state.Cart);
  const length = cart?.cart_data?.length || 0;
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state?.Auth);

  return (
    <header className="Header-Top">
      <div className="Header-inner">
        <div className="Header-img">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrC_Ks-lEUuoQQeZEPHa6L5RSa-p3L0W8qdj56kR_2Q&s=10"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="Header-search">
          <div>
            <Link to="/">Home</Link>
          </div>
          <Search />
        </div>

        <div className="Header-actions">
          <div className="cart-wrapper">
            <Link to="/cart">
              <ShoppingCart />
              <span className="cart_length">{length}</span>
            </Link>
          </div>
          {!isAuth ? (
            <div>
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
            </div>
          ) : (
            <div>
              <button 
              className="login-btn"
              onClick={()=>{
                dispatch({
                  type: Action_Type.Logout
                })
              }}
              >Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
