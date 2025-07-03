"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/Cart.css"

function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <h2>Your cart is empty</h2>
          <p>Add some furniture to get started!</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="quantity-btn">
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="quantity-btn">
                      +
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    Remove
                  </button>
                </div>

                <div className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-line total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>

            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
