import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { Dashboard, Today, FolderShared, QueryStats, Settings, AccountCircle } from '@mui/icons-material'
import Tables from './DiningLayout/FrontDining';
import TableMap from './TableMap';


const Menu = () => {

  const StyledMenuButton = styled.button`
    width: 184px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 25px;
    margin: 10px 0px;
    text-align: left;
    padding-left: 35px;
  `
  function MenuButton({children}) {
    return <StyledMenuButton className='transition ease-in-out duration-300 hover:bg-menu_button_start hover:drop-shadow-xl'>
      {children}</StyledMenuButton>
  }
  return (
    <div className="flex drop-shadow-lg">
      <div id="menu-container" className=" bg-menu_bg w-[226px] h-screen flex flex-col items-center justify-between">
        <div>
          <div className="my-12 text-center">
            <Link>Your logo</Link>
          </div>
          <div className="flex flex-col">
            {console.log(Dashboard)}
            <MenuButton><Dashboard className="mr-3"/>Tables</MenuButton>
            <MenuButton><Today className="mr-3"/>Bookings</MenuButton>
            <MenuButton><FolderShared className="mr-3"/>Accounts</MenuButton>
            <MenuButton><QueryStats className="mr-3"/>Report</MenuButton>
            <MenuButton><Settings className="mr-3"/>Setting</MenuButton>
          </div>
        </div>
        <div id="user-container">
          <div className="flex flex-col text-center justify-evenly bg-gradient-to-br from-menu_button_start to-menu_button_end drop-shadow-lg w-[184px] h-[217px] rounded-3xl mb-6 items-center">
            <AccountCircle fontSize='large'/>
            <div>
              <h3 className=" font-bold text-xl">User name</h3>
              <p className="text-xs font-light">Admin</p>
            </div>


            <button className="bg-gradient-to-br from-bg_start to-bg_end w-[142px] h-[34px] rounded-[17px] drop-shadow-lg font-semibold text-sm">Logout</button>

          </div>
        </div>
      </div>


      <div id="content-container">
        <div className="w-[calc(100vw-226px)] absolute top-0 flex p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
          </div>
        </div>
        <TableMap></TableMap>
      </div>


    </div>
  )
}

export default Menu