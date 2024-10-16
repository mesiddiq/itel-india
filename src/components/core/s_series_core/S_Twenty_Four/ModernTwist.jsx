const ModernTwist = () => {
  return (
    <div className='bg-[#1C1B1B] '>
      
      <div className="w-full px-4 h-full content pt-[50px] lg:pt-[120px]">
        <h3 className='content font-markot text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 mb-4 lg:mb-16'>
        Modern Twist <br />on Timeless Elegance
        </h3>
        
        <div className='content grid grid-cols-[25%_75%] relative'>
            <div className=''>
              <img src='/smartphone/S24/starryBlackText.svg' alt='starryBlackText' className='w-[30%] left-[10%] absolute bottom-1' />
            </div>
            <div className=''>
              <img src='/smartphone/S24/starryBlackImage.png' alt='starryBlackImage'  />
            </div>
        </div>
      </div>

      <div className="md:hidden w-full px-4 h-full content pt-[50px] lg:pt-[120px]">
        <h3 className='text-right content font-markot text-[#FFFFFF] text-mobile/h4 md:text-desktop/h2 mb-4 lg:mb-16'>
        Shimmering Lights <br />with 3D Magnetic Particles 
        </h3>
        
        <div className='content grid grid-cols-[75%_25%] relative'>
            <div className=''>
              <img src='/smartphone/S24/whiteDawnImage.png' alt='whiteDawnImage'  />
            </div>
            <div className=''>
              <img src='/smartphone/S24/whiteDawnText.svg' alt='whiteDawnText' className='w-[30%] right-[10%] absolute bottom-1' />
            </div>
        </div>
      </div>

    </div>
  );
};

export default ModernTwist;
