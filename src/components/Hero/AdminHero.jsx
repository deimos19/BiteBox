import React from 'react'
import BiteBox from "../../assets/hero-images/BiteBoxBusiness.png"

const AdminHero = () => {
  return (
    <div className="container mx-auto lg:px-40">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BiteBox}
            className="max-w-sm"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className='flex gap-4'>
            <button className="btn btn-primary"><i class="bi bi-tools"></i>Manage</button>
            <a href="" className='btn btn-primary'><i class="bi bi-view-list"></i>View Orders</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHero