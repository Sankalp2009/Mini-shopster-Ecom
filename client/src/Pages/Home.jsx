import { Link } from 'react-router'
function Home() {
  return (
    <div className="Home">
      <div>
        <button>
          <Link to='/login'>
          Login
          </Link>
        </button>
      </div>
      <div>
      <button>
      <Link to='/'>
          Home
      </Link>
      </button>
      </div>
    </div>
  )
}

export default Home