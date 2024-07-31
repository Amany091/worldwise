import React from 'react'
import Navbaar from '../navbar'

const Product = () => {
    return (
        <div className=' bg-dark overflow-hidden product position-relative '>
            <div className='w-100 position-absolute' style={{ top: "20%", left:"20%"}}>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm12 text-light d-flex justify-content-center flex-column">
                        <h1>Simple Pricing</h1>
                        <h1>Just 9$/month</h1>
                    <p className='w-75 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quae iure facere minima sunt sequi esse soluta quia nobis assumenda harum. Perferendis fugiat ducimus eum aspernatur provident distinctio, quas mollitia.</p>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <img src="https://worldwise-lemon.vercel.app/img-2.jpg" alt="notfound" width={500} height={500} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Product
