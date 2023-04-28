import React from 'react'

const TableTop = ({ status }) => {
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
  return (
    <div className="flex">
      <div className="bg-button w-[175px] h-[100px] rounded-l-3xl">TableTop</div>
      <div className={`${tableStatus(status)} w-[25px] h-[100px] rounded-r-3xl`}>Status</div>
    </div>
  )
}

export default TableTop