import React from 'react'

const YourOwnLanguage = () => {
    return (
        <div className="lg:h-[800px] h-[572px] lg:bg-[url('/featurephone/it5027/Backgrounds/communicate_bg.jpg')] px-4 md:px-0 bg-[url('/featurephone/it5027/Backgrounds/communicate_bg_mobile.webp')] bg-cover pt-10 lg:pt-0">
            <div className="content font-markot relative flex flex-col lg:flex-row lg:pt-[135px] justify-between h-full overflow-hidden">
                <div className="lg:space-y-6 space-y-3 max-w-[558px]">
                    <h1 className="text-mobile/h4 lg:text-featurephone/heading text-bg/primary/1 ">
                        Communicate in Your Own Language
                    </h1>
                    <h3 className="lg:text-[20px] font-bold lg:leading-6 lg:tracknig-[0.8px] text-transparent bg-clip-text uppercase bg-gradient-to-r from-s24/from to-s24/to">available in 9 local language</h3>
                    <h3 className="lg:text-desktop/body/large text-grey/grey/1 text-mobile/body/large  max-w-[407px]">
                    Message reading support available for 22 popular Indian languages
                    </h3>
                    <h4 className="lg:text-desktop/body/1 text-mobile/body/2 text-grey/grey/1 max-w-[407px]">English | Hindi | Gujarati | Punjabi | Tamil | Malayalam | Telugu | Kannada | Bengali </h4>
                </div>
                <div className="xl:-translate-y-12 translate-y-8">
                    <img src="/featurephone/it5027/Backgrounds/communicate_phone.webp" alt="it5027" className='max-w-[328px] xl:max-w-[780px] lg:max-w-[700px]' />
                </div>
            </div>
        </div>
    )
}

export default YourOwnLanguage