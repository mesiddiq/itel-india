import React from 'react'

const Thankyou = () => {
  return (
    <div className=' lg:bg-[url("/static_page/contactus/Form%20BG.webp")]   bg-[url("/static_page/contactus/Form%20BG%20Mobile.webp")]  flex justify-center items-center  min-h-[837px] bg-cover bg-center rounded-2xl'>
        <div className=' flex flex-col items-center content  px-4  space-y-8 '>
            <img  className=' h-[42px] w-[42px]  lg:h-[70px] lg:w-[70px]'  src="/Group%201973340692.png" alt="" />
            <div  className=' space-y-8'>

                <p className='  text-brand/black lg:text-desktop/h3 text-mobile/h4 text-center'>Thank You!</p>
                <p className=' text-desktop/body/2/regular lg:text-desktop/body/1  text-grey/grey/5 text-center'>Your inquiry has been successfully submitted. We appreciate your interest and will get back to you shortly. If you need immediate assistance, feel free to contact us at +91-120-6650888.</p>
                <div className="  py-3 space-x-2 rounded-full bg-[#1A1A1A] flex w-full items-center justify-center">
            <p className="  text-white  text-desktop/button ">SUBMIT ANOTHER INQUIRY</p>
            <img  src="/arrow.png" alt="" />
          </div>

            </div>
        </div>
    </div>
  )
}

export default Thankyou