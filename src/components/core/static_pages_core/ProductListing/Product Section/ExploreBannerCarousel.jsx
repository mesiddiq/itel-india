import exploreBanner from '../../assets/mobile-group.png'
import arrowLeftCarousel from '../../assets/arrow-left-carousel.svg';
import arrowRightCarousel from '../../assets/arrow-right-carousel.svg';

const ExploreBannerCarousel = () => {
  return (
    <>
        <div className="w-full">
            <img src={exploreBanner} className="w-full"/>
        </div>
        <div className="font-markot sliderCounter flex flex-row gap-2 justify-center items-center w-full">
            <img src={arrowLeftCarousel} className="p-3" />
            <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">1-7 of 35</span>
            <img src={arrowRightCarousel} className="p-3" />
        </div>
    </>
  )
}

export default ExploreBannerCarousel