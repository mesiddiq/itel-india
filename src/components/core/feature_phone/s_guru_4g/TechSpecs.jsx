import React, { useRef } from 'react'
import { For, useSize } from 'react-haiku'

const TechSpecs = ({ phoneUrl, cards }) => {

    const elementRef = useRef(null);
    const { width } = useSize(elementRef);

    return (
        <div ref={elementRef} className="py-[60px] px-4 md:px-0 lg:py-[120px]">
            <div className='bg-bg/secondry max-h-[680px] rounded-[16px] flex flex-col lg:flex-row lg:rounded-[24px] lg:gap-10 py-[26px] overflow-hidden px-4 lg:pt-[97px] lg:pb-6 lg:pl-[124px] content font-markot' style={{ background: width > 1024 ? `#ebe8e2 url(/featurephone/superguru4g/techspecscircle.svg) top right no-repeat` : '#ebe8e2 url(/featurephone/superguru4g/techspecscirclemobile.svg) top 80% right no-repeat' }}>
                <div className="space-y-5 lg:space-y-[57px]">
                    <div className="space-y-1 lg:space-y-3">
                        <h3 className='uppercase text-mobile/title lg:text-[14px] lg:leading-[17px] font-medium text-smoky/black' data-aos="fade-left">Tech Specs</h3>
                        <h3 className=' text-mobile/h4 lg:text-desktop/h3 text-black/1' data-aos="fade-left">Power Packed Features</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-3 lg:gap-y-10 max-w-[516px]">
                        <For each={cards} render={({ label, id, icon },idx) =>
                            <div className="gap-x-2 lg:gap-x-4 flex items-center" key={id} data-aos="fade-right" data-aos-delay={idx*100}>
                                <img src={icon} alt={label} className='size-[54px]' />
                                <h3 className='text-grey/grey/5 text-mobile/h7 lg:text-desktop/h5/medium'>{label}</h3>
                            </div>
                        } />
                    </div>
                    <div className="text-right lg:text-left text-mobile/small/body lg:text-desktop/body/1 text-grey/grey/5">*Under testing conditions</div>
                </div>
                <div className="max-w-[501px]">
                    <img src={phoneUrl} alt="Super Guru 4g" className='lg:max-w-[501px] max-w-[280px] mx-auto translate-y-8 lg:translate-y-6' data-aos="fade-up-left" />
                </div>
            </div>
        </div>
    )
}

export default TechSpecs