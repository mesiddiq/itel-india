import React from 'react'

const OurSmartAppliances = () => {
    return (
        <div className='content space-y-10'>
            <h1 className=' text-desktop/h2 text-white'>Our Smart Appliances</h1>
            <div className="flex gap-10 ">
                <div className="rounded-2xl relative size-[620px] overflow-hidden">
                    <div className="absolute z-50 max-w-[394px] space-y-3 top-9 left-[44px]">
                        <h1 className='text-desktop/h3'>Home Care</h1>
                        <p className='text-desktop/body/1 text-white/90'>Enhance home care by automating tasks, improving efficiency, and ensuring convenience</p>
                    </div>
                    <img src="./herobanner/v_cleaner.gif" alt="" className='h-full w-full' />
                </div>
                <div className="rounded-2xl relative size-[620px] overflow-hidden">
                    <div className="absolute z-50 max-w-[394px] space-y-3 top-9 left-[44px]">
                        <h1 className='text-desktop/h3'>Personal Care</h1>
                        <p className='text-desktop/body/1 text-white/90'>Innovative smart hair dryers feature AI temperature control and customizable settings</p>
                    </div>
                    <img src="./herobanner/Dryer.gif" alt="" className='h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default OurSmartAppliances