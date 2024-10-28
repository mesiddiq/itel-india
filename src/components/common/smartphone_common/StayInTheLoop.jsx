/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Slider from 'react-slick';
import Button from '../../common/Button';

const StayInTheLoop = ({ theme = 'light' }) => {
  const isDarkTheme = theme === 'dark';

  const settings = {
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <link
        rel='stylesheet'
        type='text/css'
        charset='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <div className={`content flex flex-col md:flex-row justify-between px-[16px] md:px-0 pt-[60px] pb-[20px] ${isDarkTheme ? 'bg-[#121212]' : 'bg-white'}`} style={{ marginTop: '0px' }}>
        <h3 className={`text-mobile/h4 md:text-desktop/h3 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'}`}>
          Stay in the loop: Follow us for updates!
        </h3>
        <Button btnLabel='Follow us on Instagram' rounded='mt-[12px] md:mt-0 rounded-full' />
      </div>
      <div className={`content hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 px-[16px] md:px-0 pb-[60px] ${isDarkTheme ? 'text-[#F8F6F3]' : 'text-black'}`} style={{ marginTop: '0px' }}>
        <div className='col-span-1'>
          <img src='/static_page/homepage/StayInTheLoopOne.svg' alt='StayInTheLoopOne' className='w-full' />
        </div>
        <div className='col-span-1'>
          <img src='/static_page/homepage/StayInTheLoopTwo.svg' alt='StayInTheLoopTwo' className='w-full' />
        </div>
        <div className='col-span-1'>
          <img src='/static_page/homepage/StayInTheLoopThree.svg' alt='StayInTheLoopThree' className='w-full' />
        </div>
        <div className='col-span-1'>
          <img src='/static_page/homepage/StayInTheLoopFour.svg' alt='StayInTheLoopFour' className='w-full' />
        </div>
      </div>
      <div className={`content block md:hidden slider-container px-[16px] md:px-0 h-[430px] ${isDarkTheme ? 'bg-[#121212]' : 'bg-white'}`} style={{ marginTop: '0px' }}>
        <Slider {...settings}>
          <div>
            <img src='/static_page/homepage/StayInTheLoopOne.svg' alt='StayInTheLoopOne' className='w-full rounded-[16px]' />
          </div>
          <div>
            <img src='/static_page/homepage/StayInTheLoopTwo.svg' alt='StayInTheLoopTwo' className='w-full rounded-[16px]' />
          </div>
          <div>
            <img src='/static_page/homepage/StayInTheLoopThree.svg' alt='StayInTheLoopThree' className='w-full rounded-[16px]' />
          </div>
          <div>
            <img src='/static_page/homepage/StayInTheLoopFour.svg' alt='StayInTheLoopFour' className='w-full rounded-[16px]' />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default StayInTheLoop;
