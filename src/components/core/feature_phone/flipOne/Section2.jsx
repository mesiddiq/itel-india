import React from 'react'

const Section2 = () => {
    return (
        <section className='lg:h-[800px] h-[680px] px-4 md:px-0 pt-10 lg:pt-0 bg-[linear-gradient(263deg,_#732706_0%,_#D85820_112.96%)]'>
            <div className="content relative lg:pt-20 h-full flex lg:items-center flex-col lg:justify-between md:flex-row-reverse gap-9 lg:gap-0">
                <div className="max-w-[566px] lg:space-y-5 space-y-3 self-start">
                    <h3 className="lg:text-featurephone/heading text-mobile/h4 md:text-mobile/h3 text-bg/primary/1">Light Weight & Portable: Freedom in your Pocket</h3>
                    <p className="lg:text-featurephone/paragraph text-mobile/body/2 md:text-mobile/body/large text-grey/grey/1 max-w-[475px]">The itel Flip One is incredibly light and slim, making it easy to slip into your pocket or purse - Pocket Friendly Convenience</p>
                </div>
                <div className="">
                    <img src="/featurephone/flipOne/flipphone2.webp" alt="Compact and Portable" className='max-h-[274px] md:max-h-max' />
                </div>
                <div className="absolute bottom-0 flex items-center right-0 overflow-hidden ">
                    <img src="/featurephone/flipOne/bosskaorder.webp" alt="Boss ka order text" className='w-1/2 lg:self-start md:self-auto self-start max-w-[303px] md:max-h-max lg:translate-x-20 ' />
                    <img src="/featurephone/flipOne/charcter1.webp" alt="Character Image" className='w-1/2 max-w-[370px] max-h-[200px] object-contain md:max-h-max' />
                </div>
            </div>
        </section>
    )
}

export default Section2