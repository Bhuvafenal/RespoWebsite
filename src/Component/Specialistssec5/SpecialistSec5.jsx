import React from 'react'
import '../Specialistssec5/Specialists .css'
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function SpecialistSec5() {
  return (
    <>
         <section className='container-fluid section5'>
                <div className='text-center sec4_h2'>
                    <h2>
                        Speak To Our Specialists And Get <br /> Started
                    </h2>
                    <button className='mt-4 border-0'>
                        <a className='sec4_btn' href="#">Request A Demo</a>
                    </button>
                    <div style={{paddingTop:'40px'}}>
                        <a href="#">
                        <i className='me-3' style={{height:'60px',width:"100px", borderRadius:'50%',padding:'8px 12px 12px 12px', backgroundColor:'#21e287', color:'white', fontSize:'20px'}}><RiFacebookFill/></i>
                        </a>
                        <a href="#">
                        <i className='me-3' style={{height:'60px',width:"100px", borderRadius:'50%',padding:'8px 12px 12px 12px', backgroundColor:'#21e287', color:'white', fontSize:'20px'}}><FaLinkedinIn/></i>
                        </a>
                        <a href="#">
                        <i className='' style={{height:'60px',width:"100px", borderRadius:'50%',padding:'8px 12px 12px 12px', backgroundColor:'#21e287', color:'white', fontSize:'20px'}}><FaInstagram/></i>
                        </a>
                    </div>
                </div>
            </section>
    </>
  )
}

export default SpecialistSec5