import { useState } from 'react'

function ProductDetail({ product, setView, addToCart }) {
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedCapacity, setSelectedCapacity] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')

  if (!product) {
    return (
      <div className="container py-5">
        <h1>No product selected</h1>

        <button
          className="btn btn-dark"
          onClick={() => setView('shop')}
        >
          Return to Shop
        </button>
      </div>
    )
  }

  function handleAddToCart() {
    if (!selectedColor || !selectedCapacity) {
      setError('Please select a color and capacity.')
      return
    }

    if (quantity < 1) {
      setError('Quantity must be at least 1.')
      return
    }

    addToCart(
      product,
      selectedColor,
      selectedCapacity,
      quantity
    )

    setError('')
    setView('cart')
  }

  return (
    <div className="container py-5">

      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => setView('shop')}
      >
        ← Back to Shop
      </button>

      <div className="row g-5">

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">

          <p className="text-muted">
            {product.category}
          </p>

          <h1 className="fw-bold">
            {product.name}
          </h1>

          <h3 className="my-3">
            ${product.price.toFixed(2)}
          </h3>

          <p>
            {product.longDescription}
          </p>

          <p>
            <strong>Material:</strong> {product.material}
          </p>

          <p>
            <strong>Rating:</strong> ★ {product.rating}
          </p>

          <p>
            <strong>In Stock:</strong> {product.quantityInStock}
          </p>

          <div className="mb-3">
            <label className="form-label">
              <strong>Color</strong>
            </label>

            <select
              className="form-select"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select a color</option>

              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              <strong>Capacity</strong>
            </label>

            <select
              className="form-select"
              value={selectedCapacity}
              onChange={(e) => setSelectedCapacity(e.target.value)}
            >
              <option value="">Select a capacity</option>

              {product.capacities.map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              <strong>Quantity</strong>
            </label>

            <input
              type="number"
              className="form-control"
              min="1"
              max={product.quantityInStock}
              value={quantity}
              onChange={(e) =>
                setQuantity(Number(e.target.value))
              }
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <button
            className="btn btn-dark btn-lg"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail