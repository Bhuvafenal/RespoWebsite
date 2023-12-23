import React from 'react'
import line from '../../Assest/line.png'
import '../Clientsec7/client.css';
import img1 from '../../Assest/11-1.png'
import img2 from '../../Assest/2.png'
import img3 from '../../Assest/3.jpg'
import img4 from '../../Assest/4.png'
import img5 from '../../Assest/5.png'
import img6 from '../../Assest/06.png'
import img7 from '../../Assest/7.png'
import img8 from '../../Assest/8.png'
import img9 from '../../Assest/9.jpg'
import img10 from '../../Assest/19.jpg'
import img11 from '../../Assest/11.png'
import img12 from '../../Assest/12.png'
import img13 from '../../Assest/13.png'
import img14 from '../../Assest/14.png'
import img15 from '../../Assest/15.jpg'
import img16 from '../../Assest/16.jpg'
import img17 from '../../Assest/17.jpg'
import img18 from '../../Assest/18.jpg'
import img19 from '../../Assest/20.jpg'
import img20 from '../../Assest/20.jpg'



function Clientsec7() {
    const img_array=[
        {
            imgage:img1,
        },
        {
            imgage:img2,
        },
        {
            imgage:img3,
        },
        {
            imgage:img4,
        },
        {
            imgage:img5,
        },
        {
            imgage:img6,
        },
        {
            imgage:img7,
        },
        {
            imgage:img8,
        },
        {
            imgage:img9,
        },
        {
            imgage:img5,
        },
        {
            imgage:img10,
        },
        {
            imgage:img11,
        }, {
            imgage:img12,
        },
        {
            imgage:img14,
        },
        {
            imgage:img13,
        },
        {
            imgage:img15,
        },
        {
            imgage:img16,
        },
        {
            imgage:img17,
        },
        {
            imgage:img18,
        },
        {
            imgage:img19,
        }
    ]
  return (
   <>
   <section className='container-fuild section7 '>
        <div className='text-center py-4'>
          <h2 style={{ color: '#333333',}} >
          Our 
            <strong style={{paddingLeft:'7px'}}>Happy Clients</strong>
          </h2>
          <center>
            <img src={line} alt="" />
          </center>
        </div>
        <div className='row sec7_img'>
            {
                img_array.map((x)=>{
                    return(
                        <div className="col col-sm-2 col-md-3  sec7_img_col">
                            <img src={x.imgage} alt="" />
                        </div>
                    )
                })
            }
        </div>
   </section>
   </>
  )
}

export default Clientsec7