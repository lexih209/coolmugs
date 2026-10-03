function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {
  const lineTotal = item.price * item.quantity

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">

          <div className="col-md-2">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-4">
            <h5>{item.name}</h5>

            <p className="mb-1">
              Color: {item.color}
            </p>

            <p className="mb-1">
              Capacity: {item.capacity}
            </p>

            <p className="mb-0">
              ${item.price.toFixed(2)} each
            </p>
          </div>

          <div className="col-md-3">
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary"
                onClick={() => decreaseQuantity(item.cartId)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                className="btn btn-outline-secondary"
                onClick={() => increaseQuantity(item.cartId)}
              >
                +
              </button>
            </div>
          </div>

          <div className="col-md-2">
            <strong>${lineTotal.toFixed(2)}</strong>
          </div>

          <div className="col-md-1">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeItem(item.cartId)}
            >
              Remove
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem