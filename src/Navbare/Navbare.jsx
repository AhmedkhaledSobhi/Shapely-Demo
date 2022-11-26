import React from 'react'

import NavbareStyle from './Navbare.module.css'
export default function Navbare() {
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top bg-light ">
          <div className="container w-75">
            <a className="navbar-brand text-muted fs-3" to="#">Shapely Demo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link mx-2 ${NavbareStyle.navlink}`} aria-current="page" to="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-2 ${NavbareStyle.navlink}`} to="#">Blog</a>
                </li>

                <li className="nav-item">
                  <a className={`nav-link mx-2 ${NavbareStyle.navlink}`} to="#">Portfolio</a>
                </li>

                <li className="nav-item dropdown">
                  <a className={`nav-link mx-2 dropdown-toggle ${NavbareStyle.navlink}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About The Tests
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" to="#">Page Image Alignment</a></li>
                    <li><a className="dropdown-item" to="#">Page Markup And Formatting</a></li>
                    <li><a className="dropdown-item" to="#">Clearing Floats</a></li>
                    <li><a className="dropdown-item" to="#">Page with comments</a></li>
                    <li><a className="dropdown-item" to="#">Page with comments disabled</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className={`nav-link mx-2 dropdown-toggle ${NavbareStyle.navlink}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Level 1 
                  </a>
                  <ul className="dropdown-menu">
                    
                    <li><a className="dropdown-item" to="#">Level 2</a></li>

                    <li><a className="dropdown-item" to="#">Level 2a</a></li>
                    <li><a className="dropdown-item" to="#">Level 2b</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-2 ${NavbareStyle.navlink }`} to="#">Shop</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link mx-2 ${NavbareStyle.navlink}`} to="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                </li>

              
              </ul>
            
            </div>
          </div>
        </nav>
    </>
  )
}
