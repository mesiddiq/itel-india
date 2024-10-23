import React from 'react'
import { frame2IconsData, frame4IconsData } from '../../../../data/smartphonedata/A50Data'

export default function Frames() {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center mt-[24px] lg:mt-[100px]'>
        <div className='lg:rounded-[36px] xl:rounded-[54px] lg:border lg:border-[#62b67af4] flex justify-center items-center flex-col lg:p-[16px] content'>

            {/* frame0 */}
            <div 
            className="md:w-full w-[328px] h-[556px] md:h-[800px] py-[20px] rounded-[16px] lg:rounded-[36px] lg:h-[1056px] bg-cover bg-center flex justify-center items-center flex-col bg-[url('/SmartPhone/a50/f0Bg.png')]"
            
            >
                <div className='flex flex-col lg:flex-row lg:justify-between w-full lg:px-[60px] px-[22px]'>
                    <span className='flex flex-col'>
                        <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[709px] text-center md:text-start'>Speed & Storage: All for Your Entertainment Needs</h1>
                        <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-[14px] text-center md:text-start'>
                        Enjoy high performance, effortless multitasking, and expandable space. 
                        </p>
                    </span>
                    <div className='flex lg:flex-col flex-row lg:justify-center justify-between py-[28px] lg:py-0'>
                        <div className='flex flex-col mb-[12px]'>
                            <p className='lg:text-[32px] text-[#181818] font-medium text-mobile/title'><span className='text-[#08E488]'>12GB*</span> (4GB+8GB*)RAM</p>
                            <p className='text-[#232323] lg:text-[14px] text-[10px] text-opacity-70'>with Memory Fusion Technology*</p>
                        </div>
                        <p className=' lg:text-[32px] text-[#181818] font-medium text-mobile/title lg:mt-[22px]'><span className='text-[#08E488]'>64GB</span> ROM</p>
                    </div>
                </div>

                <img src="/SmartPhone/a50/f0Hero (1).png" alt="f1Img"  className='object-cover w-full lg:w-[90%]'/>
            </div>

            {/* frame1 */}
            <div 
            className="lg:mt-[60px] mt-[30px] md:w-full w-[328px] h-[750px] py-[20px] rounded-[16px] lg:rounded-[36px] md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col md:bg-[url('/SmartPhone/a50/f2.png')] bg-[url('/SmartPhone/a50/f1Mobile.png')]"
            
            >
                <div className='flex flex-col lg:justify-start items-start md:pl-[48px] px-[20px] md:px-0 pt-[20px]'>
                    <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[437px] text-center md:text-start'>Perfect Shots with AI Camera</h1>
                    <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-[14px] text-center md:text-start'>
                        Featuring an 5MP Front Camera and 8MP AI Rear Camera, every shot is infused with stunning detail and clarity. 
                    </p>
                    <div className='grid grid-cols-4 gap-[26px] lg:gap-[42px] pt-[20px] md:pt-[50px]'>
                        {frame2IconsData.map((data) => (
                            <div key={data.id} className='flex flex-col justify-start items-start md:max-w-[100px]'>
                                <img src={data.icon} alt={data.title} className='w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]'/>
                                <p className='text-mobile/h7 lg:text-desktop/h6/medium text-[#232323] pt-[7px] md:pt-[17px] w-full'>{data.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <img src="/SmartPhone/a50/f1Img.png" alt="f1Img"  className='lg:h-[580px] md:h-[450px] md:w-[462px] lg:mr-[68px] mr-[30px] w-[250px] mt-[20px]'/>
            </div>

            {/* frame2 Desktop*/}
            <div 
            className="relative mt-[20px] xl:w-full lg:rounded-[36px] lg:w-[900px] hidden lg:h-[739px] bg-cover bg-center lg:flex lg:flex-row lg:justify-between justify-center items-center flex-col bg-[url('/SmartPhone/a50/f1.png')]"
            
            >
                
                <img src="/SmartPhone/a50/f2Hero.png" alt="f1Img"  className='md:h-[650px] lg:py-[20pxpx] lg:pl-[65px] lg:flex hidden'/>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='absolute xl:w-[537px] md:w-[337px] font-bold leading-[80%] tracking-[-0.06em] lowercase bg-clip-text text-transparent xl:text-[80px] lg:text-[50px] xl:bottom-[35%] xl:right-[7%] right-0 bottom-[45%]'
                        style={{
                            backgroundImage: 'linear-gradient(122.31deg, #E0DDA8 -0.55%, #05D989 85.83%)',
                            mixBlendMode: 'normal',
                        }}
                        >
                            capture every moment with modes like
                           
                        </p>
                        
                    </div>
              

                

            </div>

            {/* frame2 Mobile */}
            <div className="bg-[url('/SmartPhone/a50/f1Mobile.png')] bg-cover bg-center flex justify-center items-center lg:hidden flex-col w-[328px] h-[624px] rounded-[16px] py-[20px] mt-[20px] md:bg-[url('/SmartPhone/a50/f1.png')] md:w-full md:h-[724px]">
                <div className='justify-start items-start flex flex-col pl-[30px] pt-[20px]'>
                    <span className='border border-[#08E488] bg-white text-[#181818] rounded-[16px] text-[13px] px-5 py-2 font-medium'>8MP Al Rear Camera</span>
                    <span className=' mt-[14px] font-bold leading-[80%] tracking-[-0.06em] lowercase bg-clip-text text-transparent text-[40px]'
                        style={{
                            backgroundImage: 'linear-gradient(122.31deg, #E0DDA8 -0.55%, #05D989 85.83%)',
                            mixBlendMode: 'normal',
                        }}
                        >
                            capture every moment with modes like
                    </span>
                    <p className='text-[#46E19B] font-bold text-[70px]'>HDR</p>
                </div>
                <img src="/SmartPhone/a50/f2Mob.png" alt="f2Mob" className='pl-[15px] pt-[10px] pb-[21px] md:w-[60%]'/>
            </div>

            {/* frame3 */}
            <div 
            className="md:w-full w-[328px] h-[624px] rounded-[16px] py-[20px] md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col bg-[url('/SmartPhone/a50/mobBg.png')] md:bg-[url('/SmartPhone/a50/oBg.png')] mt-[20px]"
            
            >
                <div className='flex flex-col lg:justify-start items-start md:pl-[48px] px-[20px] md:px-0'>
                    <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[437px] text-center md:text-start'>Minimize Glitches for a Flawless Experience</h1>
                    <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-[14px] text-center md:text-start'>
                    Designed for smooth and efficient operations, it smartly optimizes performance for specific scenarios, reducing delays and flashbacks, and ensuring a seamless user experience. 
                    </p>
                    <div className='gap-[32px] lg:gap-[42px] pt-[20px] md:pt-[50px] flex justify-center md:justify-start items-center w-full'>
                        {frame4IconsData.map((data) => (
                            <div key={data.id} className='flex flex-col justify-start items-start md:max-w-[100px]'>
                                <img src={data.icon} alt={data.title} className='w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]'/>
                                <p className='text-mobile/h7 md:text-desktop/h6/medium text-[#232323] pt-[7px] md:pt-[17px] w-full'>{data.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <img src="/SmartPhone/a50/oct.png" alt="octaCoreImg"  className='md:w-[40%] w-[80%] h-auto md:py-[50px] py-[15px] lg:pr-[40px]'/>
            </div>

            {/* frame4 */}
            <div 
            className="md:w-full w-[328px] h-[624px] rounded-[16px] py-[20px] md:h-[626px] bg-cover bg-center flex md:flex-row justify-center items-center flex-col bg-[url('/SmartPhone/a50/mobBg.png')] md:bg-[url('/SmartPhone/a50/oBg.png')] mt-[20px]"
            
            >
                <div className='flex flex-col lg:justify-start items-start md:pl-[48px] px-[20px] md:px-0'>
                    <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[437px] text-center md:text-start'>6.6” Big Display with Dynamic Bar</h1>
                    <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-[14px] text-center md:text-start'>
                    The spacious display, featuring a 90% screen-to-body ratio, provides an immersive viewing experience. Keeping up with your dynamic lifestyle, the integrated dynamic bar delivers essential notifications more seamlessly than ever - from battery status to calls and unlocking. 
                    </p>
                    <div className='gap-[32px] lg:gap-[42px] pt-[20px] md:pt-[50px] flex justify-center md:justify-start items-center w-full'>
        
                            <div className='flex flex-col justify-start items-start md:max-w-[100px]'>
                                <span className='text-desktop/h3 text-gradient'>6.6”</span>
                                <p className='text-mobile/h7 md:text-desktop/h6/medium text-[#232323] pt-[7px] md:pt-[17px] w-full'>Large size</p>
                            </div>
                            <div className='flex flex-col justify-start items-start md:max-w-[100px]'>
                                <span className='text-desktop/h3 text-gradient'>720x1612</span>
                                <p className='text-mobile/h7 md:text-desktop/h6/medium text-[#232323] pt-[7px] md:pt-[17px] w-full'>Resolution</p>
                            </div>
                       
                    </div>
                </div>

                <img src="/SmartPhone/a50/bird.gif" alt="octaCoreImg"  className='rotate-[30deg] md:w-[30%] w-[40%] h-auto md:py-[50px] py-[15px] lg:pr-[40px]'/>
            </div>
        </div>

    </div>
  )
}
