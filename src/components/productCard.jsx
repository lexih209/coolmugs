function ProductCard({ product, onSelectProduct }) {
  return (
    <div
      className="card h-100 shadow-sm"
      style={{ cursor: 'pointer' }}
      onClick={() => onSelectProduct(product)}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body d-flex flex-column">
        <p className="text-muted small mb-1">
          {product.category}
        </p>

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="card-text">
          {product.description}
        </p>

        <div className="mt-auto">
          <p className="fw-bold fs-5 mb-1">
            ${product.price.toFixed(2)}
          </p>

          <p className="small text-muted mb-0">
            ★ {product.rating} ({product.numberOfReviews} reviews)
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard