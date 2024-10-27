import FullSpecifications from "../../components/common/FullSpecifications"
import ColorImageCarousel from "../../components/common/smartphone_common/ColorImageCarousel"
import StickyHeader from "../../components/common/StickyHeader"

import Video1 from "../../components/core/a_series_core/A50C/Video1"
import FillerFrame from "../../components/core/a_series_core/A50C/FillerFrame"

import MultipleCardComponents from "../../components/core/a_series_core/A50C/MultipleCardComponents"
import Parent4Divs from "../../components/core/a_series_core/A50C/Parent4Divs"

import { FullSpecificationsA50C } from '../../data/smartphonedata/A50CData'
import { ImageCarouselData } from '../../data/smartphonedata/A50CImageCarouselData'
import PhonesImage from "../../components/core/a_series_core/A50C/PhonesImage"
import HeroSmartPhoneCommon from "../../components/common/smartphone_common/HeroSmartPhoneCommon"

const A50C = () => {
	return (
		<>
			<HeroSmartPhoneCommon
				headingText="A50 C"
				bgDesktop="/smartphone/smartphonehero/a50c.webp"
				bgMobile="/smartphone/smartphonehero/a50c_mobile.webp"
				theme="dark"
				purchaseLink=""
				description={`6.6" HD+ Display with Dynamic Bar | 4GB*(2GB+2GB*) RAM + 32GB ROM | 8MP AI Rear Camera `}
				gradient1="#181818"
				grdient2="#181818"
				price="5,599"
				tagText="awesome series"
			/>

			<StickyHeader title="A50C" purchaseLink="" icon="/smartphone/A50C/A50CLogo.svg" bgColor="" />

			<Video1 />

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
				<FullSpecifications FullSpecificationsData={FullSpecificationsA50C} mode="light" gifStar="/smartphone/A05i/StarFullSpecifications.svg" />
			</div>

		</>
	)
}

export default A50C;