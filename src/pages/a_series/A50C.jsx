/* eslint-disable react-refresh/only-export-components */
import FullSpecifications from "../../components/common/FullSpecifications"
import StickyHeader from "../../components/common/StickyHeader"
import FillerFrame from "../../components/core/a_series_core/A50C/FillerFrame"
import ColorImageCarousel from "../../components/core/a_series_core/A50C/ColorImageCarousel"
import MultipleCardComponents from "../../components/core/a_series_core/A50C/MultipleCardComponents"
import Parent4Divs from "../../components/core/a_series_core/A50C/Parent4Divs"
import { 
	FullSpecificationsA50C,
	ImageCarouselData,
	HeroDataA50C
 } from '../../data/smartphonedata/A50CData'
import PhonesImage from "../../components/core/a_series_core/A50C/PhonesImage"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"
import FeatureSectionA50C from "../../components/core/a_series_core/A50C/FeatureSectionA50C"
import SliderAnimationCommon from "../../components/common/smartphone_common/SliderAnimationCommon"
import { Helmet } from 'react-helmet'

const A50C = () => {
	return (
		<>
			<Helmet>
				<title>itel A50C | Dual Camera Phone with Side Fingerprint Sensor | itel India</title>
				<meta name="description" content={`Discover the itel A50C, a feature-packed dual camera phone with a side fingerprint sensor for quick access and stunning photography. Elevate your smartphone experience!`} />
			</Helmet>
			<HeroSmartPhoneCommon {...HeroDataA50C} />
			<StickyHeader title="A50C" purchaseLink="https://www.flipkart.com/itel-a50c-misty-aqua-32-gb/p/itm2032e2f53466f?pid=MOBH4HFHPP9FMYZS&lid=LSTMOBH4HFHPP9FMYZS7IQNAK&marketplace=FLIPKART&cmpid=content_mobile_8965229628_gmc" icon="/smartphone/A50C/A50CLogo.svg" bgColor="white" dark={true} borderBottom={true} />
			<FeatureSectionA50C />
			<SliderAnimationCommon
				text1="Awesome series"
				text2="IMPRESSIVELY AWESOME"
				svgCode={<img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />}
				bgColor="#EBE8E2"
				textGradient1="#6B6682"
				textGradient2="#6B6682"
			/>
			<FillerFrame />
			<Parent4Divs />
			<PhonesImage />
			<MultipleCardComponents />
			<div className="lg:px-0 py-[48px] lg:py-[120px] bg-white">
				<div className="lg:content bg-white overflow-hidden">
					<ColorImageCarousel ImageCarouselData={ImageCarouselData} showTitleInMobile={false} />
				</div>
			</div>
			<div className="px-4 lg:pb-[80px] bg-white">
				<FullSpecifications FullSpecificationsData={FullSpecificationsA50C} mode="light" gifStar="/static_page/Hotstar.gif" />
			</div>
		</>
	)
}

export default A50C;