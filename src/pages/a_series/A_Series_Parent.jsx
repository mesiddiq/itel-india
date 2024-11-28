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

const A_Series_Parent = () => {
    return (
        <div className='bg-white'>
            <Outlet />
            <Accessories />
            <Model models={SmartPhoneModelData} />
            <NearestStore dark={false} />
            <SimilarProducts />
            <SupportChannels />
            <OtherCoolGears />
            <FAQ />
            <StayInTheLoop />
        </div>
    )
}

export default A_Series_Parent