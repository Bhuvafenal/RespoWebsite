import React from 'react'
import '../Featuresection/Feature.css'
import line from '../../Assest/line.png'
import img1 from '../../Assest/ftr_set_icon_01.png'
import img2 from '../../Assest/ftr_set_icon_02.png'
import img3 from '../../Assest/ftr_set_icon_03.png'
import img4 from '../../Assest/ftr_set_icon_04.png'
import img5 from '../../Assest/ftr_set_icon_05.png'
import img6 from '../../Assest/ftr_set_icon_06.png'
import img7 from '../../Assest/ftr_set_icon_07.png'
import img8 from '../../Assest/ftr_set_icon_08.png'
import wave_img from '../../Assest/img_footer.jpg'


function Featuresec() {

    const featur_array = [{
        image: img1,
        heding: 'Point Of Sale',
        text: "Introducing a combination of unparalleled characteristics for managing your restaurant",
        buttontext: "Know More"
    },
    {
        image: img2,
        heding: 'Stock Management',
        text: "Helps you efficiently manage stock, unused items, reduce wastage and record new stock",
        buttontext: "Know More"
    },
    {
        image: img3,
        heding: 'Sales & Marketing',
        text: "Enables you to drive result oriented sales and marketing campaigns for your restaurant",
        buttontext: "Know More"
    },
    {
        image: img4,
        heding: 'Customer Relationship Tool',
        text: "Helps you analyse customer behavior and enables you to stay ",
        buttontext: "Know More"
    }, {
        image: img5,
        heding: 'Franchise Management',
        text: "Introducing a combination of unparalleled characteristics for managing your restaurant",
        buttontext: "Know More"
    },
    {
        image: img6,
        heding: 'Head Office Module',
        text: "Helps you efficiently manage stock, unused items, reduce wastage and record new stock",
        buttontext: "Know More"
    },
    {
        image: img7,
        heding: 'Reporting & Analytics',
        text: "Enables you to drive result oriented sales and marketing campaigns for your restaurant",
        buttontext: "Know More"
    },
    {
        image: img8,
        heding: 'Settings & Configuration',
        text: "Helps you analyse customer behavior and enables you to stay in touch with your customers",
        buttontext: "Know More"
    }
    ]
    return (
        <>
            <section className='sec_3_bg  '>
                <div className='featur_waveimg'>
                        {/* <img src={wave_img} alt="" /> */}
                </div>
                <div className='main_sec3'>
                <div>
                    <div className='text-center' style={{ paddingBottom: '20px' }}>
                        <h2>
                            Explore our awesome
                            <strong style={{ fontWeight: '700', paddingLeft: '7px' }}>Feature Set</strong>
                        </h2>
                        <center>
                            <img src={line} alt="" />
                        </center>
                    </div>
                </div>

                <div class="row feature_card" >
                    {
                        featur_array.map((item) => {
                            return (
                                <div class="col-sm-12 col-md-6 col-lg-3 col-12 ">
                                    <div class="card feature_card_sec">
                                        <div class="card-body">
                                            <img src={item.image} alt="" style={{ width: '70px', height: '70px' }} />
                                            <h2 class="card-text">{item.heding}</h2>
                                            <p>{item.text}</p>
                                            <a href="#">{item.buttontext}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </section>
        </>
    )
}

export default Featuresec