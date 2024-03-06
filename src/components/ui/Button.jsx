import React from 'react'

export const Button = ({children, ...props}) => {
  return (
    <button className="text-black text-xs border py-1 px-2 rounded m-1" {...props}>
      {children}
    </button>
  )
}