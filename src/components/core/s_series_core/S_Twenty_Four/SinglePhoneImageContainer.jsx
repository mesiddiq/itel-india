import dawnWhite from '/smartphone/S24/Dawn white 4.png'

const SinglePhoneImageContainer = () => {
  return (
    <>
        {/* Laptop */}
        <div className="hidden lg:block bg-[#010101] h-screen w-full relative">
            <img src={dawnWhite} alt='Dawn white' className='w-2/3 absolute top-[-43px]'/>
            <div className='absolute left-[800px] top-[110px] flex flex-col gap-5 w-[511px]'>
                <span className='FFMarkMedium text-desktop/h2 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                    Experience a<br/>dreamy Colour Shift
                </span>
                <span className='FFMarkMedium text-desktop/h4 text-grey/grey/1'>
                    Photochromic Colour Changing Technology
                </span>
                <span className='FFMarkRegular text-desktop/body/1 text-grey/grey/1'>
                    Embrace dynamic hues that adapt to light for an ever-changing style statement.
                </span>
            </div>
        </div>
        
        {/* Mobile */}
        <div className="flex flex-col justify-start items-center lg:hidden bg-[#010101] w-full relative overflow-hidden h-[385px]">
            <img src={dawnWhite} alt='Dawn white' className='absolute top-[63.89px] left-[87px] scale-150'/>
            
            <div className='absolute text-center flex flex-col gap-2 w-[350px] top-[24px]'>
                <span className='FFMarkMedium text-mobile/h4 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                    Experience a dreamy <br/> Colour Shift
                </span>
                <span className='FFMarkMedium text-mobile/h6 text-grey/grey/1'>
                    Photochromic Colour Changing Technology
                </span>
                <span className='FFMarkRegular text-mobile/body/2 text-grey/grey/1'>
                    Embrace dynamic hues that adapt to light for an ever-changing style statement.
                </span>
            </div>
        </div>
    </>
    
  )
}

export default SinglePhoneImageContainer