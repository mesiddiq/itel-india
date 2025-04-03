import React from 'react'

const Section1 = () => {
    return (
        <section className='bg-brand/black px-4 md:px-0'>
            <div className="content gap-4 md:gap-6 pb-5 lg:pb-0 h-[575px] md:h-auto flex flex-col xl:flex-row justify-between items-center xl:items-start">
                <div className="lg:pt-[96px] pt-10">
                    <h3 className="lg:text-desktop/h2 text-mobile/h4 md:text-mobile/h3">A Touch of Luxury: <br /> Leather Finish</h3>
                    <p className="lg:text-featurephone/paragraph text-mobile/body/2 md:text-mobile/body/large text-grey/grey/2 lg:mt-[22px] mt-3 md:mt-4 max-w-[475px]">Experience a unique blend of luxury and functionality with the itel Flip One premium leather design.</p>
                    <h4 className="uppercase lg:text-[20px] lg:leading-6 text-[16px] leading-5 font-bold bg-[linear-gradient(75deg,_#FE6021_3.01%,_#FFF7E8_96.47%)] bg-clip-text text-transparent lg:mt-12 mt-4 md:mt-6 max-w-[378px]">Durable | Comfortable Grip | Glass Design Keypad</h4>
                </div>
                <div className="flex lg:py-4 gap-2 max-w-[340px] lg:max-w-[740px] max-h-[296px]  lg:max-h-max">
                    <img src="/featurephone/flipOne/frame1.webp" alt="Elegant Leather Finish" className='lg:max-w-[395px] max-w-[200px] rounded-xl object-cover' />
                    <div className="flex flex-col justify-between lg:w-[329px] gap-2 ">
                        <img src="/featurephone/flipOne/frame2.webp" alt="" className='max-w-[329px] w-full object-cover min-h-[195px] rounded-xl' />
                        <div className="relative ">
                            <img src="/featurephone/flipOne/frame3phone.webp" alt="Flip One" className='absolute bottom-0 right-0 rounded-br-[12px] max-w-[120px] lg:max-w-max' />
                            <img src="/featurephone/flipOne/frame3.webp" alt="" className='w-full object-cover min-h-[94px] rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1