import { Link, useLocation } from "react-router-dom"
import CartIcon from "./CartIcon"
import "../styles/Navbar.css"

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          FurniStore
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <CartIcon />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
