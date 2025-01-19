import React from 'react'

const TypeC = () => {
    return (
        <div className=' xl:pb-[104px] xl:pt-0 font-markot overflow-hidden px-4 md:px-0 py-11 xl:py-0'>
            <div className="content xl:h-[762px] h-[602px]  bg-no-repeat overflow-hidden flex xl:items-center relative bg-[url('/featurephone/it5262/Backgrounds/typec_mobile.webp')] xl:bg-[url('/featurephone/it5262/Backgrounds/typec.webp')] xl:bg-cover bg-cover bg-center border border-grey/grey/3 rounded-[24px] xl:border-none ">
                <div className="space-y-3 xl:space-y-8 px-6 py-11 xl:py-0 xl:pl-[144px]">
                    <h1 className="xl:text-featurephone/heading lg:text-desktop/h2 text-mobile/h4 font-normal text-black/1 max-w-[486px]">Type-C Charging Onboard</h1>
                    <h3 className="xl:text-desktop/body/1 lg:text-desktop/body/large text-desktop/body/2/regular text-grey/grey/5 max-w-[402px]">Equipped with a Type-C charger for faster, secure, and reliable charging, simplify your power needs with modern connectivity.</h3>
                </div>
                <img src="/featurephone/it5262/Backgrounds/typec_phone.webp" alt="Type-C Charging Onboard" className='xl:max-h-[1080px] lg:max-h-[700px] max-h-[504px] absolute xl:right-40 lg:right-20 -bottom-44 lg:bottom-[-250px] xl:-bottom-[370px]' />
            </div>
        </div>
    )
}

export default TypeC