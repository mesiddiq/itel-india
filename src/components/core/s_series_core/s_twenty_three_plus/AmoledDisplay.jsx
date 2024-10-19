import React, { useState, useEffect } from 'react';

const AmoledDisplay = (props) => {

  return (
    <div className='flex relative w-full h-[330px] md:h-[800px] p-0 bg-[url("/s_twenty_three_plus/AmoledDisplay.jpg")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
        <div className='content'>
        	<div className='absolute top-[60%] md:top-[65%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[9]'>
        		<img src='/s_twenty_three_plus/AmoledDisplayPhone.svg' width={840} height={425} className='transform scale-[1.75] md:scale-[1.05]' data-aos="fade-down" />
        	</div>
        	<div className='absolute top-[42%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        		<img src='/s_twenty_three_plus/AmoledDisplayText.svg' width={872} height={401} className='transform scale-[1.2]' data-aos="fade-up" />
        	</div>
        </div>
    </div>
  );
};

export default AmoledDisplay;
