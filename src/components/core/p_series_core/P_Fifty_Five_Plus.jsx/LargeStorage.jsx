import React from 'react'

const LargeStorage = () => {
  return (
    <div className="bg-[#D0E1FC] h-[720px] w-full flex flex-col  bg-no-repeat bg-cover"
    style={{ backgroundImage: 'url(/smartphone/P55+/Backgrounds/LargeStorageBG.webp)' }}>
      <div className="content md:flex-row flex flex-col w-full h-full items-center">
      <div className="flex flex-col font-markot gap-[48px] w-full p-4 md:p-0 md:w-1/2">
        <div className='flex flex-col gap-[12px] '>
 <h2 className='text-mobile/h3 md:text-desktop/h2 text-[#B3D98E]'>256 GB Large Storage</h2>
 <p className='text-base font-normal lg:w-[500px]'>Ample Storage with Lightning-Fast UFS 2.2 Technology. Effortlessly store and access your digital world with blazing speed and reliability.</p>
      </div>
      <p className='text-desktop/button'>1000+ TV Series Episodes* | 100,000+ photos* | 5000+ Apps*</p>
      </div>
      <div className=" flex justify-center items-center w-full px-4 md:p-0 md:w-1/2">
      <img src='/smartphone/P55+/Backgrounds/LargeStorageGraphic.webp'></img>
      </div>
      </div>
<p className='content px-4 lg:px-0 text-right lg:text-left text-desktop/body/1 py-8'>*depends on the file size</p>
      </div>
  )
}

export default LargeStorage