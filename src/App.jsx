import React from 'react'
import  SideBar  from './components/SideBar'
import { Hearder } from './components/Hearder'
import Table  from './components/Table'
import { ToolBar } from './components/ToolBar'
import { useState, useEffect } from 'react'
import data from '../data.json'

export const App = () => {

  const [newData, setNewData] = useState(data);
  const [searchTerm, setSearchTerm] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  const handelSearch = (term) => {
    if (term !== '') {
      setSearchTerm(term)
    } else {
      setSearchTerm(null)
    }
  }

  useEffect(() => {
    if (searchTerm) {
      const searchedData = newData.filter(item => item.brand.toLowerCase().includes(searchTerm));
      setNewData(searchedData);
    } else {
      setNewData(data)
    }
  }, [searchTerm])

  const handelMenu = () => {
    console.log();
    setOpenMenu(!openMenu)
  }

  return (
    <div className='flex'>

      <SideBar openMenu={openMenu}/>

      <div className='w-full m-1'>
        <Hearder handelSearch={handelSearch} searchTerm={searchTerm} handelMenu={handelMenu}/>

        <ToolBar data={data} newData={newData} setNewData={setNewData}/>
        
        <Table newData={newData}/>
      </div>

    </div>
  )
}
