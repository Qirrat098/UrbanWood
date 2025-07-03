import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function CartIcon() {
  const { getCartItemsCount } = useCart()
  const itemCount = getCartItemsCount()

  return (
    <Link to="/cart" className="cart-icon">
      <span className="cart-symbol">🛒</span>
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </Link>
  )
}

export default CartIcon
