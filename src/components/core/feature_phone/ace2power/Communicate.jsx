import React from 'react'

const Communicate = () => {
    return (
        <div className='font-markot px-4 md:px-0 py-10 lg:py-0'>
            <div className="content relative lg:pt-11 lg:pb-[120px] lg:py-[60px] px-6 lg:px-0 pt-10 h-[440px] md:h-[500px] lg:h-auto bg-[url('/featurephone/Ace2Power/Backgrounds/extended_battery_mobile.webp')] bg-top bg-cover  rounded-[24px] border-[1.5px] border-[#ceccd5] lg:bg-none lg:border-none">
                <img src="/featurephone/Ace2Power/Backgrounds/communication.webp" alt="Communicate gbg" className='hidden lg:block'/>
                <div className="max-w-[437px] space-y-3 lg:space-y-6 lg:absolute  top-[220px] left-[148px]
                ">
                    <h1 className="text-mobile/h4 !font-normal lg:text-featurephone/heading text-black/1">Communicate in Your Own Language</h1>
                    <h6 className="text-mobile/h6 lg:text-[20px] lg:leading-6 text-transparent bg-clip-text bg-gradient-to-r from-[#242424] to-[#ff073c] uppercase">available in 9 <br /> local languages</h6>
                    <p className="lg:text-desktop/body/1 text-brand/black text-mobile/small/body max-w-[279px]">Message reading support available for 22 popular Indian languages</p>
                </div>
                <img src="/featurephone/Ace2Power/Backgrounds/illustration.png" alt="Taking in own language" className='absolute bottom-0 left-1/2 -translate-x-1/2  max-w-[230px] md:max-w-[350px] lg:hidden' />
            </div>
        </div>
    )
}

export default Communicate