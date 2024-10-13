import React from 'react';

const Connectivity = () => {
  return (
    <div className="relative h-[536px] md:h-[800px] bg-blue-900 text-white">
    {/* Background */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(77, 143, 253, 0.7) 0%, rgba(27, 43, 84, 0.7) 100%), url("/P_Series/Home2_bg.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
    <div className='absolute flex flex-col justify-center items-center gap-[48px] w-full h-full text-center'>
<div className='flex flex-col gap-[12px]'>
    <h2 className='text-desktop/h2'>5G Revolution:<br></br> Redefining Connectivity</h2>
    <p>itel P55 5G is all set to transform the way you connect, communicate, and create.</p>
</div>
<div className='relative'>
<img src='/P_Series/horizontal_phone.png'></img>
<img src='/P_Series/meter.png' className='absolute right-0 top-44'></img>
</div>

    </div>
    </div>
  );
};

export default Connectivity;

