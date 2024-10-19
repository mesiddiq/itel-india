import React from 'react'
import { For } from 'react-haiku'

const FeatureRich = ({ title, description, cards }) => {
    return (
        <div className='content overflow-hidden py-8 md:py-[120px] space-y-6 md:space-y-20 font-markot px-4 md:px-0'>
            <div className="flex flex-col lg:flex-row gap-3 justify-between">
                <h1 className="lg:text-desktop/h2 text-mobile/h4 text-itel-red max-w-[450px] " data-aos="fade-up">{title}</h1>
                <p className=' text-desktop/body/2/regular lg:text-desktop/body/1 text-grey/grey/5 max-w-[674px]' data-aos="fade-left">{description} </p>
            </div>
            <div className="flex flex-col gap-6 text-dark/card/bg justify-between lg:flex-row ">
                <For each={cards} render={({ title, description, icon, id }) => (
                    <div className="w-full max-w-[300px] space-y-2 md:space-y-4" key={id} data-aos="fade-up" data-aos-delay={id * 100}>
                        <img src={icon} alt={title} className='size-10 lg:size-[56px]' />
                        <h2 className='text-mobile/h5/medium'>{title}</h2>
                        <h5 className='text-desktop/body/2/regular text-brand/black/70'>{description}</h5>
                    </div>
                )} />
            </div>
        </div>
    )
}

export default FeatureRich