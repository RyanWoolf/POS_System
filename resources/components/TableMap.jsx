import React, { useRef, useState } from 'react'
import FrontDining from './DiningLayout/FrontDining';
import RearDining from './DiningLayout/RearDining';
import PDR from './DiningLayout/PDR';
import Terrace from './DiningLayout/Terrace';
import Bar from './DiningLayout/Bar';
import '@material/mwc-icon-button'
import '@material/mwc-button'



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
    <section>      
      <div className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </div>
      </div>
      <nav className="flex justify-between items-center m-10">
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
  )
}

export default TableMap