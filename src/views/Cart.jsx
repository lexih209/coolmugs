import CartItem from '../components/CartItem'

function Cart({
  cartItems= [],
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  setView
}) {
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <h1>Shopping Cart</h1>

        <p>Your cart is currently empty.</p>

        <button
          className="btn btn-dark"
          onClick={() => setView('shop')}
        >
          Shop Mugs
        </button>
      </div>
    )
  }

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <CartItem
          key={item.cartId}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      ))}

      <div className="text-end mt-4">

        <p>
          Total Items: <strong>{totalItems}</strong>
        </p>

        <h3>
          Subtotal: ${subtotal.toFixed(2)}
        </h3>

        <button
          className="btn btn-outline-dark mt-3"
          onClick={() => setView('shop')}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  )
}

export default Cart