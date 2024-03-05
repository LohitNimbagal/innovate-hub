import React from 'react'
import { SideBar } from './components/SideBar'
import { Outlet } from 'react-router-dom'
import { Hearder } from './components/Hearder'
import Table  from './components/Table'
import { ReactTable } from './components/ui/ReactTable'

export const App = () => {
  return (
    <div className='flex'>

      <SideBar />

      <div className='flex-1 m-2'>
        <Hearder />
        
        <Table />
        {/* <ReactTable /> */}
      </div>

    </div>
  )
}
