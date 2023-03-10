import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/groupedteammembers' className="nav-link">Teams</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar