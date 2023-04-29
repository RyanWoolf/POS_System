import Table from './table/Table';
import React from 'react'

const Tables = () => {
  return (
    <div className="flex flex-col flex-wrap gap-16 max-h-screen">
      <Table number="1" seats="4" direction="row" status="first" ></Table>
      <Table number="2" seats="4" direction="row" status="second_called"></Table>
      <Table number="3" seats="4" direction="row" status="third_called"></Table>
      <Table number="4" seats="6" direction="col" status="first"></Table>
      <Table number="5" seats="6" direction="col" status="second_called"></Table>
      <Table number="6" seats="2" direction="col" status="third_called"></Table>
      <Table number="7" seats="2" direction="col" status="first"></Table>
      <Table number="8" seats="2" direction="col" status="third_called"></Table>
      <Table number="9" seats="2" direction="col" status="second_called"></Table>
    </div>
  )
}

export default Tables