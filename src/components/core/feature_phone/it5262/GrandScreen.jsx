import React from 'react'

const GrandScreen = () => {
	return (
		<div className="bg-[url('/featurephone/it5262/Backgrounds/phone_preview_mobile.webp')] px-4 md:px-0 overflow-hidden bg-cover lg:bg-[url('/featurephone/it5262/Backgrounds/phone_preview.webp')]">
			<div className="flex flex-col lg:flex-row gap-[22px] lg:gap-14 font-markot items-center justify-center lg:min-h-[720px]  pt-10 lg:pt-0">
				<div className="space-y-5 lg:space-y-[54px] max-w-[504px]">
					<div className="flex flex-col gap-3 lg:gap-5">
						<h3 className="text-mobile/h4 text-white lg:text-featurephone/heading font-medium ">Grand Screen, Grand Entertainment</h3>
						<p className="text-mobile/body/2 text-white/70 lg:text-[16px] lg:font-normal lg:leading-[22px] ">Enjoy all your content on a big 2.4" QVGA display. Now navigating menus and reading texts made much more comfortable and enjoyable with itel it5262.</p>
					</div>
					<div className="flex lg:gap-4 gap-[6px] items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className='size-8 lg:size-13' width="48" height="48" viewBox="0 0 48 48" fill="none">
							<rect x="13" y="4.34375" width="22.7027" height="40" rx="2.16216" stroke="white" strokeWidth="1.94595" />
							<rect x="16.5781" y="7.75781" width="15.1351" height="16.2162" rx="1.08108" stroke="white" strokeWidth="1.5" />
							<rect x="16.2422" y="38.5664" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="16.2422" y="34.7812" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="16.2422" y="31" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="16.2422" y="27.2148" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="22.1875" y="38.5664" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="22.1875" y="34.7812" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="22.1875" y="31" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="22.1875" y="27.2148" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="28.1328" y="38.5664" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="28.1328" y="34.7812" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="28.1328" y="31" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
							<rect x="28.1328" y="27.2148" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
						</svg>
						<h6 className="text-mobile/h6 lg:text-desktop/h5/medium text-grey/grey/1/80">6.1 cm (2.4”) QVGA Display</h6>
					</div>
				</div>
				<div className="max-w-[457px] lg:translate-y-40  max-h-[450px] lg:max-h-max">
					<img src="/featurephone/it5262/Backgrounds/grandscreen.webp" alt="Immersive Large Display" className=' object-contain' />
				</div>
			</div>
		</div>
	)
}

export default GrandScreen