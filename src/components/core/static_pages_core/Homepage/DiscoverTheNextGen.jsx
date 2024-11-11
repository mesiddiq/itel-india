import React, { useState, useEffect } from 'react';

const DiscoverTheNextGen = () => {
  const [transformYourPhoneVideoSrc, setTransformYourPhoneVideoSrc] = useState(false);

  useEffect(() => {
    if (screen.width > 1000) {
      setTransformYourPhoneVideoSrc("/smartphone/color-pro-5g/TransformYourPhone/video.mp4");
    } else {
      setTransformYourPhoneVideoSrc("/smartphone/color-pro-5g/TransformYourPhone/videoMobile.mp4");
    }
  }, []);

  return (
    <div className='flex w-full h-[650px] md:h-[800px] px-[16px] md:px-[80px] py-[40px] md:py-[120px] overflow-hidden'>
      <div className='content bg-[url("/static_page/homepage/DiscoverTheNextGenBg.jpg")] bg-cover bg-center bg-no-repeat rounded-[16px] px-[40px]'>
        <div className='flex relative justify-center h-full'>
          <div className='pt-[150px]'>
            <h2 className='text-desktop/h2 font-markot w-[71%]'>Discover the Next-Gen Feature<br />Phones with itel</h2>
            <p className='text-desktop/body/large font-markot w-[71%] pt-5'>itel's feature phones blend classic simplicity with modern style.</p>
          </div>
          <img src='/static_page/homepage/DiscoverTheNextGenPhone.png' className='top-10 z-[2]' />
          {/*<video
            className='absolute top-0 right-0 rotate-[90deg] z-[1]'
            src='/static_page/homepage/DiscoverTheNextGenVideo.mp4'
            autoPlay
            loop
            muted
          />*/}
        </div>
      </div>
    </div>
  );
};

export default DiscoverTheNextGen;
