function Navbar({ setView, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-brand btn btn-link text-decoration-none d-flex align-items-center"
          onClick={() => setView('home')}
        >
          <img
            src="/mugLogo.png"
            alt="CoolMugs logo"
            width="35"
            height="35"
            
          />

          CoolMugs
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto">
            <button
              className="nav-link btn btn-link"
              onClick={() => setView('home')}
            >
              Home
            </button>

            <button
              className="nav-link btn btn-link"
              onClick={() => setView('shop')}
            >
              Shop
            </button>

            <button
              className="nav-link btn btn-link"
              onClick={() => setView('account')}
            >
              Account
            </button>

            <button
              className="nav-link btn btn-link"
              onClick={() => setView('cart')}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar