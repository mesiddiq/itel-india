/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import compare from '/product-listing/compare.svg';
import ShowDataForComparision from './featurephoneProduct/ShowDataForComparision';

const Compare = ({ phoneData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentPhoneData, setCurrentPhoneData] = useState(phoneData[0])
  const [secondPhoneData, setSecondPhoneData] = useState(phoneData[1])
  const [currentPhone, setCurrentPhone] = useState(phoneData[0].name)
  const [secondPhone, setSecondPhone] = useState(phoneData[1].name)


  useEffect(() => {
    setCurrentPhoneData(phoneData.find((phone => phone.name === currentPhone)))
    setSecondPhoneData(phoneData.find((phone => phone.name === secondPhone)))
  }, [currentPhone, secondPhone,phoneData])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  return (
    <div className='font-markot'>
      <div
        className="cursor-pointer text-white lg:mb-4 flex flex-row justify-start items-center gap-2 md:rounded-none"
        onClick={togglePopup}
      >
        <img src={compare} alt="Compare" />
        <span className='font-base underline'>Compare</span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closePopup}>
          <div className="max-h-screen md:max-h-[90vh] overflow-y-scroll overflowHidden flex flex-col gap-5 text-black relative bg-white py-5 px-4 rounded-none md:rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl md:mx-0">

            <div className='flex flex-row justify-between gap-4'>
              <h3 className='text-mobile/h3'>Compare</h3>
              <button className=" text-black" onClick={togglePopup}>
                <img src='/product-listing/closePopup.svg' />
              </button>
            </div>


            <div className="flex flex-col gap-[10px]">
              <h2 className="text-mobile/title uppercase">Choose the right model</h2>

              <div className='flex flex-row justify-between gap-4 overflow-y-scroll overflowHidden'>
                {/* allPhoneData,currentPhoneData,setCurrentPhone */}
                <ShowDataForComparision
                  currentPhoneData={currentPhoneData}
                  allPhoneData={phoneData.filter(phone => phone.name !== secondPhone)}
                  setCurrentPhone={setCurrentPhone}
                />
                <ShowDataForComparision
                  currentPhoneData={secondPhoneData}
                  allPhoneData={phoneData.filter(phone => phone.name !== currentPhone)}
                  setCurrentPhone={setSecondPhone}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compare;