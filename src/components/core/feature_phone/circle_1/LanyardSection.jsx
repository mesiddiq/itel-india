import React from "react";
// import Avatar from "../../assets/Group1973339886.png";

function LanyardSection() {
	return (
		<section className="font-markot lg:py-[100px] py-10 px-4 md:px-0">
			<div className="content relative lg:h-[761px]  flex xl:items-center lg:pt-32 xl:pt-0 lg:justify-end xl:pr-32 lg:pr-20 h-[567px] rounded-[24px] bg-[url('/featurephone/Circle_1/Backgrounds/lanyard_mobile.png')] lg:bg-none bg-cover bg-center ">
				<img src="/featurephone/Circle_1/Backgrounds/lanyard.webp" alt="lanyard bg" className="absolute -z-10 top-0 left-0 hidden lg:block" />
				<div className="max-w-[373px] space-y-4 md:space-y-6 lg:space-y-[75px]  lg:mt-0 mt-11 mx-7 lg:mx-0">
					<div className="flex flex-col gap-3 lg:gap-4 ">
						<h4 className="uppercase text-[#050036] text-[14px] font-medium leading-4 tracking-[0.8px]">move in style</h4>
						<h3 className="text-mobile/h4 lg:text-desktop/h2 text-black/1">Lightweight and Handy to Carry</h3>
						<p className="text-mobile/body/2 lg:text-featurephone/paragraph text-dark/card/bg">Keep your device accessible and secure with this stylish and practical accessory - Lanyard.</p>
					</div>
					<div className="flex flex-row lg:flex-col gap-3 lg:gap-6 items-center lg:items-start">
						<img src="/featurephone/Circle_1/Backgrounds/lanyard1.png" alt="Lanyard" className="max-w-12 lg:max-w-[97px] md:max-w-16" />

						<h3 className="text-[14px] lg:text-[20px] leading-4 lg:leading-6 tracking-[0.5px] uppercase font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#242424] to-[#ff073c] ">get free extra lanyard</h3>
					</div>
				</div>
				<img src="/featurephone/Circle_1/Backgrounds/man.png" alt="Circle 1 lanyard" className="absolute bottom-0 left-1/2 -translate-x-1/2  lg:hidden" />
			</div>
		</section>
	);
}

export default LanyardSection;
