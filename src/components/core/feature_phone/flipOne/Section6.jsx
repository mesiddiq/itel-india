import React from 'react'

const Section6 = () => {
    return (
        <section className='lg:py-[60px] py-10 px-4 md:px-0'>
            <div className="content lg:rounded-[24px] lg:h-[680px] h-[568px] rounded-[16px] bg-black relative flex justify-between overflow-hidden">
                <div className="lg:space-y-5 space-y-1 absolute md:bottom-10 md:right-5 px-4 pt-4 md:px-0 md:pt-0">
                    <h3 className="lg:text-desktop/h2 text-mobile/h5/medium md:text-mobile/h4 ">Communicate in Your <br /> Own Language</h3>
                    <h5 className="uppercase lg:text-[20px] lg:leading-6 font-bold bg-[linear-gradient(75deg,_#FE6021_3.01%,_#FFF7E8_96.47%)] bg-clip-text text-transparent">multiple language support</h5>
                </div>

                <div className="flex flex-col items-start self-end z-20">
                    {/* Languages Text */}
                    <img src="/featurephone/flipOne/languagetext.webp" alt="FLIP KAREIEN" className='lg:max-w-[500px] md:max-w-[400px] max-w-[300px] ' />

                    {/* Language Phone */}
                    <img src="/featurephone/flipOne/languagephone.webp" alt="Multiple language support" className='self-end lg:max-w-max md:max-w-[250px] max-w-[200px]' />

                </div>
                {/* Peoples Image */}
                <img src="/featurephone/flipOne/language.webp" alt="All languages" className='absolute lg:right-0 bottom-0 md:full md:left-1/2' />
            </div>
        </section>
    )
}

export default Section6