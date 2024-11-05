import React from 'react';

const Connectivity = () => {
  return (
    <div className="relative w-full h-[336px] md:h-[750px] sm:h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center text-white" style={{backgroundImage:"url(/SmartPhone/P555g/5g-revolution.png)"}}>
      <div className='content absolute flex flex-col py-8 w-full h-full text-center'>
        <div className='flex flex-col gap-[12px]'>
          <h2 className='text-mobile/h4 md:text-desktop/h2'>
            5G Revolution:<br /> Redefining Connectivity
          </h2>
          <p className='text-mobile/body/2 md:text-desktop/h6/medium'>
            itel P55 5G is all set to transform the way you connect, communicate, and create.
          </p>
        </div>
        <div  className=' flex justify-center items-center'>
          {/* Horizontal image for large screens */}
          <img 
            src='/SmartPhone/P55fiveg/Backgrounds/5GGraphic.webp' 
            className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[800px]'
            alt="Horizontal phone"
        
    
          />
     

         
        </div>
      </div>
    </div>
  );
};

export default Connectivity;


