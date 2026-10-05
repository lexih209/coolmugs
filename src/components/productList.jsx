import ProductCard from './productCard'

function ProductList({ products, onSelectProduct }) {
  return (
    <div className="row g-4">

      {products.map((product) => (
        <div
          className="col-6 col-md-4 col-xl-3"
          key={product.id}>


          <ProductCard
            product={product}
            onSelectProduct={onSelectProduct}/>
        </div>
      ))}
    </div>
  )
}

export default ProductList