import React from "react";
// import designImg from "../../assets/designImg.png";

function DesignSection() {
	return (
		<section className="relative w-full bg-brand/black  overflow-hidden px-4 md:px-0">
			<div className="max-w-[1440px] mx-auto md:w-11/12 w-full lg:pl-[102px]   xl:h-[720px] lg:h-auto  h-[575px] md:h-[700px] flex items-center flex-col xl:flex-row gap-4 justify-between py-10 pt-10 pb-5">
				<div className="max-w-[514px]">
					<h3 data-aos="fade-up" data-aos-delay="100" className=" text-mobile/h4 lg:text-desktop/h2 text-white">Design Innovation: Unique Round Screen Display</h3>
					<p data-aos="fade-up" data-aos-delay="200" className="lg:text-featurephone/paragraph text-mobile/body/2 text-grey/grey/2 max-w-[475px] mt-3 lg:mt-[22px]">A feature-rich phone with a unique round screen display that stands out from the crowd. Available in two attractive colors, it is a perfect choice for those seeking innovation and elegance in their phone.</p>
					<h4 data-aos="fade-up" data-aos-delay="300" className="lg:text-[20px] lg:leading-6 lg:tracking-[0.8px] font-bold uppercase text-transparent text-[16px] leading-5 tracking-[0.6px] bg-clip-text bg-gradient-to-r from-[#ff998f] to-[#fff7e8] mt-4 lg:mt-12">Black | Rose Gold</h4>
				</div>

				<div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
					<div className="flex gap-2 md:gap-3 lg:gap-4 ">

						<img src="/featurephone/Circle_1/Backgrounds/one.webp" alt="Circle 1" className="lg:max-w-[360px] md:max-w-[280px] max-w-[160px] w-full" data-aos="fade-right" data-aos-delay="100"/>

						<img src="/featurephone/Circle_1/Backgrounds/two.webp" alt="Circle 1" className="lg:max-w-[360px] md:max-w-[280px] max-w-[160px] w-full " data-aos="fade-left" data-aos-delay="200"/>

					</div>
					<div className="flex gap-2 md:gap-3 lg:gap-4">

						<img src="/featurephone/Circle_1/Backgrounds/three.webp" alt="Circle 1" className="lg:max-w-[282px]  md:min-w-[280px] md:max-h-[288px] lg:max-h-max max-w-[125px]" data-aos="fade-up" data-aos-delay="300"/>

						<div className="flex flex-col gap-2 md:gap-3 lg:gap-4 ">

							<img src="/featurephone/Circle_1/Backgrounds/four.webp" alt="Circle 1" className="lg:w-[440px] lg:max-w-max md:max-w-[280px] max-w-[195px] w-full" data-aos="fade-left" data-aos-delay="400"/>

							<img src="/featurephone/Circle_1/Backgrounds/five.webp" alt="Circle 1" className="lg:w-[440px] lg:max-w-max md:max-w-[280px] max-w-[195px] w-full" data-aos="fade-left" data-aos-delay="500"/>

						</div>
					</div>
				</div>

			</div>
		</section>
	);
}

export default DesignSection;
