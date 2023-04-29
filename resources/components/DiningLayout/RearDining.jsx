import Table from './TableSet/Table';
import React from 'react'

const RearDining = () => {
  return (
    <div className="flex h-fit w-[calc(100vw-226px)] justify-center items-center">
      <div className="w-[1000px] h-[550px] flex items-center justify-evenly">
        <div className="h-full flex flex-col justify-between">
          <Table number="21" seats="6" direction="row" status="first" ></Table>
          <Table number="22" seats="6" direction="row" status="second_called"></Table>
          <Table number="23" seats="6" direction="row" status="third_called"></Table>
        </div>
        <div className="h-full flex flex-col justify-between">
          <Table number="24" seats="2" direction="col" status="first"></Table>
          <Table number="25" seats="2" direction="col" status="second_called"></Table>
        </div>
        <div className="h-full flex flex-col justify-between">
          <Table number="26" seats="4" direction="col" status="third_called"></Table>
          <Table number="27" seats="4" direction="col" status="first"></Table>
        </div>
      </div>
    </div>
  )
}

export default RearDining