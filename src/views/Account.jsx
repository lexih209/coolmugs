function AccountView({ setView }) {
  return (
    <div className="container py-5">
      <h1>Account</h1>

      <form className="mt-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required/>
        </div>

        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>

      <hr className="my-4" />

      <p>Create an account here:</p>

      <button
        className="btn btn-outline-dark"
        onClick={() => setView('createAccount')}
      >
        Create Account
      </button>
    </div>
  )
}

export default AccountView