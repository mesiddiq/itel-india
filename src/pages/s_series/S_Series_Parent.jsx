import React from 'react'
import { Outlet } from 'react-router-dom'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'

const S_Series_Parent = () => {
    return (
        <div className='bg-[#111111]'>
            <Outlet />
            <OtherCoolGears />
            <StayInTheLoop />
        </div>
    )
}

export default S_Series_Parent