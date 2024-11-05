import React from 'react'
import { Outlet } from 'react-router-dom'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'
import SimilarProducts from '../../components/common/smartphone_common/SimilarProducts'
import SupportChannels from '../../components/common/smartphone_common/SupportChannels'
import Accessories from '../../components/common/smartphone_common/Accessories'
import Model from '../../components/common/smartphone_common/Model'
import NearestStore from '../../components/core/p_series_core/P_Fifty_Five_5g/NearestStore'
const P_Series_Parent = () => {
    return (
        <div className='bg-[#111111]'>
            <Outlet />
            <Accessories />
            <Model />
            <NearestStore/>
            <SimilarProducts />
            <SupportChannels />
            <OtherCoolGears />
            <StayInTheLoop />
        </div>
    )
}

export default P_Series_Parent