"use client"
import { useParams, useNavigate } from "react-router-dom"
import { furnitureData } from "../data/furniture"
import { useCart } from "../context/CartContext"
import "../styles/ProductDetail.css"

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = furnitureData.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert("Product added to cart!")
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-btn" onClick={() => navigate("/products")}>
          ← Back to Products
        </button>

        <div className="product-detail-content">
          <div className="product-image-large">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>

          <div className="product-info-detailed">
            <h1>{product.name}</h1>
            <p className="category">{product.category}</p>

            <div className="rating-section">
              <div className="stars">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="rating-number">{product.rating}</span>
              <span className="reviews-count">({product.reviews} reviews)</span>
            </div>

            <div className="price-section">
              <span className="price">${product.price}</span>
              <span className={`stock-status ${product.inStock ? "in-stock" : "out-of-stock"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="actions">
              <button
                className={`add-to-cart-large ${!product.inStock ? "disabled" : ""}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
