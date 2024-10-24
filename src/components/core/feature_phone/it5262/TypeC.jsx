import React from 'react'

const TypeC = () => {
    return (
        <div className=' lg:pb-[104px] lg:pt-0 font-markot overflow-hidden px-4 md:px-0'>
            <div className="content h-[762px]  bg-no-repeat overflow-hidden flex lg:items-center relative bg-[url('/featurephone/it5262/Backgrounds/typec_mobile.webp')] lg:bg-[url('/featurephone/it5262/Backgrounds/typec.webp')]lg:bg-cover bg-cover bg-center">
                <div className="space-y-3 lg:space-y-8 px-6 lg:pl-[144px]">
                    <h1 className="lg:text-featurephone/heading text-mobile/h4 font-normal text-black/1 max-w-[486px]">Type-C Charging Onboard</h1>
                    <h3 className="lg:text-desktop/body/1 text-desktop/body/2/regular text-grey/grey/5 max-w-[402px]">Equipped with a Type-C charger for faster, secure, and reliable charging, simplify your power needs with modern connectivity.</h3>
                </div>
                <img src="/featurephone/it5262/Backgrounds/typec_phone.webp" alt="phone image" className='max-h-[1080px] absolute right-40 -bottom-[370px]' />
            </div>
        </div>
    )
}

export default TypeC