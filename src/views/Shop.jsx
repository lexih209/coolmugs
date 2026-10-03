import ProductList from '../components/productList'

function Shop({ products, onSelectProduct }) {
  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="fw-bold">Shop CoolMugs</h1>

        <p className="text-muted">
          Explore our collection of mugs and drinkware.
        </p>
      </div>

      <ProductList
        products={products}
        onSelectProduct={onSelectProduct}
      />
    </div>
  )
}

export default Shop