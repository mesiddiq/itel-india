import React, { useRef } from 'react'
import { useSize } from 'react-haiku';

const YourSideKick = () => {

    const elementRef = useRef(null);
    const { width } = useSize(elementRef);

    return (
        <div ref={elementRef} className='h-[720px] overflow-hidden relative bg-bg/secondry px-4 md:px-0 font-markot pt-7 lg:pt-[178px]' style={{ background: `#ebe9e2 ${width < 786 ? 'url(/featurephone/superguru4g/roundbgphone.svg) bottom -10% center/100%  no-repeat' : 'url(/featurephone/superguru4g/roundbg.svg) 100% 100% no-repeat'} ` }}>
            <div className="content flex justify-between flex-col lg:flex-row">
                <div className=" max-w-[514px]">
                    <h3 className="uppercase font-medium text-[16px] leading-5 -tracking-[0.16px] lg:tracking-[0.84px] text-blue/blue/3">supercharged battery</h3>
                    <h2 className="text-mobile/h4 text-black/1 mt-[10px] lg:mt-[22px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">Your Daily Sidekick</h2>
                    <p className="text-mobile/body/2 lg:text-[16px] lg:leading-[22px] text-grey/grey/4 mt-3 max-w-[457px]">With a 1000 mAh battery mobile, you're set to stay connected, productive, and entertained without interruptions. Live life on your own terms with endless power at your fingertips.
                    </p>
                    <h4 className="uppercase font-medium text-[16px] leading-5 -tracking-[0.16px] mt-4 lg:mt-12 text-purple/sg">battery backup for full 6 days*</h4>
                    <p className='text-mobile/small/body lg:text-desktop/body/1 text-dark/card/bg mt-12 lg:mt-[120px]'>*Under ideal testing conditions</p>
                </div>
                <div className="relative">
                    <img src="/featurephone/superguru4g/battery.webp" alt="Reliable Everyday Companion" className='max-w-[797px]  -translate-y-20 hidden lg:block' />
                </div>
                <img src="/featurephone/superguru4g/batterymobile.webp" alt="super guru 4g" className='absolute -left-20 -bottom-10 lg:hidden max-w-[450px] md:max-w-[550px]' />
            </div>
        </div>
    )
}

export default YourSideKick