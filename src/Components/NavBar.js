import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.css';
import logo from '../Images/logo.png'

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="" /></Link>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:farman1761md@gmail.com">Mail</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://wwww.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}




export default NavBar