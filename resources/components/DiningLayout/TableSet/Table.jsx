import React from 'react'
import Chair from './Chair'
import TableTop from './TableTop'

const Table = ({ number, seats, direction, status }) => {
  const length = Number(seats)/2
  const chairsTop = Array(length).fill().map((_, index) => <Chair key={index} head={direction === "row" ? "up" : "left"}></Chair>);
  const chairsDown = Array(length).fill().map((_, index) => <Chair key={index} head={direction === "row" ? "down" : "right"}></Chair>);


  return (
    <div className={`flex justify-center items-center ${direction==='row' ? 'flex-col' : ''}`}>
      <div className={`flex ${direction==='col' ? 'flex-col' : ''}`}>
        { chairsTop }
      </div>
      <TableTop number={number} seats={seats} direction={direction} status={status}></TableTop>
      <div className={`flex ${direction==='col' ? 'flex-col' : ''}`}>
        { chairsDown }
      </div>
    </div>
  )
}

export default Table