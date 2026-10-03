import { useState } from 'react'

import Navbar from './components/navigationbar'
import Home from './views/Home'
import Shop from './views/Shop'
import ProductDetail from './views/ProductsDetail'
import Account from './views/Account'
import CreateAccount from './views/CreateAccount'
import Cart from './views/Cart'

import products from './data/products.json'

function App() {
  const [view, setView] = useState('home')

  const [selectedProduct, setSelectedProduct] = useState(null)

  const [cartItems, setCartItems] = useState([])

  function openProduct(product) {
    setSelectedProduct(product)
    setView('product')
  }

  function addToCart(product, color, capacity, quantity) {
  const cartId =
    `${product.id}-${color}-${capacity}`

  const existingItem = cartItems.find(
    (item) => item.cartId === cartId
  )

  if (existingItem) {
    setCartItems(
      cartItems.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + quantity
            }
          : item
      )
    )
  } else {
    const newItem = {
      cartId,
      productId: product.id,
      name: product.name,
      image: product.image,
      color,
      capacity,
      quantity,
      price: product.price
    }

    setCartItems([
      ...cartItems,
      newItem
    ])
  }
}

  function increaseQuantity(cartId) {
  setCartItems(
    cartItems.map((item) =>
      item.cartId === cartId
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    )
  )
}
  function decreaseQuantity(cartId) {
  setCartItems(
    cartItems.map((item) =>
      item.cartId === cartId
        ? {
            ...item,
            quantity: Math.max(
              1,
              item.quantity - 1
            )
          }
        : item
    )
  )
}

  function removeItem(cartId) {
  setCartItems(
    cartItems.filter(
      (item) => item.cartId !== cartId
    )
  )
}


  const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity, 0)



  function renderView() {
    switch (view) {
      case 'shop':
        return (
          <Shop
            products={products}
            onSelectProduct={openProduct}
          />
        )

      case 'product':
        return (
          <ProductDetail
            product={selectedProduct}
            setView={setView}
            addToCart={addToCart}
          />
        )

      case 'account':
        return <Account setView={setView} />

      case 'createAccount':
        return <CreateAccount setView={setView} />

      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
            setView={setView}
          />
        )
      case 'home':
      default:
        return <Home setView={setView} />
    }
  }

  return (
    <>
      <Navbar
        setView={setView}
        cartCount={cartCount}
      />

      {renderView()}
    </>
  )
}

export default App