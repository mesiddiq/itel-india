import React from 'react'

const PayAnywhere = ({ upiImageUrl }) => {
    return (
        <div className="py-[42px] lg:py-[85px] px-4 lg:px-0 font-markot">
            <div className='rounded-[16px] overflow-hidden h-[430px] lg:h-auto lg:rounded-[24px] relative bg-bg/secondry content py-[26px] lg:py-[89px] px-[24px] lg:px-[114px]'>
                <div className="space-y-[222px] lg:space-y-10 ">
                    <div className="space-y-2 lg:space-y-4 ">
                        <h1 className='text-mobile/h4 lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] text-black/1 font-bold' data-aos="fade-up">Pay anyone. <br /> anywhere. <br />anytime</h1>
                        <p className='text-mobile/body/2 lg:text-[16px] lg:leading-[22.72px] lg:font-normal text-smoky/black'>Make payment without internet connection. <br />
                            Scan QR code & pay! </p>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <h4 className='text-brand/black text-[10px] lg:text-[16px] font-normal leading-[14px] tracking-[0.2px]'>Powered by</h4>
                        <div className="max-w-[47px] lg:max-w-[104px] flex flex-col lg:gap-[6px]">
                            <img src="/featurephone/superguru4g/123pay.jpg" alt="123 Pay logo" loading='lazy' className='mix-blend-darken self-end w-[24px] lg:w-16' />
                            <img src="/featurephone/superguru4g/upilogo.jpg" alt="Upi logo" loading='lazy' className='mix-blend-darken' />
                        </div>
                    </div>
                </div>
                <img src={upiImageUrl} alt="Reliable 1900mAh Battery" className='absolute -bottom-10 lg:bottom-0 object-contain right-0 h-[284px] lg:h-[450px] w-[209px] lg:object-contain md:w-auto' data-aos="zoom-in" />
            </div>
        </div>
    )
}

export default PayAnywhere