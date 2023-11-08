import React from 'react'
import "./style.css"
import Header from '../header/Header'
import Table from './table/Table'

const DashBoard = () => {
  return (
    <div className='w-80 dashboard'>
      <Header />
      <Table />
    </div>
  )
}

export default DashBoard