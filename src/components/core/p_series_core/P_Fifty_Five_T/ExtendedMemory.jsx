import React from 'react'

const ExtendedMemory = () => {
  return (
    <div className='flex w-full h-[480px] md:h-[720px] px-[18px] md:px-0 pt-[25px] md:pt-[50px] bg-[url("/smartphone/p55T/Backgrounds/ExtendedMemoryBgSmall.webp")] md:bg-[url("/smartphone/p55T/Backgrounds/ExtendedMemoryBg.webp")] bg-cover bg-center bg-no-repeat'>
      <div className='content relative'>
        <div className='w-[85%] mx-auto text-center'>
          <h2 className='text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 font-markot' data-aos='fade-down'>Extended Memory. Extended Stories.</h2>
        </div>
        <div className='flex justify-between pt-8'>
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemoryOne.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[130px] md:left-[40px]' data-aos='zoom-in-up' data-aos-delay='1000' />
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemoryTwo.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[400px] md:left-0' data-aos='zoom-in-up' data-aos-delay='1500' />
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemoryThree.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[240px] md:left-[240px]' data-aos='zoom-in-up' data-aos-delay='1250' />
        </div>
        <div className='flex justify-between pt-14'>
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemoryFour.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[460px] md:left-[230px]' data-aos='zoom-in-up' data-aos-delay='1750' />
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemoryFive.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[150px] md:right-[235px]' data-aos='zoom-in-up' data-aos-delay='2000' />
        </div>
        <div className='flex justify-between pt-16'>
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemorySix.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[235px] md:right-0' data-aos='zoom-in-up' data-aos-delay='2250' />
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemorySeven.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[380px] md:right-[245px]' data-aos='zoom-in-up' data-aos-delay='2500' />
          <img src='/smartphone/p55T/Backgrounds/ExtendedMemoryEight.svg' className='w-[70px] md:w-[142px] md:absolute md:top-[490px] md:right-[30px]' data-aos='zoom-in-up' data-aos-delay='2750' />
        </div>
      </div>
    </div>
  )
}

export default ExtendedMemory;