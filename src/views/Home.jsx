function HomeView({ setView }) {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container text-center py-5">
          <h1 className="display-3 fw-bold">Cool Mugs</h1>
          <p className="lead">
            Sip in style!
          </p>

          <button
            className="btn btn-dark btn-lg mt-3"
            onClick={() => setView('shop')}>
            Shop Mugs
          </button>

          <div className="mt-4">
            <img
              src="/homemug.jpg"
              alt="CoolMugs featured mug"
              className="img-fluid rounded"
              style={{ maxHeight: '200px' }}
            />
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h3>Designed for Daily Use</h3>
            <p>Drinkware made for coffee, tea, and everything in between.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h3>Multiple Styles</h3>
            <p>Choose from ceramic, glass, travel, camp, and insulated mugs.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h3>Made to Sip</h3>
            <p>Practical drinkware for serious sippers.</p>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default HomeView