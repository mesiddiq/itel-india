import { frame2IconsData, frame4IconsData } from '../../../../data/smartphonedata/A50Data';

export default function Frames() {
    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center mt-6 lg:mt-24'>
            <div className='md:rounded-[56px] xl:rounded-[54px] lg:border lg:border-[#62b67af4] flex justify-center items-center flex-col lg:p-4 content'>

                {/* Frame 0 */}
                <div className="md:w-full w-80 h-[556px] md:h-[800px] border-[#62b67af4] border-2 py-5 rounded-[16px] md:rounded-[56px] lg:h-[1056px] bg-cover bg-center flex justify-center items-center flex-col bg-[url('/smartphone/a50/f0Bg.webp')]">
                    <div className='flex flex-col lg:flex-row lg:justify-between w-full lg:px-14 px-5'>
                        <span className='flex flex-col'>
                            <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[709px] text-center md:text-start'>
                                Speed & Storage: All for Your Entertainment Needs
                            </h1>
                            <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-4 text-center md:text-start'>
                                Enjoy high performance, effortless multitasking, and expandable space.
                            </p>
                        </span>
                        <div className='flex lg:flex-col flex-row lg:justify-center justify-between py-7 lg:py-0'>
                            <div className='flex flex-col gap-4 mb-3'>
                                <p className='lg:text-[32px] text-[#181818] font-medium text-mobile/title'>
                                    <span className='text-[#08E488]'>12GB*</span> (4GB+8GB*) RAM
                                </p>
                                <p className='text-[#232323] lg:text-[14px] text-[10px] text-opacity-70'>
                                    with Memory Fusion Technology*
                                </p>
                            </div>
                            <p className='lg:text-[32px] text-[#181818] font-medium text-mobile/title lg:mt-5'>
                                <span className='text-[#08E488]'>64GB</span> ROM
                            </p>
                        </div>
                    </div>
                    <img src="/smartphone/a50/f0Hero.webp" alt="f1Img" className='object-cover w-full lg:w-[90%]' />
                </div>

                {/* Frame 1 */}
                <div className="lg:mt-15 border-[#62b67af4] border-2 mt-7 md:w-full w-80 h-[750px] py-5 rounded-[16px] md:rounded-[56px] md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col md:bg-[url('/smartphone/a50/f2.webp')] bg-[url('/smartphone/a50/f1Mobile.webp')]">
                    <div className='flex flex-col lg:justify-start items-start md:pl-12 px-5 md:px-0 pt-5'>
                        <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[437px] text-center md:text-start'>
                            Perfect Shots with AI Camera
                        </h1>
                        <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-4 text-center md:text-start'>
                            Featuring a 5MP Front Camera and 8MP AI Rear Camera, every shot is infused with stunning detail and clarity.
                        </p>
                        <div className='grid grid-cols-4 gap-6 lg:gap-10 pt-5 md:pt-12'>
                            {frame2IconsData.map((data) => (
                                <div key={data.id} className='flex flex-col justify-start items-start md:max-w-[100px]'>
                                    <img src={data.icon} alt={data.title} className='w-7.5 h-7.5 lg:w-12 lg:h-12' />
                                    <p className='text-mobile/h7 lg:text-desktop/h6/medium text-[#232323] pt-2 md:pt-4 w-full'>
                                        {data.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src="/smartphone/a50/f1Img.webp" alt="f1Img" className='lg:h-[580px] md:h-[450px] md:w-[462px] lg:mr-17 mr-7.5 w-[250px] mt-5' />
                </div>

                {/* Frame 2 (Desktop) */}
                <div className="relative mt-5 xl:w-full border-[#62b67af4] border-2 md:rounded-[56px] lg:w-[900px] hidden lg:h-[739px] bg-cover bg-center lg:flex lg:flex-row lg:justify-between justify-center items-center flex-col bg-[url('/smartphone/a50/f1.webp')]">
                    <img src="/smartphone/a50/f2Hero.webp" alt="f1Img" className='md:h-[650px] lg:py-5 lg:pl-16 lg:flex hidden' />
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

                {/* Frame 2 (Mobile) */}
                <div className="bg-[url('/smartphone/a50/f1Mobile.webp')] border-[#62b67af4] border-2 bg-cover bg-center flex justify-center items-center lg:hidden flex-col w-80 h-[624px] rounded-[16px] py-5 mt-5 md:bg-[url('/smartphone/a50/f1.webp')] md:w-full md:h-[724px]">
                    <div className='justify-start items-start flex flex-col pl-7.5 pt-5'>
                        <span className='border border-[#08E488] bg-white text-[#181818] rounded-[16px] text-[13px] px-5 py-2 font-medium'>8MP Al Rear Camera</span>
                        <span className='mt-3.5 font-bold leading-[80%] tracking-[-0.06em] lowercase bg-clip-text text-transparent text-[40px]'
                            style={{
                                backgroundImage: 'linear-gradient(122.31deg, #E0DDA8 -0.55%, #05D989 85.83%)',
                                mixBlendMode: 'normal',
                            }}
                        >
                            capture every moment with modes like
                        </span>
                        <p className='text-[#46E19B] font-bold text-[70px]'>HDR</p>
                    </div>
                    <img src="/smartphone/a50/f2Mob.webp" alt="f2Mob" className='pl-4 pt-2.5 pb-5.5 md:w-[60%]' />
                </div>

                {/* Frame 3 */}
                <div className="md:w-full w-80 h-[624px] border-[#62b67af4] border-2 rounded-[16px] py-5 md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col bg-[url('/smartphone/a50/mobBg.webp')] md:bg-[url('/smartphone/a50/oBg.webp')] mt-5">
                    <div className='flex flex-col lg:justify-start items-start md:pl-12 px-5 md:px-0'>
                        <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[437px] text-center md:text-start'>
                            Minimize Glitches for a Flawless Experience
                        </h1>
                        <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-4 text-center md:text-start'>
                            Designed for smooth and efficient operations, it smartly optimizes performance for specific scenarios, reducing delays and flashbacks, and ensuring a seamless user experience.
                        </p>
                        <div className='gap-8 lg:gap-10 pt-5 md:pt-12 flex justify-center md:justify-start items-center w-full'>
                            {frame4IconsData.map((data) => (
                                <div key={data.id} className='flex flex-col justify-start items-start md:max-w-[100px]'>
                                    <img src={data.icon} alt={data.title} className='w-7.5 h-7.5 lg:w-12 lg:h-12' />
                                    <p className='text-mobile/h7 lg:text-desktop/h6/medium text-[#232323] pt-2 md:pt-4 w-full'>
                                        {data.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src="/smartphone/a50/A501080p.gif" alt="f1Img" className='lg:h-[580px] md:h-[450px] md:w-[462px] lg:mr-17 mr-7.5 w-[250px] mt-5' />
                </div>
            </div>
        </div>
    );
}
