import React from 'react'
import star from "../../images/Star.png"
import S24 from "../../images/hotPicksImage/s24.png"
import arrow from "../../images/hotPicksImage/arrow-right.png"
import superGuru from "../../images/hotPicksImage/superGuru.png"
import G4 from "../../images/hotPicksImage/G-4.png"

const HotPicks = () => {
  return (
    <>
        <div className='pt-[50px] w-[1296px]'>

         <div className='flex items-center mb-[40px]'>
            <img src={star} alt='star' className=' w-[59.66px]'/>
            <h2 className='text-[48px] text-[#FFFFFF]'>Hot picks: Snag ‘Em Now!</h2>
         </div>

         <div className=' flex gap-[12px]'>
            <button className='text-[#FFFFFF] text-[16px] py-[12px] px-[20px] bg-[#666666] w-[100px] h-[50px] rounded-[50px]'>All</button>
            <button className='text-[#949494] text-[16px] py-[12px] px-[20px] border-[1.5px] border-opacity-[5%] w-[124px] rounded-[50px]'>Best Deals</button>
            <button className='text-[#949494] text-[16px] py-[12px] px-[20px] border-[1.5px] border-opacity-[5%] w-[143px] rounded-[50px]'>Smart Phone</button>
            <button className='text-[#949494] text-[16px] py-[12px] px-[20px] border-[1.5px] border-opacity-[5%] w-[154px] h-[50px] rounded-[50px]'>Feature Phone</button>
            <button className='text-[#949494] text-[16px] py-[12px] px-[20px] border-[1.5px] border-opacity-[5%] w-[116px] h-[50px] rounded-[50px]'>Smart Tv</button>
         </div>


         <div className=' mt-[24px] flex gap-[20px] overflow-hidden justify-center items-center'>
            <div className=' w-[418.67px] h-[526px] rounded-[14px] bg-[#232323]'>
                <div className='flex items-center justify-center flex-col h-full gap-[25px]'>
                    <p className=' text-[#FFFFFF] w-[55px] h-[26px] rounded-[43.79px] py-[2px] px-[12px] bg-[#3A3358] text-[14px]'>New</p>
                    <img src= {S24} alt='S24' className=' w-[235px] h-[230px]'/>

                    <div className=' flex flex-col items-center'>
                    <p className=' text-[#FFFFFF] text-[24px] '>S24</p>
                    <p className=' text-[#C0C0C0] mt-1 w-[243px] text-center text-[14px]'>Your Ideal Storyteller: Stunning 108MP AI Camera</p>
                    <p className=' text-[#C0C0C0] text-[14px] mt-1'>Old Price: <span className='line-through'>₹1,20,000</span></p>
                    </div>
                    
                    <div className='flex justify-center items-center gap-[8px] w-[243px] h-[38px] py-[8.5px] px-[20px] border rounded-[24px] border-opacity-[.5px]'>
                    <button className=' text-[#FFFFFF]'>₹10,999/-</button>
                    <img src={arrow} alt='arrow' className='w-[24px] h-[21px]'/>
                    </div>

                </div>
            </div>

            <div className='w-[418.67px] h-[526px] rounded-[14px] bg-[#232323]'>
                <div className='flex items-center justify-center flex-col h-full gap-[37px]'>
                    <p className=' text-[#FFFFFF] w-[55px] h-[26px] rounded-[43.79px] py-[2px] px-[12px] bg-[#3A3358] text-[14px]'>New</p>
                    <img src= {G4} alt='S24' className=' w-[290px] h-[200px]'/>

                    <div className=' flex flex-col items-center'>
                    <p className=' text-[#FFFFFF] text-[24px] '>G4365</p>
                    <p className=' text-[#C0C0C0] mt-1 w-[243px] text-center text-[14px]'>Entertainment Power pack with 5k Google Apps in-built</p>
                    <p className=' text-[#C0C0C0] text-[14px] mt-1'>Old Price: <span className='line-through'>₹35,990.00</span></p>
                    </div>
                    
                    <div className='flex justify-center items-center gap-[8px] w-[243px] h-[38px] py-[8.5px] px-[20px] border rounded-[24px] border-opacity-[.5px]'>
                    <button className=' text-[#FFFFFF]'>₹18,999/-</button>
                    <img src={arrow} alt='arrow' className='w-[24px] h-[21px]'/>
                    </div>

                </div>
            </div>

            <div className='w-[418.67px] h-[526px] rounded-[14px] bg-[#232323]'>
                <div className='flex items-center justify-center flex-col h-full gap-[25px]'>
                    <p className=' text-[#FFFFFF] w-[55px] h-[26px] rounded-[43.79px] py-[2px] px-[12px] bg-[#3A3358] text-[14px]'>New</p>
                    <img src= {superGuru} alt='S24' className=' w-[235px] h-[230px]'/>

                    <div className=' flex flex-col items-center'>
                    <p className=' text-[#FFFFFF] text-[24px] '>Super Guru 4G</p>
                    <p className=' text-[#C0C0C0] mt-1 w-[243px] text-center text-[14px]'>Feature-Rich Phone with 4G VoLTE Connectivity</p>
                    <p className=' text-[#C0C0C0] text-[14px] mt-1'>Old Price: <span className='line-through'>₹2,099</span></p>
                    </div>
                    
                    <div className='flex justify-center items-center gap-[8px] w-[243px] h-[38px] py-[8.5px] px-[20px] border rounded-[24px] border-opacity-[.5px]'>
                    <button className=' text-[#FFFFFF]'>₹1,799/-</button>
                    <img src={arrow} alt='arrow' className='w-[24px] h-[21px]'/>
                    </div>

                </div>
            </div>

         </div>

        </div>
    </>
  )
}

export default HotPicks