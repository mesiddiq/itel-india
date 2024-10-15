import React from 'react'
import { For } from 'react-haiku'

const SpecsData = [
    { id: '1', label: '4G/3G/2G', logo: '/featurephone/common/connectivity.svg' },
    { id: '2', label: 'UPI 123 Support', logo: '/featurephone/common/upi.svg' },
    { id: '3', label: '13 Languages Support', logo: '/featurephone/common/language.svg' },
    { id: '4', label: 'VGA Camera', logo: '/featurephone/common/camera.svg' },
    { id: '5', label: '2" Display', logo: '/featurephone/common/display.svg' },
    { id: '6', label: 'Preloaded Games', logo: '/featurephone/common/game.svg' },
    { id: '7', label: 'King Voice', logo: '/featurephone/common/voice.svg' },
    { id: '8', label: '6 Days* Battery Backup', logo: '/featurephone/common/battery.svg' },
]

const TechSpecs = () => {
    return (
        <div className="py[60px] lg:py-[120px]">
            <div className='bg-bg/secondry rounded-[16px] flex flex-col lg:flex-row lg:rounded-[24px] lg:gap-10 py-[26px] overflow-hidden px-4 lg:pt-[97px] lg:pb-6 lg:pl-[124px]  content font-markot'>
                <div className="space-y-5 lg:space-y-[57px]">
                    <div className="space-y-1 lg:space-y-3">
                        <h3 className='uppercase text-mobile/title lg:text-[14px] lg:leading-[17px] font-medium text-blue/blue/3'>Tech Specs</h3>
                        <h3 className=' text-mobile/h4 lg:text-desktop/h3 text-black/1'>Power Packed Features</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-3 lg:gap-y-10 max-w-[516px]">
                        <For each={SpecsData} render={({ label, id, logo }) =>
                            <div className="gap-x-2 lg:gap-x-4 flex items-center" key={id}>
                                <img src={logo} alt={label} className='size-[54px]' />
                                <h3 className='text-grey/grey/5 text-mobile/h7 lg:text-desktop/h5/medium'>{label}</h3>
                            </div>
                        } />
                    </div>
                    <div className="text-right lg:text-left text-mobile/small/body lg:text-desktop/body/1 text-grey/grey/5">*Under testing conditions</div>
                </div>
                <div className="">
                    <img src="/featurephone/superguru4g/techspecs.webp" alt="Super Guru 4g" className='lg:max-w-[544px] max-w-[280px] mx-auto translate-y-8 lg:translate-y-6' />
                </div>
            </div>
        </div>
    )
}

export default TechSpecs