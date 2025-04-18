import BuyNowSquareBG from '../../../common/smartphone_common/BuyNowSquareBG';

const HeroBanner = () => {
  return (
    <div className='block md:flex relative w-full h-[585px] md:h-[800px] md:items-center p-[20px] md:p-0 pb-0 bg-[url("/smartphone/S23+/Backgrounds/HeroBannerSmall.webp")] md:bg-[url("/smartphone/S23+/Backgrounds/HeroBanner.webp")] bg-cover bg-center overflow-hidden' style={{ marginTop: '0px' }}>
      <div className='content h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative h-full md:justify-center md:items-center'>
          <div className='col-span-1'>
            <img src='/smartphone/S23+/Backgrounds/SuperSeries.webp' data-aos='fade-right' />
            <h3 className='bg-gradient-to-br from-[#CA86FF] to-[#85E2FD] inline-block text-transparent bg-clip-text text-mobile/h1 md:text-desktop/large/h font-markot md:h-[150px] mt-[20px] md:mt-0' data-aos='fade-right'>S23+</h3>
            <p className='text-mobile/title md:text-desktop/title uppercase text-[#D9D9D9] font-markot' data-aos='fade-right'>3D Curved FHD+ AMOLED Display | In-Display Fingerprint | 50MP AI Dual ReaR Camera</p>
            <p className='text-mobile/small/body text-[#FFFFFF] md:text-[20px] font-[400] pt-[30px] md:pt-[50px] font-markot' data-aos='fade-right'>Available at <span className='text-mobile/h5 md:text-desktop/h5'>₹12,999/-</span></p>
            <span className='hidden md:block pt-5' data-aos='fade-right'>
              <BuyNowSquareBG purchaseLink="" content="BUY NOW" />
            </span>
          </div>
          <div className='col-span-1'>
            <img src='/smartphone/S23+/Backgrounds/HeroImage.webp' className='absolute bottom-0 right-0 h-[375px] md:h-full' alt='ITEL Color Pro 5G' data-aos='fade-up' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
