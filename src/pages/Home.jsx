import React from 'react'
import SideBar from '../components/SideBar'
import { Hearder } from '../components/Hearder'
import Table from '../components/Table'
import { ToolBar } from '../components/ToolBar'
import { useState, useEffect } from 'react'
import data from '../../data.json'

export const Home = () => {

    const [newData, setNewData] = useState(data);
    const [searchTerm, setSearchTerm] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [sideBarSelections, setSideBarSelections] = useState(null)

    const handelSearch = (term) => {
        if (term !== '') {
            setSearchTerm(term)
        } else {
            setSearchTerm(null)
        }
    }

    // Filtering the data based on Search Term
    useEffect(() => {
        if (searchTerm) {
            const searchedData = newData.filter(item => item.brand.toLowerCase().includes(searchTerm));
            setNewData(searchedData);
        } else {
            setNewData(data)
        }
    }, [searchTerm])

    const handelMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className='flex h-screen w-full overflow-hidden'>

            <SideBar openMenu={openMenu} setSideBarSelections={setSideBarSelections} />

            <div className='w-full h-full m-1 '>
                <Hearder handelSearch={handelSearch} searchTerm={searchTerm} handelMenu={handelMenu} sideBarSelections={sideBarSelections} />

                <ToolBar data={data} newData={newData} setNewData={setNewData} />

                {/* Conditional Rendering of Table */}
                {sideBarSelections?.team === 'Design team' && sideBarSelections.folder === 'Products' ?
                    <Table newData={newData} /> :
                    (
                        <div className='w-full h-full flex items-center justify-center'>
                            <h1 className='text-center'>Click on <span className='font-bold'>Design Team </span>and <span className='font-bold'>Products Folder</span> <br /> for <span className='font-bold'>Table</span></h1>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
