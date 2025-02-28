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
import ReactPlayer from 'react-player'
import SliderAnimationCommon from '../../components/common/smartphone_common/SliderAnimationCommon'
import ZenoSlider from '../../components/core/zeno_serires_core/zeno10/ZenoSlider'
import { Helmet } from 'react-helmet'



const Zeno10 = () => {
    return (
        <main>
            <Helmet>
                <title>Zeno 10</title>
                <description>
                    Zeno 10 is built to capture the smallest details with unmatched clarity and brilliant color vibrancy so you can capture the same smooth clarity as shooting stars.
                </description>
            </Helmet>
            <Hero />
            <ZenoHeader />
            <ZenoText />
            <section className="relative">
                <ReactPlayer
                    url="/smartphone/zeno10/video.mp4"
                    width="100%"
                    height="100%"
                    muted={true}
                    playsinline={true}
                    playing={true}
                    loop={true}
                    controls={false}
                    className="w-full max-h-screen object-cover"
                />
            </section>
            <FeatureCards />
            <PureCinematic />
            <NonStopPower />
            <ZenoSlider />
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