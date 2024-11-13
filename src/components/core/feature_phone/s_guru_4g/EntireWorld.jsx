import React from 'react'
import { For } from 'react-haiku'

const FeatureCardData = [
    { id: 1, label: 'YouTube', logo: '/featurephone/superguru4g/youtube.svg' },
    { id: 2, label: 'BBC News', logo: '/featurephone/superguru4g/bbcnews.svg' },
    { id: 3, label: 'YouTube Shorts', logo: '/featurephone/superguru4g/youtubeshorts.svg' },
    { id: 4, label: 'Cricket Score', logo: '/featurephone/superguru4g/cricket.svg' },
    { id: 5, label: 'Weather Update', logo: '/featurephone/superguru4g/weather.svg' },
    { id: 6, label: 'Wikipedia', logo: '/featurephone/superguru4g/wikipedia.svg' },
]

const EntireWorld = () => {
    return (
        <div className='px-4 md:px-0 h-[1217px] lg:h-[1440px] pt-9 lg:pt-[120px] overflow-hidden superguru4g'>
            <div className="flex flex-col lg:flex-row-reverse justify-between font-markot content ">
                <div className="space-y-5 lg:space-y-[60px] max-w-[518px] mx-auto">
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h4 className='text-[16px] font-medium leading-[19.2px]-tracking-[0.16px] uppercase'>king media support</h4>
                        <h4 className='text-mobile/h4 lg:font-normal lg:-tracking-[1.2px] lg:text-[60px]  lg:leading-[72px]  text-bg/primary/1'>Entire World: One Tap!</h4>
                        <p className='text-mobile/body/2 text-white max-w-[405px]'>Get ready for all your interests under one roof with kingmedia's preloaded app. Whether you're into news, cricket scores, weather updates, or anything else, we've got you covered. </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-20 lg:gap-x-0 gap-y-3 lg:max-w-[313px] ">
                        <For each={FeatureCardData} render={({ label, id, logo }) =>
                            <div className="flex items-center gap-2 max-w-[124px]">
                                <img src={logo} alt={label} className='size-8' />
                                <h3 className='text-desktop/body/2/regular lg:text-desktop/body/1 text-white'>{label}</h3>
                            </div>
                        } />
                    </div>

                </div>
                <div className="mt-8 lg:mt-0 mx-auto">
                    <img src="/featurephone/superguru4g/mobilescreens.webp" alt="Guper Guru 4g" className='max-h-[300px]' />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between font-markot content pt-[75px] lg:pt-[214px]">
                <div className="space-y-5 lg:space-y-[60px] max-w-[518px]">
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h4 className='text-mobile/h4 lg:font-normal lg:-tracking-[1.2px] lg:text-[60px]  lg:leading-[72px]  text-bg/primary/1'>King Media: <br /> Videos, Games, You Name it!</h4>
                        <p className='text-mobile/body/2 text-white max-w-[405px]'>Dive into the latest videos, content and preloaded games for all your entertainment cravings—it's all here at king media, your one-stop entertainment hub</p>
                    </div>
                </div>
                <div className="translate-y-20 lg:translate-y-6">
                    <img src="/featurephone/superguru4g/kingmedia.webp" alt="Guper Guru 4g" className='lg:max-w-[770px] max-w-[320px]' />
                </div>
            </div>
        </div>
    )
}

export default EntireWorld