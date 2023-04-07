import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const StyledMenuButton = styled.button`
  width: 184px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 25px;
  background: linear-gradient(45deg, #FFFFFF, #FFFCF5);
  box-shadow: 2px 5px 7px rgba(0, 0, 0, 0.1);
  margin: 10px 0px;
`
function MenuButton({children}) {
  return <StyledMenuButton>{children}</StyledMenuButton>
}

const Menu = () => {
  return (
    <div className="flex drop-shadow-lg">

      <div id="menu-container" className=" bg-menu_bg w-[226px] h-screen flex flex-col items-center justify-between">
        <div>
          <div className="my-12 text-center">
            <Link>Your logo</Link>
          </div>
          <div className="flex flex-col">
            <MenuButton>Tables</MenuButton>
            <MenuButton>Bookings</MenuButton>
            <MenuButton>Accounts</MenuButton>
            <MenuButton>Report</MenuButton>
            <MenuButton>Setting</MenuButton>
          </div>
        </div>
        <div id="user-container">
          <div className="flex flex-col text-center justify-evenly bg-gradient-to-br from-menu_button_start to-menu_button_end drop-shadow-lg w-[184px] h-[217px] rounded-3xl mb-6 items-center">
            <div className="rounded-full"></div>
            <div>
              <h3 className=" font-bold text-xl">User name</h3>
              <p className="text-xs font-light">Admin</p>
            </div>


            <button className="bg-gradient-to-br from-bg_start to-bg_end w-[142px] h-[34px] rounded-[17px] drop-shadow-lg font-semibold text-sm">Logout</button>

          </div>
        </div>
      </div>


      <div id="content-container">
        Content
      </div>


    </div>
  )
}

export default Menu