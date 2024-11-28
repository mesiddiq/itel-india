import React, { useState } from 'react';



const Storage = () => {
  const [showImages, setShowImages] = useState(false);
  const handleClick = () => {
    setShowImages(!showImages);
  };
  return (
    <div className='relative text-white overflow-hidden w-full flex h-[740px] md:h-[660px] bg-cover bg-center'
>
        <div className={`
    flex  w-full h-full
    bg-cover
    bg-[url('/smartphone/P55fiveg/Backgrounds/MegaMobile.webp')]   // For small screens (default)
    md:bg-[url('/smartphone/P55fiveg/Backgrounds/MegaBG.webp')]       // For md and larger screens
    bg-center bg-no-repeat
  `}>
    <div className='content md:flex-row flex flex-col'>
     <div data-aos="fade-right"className="w-full md:w-1/2 h-full flex items-center px-4 lg:p-0">
     <div className='flex flex-col gap-[20px] md:gap-[48px] font-markot ' data-aos="fade-right">
<div className="flex flex-col gap-[12px]">
  <h2 className='text-mobile/h3 md:text-desktop/h2'>Mega Storage: <br/>
  Multi-task at Ease</h2>
  <p className='text-mobile/body/2 md:text-desktop/body/large '>Unlock endless possibilities with the itel P55 5G's<br/> impressive storage capacity. Store, game, and <br/> multitask without limits.</p>
</div>
<div className="md:flex-row flex flex-col md:gap-[24px] gap-[12px] items-start">
  {/* First Section */}
  <div className="flex flex-col gap-[8px] md:border-r md:border-white pr-4 ">
    <h4 className="text-mobile/h5 md:text-desktop/h4">12 GB* (6GB + 6GB)*</h4>
    <h4 className="text-mobile/body/large md:text-desktop/body/large">RAM</h4>
    <p className="text-mobile/small/body md:text-desktop/caption">*With Memory Fusion</p>
  </div>

  {/* Divider */}
  <div className="md:hidden w-full h-px bg-gray-500 my-2" /> {/* Horizontal line for mobile */}
{/* <div className="hidden md:block" style={{ width: '2px', height: '100%', backgroundColor: '#ffffff', marginLeft: '16px', marginRight: '16px' }} />  */}


 

  {/* Second Section */}
  <div className="flex flex-col gap-[8px]">
    <h4 className="text-mobile/h5 md:text-desktop/h4">128 GB</h4>
    <p className="text-mobile/body/large md:text-desktop/body/large">ROM Storage</p>
  </div>
</div>

     </div>
     </div>
     <div className="w-full md:w-1/2 h-full flex justify-center items-center">
      <div className="relative flex justify-center items-center h-max w-[350px] lg:w-[755px] py-8">
        {/* Left Mobile Image */}
        <img
          src="/smartphone/P555g/mob2.png"
          alt="Left Mobile"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="true"
          className="absolute z-0 w-[200px] lg:w-[380px] left-[30px] md:left-[10px] transform translate-x-0"
        />

        {/* Center Mobile Image */}
        <img
          src="/smartphone/P555g/mob1.png"
          alt="Center Mobile"
         
      
          className="relative z-10 w-[150px] lg:w-[250px] transform scale-100"
        />

        {/* Right Mobile Image */}
        <img
          src="/smartphone/P555g/mob3.png"
          alt="Right Mobile"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="true"
          className="absolute z-0 w-[200px] lg:w-[400px] right-[30px] md:right-[10px] transform translate-x-0"
        />
      </div>
    </div>
    </div></div></div>
  )
}

export default Storage