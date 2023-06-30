import React from 'react'
import banner1 from '../../images/banner1.jpg'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <React.Fragment>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${banner1})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome to GameStop</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <NavLink to='/game-store' className="btn btn-primary">Go to Game Store</NavLink>
          </div>
        </div>
      </div>
    </React.Fragment> 
  )
}

export default Banner