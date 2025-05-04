import "./pages.css"

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Pro Runner Shoes", price: 129.99, category: "Running", image: "/api/placeholder/300/300" },
    { id: 2, name: "Basketball Pro Jersey", price: 89.99, category: "Basketball", image: "/api/placeholder/300/300" },
    { id: 3, name: "Tennis Racket Elite", price: 199.99, category: "Tennis", image: "/api/placeholder/300/300" },
    { id: 4, name: "Football Training Kit", price: 149.99, category: "Football", image: "/api/placeholder/300/300" },
  ]

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-content">
          <h1>Gear Up For Greatness</h1>
          <p>Premium sports equipment for athletes of all levels</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </div>

      <div className="container">
        <section className="featured-section">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">${product.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="categories-section">
          <h2>Shop By Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src="/api/placeholder/400/250" alt="Running" />
              <h3>Running</h3>
            </div>
            <div className="category-card">
              <img src="/api/placeholder/400/250" alt="Basketball" />
              <h3>Basketball</h3>
            </div>
            <div className="category-card">
              <img src="/api/placeholder/400/250" alt="Football" />
              <h3>Football</h3>
            </div>
            <div className="category-card">
              <img src="/api/placeholder/400/250" alt="Tennis" />
              <h3>Tennis</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
