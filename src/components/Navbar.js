import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color:"#66fcf1"}}>News Monkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" style={{color:"#66fcf1"}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business" style={{color:"#66fcf1"}}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" style={{color:"#66fcf1"}}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general" style={{color:"#66fcf1"}}>General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" style={{color:"#66fcf1"}}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" style={{color:"#66fcf1"}}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" style={{color:"#66fcf1"}}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" style={{color:"#66fcf1"}}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
