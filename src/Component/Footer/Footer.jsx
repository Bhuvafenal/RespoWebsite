import React from 'react'
import '../Footer/fotter.css';
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaWhatsapp, FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import img1 from '../../Assest/india.png';
import img2 from '../../Assest/ghana.png';
import img3 from '../../Assest/kuwait.png';
import img4 from '../../Assest/qatar.png';
import img5 from '../../Assest/mauritius.png';
import img6 from '../../Assest/united-arab-emirates.png';



function Footer() {

    const footer_array = [
        {
            icon: <IoIosArrowForward />,
            title: 'Fine din POS'

        }, {
            icon: <IoIosArrowForward />,
            title: 'Pizzeria'
        },
        {
            icon: <IoIosArrowForward />,
            title: 'Ice Cream Parlor'
        },
        {
            icon: <IoIosArrowForward />,
            title: 'FoodTrucks'
        },
        {
            icon: <IoIosArrowForward />,
            title: 'Quick Serve Restaurants'
        },
        {
            icon: <IoIosArrowForward />,
            title: 'Bars & Pubs'
        },
        {
            icon: <IoIosArrowForward />,
            title: 'Bakery & Confectionery'
        },
        {
            icon: <IoIosArrowForward />,
            title: 'Cafe & Lounges'
        }
    ]

    const gettouch_array = [{
        social_icon: <FaLocationDot />,
        text: 'Visit Us'
    }, {
        social_icon: <FaPhone />,
        text: '+91 9856432156'
    }, {
        social_icon: <MdEmail />,
        text: 'info@re-pos.in'
    }, {
        social_icon: <IoIosStar />,
        text: 'Google Review'
    }]


    const array = [{
        icon1: <CiFacebook />
    },
    {
        icon1: <IoLogoLinkedin />
    },
    {
        icon1: <FaInstagram />
    },
    {
        icon1: <FaWhatsapp />
    }
    ]
    const flag_array = [
        {
            image: img1
        }, {
            image: img2
        },
        {
            image: img3
        }]
        const flag_array1 = [
            {
                image: img4
            }, {
                image: img5
            },
            {
                image: img6
            }]

    return (
        <>
            <section className="container-fluid  " id="foot">
                <div className="container pt-5 pb-3">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <ul>
                                <li><h4 >Applications</h4></li>
                                {
                                    footer_array.map((x) => {
                                        return (
                                            <>
                                                <li>
                                                    <span>
                                                        {x.icon}
                                                    </span>
                                                    <span>
                                                        {x.title}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                            <ul>
                                <li><h4 >Products</h4></li>
                                {
                                    footer_array.map((x) => {
                                        return (
                                            <>
                                                <li>
                                                    <span>
                                                        {x.icon}
                                                    </span>
                                                    <span>
                                                        {x.title}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                            <ul>
                                <li>
                                    <h4 >Get In Touch</h4>
                                </li>
                                {
                                    gettouch_array.map((item) => {
                                        return (
                                            <>
                                                <li>
                                                    <span>
                                                        {item.social_icon}
                                                    </span>
                                                    <span style={{ paddingLeft: '7px' }}>
                                                        {item.text}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            <div className="col foot_icon">
                                <ul>
                                    {
                                        array.map((x) => {
                                            return (
                                                <>
                                                    <li>
                                                        <a href="">{x.icon1}</a>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='row'>
                                <div className="col foot_icon1" style={{marginLeft:'32px'}}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                                        {
                                            flag_array.map((x, index) => {
                                                return (
                                                    <li key={index} style={{ display: 'inline-block', margin: '0 5px' }}>
                                                        <img src={x.image} alt="" style={{ width: '27px', height: '27px' }} />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                             <div className='row'>
                                <div className="col foot_icon1" style={{marginLeft:'32px'}}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                                        {
                                            flag_array1.map((x, index) => {
                                                return (
                                                    <li key={index} style={{ display: 'inline-block', margin: '0 5px' }}>
                                                        <img src={x.image} alt="" style={{ width: '27px', height: '27px' }} />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='foot_sec1'>
                    <p>
                        <i><FaRegCopyright /></i>
                        <span>2022 All Rights Reserved by RePOS.</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer