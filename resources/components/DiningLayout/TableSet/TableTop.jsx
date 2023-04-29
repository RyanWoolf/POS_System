import React from 'react'


function tableSize(seats, direction) {
  const width = Number(seats)*40
  const height = 100
  if (direction == "row") {
    return {width: width+'px', height: height+'px'}
  } else if (direction == "col") {
    return {width: (height-15)+'px', height: width+25+'px', minHeight: '100px'}
  }
}
function tableStatus(status) {
  switch (status) {
    case 'first':
      return 'bg-button'
    case 'second_called':
      return 'bg-second_called'
    case 'third_called':
      return 'bg-third_called'
  }
}

const TableTop = ({ number, seats, direction, status, children }) => {

  return (
    <div className={`flex `}>
      <div style={tableSize(seats, direction)}
        className={`bg-button flex flex-col pt-4 pb-4 pl-4 justify-between rounded-l-3xl text-[12px] tracking-normal `}>
        <p className="font-bold">{number}</p>
        <div className=" font-semibold flex flex-col text-[11px] leading-tight">
          <p className="">Ryan L</p>
          <p className="opacity-60">18:00</p>
          {children}
        </div>
      </div>
      <div className={`${tableStatus(status)}` + ` w-[25px] rounded-r-3xl`}>
      </div>
    </div>
  )
}

export default TableTop