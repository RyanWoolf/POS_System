import React from 'react'
import Table from './TableSet/Table';

const Terrace = () => {
  return (
    <div className="flex h-fit w-[calc(100vw-226px)] justify-center items-center">
      <div className="w-[1000px] h-[550px] flex items-center justify-evenly">
        <div className="h-full flex flex-col justify-between">
          <Table number="1" seats="2" direction="row" status="first" ></Table>
          <Table number="2" seats="2" direction="row" status="second_called"></Table>
          <Table number="3" seats="2" direction="row" status="third_called"></Table>
        </div>
        <div className="h-full flex flex-col justify-between">
          <Table number="4" seats="4" direction="row" status="first"></Table>
          <Table number="5" seats="4" direction="row" status="second_called"></Table>
        </div>
        <div className="h-full flex flex-col justify-between">
          <Table number="6" seats="2" direction="row" status="third_called"></Table>
          <Table number="7" seats="2" direction="row" status="first"></Table>

        </div>
      </div>
    </div>
  )
}

export default Terrace