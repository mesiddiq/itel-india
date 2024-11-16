/* eslint-disable react/prop-types */
import { useState } from 'react';
import compare from '/product-listing/compare.svg';
import ShowDataForComparision from './ShowDataForComparision';

const Compare = ({ theme }) => {
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
    <div className='font-markot'>
      <div 
        className="cursor-pointer text-white lg:mb-4 flex flex-row justify-start items-center gap-2 md:rounded-none"
        onClick={togglePopup}
      >
        <img src={compare} alt="Compare" />
        <span className={`font-base underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>Compare other models</span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closePopup}>
          <div className="max-h-screen md:max-h-[90vh] overflow-y-scroll overflowHidden flex flex-col gap-5 text-black relative bg-white py-5 px-4 rounded-none md:rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl md:mx-0">
            
            <div className='flex flex-row justify-between gap-4'>
                <h1 className='text-mobile/h3'>Compare</h1>
                <button className=" text-black" onClick={togglePopup}>
                  <img src='/product-listing/closePopup.svg' />
                </button>
            </div>
            

            <div className="flex flex-col gap-[10px]">
              <h2 className="text-mobile/title uppercase">Choose the right model</h2>
              
              <div className='flex flex-row justify-between gap-4 overflow-y-scroll overflowHidden'>
                  <ShowDataForComparision />
                  <ShowDataForComparision />
              </div>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;