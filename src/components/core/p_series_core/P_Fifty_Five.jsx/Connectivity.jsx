import React from 'react';

const Connectivity = () => {
  return (
    <div className="relative h-[536px] sm:h-[700px] overflow-hidden md:h-[800px] bg-cover bg-center text-white" style={{backgroundImage:"url(/P_Series/5g-revolution.png)"}}>
    <div className='absolute flex flex-col justify-center items-center gap-[48px] w-full h-full text-center'>
<div className='flex flex-col gap-[12px]'>
    <h2 className=' text-mobile/h4  md:text-desktop/h2'>5G Revolution:<br></br> Redefining Connectivity</h2>
    <p className='text-mobile/body/2 md:text-desktop/h6/medium'>itel P55 5G is all set to transform the way you connect, communicate, and create.</p>
</div>
<div className='relative'>
          
          <img src='/P_Series/horizontal_phone.png' className='hidden sm:block'></img>
          <img src='/P_Series/meter.png' className='hidden sm:block absolute right-0 top-44'></img>

         
          <img src='/P_Series/horizontal_small.png' className='block sm:hidden'></img>
          <img src='/P_Series/meter.png' className='block sm:hidden absolute right-0 top-24 w-[103px] h-[103px]'></img>
        </div>

    </div>
    </div>
  );
};

export default Connectivity;

