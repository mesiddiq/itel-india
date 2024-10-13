import React from 'react'

const FeatureRich = () => {
    return (
        <div className='content py-[120px] space-y-6 md:space-y-20 font-markot'>
            <div className="flex flex-col lg:flex-row gap-3 justify-between">
                <h1 className="lg:text-desktop/h2 text-mobile/h4 text-itel-red max-w-[450px] ">Feature-Rich Phone with 4G VoLTE Connectivity</h1>
                <p className=' text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/5 max-w-[674px]'>Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Perfect for a busy lifestyle, this phone supports 4G and UPI payments, ensuring you stay connected and efficient. With Kingmedia, access YouTube, YouTube Shorts, news, cricket updates, and weather information effortlessly. The Kingvoice feature lets your phone speak out loud for you. </p>
            </div>
            <div className="flex flex-col gap-6 text-dark/card/bg justify-between lg:flex-row ">
                <div className="w-full max-w-[300px] space-y-2 md:space-y-4">
                    <img src="/featurephone/superguru4g/wifi-square.svg" alt="Wifi Square " className='size-10 lg:size-[56px]'/>
                    <h2 className='text-mobile/h5/medium'>Top-Tier 4G VoLTE Support</h2>
                    <h5 className='text-desktop/body/2/regular text-brand/black'>Choose your speed with the Super Guru 4G- 4G for lightning fast browsing & 2G/3G to save data. Stay connected wherever you are.</h5>
                </div>
                <div className="w-full max-w-[300px] space-y-2 md:space-y-4">
                    <img src="/featurephone/superguru4g/music-playlist.svg" alt="Wifi Square " className='size-10 lg:size-[56px]'/>
                    <h2 className='text-mobile/h5/medium'>KingMedia: All in one Entertainment</h2>
                    <h5 className='text-desktop/body/2/regular text-brand/black'>Dive into the YouTube universe with YouTube & YouTube Shorts & catering to diverse interests, whether it's your interest in news, cricket, weather, or anything else.</h5>
                </div>
                <div className="w-full max-w-[300px] space-y-2 md:space-y-4">
                    <img src="/featurephone/superguru4g/upi.svg" alt="Wifi Square " className='size-10 lg:size-[56px]'/>
                    <h2 className='text-mobile/h5/medium'>UPI Payments</h2>
                    <h5 className='text-desktop/body/2/regular text-brand/black'>Make payment without internet.
                    No Internet required, payment can be done through GS Pay.</h5>
                </div>
            </div>
        </div>
    )
}

export default FeatureRich