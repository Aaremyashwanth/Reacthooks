import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <h3>Arem</h3>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <Link to='/'><li className="nav-link px-2 link-secondary"/>Home</Link>
        <li className="nav-link px-2">Features</li>
        <li className="nav-link px-2">Pricing</li>
        <li className="nav-link px-2">FAQs</li>
        <li className="nav-link px-2">About</li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
        <Link to='/signup'><button type="button" className="btn btn-primary">Sign-up</button></Link>
      </div>
    </header>
  </div>
    </div>
  )
}

export default Navbar
