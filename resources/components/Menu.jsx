import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="flex">

      <div id="menu-container" className=" bg-menu_bg w-[226px] h-screen flex flex-col items-center">
        <div className=" my-12">
          <Link>Your logo</Link>
        </div>
        <div>
          <ul>
            <li>Tables</li>
            <li>Bookings</li>
            <li>Accounts</li>
            <li>Report</li>
            <li>Setting</li>
          </ul>
        </div>
      </div>


      <div id="content-container">
        Content
      </div>


    </div>
  )
}

export default Menu