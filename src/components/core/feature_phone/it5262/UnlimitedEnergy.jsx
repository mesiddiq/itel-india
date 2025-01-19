import React from 'react'

const UnlimitedEnergy = () => {
    return (
        <div className='bg-[#181818] font-markot px-4 md:px-0'>
            <div className="content h-[697px] lg:h-[720px] flex items-center lg:justify-between relative flex-col lg:flex-row pt-9 lg:pt-0">
                <div className="max-w-[574px] flex-col flex gap-5 lg:gap-[46px]">
                    <div className="space-y-3 lg:space-y-5">
                        <h1 className="text-mobile/h4 lg:text-featurephone/heading text-bg/primary/1">Unlimited Energy: 2000 mAh Battery</h1>
                        <h4 className="text-mobile/body/2 lg:text-featurephone/paragraph">Get ready for non-stop entertainment with a long-lasting battery with Super Battery Mode. </h4>
                    </div>
                    <div className="flex lg:flex-col gap-[10px] lg:gap-5 lg:max-w-[253px]">
                        <div className="flex flex-col gap-1 lg:gap-2">
                            <h1 className="text-moblie/h6 lg:text-desktop/h4 text-white/80 ">13 Days* </h1>
                            <p className="text-mobile/small/body lg:text-desktop/body/1 text-white/80 ">Battery Backup</p>
                        </div>
                        <div className="min-h-full lg:h-[1px] lg:w-full w-[1px] bg-grey/grey/3"></div>
                        <div className="flex flex-col gap-1 lg:gap-2">
                            <h1 className="text-moblie/h6 lg:text-desktop/h4 text-white/80 text-nowrap">20 Hours* </h1>
                            <p className="text-mobile/small/body lg:text-desktop/body/1 text-white/80 ">Talktime</p>
                        </div>
                        <div className="min-h-full lg:h-[1px] lg:w-full w-[1px] bg-grey/grey/3"></div>
                        <div className="flex flex-col gap-1 lg:gap-2">
                            <h1 className="text-moblie/h6 lg:text-desktop/h4 text-white/80 ">Super Battery Mode </h1>
                        </div>
                    </div>
                </div>
                <div className="lg:pt-20 pt-10 pr-[55px]">
                    <img src="/featurephone/it5262/Backgrounds/unlimited_energy.webp" alt="Powerful 2000mAh Battery" className='lg:max-h-[602px] max-h-[393px]' />
                </div>
                <h1 className="text-mobile/small/body lg:text-desktop/body/1 text-grey/grey/2/80 absolute bottom-1 right-0">*theoretical value in ideal conditions</h1>
            </div>
        </div>
    )
}

export default UnlimitedEnergy