import React from 'react'

const MoreDetails = () => {
    return (
        <>

            {/* **************************Section 01**************************** */}

            <div className={`lg:pt-[91px] relative px-4 md:px-0 lg:pb-[68px] py-8 flex justify-center bg-cover bg-[url('/featurephone/Power_450/Backgrounds/battery_backup_bg_mobile.webp')] lg:bg-[url('/featurephone/Power_450/Backgrounds/battery_backup_bg.webp')]`}>
                <div className="text-center">
                    <h3 className="text-mobile/h6 lg:text-desktop/h2 text-white">2500mAh Battery</h3>
                    <h1 className="lg:text-desktop/h1 text-mobile/h4 mt-[10px] lg:mt-5 text-white">15 Days* Backup</h1>
                    <p className="lg:text-mobile/body/large text-mobile/body/2 mt-3 lg:mt-4 text-white/70">Stay connected around the clock with Super Battery Mode. Enjoy <br className='hidden lg:block' /> continuous conversations without worrying about power.</p>
                    <img src="/featurephone/Power_450/Backgrounds/battery_backup.webp" alt="" className=' mx-auto max-w-[314px] lg:max-w-[886px]' />
                </div>
                <p className="text-mobile/small/body lg:text-desktop/body/1 text-grey/grey/1/70 absolute bottom-2 lg:bottom-4 right-4">
                    *under ideal lab conditions
                </p>
            </div>


            {/* **************************Section 02**************************** */}

            <div className="pt-[30px] pb-[18px] lg:pt-[118px] overflow-hidden px-4 font-markot h-[537px] lg:h-[800px] bg-cover bg-[url('/featurephone/Power_450/Backgrounds/power_style_bg_mobile.webp')] lg:bg-[url('/featurephone/Power_450/Backgrounds/power_style_bg.webp')]">
                <div className="content flex flex-col lg:flex-row">
                    <div className="max-w-[512px]">
                        <h1 className="text-mobile/h4 lg:text-desktop/h1 ">
                            Power with Style
                        </h1>

                        <p className="lg:text-desktop/body/large text-mobile/body/2 mt-3 lg:mt-4 text-white/70">
                            Featuring a slim body, a powerful jumbo battery, and a high-resolution VGA camera, available in three eye-catching colors - Light Green, Deep Blue, and Dark Grey.
                        </p>
                        <div className="mt-5 lg:mt-20 flex gap-4 lg:gap-10 ">
                            <div className="flex gap-2 lg:gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className='size-8 lg:size-12' viewBox="0 0 48 48" fill="none">
                                    <path d="M24 48C10.7639 48 0 37.2361 0 24C0 10.7639 10.7639 0 24 0C37.2361 0 48 10.7639 48 24C48 37.2361 37.2361 48 24 48ZM24 0.759301C11.183 0.759301 0.759301 11.183 0.759301 24C0.759301 36.817 11.183 47.2407 24 47.2407C36.817 47.2407 47.2407 36.817 47.2407 24C47.2407 11.183 36.817 0.759301 24 0.759301Z" fill="white" />
                                    <path d="M23.172 39.9633C21.5136 39.9633 19.6974 39.2648 17.5106 37.6247L0.19245 24.6376C-0.0201539 24.4797 -0.0626585 24.176 0.0952762 23.9634C0.253211 23.7507 0.556922 23.7082 0.769527 23.8661L18.0877 36.8532C23.5607 40.9595 26.112 38.8213 30.929 34.0104C35.6792 29.2602 46.2 17.7856 46.3094 17.6702C46.4916 17.4758 46.7953 17.4637 46.9897 17.6399C47.1841 17.8221 47.1963 18.1258 47.0201 18.3202C46.9168 18.4356 36.3777 29.9284 31.6154 34.6907C28.5539 37.7522 26.1241 39.9633 23.178 39.9633H23.172Z" fill="white" />
                                    <path d="M44.2455 16.0746C42.1924 18.5529 40.0967 20.9888 37.9464 23.376C35.8082 25.7754 33.6214 28.1263 31.4103 30.4649L29.7277 32.1961C29.1627 32.7671 28.61 33.3503 27.9539 33.897C27.2979 34.4254 26.5629 34.8628 25.7732 35.1847C24.9775 35.4945 24.1331 35.6524 23.2888 35.6828C21.6001 35.7071 19.9661 35.2394 18.5022 34.5347C17.0382 33.8179 15.6775 32.9371 14.4141 31.9409C15.799 32.761 17.2022 33.5446 18.6905 34.1035C20.1605 34.6866 21.7277 35.0207 23.2524 34.9357C24.0117 34.8628 24.7527 34.6927 25.4513 34.4072C26.1377 34.0974 26.7876 33.6904 27.3708 33.1923C27.9357 32.6942 28.4946 32.1171 29.0473 31.534L30.7056 29.7907C32.9289 27.4763 35.14 25.1498 37.3936 22.8536C39.635 20.5514 41.919 18.2918 44.2394 16.0625L44.2455 16.0746Z" fill="white" />
                                </svg>
                                <h1 className="lg:text-mobile/h5/medium text-grey/grey/1 text-mobile/h7">Slim (13.4 mm) with Big Battery Inside</h1>
                            </div>
                            <div className="flex gap-2 lg:gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" className='size-8 lg:size-12' viewBox="0 0 32 33" fill="none">
                                    <path d="M16 32.5C7.17591 32.5 0 25.3241 0 16.5C0 7.67591 7.17591 0.5 16 0.5C24.8241 0.5 32 7.67591 32 16.5C32 25.3241 24.8241 32.5 16 32.5ZM16 1.0062C7.45533 1.0062 0.506201 7.95533 0.506201 16.5C0.506201 25.0447 7.45533 31.9938 16 31.9938C24.5447 31.9938 31.4938 25.0447 31.4938 16.5C31.4938 7.95533 24.5447 1.0062 16 1.0062Z" fill="white" />
                                    <path d="M27.3032 10.1639C28.3844 12.0915 28.9595 14.2783 28.9595 16.5056C28.9595 18.7329 28.433 20.7375 27.4368 22.6043L23.3346 16.214L19.6818 10.5243L27.3072 10.1639H27.3032ZM19.9167 22.7096L16.434 29.4563C20.8278 29.3064 24.8855 26.9131 27.1412 23.1227L23.0187 16.7L19.9167 22.7096ZM16.1586 3.54688L12.6598 10.3259L19.4145 10.006L27.0035 9.64962C24.6709 5.91589 20.5686 3.59952 16.1627 3.54688H16.1586ZM12.5869 23.0052L4.99793 23.3616C7.33051 27.0953 11.4328 29.4117 15.8387 29.4644L19.3376 22.6853L12.5828 23.0052H12.5869ZM4.85621 9.88855L8.97868 16.3112L12.0807 10.3016L15.5633 3.55497C11.1695 3.70481 7.11184 6.09812 4.85621 9.88855ZM4.5646 10.4069C3.5684 12.2738 3.04199 14.3755 3.04199 16.5056C3.04199 18.6357 3.61297 20.9197 4.69827 22.8473L12.3237 22.4869L8.67091 16.7972L4.56865 10.4029L4.5646 10.4069Z" fill="white" />
                                </svg>
                                <h1 className="lg:text-mobile/h5/medium text-grey/grey/1 text-mobile/h7">Elegant Camera Deco</h1>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src="/featurephone/Power_450/Backgrounds/three_phones.webp" alt="Power 450" className='lg:max-w-[726px] translate-y-10 lg:translate-x-20' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreDetails