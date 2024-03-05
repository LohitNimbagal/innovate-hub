import React from 'react'

export const Tab = ({ children, className, ...props }) => {
    return (
        <div className={`p-1 px-2 flex items-center justify-start gap-2 font-semibold text-sm shadow rounded-md ${className}`} {...props}>
            {children}
        </div>
    )
}
