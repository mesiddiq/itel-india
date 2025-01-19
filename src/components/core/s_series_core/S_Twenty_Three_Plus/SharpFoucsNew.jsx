import React from 'react'

const SharpFoucsNew = () => {
    return (
        <div className='flex flex-col relative w-full px-[16px] lg:px-0 py-[12px] lg:py-[120px] overflow-hidden'>
            <div className='content'>
                <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot mb-8'>Enhance your photos with<br />Eye-Tracking Technology</h3>
                <div className='grid grid-cols-[15%_85%] lg:grid-cols-[25%_75%] relative'>
                    <div className='col-span-1'>
                        <img src='/smartphone/S23+/Backgrounds/SharpFocusCardOneText.svg' alt='SharpFocusCardOneText' className='absolute w-[135px] md:w-[200px] lg:w-auto left-[-12px] lg:left-[80px] bottom-0 lg:top-0' />
                    </div>
                    <div className='col-span-1'>
                        <img src='/smartphone/S23+/Backgrounds/SharpFocusCardOneImage.webp' alt='Flawless Selfie Capture'
                        />
                    </div>
                </div>
                <div className='lg:hidden'>
                    <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot my-8 text-end'>Crystal-Clear Shots,<br />Even in Dim Light</h3>
                    <div className='grid lg:hidden grid-cols-[85%_15%] relative'>
                        <div className='col-span-1'>
                            <img src='/smartphone/S23+/Backgrounds/SharpFocusCardTwoImage.webp' alt='SharpFocusCardTwoImage' className='w-full' />
                        </div>
                        <div className='col-span-1'>
                            <img src='/smartphone/S23+/Backgrounds/SharpFocusCardTwoText.svg' alt='SharpFocusCardTwoText' className='absolute w-[135px] md:w-[200px] lg:w-auto right-[-5px] bottom-0' />
                        </div>
                    </div>
                    <h3 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot my-8'>Master Your Shots: Unlock<br />Advanced Photography</h3>
                    <div className='grid grid-cols-[15%_85%] relative'>
                        <div className='col-span-1'>
                            <img src='/smartphone/S23+/Backgrounds/SharpFocusCardThreeText.svg' alt='SharpFocusCardThreeText' className='absolute w-[135px] md:w-[200px] lg:w-auto left-[-12px] bottom-0' />
                        </div>
                        <div className='col-span-1'>
                            <img src='/smartphone/S23+/Backgrounds/SharpFocusCardThreeImage.webp' alt='SharpFocusCardThreeImage' className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharpFoucsNew