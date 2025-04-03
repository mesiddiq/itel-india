import { useState } from 'react';
import filter from '/product-listing/setting-3.svg'
// import ShowDataForComparision from '../Product Section/ShowDataForComparision';
import Filters from './Filters';
import BuyNowText from '../../../components/common/smartphone_common/BuyNowText';

const FilterHeading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="hidden lg:mb-10 lg:text-left text-center text-black lg:text-white lg:flex flex-row lg:justify-start justify-center items-center gap-2 lg:p-0 py-2 px-9 lg:bg-transparent bg-white lg:rounded-none rounded-3xl ">
        <img src={filter} />
        <span className='font-base'>FILTER</span>
      </div>

      <div onClick={togglePopup} className="lg:hidden lg:mb-12 lg:text-left text-center text-black lg:text-white flex flex-row lg:justify-start justify-center items-center gap-2 lg:p-0 py-2 px-9 lg:bg-transparent bg-white lg:rounded-none rounded-3xl ">
        <img src={filter} />
        <span className='font-base'>FILTER</span>
      </div>



      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1f1f1f] bg-opacity-50 z-50" onClick={closePopup}>
          <div className="customScrollbar max-h-screen h-screen md:max-h-[90vh] bg-[#1f1f1f] overflow-y-scroll overflowHidden flex flex-col gap-5 text-[#F8F6F3] relative py-5 px-4 rounded-none md:rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl md:mx-0">

            <div className='flex flex-row justify-between gap-4'>
              <h3 className='text-mobile/h3'>Filter</h3>
              <button className=" text-black p-3" onClick={togglePopup} >
                <img src='/product-listing/closePopupWhite.svg' />
              </button>
            </div>

            <FilterSection />

            <button onClick={togglePopup} className='bg-[#1A1A1A] border-[0.75px] border-[#4F4F4F] py-3 px-8 rounded-3xl text-white'>
              <BuyNowText content="SHOW RESULT" color="white" />
            </button>

          </div>
        </div>
      )}
    </>
  )
}

export default FilterHeading