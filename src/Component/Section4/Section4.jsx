import React from 'react'
import '../Section4/Section4.css'
import line from '../../Assest/line.png'

function Section4() {
    return (
        <>
            <section>
                <div className="row section4">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="card cities_sec">
                                    <div class="card-body">
                                        <h2>7+</h2>
                                        <p>Countries</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="card cities_sec" style={{marginTop:'50px'}}>
                                    <div class="card-body">
                                        <h2>50+</h2>
                                        <p>Cities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="card cities_sec">
                                    <div class="card-body">
                                        <h2>100+</h2>
                                        <p>Featurers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="card cities_sec" style={{marginTop:'50px'}}>
                                    <div class="card-body">
                                        <h2>750+</h2>
                                        <p>Outlet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h2 style={{ color: '#333333' }}>
                                What is
                                <strong>RePOS</strong>
                                ?
                            </h2>
                            <img src={line} alt="" />
                        </div>
                        <div className='respos_sec mt-3'>
                            <p>RePOS is much more than just any other POS Software. It has been conceived, designed and brought to reality by a team of software experts. It serves all the requirements a restaurant has in order to achieve its goal of customer satisfaction.</p>
                            <p style={{marginBottom:'30px'}}>
                                RePOS is a Full-featured POS software application that can handle counter sales, inventory tracking, customer data management, mobile connectivity, and robust integrations. It is a solution for Casual / Fine Dine Restaurants, Quick Serve Restaurants, Bakery, Cake Shops, Cafe / Coffee Shops, Ice Cream / Juice Centers, Food Chains, Pizza Chains, Delivery Kitchen, Food Trucks and so on!
                            </p>
                            <a href="">Know More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4