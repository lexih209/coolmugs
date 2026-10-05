import { useRef } from 'react'
import ProductList from './productList'

function FeaturedProducts({ products, onSelectProduct }) {
  const featuredProducts = products
    .filter((product) => product.featuredProduct === true)
    .slice(0, 4)

  const scrollRef = useRef(null)

  function scrollLeft() {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: 'smooth'
    })
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: 'smooth'
    })
  }

  

  return (
    <section className="container pt-2 pb-5">
      <h2 className="text-center mb-4">
        Our favorites
      </h2>

      <div className="d-flex align-items-center gap-2">

        <button
          className="btn btn-dark btn-lg fs-2 lh-1 d-xl-none shop-button"
          onClick={scrollLeft}
          aria-label="Scroll featured products left"
        >
          ‹
        </button>

        <div
            className="featured-scroll flex-grow-1"
            ref={scrollRef}
            
            >
                
          <ProductList
            products={featuredProducts}
            onSelectProduct={onSelectProduct}
          />
        </div>

        <button
          className="btn btn-dark btn-lg fs-2 lh-1 d-xl-none shop-button"
          onClick={scrollRight}
          aria-label="Scroll featured products right"
        >
          ›
        </button>

      </div>
    </section>
  )
}

export default FeaturedProducts