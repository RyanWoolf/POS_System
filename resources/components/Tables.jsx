import Table from './table/Table';
import React from 'react'

const Tables = () => {
  return (
    <div className="flex flex-col flex-wrap gap-16">
      <Table status="first"></Table>
      <Table status="second_called"></Table>
      <Table status="third_called"></Table>
    </div>
  )
}

export default Tables