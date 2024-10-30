import React from 'react'

const TermsAndCondition = () => {  const data = [
    " Certified defective handsets complying with warranty conditions will be swapped with similar units within 100 days of purchase.",
    " Swap units will be the same or similar spec model.",
    " Cosmetic of swap units might be similar if not better than earlier unit.",
    " Beyond 100 days, the normal repair warranty terms would be applicable."
    
  
];


  return (
    <div className='lg:bg-[url("/static_page/promise/T&C%20Background.webp")]   bg-[url("/static_page/promise/T&C%20Background%20Mobile.webp")] bg-cover  bg-center  font-markot '>
      <div className=" lg:py-[80px]  py-[42px]  lg:px-20 lg:space-y-10 space-y-8  lg:content px-4 ">
        <p className=" lg:text-center text-mobile/h4 text-brand/black lg:text-desktop/h2">
          Terms & Conditions
        </p>
        <div className=" lg:space-y-2">
          {data.map((data, index) => {
            return (
              <div className=' flex items-start space-x-1 ' key={index}>
                <p className="  text-desktop/body/1 text-grey/grey/5">{index+1}.</p>
                <p className="  text-desktop/body/1 text-grey/grey/5">{data}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default TermsAndCondition