import React from 'react'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpg'
import game1 from '../../images/game1.jpg'
import game2 from '../../images/game2.jpg'
import game3 from '../../images/game3.jpg'
import game4 from '../../images/game4.jpeg'
import game5 from '../../images/game5.jpg'
import game6 from '../../images/game6.jpg'
import game7 from '../../images/game7.jpg'
import game8 from '../../images/game8.jpg'
import game9 from '../../images/game9.jpg'
import game10 from '../../images/game10.jpg'
import game11 from '../../images/game11.jpg'
import game12 from '../../images/game12.jpg'
import game13 from '../../images/game13.jpg'
import game14 from '../../images/game14.jpg'
import game15 from '../../images/game15.jpg'
import { FaCartPlus } from "react-icons/fa6";

const ProductList = () => {
  return (
    <React.Fragment>
      <section>
        <div className="grid grid-cols-2 gap-5 mt-10 mx-5">
            <a href="#" className="group relative block">
              <div className="relative h-[350px] sm:h-[450px]">
                <img src={game1} alt="" className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" />

                <img src={banner1} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <div className='backdrop-blur-sm bg-black/50 p-5 rounded-md'>
                  <h3 className="text-xl font-medium text-white">Uncharted 2: Among Thieves</h3>

                  <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
                    dicta impedit aperiam ipsum!
                  </p>

                  <span className="mt-3 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-black rounded-sm"> Buy Now </span> 
                </div>
              </div>
            </a>

            <a href="#" className="group relative block">
              <div className="relative h-[350px] sm:h-[450px]">
                <img src={game2} alt="" className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" />

                <img src={banner2} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Uncharted 2: Among Thieves</h3>

                <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
                  dicta impedit aperiam ipsum!
                </p>

                <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"> Buy Now </span>
              </div>
            </a>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProductList