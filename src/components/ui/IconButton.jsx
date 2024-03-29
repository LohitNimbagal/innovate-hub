import React from 'react'

export const IconButton = ({ children }) => {
    return (
        <button className='shadow p-1 rounded-md hidden lg:block'>
            {children}
        </button>
    )
}
