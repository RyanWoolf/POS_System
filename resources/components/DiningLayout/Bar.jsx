import React from 'react'
import Table from './TableSet/Table';

const Bar = () => {
  return (
    <div id="bar" className="flex h-fit w-[calc(100vw-226px)] justify-center items-center">
      <div className="w-[1000px] h-[550px] flex items-center justify-evenly">
        <div className="h-full flex flex-col justify-between">
          <Table number="8" seats="4" direction="row" status="first"></Table>
          <Table number="9" seats="4" direction="row" status="second_called"></Table>
          <Table number="10" seats="4" direction="row" status="second_called"></Table>
        </div>
      </div>
    </div>
  )
}

export default Bar