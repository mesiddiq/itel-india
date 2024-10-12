import React from 'react'

const PayAnywhere = () => {
    return (
        <div className='rounded-[16px] lg:rounded-[24px] bg-bg/secondry content py-[26px] lg:py-[89px] px-[26px] lg:px-[114px]'>
            <div className="space-y-[135px] lg:space-y-10">
                <div className="space-y-2 lg:space-y-4 ">
                    <h1 className='text-mobile/h4 lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.4px] text-black/1 font-bold'>Pay anyone. <br /> anywhere. <br />anytime</h1>
                    <p className='text-mobile/body/2 lg:text-[16px] lg:leading-[22.72px] lg:font-normal text-smoky/black'>Make payment without internet connection. <br />
                        Scan QR code & pay! </p>
                </div>
                <div className="flex gap-3">
                    <h4 className='text-brand/black text-[10px] lg:text-[16px] font-normal leading-[14px] tracking-[0.2px]'>Powered by</h4>
                    <div className="image"></div>
                </div>
            </div>
        </div>
    )
}

export default PayAnywhere