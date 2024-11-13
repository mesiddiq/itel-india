import React from 'react'
import { Outlet } from 'react-router-dom'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'
import SimilarProducts from '../../components/common/smartphone_common/SimilarProducts'
import SupportChannels from '../../components/common/smartphone_common/SupportChannels'
import Accessories from '../../components/common/smartphone_common/Accessories'
import Model from '../../components/common/smartphone_common/Model'
import NearestStore from '../../components/common/NearestStore'
import { SmartPhoneModelData } from '../../data/SmartPhoneModelData'
import FAQ from '../../components/core/static_pages_core/Support/FAQ'

const S_Series_Parent = () => {
    return (
        <div className='bg-brand/black'>
            <Outlet />
            <div className="bg-[#0A0C08]">

                <Accessories theme='dark' />
                <Model theme='dark' models={SmartPhoneModelData} />
                <NearestStore />
                <SimilarProducts theme='dark' />
                <SupportChannels theme='dark' />
                <OtherCoolGears theme='dark' />
                <StayInTheLoop theme='dark' />
                <FAQ theme='dark'/>

            </div>
        </div>
    )
}

export default S_Series_Parent