import React from 'react'
import { Outlet } from 'react-router-dom'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'
import SimilarProducts from '../../components/common/smartphone_common/SimilarProducts'
import SupportChannels from '../../components/common/smartphone_common/SupportChannels'
import Accessories from '../../components/common/smartphone_common/Accessories'
import Model from '../../components/common/smartphone_common/Model'

const S_Series_Parent = () => {
    return (
        <div className='bg-brand/black'>
            <Outlet />
            <Accessories />
            <Model />
            <SimilarProducts />
            <SupportChannels />
            <OtherCoolGears />
            <StayInTheLoop />
        </div>
    )
}

export default S_Series_Parent