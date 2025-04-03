import React from 'react'

const ExtendedBattery = () => {
    return (
        <div className='bg-[url("/featurephone/Ace2Power/Backgrounds/extended_battery_mobile.webp")] overflow-hidden relative bg-cover bg-center bg-no-repeat px-4 md:px-0 font-markot lg:bg-[url("/featurephone/Ace2Power/Backgrounds/extended_battery.webp")] lg:h-[650px] h-[450px] md:h-[550px]'>
            <div className="flex lg:items-center h-full gap-[60px] content justify-center lg:justify-end pt-6 md:pt-10 lg:pt-0 ">

                <div className=" absolute lg:left-0 lg:max-w-[1000px] md:w-1/2 top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[400px] md:max-w-[600px] lg:translate-x-0 lg:top-[-100px] ">
                    <img src="/featurephone/Ace2Power/Backgrounds/extended_phone.webp" alt="Ace 2 Power" className="" />
                </div>

                <div className="space-y-3 md:space-y-4 lg:space-y-6">

                    <div className="space-y-4 max-w-[437px] lg:text-left text-center">

                        <h3 className="text-mobile/h4 lg:text-desktop/h2 text-black/1">Extended Battery Life: <br className='lg:hidden' /> Up to 21 Days*</h3>

                        <h4 className="text-mobile/h6 text-black/1 lg:text-[36px] lg:leading-[46.8px] lg:-tracking-[0.7px] font-normal ">2500 mAh Battery</h4>

                        <h6 className="text-mobile/body/2 lg:text-desktop/body/1 text-brand/black">Activate Super Battery Mode for long-lasting performance powered by a 2500 mAh battery and 21 days* battery backup. </h6>

                    </div>
                    <div className="space-y-6 hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                            <path d="M29.1094 56.5C13.6672 56.5 1.10938 43.9422 1.10938 28.5C1.10938 13.0578 13.6672 0.5 29.1094 0.5C44.5515 0.5 57.1094 13.0578 57.1094 28.5C57.1094 43.9422 44.5515 56.5 29.1094 56.5ZM29.1094 1.38585C14.1562 1.38585 1.99523 13.5468 1.99523 28.5C1.99523 43.4532 14.1562 55.6141 29.1094 55.6141C44.0625 55.6141 56.2235 43.4532 56.2235 28.5C56.2235 13.5468 44.0625 1.38585 29.1094 1.38585Z" fill="#0E0E0E" stroke="#0E0E0E" />
                            <path d="M11.4185 23.8738H11.9185V23.3738V19.3839V19.3768C11.9185 19.0311 12.1817 18.75 12.5453 18.75H47.5258C47.8591 18.75 48.1526 19.0435 48.1526 19.3768V37.6041C48.1526 37.9374 47.8591 38.2309 47.5258 38.2309H12.5453C12.212 38.2309 11.9185 37.9374 11.9185 37.6041V33.6142V33.1142H11.4185H10.0547V23.8738H11.4185ZM46.814 20.5107V20.0107H46.314H13.6721H13.1721V20.5107V36.4844V36.9844H13.6721H46.314H46.814V36.4844V20.5107Z" fill="#0E0E0E" stroke="#0E0E0E" />
                            <path d="M39.0039 34.5107V22.4922H43.9498V34.5107H39.0039Z" fill="#0E0E0E" stroke="#0E0E0E" />
                            <path d="M31.3633 34.5107V22.4922H36.3091V34.5107H31.3633Z" fill="#0E0E0E" stroke="#0E0E0E" />
                            <path d="M23.7266 34.5107V22.4922H28.6724V34.5107H23.7266Z" fill="#0E0E0E" stroke="#0E0E0E" />
                            <path d="M16.084 34.5107V22.4922H21.0298V34.5107H16.084Z" fill="#0E0E0E" stroke="#0E0E0E" />
                        </svg>
                        <div className="space-y-5">
                            <h2 className="text-mobile/h5/medium text-smoky/black">55 Days* Standby Time</h2>
                            <h2 className="text-mobile/h5/medium text-smoky/black">24 Hours* Talktime</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtendedBattery