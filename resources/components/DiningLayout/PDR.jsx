import Table from './TableSet/Table';
import React from 'react'

const PDR = () => {
  return (
    <div id="PDR" className="flex h-fit w-[calc(100vw-226px)] justify-center items-center">
      <div className="w-[1000px] h-[550px] flex items-center justify-evenly">
        <div className="h-full flex flex-col justify-evenly">
          <Table number="31" seats="16" direction="row" status="first" ></Table>
          <Table number="32" seats="16" direction="row" status="second_called"></Table>
        </div>
      </div>
    </div>
  )
}

export default PDR