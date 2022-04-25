import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand b4 " href="#">CRUD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                      <Link to='/create-post'
                          className="nav-link"
                          href="#"
                      >Create Posts</Link>
            </li>
            <li className="nav-item">
             <Link to='/posts' className='nav-link' href='#'>Posts</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar