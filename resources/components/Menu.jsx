import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { Dashboard, Today, FolderShared, QueryStats, Settings, AccountCircle } from '@mui/icons-material'
import Tables from './Tables';


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
        <Tables></Tables>
      </div>


    </div>
  )
}

export default Menu