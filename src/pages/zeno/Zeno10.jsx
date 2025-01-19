import React from 'react'
import FullSpecifications from '../../components/common/FullSpecifications'
import A05ColorImageCarausel from '../../components/core/a_series_core/a05/A05ColorImageCarausel'
import BeyoundLimits from '../../components/core/zeno_serires_core/zeno10/BeyoundLimits'
import CameraSection from '../../components/core/zeno_serires_core/zeno10/CameraSection'
import DynamicBar from '../../components/core/zeno_serires_core/zeno10/DynamicBar'
import FeatureCards from '../../components/core/zeno_serires_core/zeno10/FeatureCards'
import FutureReady from '../../components/core/zeno_serires_core/zeno10/FutureReady'
import Hero from '../../components/core/zeno_serires_core/zeno10/Hero'
import MultiTasking from '../../components/core/zeno_serires_core/zeno10/MultiTasking'
import NonStopPower from '../../components/core/zeno_serires_core/zeno10/NonStopPower'
import PureCinematic from '../../components/core/zeno_serires_core/zeno10/PureCinematic'
import ZenoHeader from '../../components/core/zeno_serires_core/zeno10/ZenoHeader'
import ZenoText from '../../components/core/zeno_serires_core/zeno10/ZenoText'
import { FullSpecificationsZeno10, ImageCarouselDataZeno10 } from '../../data/smartphonedata/Zeno10Data'



const Zeno10 = () => {
    return (
        <main>
            <Hero />
            <ZenoText />
            <ZenoHeader />
            <FeatureCards />
            <PureCinematic />
            <NonStopPower />
            <MultiTasking />
            <FutureReady />
            <DynamicBar />
            <BeyoundLimits />
            <CameraSection />
            <div className="lg:px-0 py-[48px] lg:pt-[80px] bg-[#1c1b1b]">
                <div className="lg:content bg-[#1c1b1b] overflow-hidden">
                    <A05ColorImageCarausel
                        ImageCarouselData={ImageCarouselDataZeno10}
                        showTitleInMobile={true}
                    />
                </div>
            </div>
            <div className="px-4 bg-[#1c1b1b]">
                <FullSpecifications FullSpecificationsData={FullSpecificationsZeno10} mode="dark" />
            </div>
        </main>
    )
}

export default Zeno10