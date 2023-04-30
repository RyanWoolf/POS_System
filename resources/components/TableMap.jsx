import React, { useRef, useState } from 'react'
import FrontDining from './DiningLayout/FrontDining';
import RearDining from './DiningLayout/RearDining';
import PDR from './DiningLayout/PDR';
import Terrace from './DiningLayout/Terrace';
import Bar from './DiningLayout/Bar';
import '@material/mwc-icon-button'
import '@material/mwc-button'
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

        <nav className="flex justify-between items-center mb-14 px-14 w-full">
          <div>
            <mwc-icon-button className="" icon="notifications"></mwc-icon-button>
          </div>
          <div className="flex gap-4">
            {carouselItems.map((name, i)=>(
              <mwc-button key={i} onClick={()=> handleClick(i)} dense raised>{name}</mwc-button>
            ))}

          </div>
          <div className="">
            <mwc-icon-button className="" icon="print"></mwc-icon-button>
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