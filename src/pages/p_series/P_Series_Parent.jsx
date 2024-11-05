import React from 'react'
import { Outlet } from 'react-router-dom'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'
import SimilarProducts from '../../components/common/smartphone_common/SimilarProducts'
import SupportChannels from '../../components/common/smartphone_common/SupportChannels'
import Accessories from '../../components/common/smartphone_common/Accessories'
import Model from '../../components/common/smartphone_common/Model'
import NearestStoreDark from '../../components/common/NearestStoreDark'
import NearestStore from '../../components/common/NearestStore'

const P_Series_Parent = () => {
    return (
        <div className='bg-[#111111] overflow-hidden'>
            <Outlet />
            <Accessories theme='dark' />
            <Model theme='dark' models={SmartPhoneModelData} />
            <NearestStore/>
            <SimilarProducts theme='dark' />
            <SupportChannels theme='dark' />
            <OtherCoolGears theme='dark' />
            <StayInTheLoop theme='dark' />
        </div>
    )
}

export default P_Series_Parent