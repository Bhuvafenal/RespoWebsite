import React from 'react'
import '../ReposSec2/res.css'
import line from '../../Assest/line.png'
import img1 from '../../Assest/newusecase_icon01.png'
import img2 from '../../Assest/newusecase_icon_02.png'
import img3 from '../../Assest/newusecase_icon_03.png'
import img4 from '../../Assest/newusecase_icon_04.png'
import img5 from '../../Assest/newusecase_icon_05.png'
import img6 from '../../Assest/newusecase_icon_06.png'
import img7 from '../../Assest/newusecase_icon_07.png'
import img8 from '../../Assest/newusecase_icon_08.png'

function Ressec2() {

    let sec2_array = [
        {
            image: img1, h4: 'Fine Dine'
        },
        {
            image: img2, h4: 'Pizzeria'
        },
        {
            image: img3, h4: 'Ice Cream Parlor'
        },
        {
            image: img4, h4: 'FoodTrucks'
        },
        {
            image: img5, h4: 'Quick Restaurants'
        },
        {
            image: img6, h4: 'Bars & Pubs'
        },
        {
            image: img7, h4: 'Confectionery'
        },
        {
            image: img8, h4: 'Cafe & Lounges'
        },
    ]
    return (
        <>
            <section className='container section2'>
                <div className='text-center'>
                    <h2 style={{ color: '#333333' }}>
                        What type of Restaurant uses
                        <strong>RePOS</strong>
                        ?
                    </h2>
                    <center>
                        <img src={line} alt="" />
                    </center>
                </div>


                <div class="icon mt-4 mb-5">
                    <div class="row p-3 g-5 ">
                        {
                            sec2_array.map((x) => {
                                return (
                                    <div className='col-sm-12 col-md-6 col-lg-3 col-12 text-center'>
                                        <div class="card res_sec ">
                                            <div class="card-body">
                                                <a href="#">
                                                    <img src={x.image} alt="" style={{width:'100px' , height:'100px'}} />
                                                </a>
                                                <h4 className='pt-4'>{x.h4}</h4>
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

export default Ressec2