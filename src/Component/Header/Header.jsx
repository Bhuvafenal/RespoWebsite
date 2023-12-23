import React from 'react';
import logo from '../../Assest/re-pos_logo.png';
import '../Header/header.css'
import { BsJustify } from "react-icons/bs";

function Header() {
  const header_array=[{
      text:'Tour'
  },{
    text:'Products'
  },
  {
    text:'About'
  },
  {
    text:'RestroTrail'
  },
  {
    text:'Contact'
  },
  {
    text:'Contact'
  }]
  return (
    <>
      <header className="text-center border-bottom p-3 fixed-top bg-white position-fixed top-0" >
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container " >
              <a className="navbar-brand" href="#"><img src={logo} alt="" style={{ height: "45px", width: '190px' }}/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-sharp fa-solid fa-bars-staggered"><BsJustify/></i>
              </button>
              <div className="collapse navbar-collapse header " id="navbarSupportedContent">
                <ul className="navbar-nav  text-center mb-2 mb-lg-0 " style={{marginLeft:"95px"}}>
                  <li className="nav-item">
                    <a className="nav-link  fw-bold" aria-current="page" href="#"
                    >Tour</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#" >About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">RestroTrail</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#" >Contact</a>
                  </li>
                  <li className="nav-item me-4 book_btn">
                    <a className="nav-link fw-bold" href="#" >Book A Now</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header