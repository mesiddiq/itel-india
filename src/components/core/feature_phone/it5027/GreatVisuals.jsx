import React from 'react'

const GreatVisuals = () => {
    return (
        <div className="lg:h-[800px] lg:bg-[url('/featurephone/it5027/Backgrounds/big_screen.webp')]  bg-[url('/featurephone/it5027/Backgrounds/big_screen_mobile.webp')] bg-cover px-4 md:px-0 pb-8 lg:py-0 font-markot">
            <div className="content flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-0">
                <div className="">
                    <img src="/featurephone/it5027/Backgrounds/big_screen_phone.webp" alt="it-5027" className='lg:max-w-[500px] max-w-[278px]' />
                </div>
                <div className="lg:w-[518px] lg:space-y-[70px] space-y-5 lg:translate-y-10">
                    <div className="space-y-3 lg:space-y-5">
                        <h1 className=" text-mobile/h4 lg:text-featurephone/heading text-bg/primary/1">Big Screen.
                            <br className='hidden lg:block' />Great Visuals.</h1>
                        <h3 className="lg:text-featurephone/paragraph text-mobile/body/2 text-white/70 max-w-[448px]">
                            Experience big entertainment with itel it5027's 6.1cm screen. Whether it's movies or games, enjoy every moment in vivid detail.
                        </h3>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-8 lg:size-12' width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="13" y="4.34375" width="22.7027" height="40" rx="2.16216" stroke="white" strokeWidth="1.94595" />
                            <rect x="16.5781" y="7.75781" width="15.1351" height="16.2162" rx="1.08108" stroke="white" strokeWidth="1.5" />
                            <rect x="16.2422" y="38.5664" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="16.2422" y="34.7812" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="16.2422" y="31" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="16.2422" y="27.2148" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="22.1875" y="38.5664" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="22.1875" y="34.7812" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="22.1875" y="31" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="22.1875" y="27.2148" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="28.1328" y="38.5664" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="28.1328" y="34.7812" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="28.1328" y="31" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                            <rect x="28.1328" y="27.2148" width="4.86486" height="2.16216" rx="1.08108" fill="white" />
                        </svg>
                        <h5 className="lg:text-desktop/h5/medium text-mobile/h7 text-grey/grey/1">
                            6.1 cm (2.4”) <br className="lg:hidden" /> Big <br className='hidden lg:block' /> Screen
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreatVisuals