import FeaturedProducts from '../components/FeaturedProducts'
function HomeView({ setView, products, onSelectProduct }) {
  return (
    <div>
      <section className="home-hero py-4">
        <div className="container text-center py-3">
          <h1 className="display-1 fw-bold">Cool Mugs</h1>

          <p className="lead">
            Sip in style!
          </p>

          <button
            className="btn btn-lg mt-2 shop-button"
            onClick={() => setView('shop')}
          >
            Shop Mugs
          </button>

          <div className="mt-5">
            <img
              src="https://storage.googleapis.com/cs351-resume26/homemug.jpg"
              alt="CoolMugs featured mug"
              className="home-mug"
            />
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h3>Made to Sip</h3>
            <p>Practical drinkware for serious sippers</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3>For Daily Use</h3>
            <p>Use our drinkware for coffee, tea, and everything else in between</p>
          </div>
          <div className="col-md-4 mb-3">
            <h3>Tons of Styles</h3>
            <p>Choose from many options of materials</p>
          </div>

          
          
        </div>
      </section>
      <FeaturedProducts
          products={products}
          onSelectProduct={onSelectProduct}
        />
    </div>
  )
}

export default HomeView