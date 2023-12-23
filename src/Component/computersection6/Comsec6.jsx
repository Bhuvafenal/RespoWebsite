import React from 'react'
import line from '../../Assest/line.png'
import logo from '../../Assest/re-pos_logo.png'
import '../computersection6/comsec.css'
import comp_img from '../../Assest/pos_final.png'


function Comsec6() {
  return (
    <>
      <section className='container section6'>
        <div className='text-center'>
          <h2 style={{ color: '#333333',}}>
            Our
            <strong style={{paddingLeft:'7px'}}>Products</strong>
          </h2>
          <center>
            <img src={line} alt="" />
          </center>
        </div>
        <div className='product_sec pt-4 pb-2'>
              <ul className='border-bottom'>
                <li><a href="">RePos</a></li>
                <li><a href="">Android RePOS</a></li>
                <li><a href="">IOS RePOS</a></li>
                <li><a href="">ReECHO</a></li>
                <li><a href="">ReANALYSE</a></li>
                <li><a href="">Tab My Order</a></li>
              </ul>
        </div>

        <div className='product_sec2  row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <img src={comp_img} alt="" style={{height:'400px'}}/>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 prod_sec3'>
                <div className='prod_sec3_img'> 
                <img src={logo} alt="" />
                <h2 style={{paddingTop:'15px', marginBottom:'3px'}}>Restaurant</h2>
                <h2>POS Solution</h2>
                <p>Advanced cloud based & server <br /> based enterprise management  <br />system for the food and beverage  <br />service industry.</p>
                </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comsec6