import React from 'react'
import img from '../../Assest/sec7_img.png'
import '../FormSection/form.css'

function FormSection() {
    return (
        <>
            <section className='container-fluid' style={{ backgroundColor: '#f1f9ff' , padding:'100px 60px' }} id='form'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                        <img src={img} alt="" />
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                                <form action="">
                                    <input placeholder='Full Name*' className='inpt_group' type="text" />
                                    <input placeholder='Country' className='inpt_group' type="text" />
                                    <input placeholder='State' className='inpt_group' type="text" />
                                    <input placeholder='Brand*' className='inpt_group' type="text" />
                                </form>
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                                <form action="">
                                    <input placeholder='Email*' className='inpt_group' type="text" />
                                    <input placeholder='No.' className='inpt_group' type="text" />
                                    <input placeholder='City' className='inpt_group' type="text" />
                                    <input placeholder='No. Of Outlet' className='inpt_group' type="text" />
                                </form>
                            </div>
                            <span><button className='sec7_btn'>
                                        <a href="#" className='text-decoration-none text-light'>Submit Inquiry</a>
                                    </button></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormSection