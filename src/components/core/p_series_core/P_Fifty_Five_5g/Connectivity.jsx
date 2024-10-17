import React from 'react';

const Connectivity = () => {
  return (
    <div className="relative w-full h-[336px] md:h-[750px] sm:h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center text-white" style={{backgroundImage:"url(/P_Series/5g-revolution.png)"}}>
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
            src='/P_Series/horizontal_phone.png' 
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden sm:block'
            alt="Horizontal phone"
        
    
          />
          <img 
            src='/P_Series/meter.png' 
            className='hidden sm:block absolute right-16 top-[403px] ' 
            alt="Meter"
          />

          {/* Horizontal image for small screens */}
          <img 
            src='/P_Series/horizontal_small.png' 
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 block sm:hidden' 
            alt="Horizontal small phone"
          />
          <img 
            src='/P_Series/meter.png' 
            className='block sm:hidden absolute right-0 top-52 w-[103px] h-[103px]' 
            alt="Meter"
          />
        </div>
      </div>
    </div>
  );
};

export default Connectivity;


