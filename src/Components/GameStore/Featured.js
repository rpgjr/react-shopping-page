import React from 'react'
import { NavLink } from 'react-router-dom'
import game1 from '../../images/game1.jpg'
import game2 from '../../images/game2.jpg'

const Featured = () => {
  return (
   <React.Fragment>
    <section>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">

              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Awesome Games</h2>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>
              <a className="btn inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring">Shop All</a>

            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">

              <li>
                <a href="#" className="block group">
                  <img src={game1} className="object-cover w-full rounded aspect-square" />
                  <div className="mt-3">
                    <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">Uncharted 2: Among Thieves</h3>
                    <p className="mt-1 text-sm text-white">$150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block group">
                  <img src={game2} alt="" className="object-cover w-full rounded aspect-square"/>
                  <div className="mt-3">
                    <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">Metro 2033 Redux</h3>
                    <p className="mt-1 text-sm text-white">$150</p>
                  </div>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
   </React.Fragment>
  )
}

export default Featured