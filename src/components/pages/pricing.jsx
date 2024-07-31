import React from 'react'
import Navbaar from '../navbar'

const Princing = () => {
  return (
    <div className=' bg-dark overflow-hidden pricing position-relative '>
            <div className='w-100 position-absolute' style={{ top: "20%", left:"20%"}}>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="https://worldwise-lemon.vercel.app/img-1.jpg" alt="notfound" width={500} height={500} />
                </div>
                <div className="col-lg-5 col-md-6 col-sm12 text-light d-flex flex-column justify-content-center">
                    <h1>About WorlWide</h1>
                    <p className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quae iure facere minima sunt sequi esse soluta quia nobis assumenda harum. Perferendis fugiat ducimus eum aspernatur provident distinctio, quas mollitia.</p>
                    <p className="mt-5 w-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio praesentium esse totam debitis! Nisi nemo vitae nam id totam reprehenderit?</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Princing
