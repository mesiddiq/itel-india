import React from 'react';

const Accessories = () => {
  // Define the accessory data in a JSON-like structure (constant array)
  const accessoriesData = [
    {
      imageSrc: '/P_Series/bg2.png',
      title: 'Earbuds T1Pro',
      price: '₹849.00',
    },
    {
      imageSrc: '/P_Series/bg3.png',
      title: 'Icon 2',
      price: '₹1,099.00',
    },
    {
      imageSrc: '/P_Series/bg4.png',
      title: 'N82',
      price: '₹999.00',
    },
    {
      imageSrc: '/P_Series/bg5.png',
      title: 'Smartwatch 2 Ultra',
      price: '₹2,099.00',
    },
  ];

  return (
    <div className='bg-black h-auto flex justify-center w-full py-[40px]'>
      <div className='content w-full flex flex-col gap-[36px] px-4'>
        <h3 className='text-mobile/h4 md:text-desktop/h3 text-white'>Level Up Your Experience with Accessories!</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px] justify-center '>
          {/* Map through accessoriesData to render the content directly */}
          {accessoriesData.map((accessory, index) => (
            <div key={index} className="bg-[#232323] rounded-[16px] flex flex-col p-4 items-center text-center text-white ">
              <div className='flex justify-center items-center'>
                <img src={accessory.imageSrc} alt={accessory.title} className='md:h-[220px] md:w-[220px] h-[102px] w-[100px]' />
              </div>
              <h4 className='text-mobile/h6 md:text-desktop/h4'>{accessory.title}</h4>
              <h6 className='text-desktop/h6 font-markot'>{accessory.price}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;




