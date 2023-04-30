import Table from './TableSet/Table';
import React from 'react'

const FrontDining = () => {
  return (
    <div id="frontDining" className="flex h-fit w-[calc(100vw-226px)] justify-center items-center">
      <div className="w-[1000px] h-[550px] flex items-center justify-evenly">
        <div className="h-full flex flex-col justify-between">
          <Table number="11" seats="4" direction="row" status="first" ></Table>
          <Table number="12" seats="4" direction="row" status="second_called"></Table>
          <Table number="13" seats="4" direction="row" status="third_called"></Table>
        </div>
        <div className="h-full flex flex-col justify-between">
          <Table number="14" seats="6" direction="col" status="first"></Table>
          <Table number="15" seats="6" direction="col" status="second_called"></Table>
        </div>
        <div className="h-full flex flex-col justify-between">
          <Table number="16" seats="2" direction="col" status="third_called"></Table>
          <Table number="17" seats="2" direction="col" status="first"></Table>
          <Table number="18" seats="2" direction="col" status="third_called"></Table>
          <Table number="19" seats="2" direction="col" status="second_called"></Table>
        </div>
      </div>
    </div>
  )
}

export default FrontDining