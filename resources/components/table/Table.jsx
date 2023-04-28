import React from 'react'
import Chair from './Chair'
import TableTop from './TableTop'

const Table = ({ status }) => {


  return (
    <div className="gap-1.5 flex flex-col justify-center items-center">
      <div className="flex gap-3">
        <Chair direction='up'></Chair>
        <Chair direction={'up'}></Chair>
      </div>
      <TableTop status={status}></TableTop>
      <div className="flex gap-3">
        <Chair direction={'down'}></Chair>
        <Chair direction={'down'}></Chair>
      </div>
    </div>
  )
}

export default Table