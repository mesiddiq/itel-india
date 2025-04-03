import React, { useRef } from 'react'
import { For, useSize } from 'react-haiku'

const KingVoice = ({ phoneUrl, cards, bgColor, borderColor, textColor, linearGradient, bgGradient }) => {

    return (
        <div className={`flex flex-col overflow-hidden items-center  relative gap-6 2xl:gap-14 pb-[366px] pt-9 2xl:pb-[116px] 2xl:pt-12`} style={linearGradient ? { backgroundImage: bgGradient } : { background: bgColor }}>
                <div className={`flex justify-center border-2 relative rounded-s `} style={{ borderColor: borderColor }}>
                    <h3 className={`text-mobile/h6 lg:text-desktop/h5 xl:text-desktop/h4 2xl:text-desktop/h3 text-white font-markot text-center absolute -translate-y-1/2  px-3 2xl:px-5`} style={{ backgroundColor: bgColor }}>A Phone That Speaks For You</h3>
                    <h3 className='uppercase text-[94px] md:text-[150px] text-center md:leading-[140px] lg:text-[160px] lg:leading-[200px] xl:text-[200px] xl:leading-[240px] 2xl:text-[240px] 2xl:leading-[286px] font-bold leading-[94px] font-markot px-5 2xl:px-0 py-4 2xl:py-5' style={{ color: textColor }}>
                        <span className='tracking-[15px] font-markot '>king</span><br className='lg:hidden' />
                        <div className='-tracking-[3.7px] inline'>v
                            <div className='relative inline'>
                                o
                                <svg width="92" className='size-6 md:size-12 2xl:size-[92px] absolute top-[52%] left-[53%] -translate-x-1/2 -translate-y-1/2' height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="mingcute:voice-fill" clipPath="url(#clip0_7561_74761)">
                                        <g id="Group">
                                            <path id="Vector" d="M46.0002 9.58203C47.4295 9.5821 48.8077 10.1146 49.8658 11.0756C50.9239 12.0366 51.5861 13.3572 51.7233 14.78L51.7502 15.332V76.6654C51.7494 78.142 51.1806 79.5618 50.1616 80.6305C49.1426 81.6992 47.7514 82.3349 46.2765 82.4059C44.8015 82.4768 43.3558 81.9776 42.2389 81.0117C41.122 80.0458 40.4195 78.6871 40.277 77.2174L40.2502 76.6654V15.332C40.2502 13.807 40.856 12.3445 41.9343 11.2662C43.0126 10.1878 44.4752 9.58203 46.0002 9.58203ZM30.6668 21.082C32.1918 21.082 33.6544 21.6878 34.7327 22.7662C35.811 23.8445 36.4168 25.307 36.4168 26.832V65.1654C36.4168 66.6904 35.811 68.1529 34.7327 69.2312C33.6544 70.3096 32.1918 70.9154 30.6668 70.9154C29.1418 70.9154 27.6793 70.3096 26.601 69.2312C25.5226 68.1529 24.9168 66.6904 24.9168 65.1654V26.832C24.9168 25.307 25.5226 23.8445 26.601 22.7662C27.6793 21.6878 29.1418 21.082 30.6668 21.082ZM61.3335 21.082C62.8585 21.082 64.321 21.6878 65.3994 22.7662C66.4777 23.8445 67.0835 25.307 67.0835 26.832V65.1654C67.0835 66.6904 66.4777 68.1529 65.3994 69.2312C64.321 70.3096 62.8585 70.9154 61.3335 70.9154C59.8085 70.9154 58.346 70.3096 57.2676 69.2312C56.1893 68.1529 55.5835 66.6904 55.5835 65.1654V26.832C55.5835 25.307 56.1893 23.8445 57.2676 22.7662C58.346 21.6878 59.8085 21.082 61.3335 21.082ZM15.3335 32.582C16.8585 32.582 18.321 33.1878 19.3994 34.2662C20.4777 35.3445 21.0835 36.807 21.0835 38.332V53.6654C21.0835 55.1904 20.4777 56.6529 19.3994 57.7312C18.321 58.8096 16.8585 59.4154 15.3335 59.4154C13.8085 59.4154 12.346 58.8096 11.2676 57.7312C10.1893 56.6529 9.5835 55.1904 9.5835 53.6654V38.332C9.5835 36.807 10.1893 35.3445 11.2676 34.2662C12.346 33.1878 13.8085 32.582 15.3335 32.582ZM76.6668 32.582C78.0962 32.5821 79.4743 33.1146 80.5324 34.0756C81.5905 35.0366 82.2528 36.3573 82.39 37.78L82.4168 38.332V53.6654C82.4161 55.142 81.8473 56.5618 80.8283 57.6305C79.8092 58.6992 78.4181 59.3349 76.9432 59.4059C75.4682 59.4768 74.0225 58.9776 72.9056 58.0117C71.7886 57.0458 71.0862 55.6871 70.9437 54.2174L70.9168 53.6654V38.332C70.9168 36.807 71.5226 35.3445 72.601 34.2662C73.6793 33.1878 75.1418 32.582 76.6668 32.582Z" fill={textColor} />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7561_74761">
                                            <rect width="92" height="92" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <span>
                                ice
                            </span>
                        </div>
                    </h3>
                </div>
            <div className="grid gap-x-4 gap-y-3 2xl:gap-y-10 grid-cols-2 2xl:gap-x-[622px] font-markot relative">
                <For each={cards} render={({ label, icon }, idx) =>
                    <div className="gap-2 flex  2xl:gap-4 2xl:w-[259px] items-center" key={idx} data-aos="fade-up">
                        <div className="2xl:p-3 p-[6px] md:p-2 2xl:min-w-[54px] 2xl:rounded-[8px] rounded-[6px] flex items-center justify-center" style={{ background: borderColor }}>
                            <img src={icon} alt={label} className='2xl:min-h-8 2xl:min-w-8  md:min-h-5 md:min-w-5 min-h-4 min-w-4' />
                        </div>
                        <h3 className='text-mobile/h7 md:text-mobile/small/button 2xl:text-desktop/h5/medium text-grey/grey/1 max-w-[116px] md:max-w-full'>{label}</h3>
                    </div>
                } />
            </div>
            <img src={phoneUrl} alt="Super Guru 4g" loading='lazy' className='absolute bottom-0 left-1/2 top-[470px] md:top-[580px] 2xl:top-[278px] -translate-x-1/2 max-w-[298px] max-h-[760px] 2xl:max-w-[490px] ' />
        </div>
    )
}

export default KingVoice