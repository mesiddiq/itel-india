import React from 'react'
import { For } from 'react-haiku'

const SpecsData = [
    { id: '1', label: 'Incoming Calls & Message', logo: '/featurephone/common/connectivity.svg' },
    { id: '2', label: 'Reading Menu & Phonebook', logo: '/featurephone/common/upi.svg' },
    { id: '3', label: 'Dialling Number', logo: '/featurephone/common/language.svg' },
    { id: '4', label: 'Instant Reading', logo: '/featurephone/common/camera.svg' },
    { id: '5', label: 'Customisation Support', logo: '/featurephone/common/display.svg' },
    { id: '6', label: 'Time Update', logo: '/featurephone/common/game.svg' },
]


const KingVoice = () => {
    return (
        <div className='bg-[#262b5a] flex flex-col items-center overflow-hidden relative gap-6 lg:gap-14 pb-[366px] pt-9 lg:pb-[116px] lg:pt-12'>
            <div className="">
                <div className="flex justify-center border-2 border-[#404796] relative rounded-s">
                    <h3 className='text-mobile/h6 lg:text-desktop/h3 text-white font-markot text-center absolute -translate-y-1/2 bg-[#262b5a] px-3 lg:px-5'>A Phone That Speaks For You</h3>
                    <h1 className='uppercase text-[94px] lg:text-[240px] lg:leading-[286px] font-bold leading-[94px] font-markot text-white px-5 lg:px-0'>
                        <span className='tracking-[15px] font-markot '>king</span><br className='lg:hidden' />
                        <div className='-tracking-[3.7px] inline'>v
                            <div className='relative inline'>
                                o
                                <img src="/featurephone/common/voice-fill.svg" className='size-6 lg:size-[92px] absolute top-[52%] left-[53%] -translate-x-1/2 -translate-y-1/2' alt="voice" />
                            </div>
                            <span>
                                ice
                            </span>
                        </div>
                    </h1>
                </div>
            </div>
            <div className="grid gap-x-4 gap-y-3 lg:gap-y-10 grid-cols-2 lg:gap-x-[622px] font-markot relative">
                <For each={SpecsData} render={({ label, id, logo }) =>
                    <div className="gap-2 flex  lg:gap-4 lg:w-[259px] items-center" key={id}>
                        <img src={logo} alt="voice" className='size-8 lg:size-[54px]' />
                        <h3 className='text-mobile/h7 lg:text-desktop/h5/medium text-grey/grey/1 max-w-[116px] md:max-w-full'>{label}</h3>
                    </div>
                } />
            </div>
            <img src="/featurephone/superguru4g/kingvoice.webp" alt="Super Guru 4g" loading='lazy' className='absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[298px] lg:max-w-[490px] w-full' />
        </div>
    )
}

export default KingVoice