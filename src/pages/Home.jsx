import { Link } from "react-router-dom"
import { furnitureData } from "../data/furniture"
import ProductCard from "../components/ProductCard"
import "../styles/Home.css"

function Home() {
  const featuredProducts = furnitureData.slice(0, 4)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Space</h1>
          <p>Discover premium furniture that combines style, comfort, and quality</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="view-all-btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <h3>🚚 Free Delivery</h3>
              <p>Free shipping on orders over $500</p>
            </div>
            <div className="feature">
              <h3>🛡️ Quality Guarantee</h3>
              <p>30-day money-back guarantee</p>
            </div>
            <div className="feature">
              <h3>🏠 Expert Design</h3>
              <p>Professional interior design consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
