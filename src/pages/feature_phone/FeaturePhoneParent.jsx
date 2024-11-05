import React from 'react'
import { Outlet } from 'react-router-dom'
import OtherCoolGears from '../../components/common/smartphone_common/OtherCoolGears'
import StayInTheLoop from '../../components/common/smartphone_common/StayInTheLoop'
import SupportChannels from '../../components/common/smartphone_common/SupportChannels'
import FeaturePhoneSimilarProduct from '../../components/common/feature_phone_common/FeaturePhoneSimilarProduct'
import NearestStore from '../../components/common/NearestStore'
import Model from '../../components/common/smartphone_common/Model'
import { FeaturePhoneModelData } from '../../data/FeaturePhoneModelData'

const FeaturePhoneParent = () => {
    return (
        <div className='font-markot'>
            <Outlet />
            <Model models={FeaturePhoneModelData}/>
            <NearestStore dark={false} />
            <FeaturePhoneSimilarProduct />
            <SupportChannels />
            <OtherCoolGears />
            <StayInTheLoop />
        </div>
    )
}

export default FeaturePhoneParent