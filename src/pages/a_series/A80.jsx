/* eslint-disable react-refresh/only-export-components */
// import HeroSectionOfPage from "./components/core/a_series_core/a70/HeroSectionOfPage";
import { Helmet } from "react-helmet";
import FullSpecifications from "../../components/common/FullSpecifications";
import StickyHeader from "../../components/common/StickyHeader";
import A05ColorImageCarausel from "../../components/core/a_series_core/a05/A05ColorImageCarausel";
import { ImageCarouselDataA80 } from "../../data/smartphonedata/A80ImageCarouselData";
import { FullSpecificationsA80 } from "../../data/smartphonedata/A80Data";
import GridSectionDispaly from "../../components/core/a_series_core/a80/GridSectionDispaly";
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon";
import NewOs14GridSection from "../../components/core/a_series_core/a80/NewOs14GridSection";
import ColorVariantsSection from "../../components/core/a_series_core/a80/ColorVariantsSection ";
import CreativeFilterA80 from "../../components/core/a_series_core/a80/CreativeFilterA80";
import HeroSectionA80 from "../../components/core/a_series_core/a80/HeroSectionA80";
import AutomaticScene from "../../components/core/a_series_core/a80/AutomaticScene";
import ImageProperties from "../../components/core/a_series_core/a80/ImageProperties";
import BuiltForLife from "../../components/core/a_series_core/a80/BuiltForLife";
import MobileFrame from "../../components/core/a_series_core/a80/MobileFrame";
import VisualExperience from "../../components/core/a_series_core/a80/VisualExperience";
import FlawlessIllumination from "../../components/core/a_series_core/a80/FlawlessIllumination";
import PerfectSelfies from "../../components/core/a_series_core/a80/PerfectSelfies";
import ProductVideo from "../../components/core/a_series_core/a80/ProductVideo";
import HeaderA80 from "../../components/core/a_series_core/a80/HeaderA80";
import ExperienceTheCamera from "../../components/core/a_series_core/a80/ExperienceTheCamera";
import OneFullCharge from "../../components/core/a_series_core/a80/OneFullCharge";

const A80 = () => {
    return (
        <div className="bg-[#FAFAFA] font-markot">

            <Helmet>
                <title>itel A80 - Best Budget Smartphone Under 10000 | itel India</title>
                <meta name="description" content={`Discover the itel A80, one of the best mobile phones in India. Packed with advanced features, it’s the perfect budget smartphone under 10000. Buy now!`} />
            </Helmet>

            <HeroSectionA80
                tagText="Awesome series"
                headingText="A80"
                price={"6,999"}
                description={'12GB* (4GB+8GB*) RAM + 256GB ROM | Dynamic bar | 13MP AI Dual Rear Camera'}
                bgDesktopVideo={'/smartphone/A80/AllSections/Banner/bbannervideo.webm'}
                bgMobile={'/smartphone/A80/AllSections/Banner/Herobg.webp'}
                gradient1='#ffff'
                gradient2='#ffff'
                theme='light'
                purchaseLink={'https://amzn.in/d/iJyvoK0'}
            />
            <HeaderA80
                title="A80"
                purchaseLink={'https://amzn.in/d/iJyvoK0'}
                icon={'/smartphone/a70/stickyeHeaderIcon.svg'}
                bgColor={'#FFBD6D'}
                dark={true}
            />

            <GridSectionDispaly />
            <SliderAnimationCommon
                text1="Awesome series"
                text2="IMPRESSIVELY AWESOME"
                svgCode={<img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />}
                bgColor="#EBE8E2"
                textGradient1="#6B6682"
                textGradient2="#6B6682"
            />
            <MobileFrame />
            <ProductVideo />
            <BuiltForLife />


            <VisualExperience />
            <OneFullCharge />
            <ExperienceTheCamera />
            <FlawlessIllumination />
            <CreativeFilterA80 />
            <AutomaticScene />
            <PerfectSelfies />
            <ImageProperties />

            <NewOs14GridSection />

            <ColorVariantsSection />


            <div className="lg:px-0 py-[48px] lg:pt-[80px] bg-[#ffffff]">
                <div className="lg:content bg-[#ffffff]  overflow-hidden">
                    <A05ColorImageCarausel
                        ImageCarouselData={ImageCarouselDataA80}
                        showTitleInMobile={true}
                    />
                </div>
            </div>

            <div className="px-4 bg-white">
                <FullSpecifications FullSpecificationsData={FullSpecificationsA80} mode="light" />
            </div>

        </div >
    );
}

export default A80
