import React from 'react'

const CardData = [
    { id: 1, label: '11mm Slim Body Design', icons: '/featurephone/it5027/icons/slim.svg' },
    { id: 2, label: 'Breezy Colors', icons: '/featurephone/it5027/icons/breezy.svg' },
    { id: 3, label: 'Comfortable to Hold', icons: '/featurephone/it5027/icons/comfortable.svg' },
]

const CreateYourStyle = () => {
    return (
        <div className='px-4 md:px-0 py-11 lg:py-0 lg:pb-[100px]'>
            <div className="relative content lg:min-h-[800px] h-[584px] font-markot px-[26px] py-10 lg:py-0 rounded-[24px] flex lg:items-center lg:pl-[108px] bg-[url('/featurephone/it5027/Backgrounds/create_your_style_mobile.webp')] overflow-hidden bg-center bg-cover lg:bg-none">
                <img src="/featurephone/it5027/Backgrounds/boy.webp" alt="" className='absolute right-0 -bottom-4 max-w-[330px] md:max-w-[350px] lg:hidden' />
                <div className="space-y-5 lg:space-y-9 z-50 max-w-[487px]">
                    <div className="">
                        <h1 className="lg:text-[60px] lg:leading-[72px] lg:font-medium lg:-tracking-[2.4px] text-white text-mobile/h4">Create Your <br className="hidden lg:block" /> Own Style</h1>
                        <p className="lg:text-featurephone/paragraph text-mobile/body/2 text-white mt-3 lg:mt-[18px]">Create your own style with a range of breezy colors and a sleek 11mm slim body design. Stand out effortlessly!</p>
                    </div>
                    <div className="flex gap-5 lg:gap-6 flex-wrap lg:flex-nowrap ">
                        {
                            CardData.map((data) => {
                                return (
                                    <div className="flex lg:gap-4 gap-2 items-center lg:max-w-[160px] max-w-[110px]" key={data.id}>
                                        <img src={data.icons} alt="" className='size-6 lg:size-11' />
                                        <h4 className="lg:text-desktop/h6/medium text-mobile/h7 ">{data.label}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img src="/featurephone/it5027/Backgrounds/create_your_style.png" alt="it5027" className='w-full h-full absolute top-0 left-0 object-contain -z-10 hidden lg:block' />
            </div>
        </div>
    )
}

export default CreateYourStyle