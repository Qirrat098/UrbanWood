"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/ProductCard.css"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
          {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <div className="product-rating">
            <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
            <span className="rating-text">({product.reviews})</span>
          </div>
          <div className="product-price">${product.price}</div>
        </div>
      </Link>
      <button
        className={`add-to-cart-btn ${!product.inStock ? "disabled" : ""}`}
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  )
}

export default ProductCard
