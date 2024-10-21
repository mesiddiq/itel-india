import React from 'react'

const TypeC = () => {
    return (
        <div className='py-[44px] lg:pb-[104px] lg:pt-0 font-markot'>
            <div className="content h-[762px]  bg-no-repeat overflow-hidden flex items-center relative">
                <div className="space-y-8 pl-[144px]">
                    <h1 className="text-featurephone/heading font-normal text-black/1 max-w-[486px]">Type-C Charging Onboard</h1>
                    <h3 className="text-desktop/body/1 text-grey/grey/5 max-w-[402px]">Equipped with a Type-C charger for faster, secure, and reliable charging, simplify your power needs with modern connectivity.</h3>
                </div>
                <img src="/featurephone/it5262/Backgrounds/typec_phone.webp" alt="phone image" className='max-h-[1014px] absolute right-40 -bottom-[346px]' />
            </div>
            <div className="content">
                <img src="/featurephone/it5262/Backgrounds/typec.webp" alt="" className='w-full h-full border object-contain' />
            </div>
        </div>
    )
}

export default TypeC