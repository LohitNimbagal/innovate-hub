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

  return (
    <div className='flex'>

      <SideBar />

      <div className='flex-1 m-2'>
        <Hearder handelSearch={handelSearch} searchTerm={searchTerm}/>

        <ToolBar data={data} newData={newData} setNewData={setNewData}/>
        
        <Table newData={newData}/>

      </div>

    </div>
  )
}
