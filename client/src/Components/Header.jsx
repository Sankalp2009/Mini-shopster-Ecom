import Search from './Search'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'
function Header() {
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
          <div>
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
