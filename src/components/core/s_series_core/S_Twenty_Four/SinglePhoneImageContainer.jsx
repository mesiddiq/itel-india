const SinglePhoneImageContainer = () => {
    return (
      <>
          {/* Laptop */}
          <div className="font-markot hidden lg:block bg-[#010101] h-screen w-full ">
              <div className="w-full h-full content md:content relative">
                  <img src='/smartphone/S24/Dawn white 4.png' alt='Dawn white' className='w-2/3 absolute top-[-43px]'/>
                  
                  <div className='content absolute lg:-right-10 xl:right-0 lg:scale-90 xl:scale-100 lg:top-[50px] xl:top-[110px] flex flex-col gap-5 w-[511px]'>
                      <span className='text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                          Experience a<br/>dreamy Colour Shift
                      </span>
                      <span className='text-desktop/h4 text-grey/grey/1'>
                          Photochromic Colour Changing Technology
                      </span>
                      <span className='text-desktop/body/1 text-grey/grey/1'>
                          Embrace dynamic hues that adapt to light for an ever-changing style statement.
                      </span>
                  </div>
              </div>
          </div>
          
          {/* Mobile */}
          <div className="font-markot flex flex-col justify-start items-center lg:hidden bg-[#010101] w-full relative overflow-hidden h-[385px]">
              <img src='/smartphone/S24/Dawn white 4.png' alt='Dawn white' className='absolute md:-top-[160px] sm:-top-[0px] top-[63.89px] md:left-0 left-[87px] md:scale-75 sm:scale-90 sm:left-0 scale-150'/>
              
              <div className='md:content content absolute text-center flex flex-col gap-2 w-[350px] top-[24px]'>
                  <span className='text-mobile/h4 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                      Experience a dreamy <br/> Colour Shift
                  </span>
                  <span className='text-mobile/h6 text-grey/grey/1'>
                      Photochromic Colour Changing Technology
                  </span>
                  <span className='text-mobile/body/2 text-grey/grey/1'>
                      Embrace dynamic hues that adapt to light for an ever-changing style statement.
                  </span>
              </div>
          </div>
      </>
      
    )
  }
  
  export default SinglePhoneImageContainer