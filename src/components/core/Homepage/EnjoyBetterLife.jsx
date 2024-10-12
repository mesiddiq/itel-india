import React from 'react'

const EnjoyBetterLife = () => {
    return (
        <div className='w-full'>
            <img src={'./EnjoyBetterLifeHeader.png'} alt="EnjoyBetterLifeHeader" className='w-full' />
            <div className='relative w-[90%] mx-auto -mt-[100px]'>
                <div class="grid grid-cols-3 grid-rows-2 gap-4 h-[545px]">
                    <div className="group col-span-1 row-span-2 bg-[#232322] p-[20px] rounded-[16px] relative overflow-hidden">
                        <h3 className="text-[24px] text-[#FFFFFF] w-[70%]">Amp Your Style with itel Latest Smartphones</h3>
                        <img src={'.//arrow.png'} alt="'.//arrow.png'" className="mt-3" />
                        <div className="w-full flex justify-center">
                            <img 
                                src={'./EnjoyBetterLifeCol1Bg.png'} 
                                alt="EnjoyBetterLifeCol1Bg" 
                                className="w-full h-auto absolute bottom-[-30px] transition-transform duration-300 transform scale-100 group-hover:scale-110" 
                            />
                            <img 
                                src={'./EnjoyBetterLifeCol1.png'} 
                                alt="EnjoyBetterLifeCol1" 
                                className="max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
                            />
                        </div>
                    </div>
                    <div class="group col-span-2 bg-[#232322] p-[20px] rounded-[16px] relative overflow-hidden">
                        <div className='grid grid-cols-2'>
                            <div className='col-span-1'>
                                <h3 className='text-[24px] text-[#FFFFFF]'>Stay Effortlessly Connected All Day, Every Day</h3>
                                <img src={'./arrow.png'} alt='arrow' className='mt-3' />
                            </div>
                            <div className='col-span-1 flex justify-center items-center h-full'>
                                <img 
                                    src={'EnjoyBetterLifeCol2Bg'} 
                                    alt="EnjoyBetterLifeCol2Bg" 
                                    className="max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110" 
                                />
                                <img 
                                    src={'./EnjoyBetterLifeCol2.png'} 
                                    alt="EnjoyBetterLifeCol2" 
                                    className="max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
                                />
                            </div>
                        </div>
                    </div>
                    <div class="group col-span-1 bg-[#232322] p-[20px] rounded-[16px] relative overflow-hidden">
                        <div className='grid grid-cols-2'>
                            <div className='col-span-1'>
                                <h3 className='text-[24px] text-[#FFFFFF]'>Dive into Endless Entertainment: itel Smart TV</h3>
                                <img src={'./arrow.png'} alt='arrow' className='mt-3' />
                            </div>
                            <div className='col-span-1 flex justify-center items-center h-full'>
                                <img 
                                    src={'./EnjoyBetterLifeCol3Bg.png'} 
                                    alt="EnjoyBetterLifeCol3Bg" 
                                    className="max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110" 
                                />
                                <img 
                                    src={'./EnjoyBetterLifeCol3.png'} 
                                    alt="EnjoyBetterLifeCol3" 
                                    className="max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
                                />
                            </div>
                        </div>
                    </div>
                    <div class="group col-span-1 bg-[#232322] p-[20px] rounded-[16px] relative overflow-hidden">
                        <div className='grid grid-cols-2'>
                            <div className='col-span-1'>
                                <h3 className='text-[24px] text-[#FFFFFF]'>Level up Your Game: itel Smart Gadgets!</h3>
                                <img src={'./arrow.png'} alt='arrow' className='mt-3' />
                            </div>
                            <div className='col-span-1 flex justify-center items-center h-full'>
                                <img 
                                    src={'./EnjoyBetterLifeCol4.png'} 
                                    alt="EnjoyBetterLifeCol3Bg" 
                                    className="max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110" 
                                />
                                <img 
                                    src={'./EnjoyBetterLifeCol4.png'} 
                                    alt="EnjoyBetterLifeCol4" 
                                    className="max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={'./EnjoyBetterLifeFooter.png'} alt="EnjoyBetterLifeFooter" className='w-full -mt-[75px]' />
        </div>
    )
}

export default EnjoyBetterLife