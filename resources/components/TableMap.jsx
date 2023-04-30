import React, { useRef, useState } from 'react'
import FrontDining from './DiningLayout/FrontDining';
import RearDining from './DiningLayout/RearDining';
import PDR from './DiningLayout/PDR';
import Terrace from './DiningLayout/Terrace';
import Bar from './DiningLayout/Bar';
import vegan from '../../public/images/icons/vegan.png'
import vegetarian from '../../public/images/icons/vegetarian.png'
import dairyFree from '../../public/images/icons/dairyFree.png'
import glutenFree from '../../public/images/icons/glutenFree.png'
import '@material/mwc-icon-button'
import '@material/mwc-button'
// import '@material/mwc-menu';
// import '@material/mwc-list'
import 'flowbite'




const TableMap = () => {
  const [ currentPage, setCurrentPage ] = useState(0)
  const containerRef = useRef(null)

  const handleClick = (page) => {
    setCurrentPage(page)
    containerRef.current.scrollTo({
      left: page * 1200,
      behavior: 'smooth'
    })
  }
  const carouselItems = ['Terrace', 'Bar', 'Front dining', 'Rear dining', 'PDR']
  
  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center">      

        <nav className="flex flex-col justify-between items-center mb-14 px-14 w-full gap-2">
          <div className="flex justify-between items-center w-full">
            <div>
              <mwc-icon-button className="" icon="notifications"></mwc-icon-button>
            </div>
            <div className="flex gap-4">
              {carouselItems.map((name, i)=>
                <mwc-button key={i} onClick={()=> handleClick(i)} dense raised style={currentPage===i ? {} : {opacity: 0.5}}>{name}</mwc-button>
              )}

            </div>
            <div className="">
              <mwc-icon-button className="" icon="print"></mwc-icon-button>
            </div>
          </div>
          <div className=" font-medium text-[11px] flex gap-4">
            <div className='flex gap-2 items-end'>
              <img className='w-4 h-4' src={vegan} alt="" />
              <span>Vegan</span>
            </div>
            <div className='flex gap-2 items-end'>
              <img className='w-4 h-4' src={vegetarian} alt="" />
              <span>Vegetarian</span>
            </div>
            <div className='flex gap-2 items-end'>
              <img className='w-4 h-4' src={dairyFree} alt="" />
              <span>Dairy free</span>
            </div>
            <div className='flex gap-2 items-end'>
              <img className='w-4 h-4' src={glutenFree} alt="" />
              <span>Gluten free</span>
            </div>
    

          </div>
        </nav>

        <div id="carousel-container" ref={containerRef} className="flex h-[600px] w-[calc(100vw-226px)] overflow-hidden overflow-x-scroll scroll-smooth snap-x snap-mandatory">
          <div className="snap-center">
            <Terrace/>
          </div>
          <div className="snap-center">
            <Bar/>
          </div>
          <div className="snap-center">
            <FrontDining/>
          </div>
          <div className="snap-center">
            <RearDining/>
          </div>
          <div className="snap-center">
            <PDR/>
          </div>

        </div>
        <div className="pagination w-full text-center">
          {carouselItems.map((_, i)=>(
            <button key={i} type="button" className={" rounded-full w-2 h-2 pb-2 mx-1 " + (currentPage === i ? 'bg-zinc-500' : 'bg-zinc-400') } onClick={()=> handleClick(i)}></button>
          ))}
        </div>
      </section>
    </>
  )
}

export default TableMap