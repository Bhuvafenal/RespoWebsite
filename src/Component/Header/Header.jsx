import React, { useState } from 'react';
import logo from '../../Assest/re-pos_logo.png';
import '../Header/header.css';
import { BsJustify } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { GiAcousticMegaphone } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa6";
import { RiOrganizationChart } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbReport } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { Offcanvas } from 'bootstrap';
import icon1 from '../../Assest/nav_logo1 (1).jpeg'
import icon2 from '../../Assest/nav_logo1 (2).jpeg'
import icon3 from '../../Assest/nav_logo1 (3).jpeg'
function Header() {
  const [istoreModalOpen, setIsTourModalOpen] = useState(false);
  const [isproductModalOpen, setIsProductModalOpen] = useState(false);
    const [offcanvasVisible, setOffcanvasVisible] = useState(false);

    const toggleOffcanvas = () => {
        const offcanvasElement = document.getElementById('navbarOffcanvas');
        const offcanvas = new Offcanvas(offcanvasElement);
        offcanvas.toggle();
        setOffcanvasVisible(!offcanvasVisible);
    };

  const handleHovertour = () => {
    setIsTourModalOpen(true);
    setIsProductModalOpen(false);
  };

  const handleLeavetour = () => {
    setIsTourModalOpen(false);
  };

  const handleHoverproduct = () => {
    setIsProductModalOpen(true);
    setIsTourModalOpen(false);
  };

  const handleLeaveproduct = () => {
    setIsProductModalOpen(false);
  };

  return (
    <>
      <header className="text-center border-bottom p-3 fixed-top bg-white position-fixed top-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" style={{ height: '45px', width: '190px' }} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                
                
              >
                <BsJustify style={{ color: '#000', fontSize: '24px' }} />
              </button>
              <div className="collapse navbar-collapse header" id="navbarSupportedContent">
                <ul className="navbar-nav text-center mb-2 mb-lg-0 ms-auto">
                <li className="nav-item" onMouseEnter={handleHovertour} onMouseLeave={handleLeavetour}>
                    <a className="nav-link " aria-current="page" href="#"
                    >Tour<i className='ms-2 text-black'><IoMdArrowDropdown /></i></a>
                    {istoreModalOpen && (
                      <div className="hed_modal">
                        <div className='row'>
                          <div className='col-6 hed_col1'>
                            <ul>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><MdPhoneIphone /></i>Point Of Sale</a>
                              </li>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><BiBookContent /></i>Stock Management</a>
                              </li>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><GiAcousticMegaphone /></i>Sales And Marketing</a>
                              </li>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><FaUserTie /></i>Customer Relationship Tool</a>
                              </li>
                            </ul>
                          </div>
                          <div className='col-6 hed_col2'>
                            <ul>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><RiOrganizationChart /></i>Franchisee Management</a>
                              </li>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><HiOutlineBuildingOffice2 /></i>Head Office Module</a>
                              </li>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><TbReport /></i>Reporting Analytics</a>
                              </li>
                              <li>
                                <a href="#"><i className='me-3' style={{ color: 'darkblue' }}><IoIosSettings /></i>Setting And Configuration</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onMouseEnter={handleHoverproduct} onMouseLeave={handleLeaveproduct}>Products<i className='ms-2 text-black'><IoMdArrowDropdown /></i></a>
                    {isproductModalOpen && (
                      <div className="hed_modal2">
                        <div className='text-start' style={{ marginLeft: '-9%' }}>
                          <ul>
                            <li>
                              <a href="#">
                                <img style={{height:'32px', width:'32px'}} className='me-2' src={icon1} alt="" />
                                ReANALYSE - Reporting App</a>
                            </li>
                            <li>
                              <a href="#">
                                <img style={{height:'32px', width:'32px'}} className='me-2' src={icon2} alt="" />
                                ReECHO - Feedback App</a>
                            </li>
                            <li>
                              <a href="#">
                                <img style={{height:'25px', width:'32px'}} className='me-2' src={icon3} alt="" />
                                TabMyOrder - Realtime Ordering App</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      RestroTrail
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <button className="nav-item me-4 book_btn border-0">
                    <a className="nav-link" href="#">
                      Book A Now
                    </a>
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      
      </header>
    </>
  );
}

export default Header;
