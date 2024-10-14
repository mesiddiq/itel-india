import React from 'react';

const Accessories = () => {
    return (
        <div className='bg-black h-auto flex justify-center w-full py-[40px]'>
            <div className='w-full max-w-[1200px] flex flex-col gap-[36px]'>
                <h3 className='text-desktop/h3 text-white '>Level Up Your Experience with Accessories!</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px] justify-center'>
                    {/* Card 1 */}
                    <div className="bg-[#232323] rounded-[16px] flex flex-col p-4 items-center text-center text-white">
                        <div className='flex justify-center items-center'>
                            <img src='/P_Series/bg2.png' alt="Earbuds T1Pro" className='h-[220px] w-[220px]' />
                        </div>
                        <h4 className='text-desktop/h4'>Earbuds T1Pro</h4>
                        <h6 className='text-desktop/h6'>₹849.00</h6>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#232323] rounded-[16px] flex flex-col p-4 items-center text-center text-white">
                        <div className='flex justify-center items-center'>
                            <img src='/P_Series/bg3.png' className='h-[220px] w-[220px]' alt="Accessory 2" />
                        </div>
                        <h4 className='text-desktop/h4'>Icon 2</h4>
                        <h6 className='text-desktop/h6'>₹1,099.00</h6>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#232323] rounded-[16px] flex flex-col p-4 items-center text-center text-white">
                        <div className='flex justify-center items-center'>
                            <img src='/P_Series/bg4.png' className='h-[217px] w-[217px]' alt="Accessory 3" />
                        </div>
                        <h4 className='text-desktop/h4'>N82</h4>
                        <h6 className='text-desktop/h6'>₹999.00</h6>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-[#232323] rounded-[16px] flex flex-col p-4 items-center text-center text-white">
                        <div className='flex justify-center items-center'>
                            <img src='/P_Series/bg5.png' className='h-[230px] w-[230px]' alt="Accessory 4" />
                        </div>
                        <h4 className='text-desktop/h4'>Smartwatch 2 Ultra</h4>
                        <h6 className='text-desktop/h6'>₹2,099.00</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accessories;



