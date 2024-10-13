import React from 'react'
import { Outlet } from 'react-router-dom'

const S_Series_Parent = ({ children }) => {
    return (
        <div>
            <Outlet />
            <h1 className='text-white text-3xl font-bold bg-black'>Other components</h1>
        </div>
    )
}

export default S_Series_Parent