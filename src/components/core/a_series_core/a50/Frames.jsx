import { frame2IconsData, frame4IconsData, frame5IconsData } from '../../../../data/smartphonedata/A50Data';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useRef } from "react";
import ReactPlayer from 'react-player';

export default function Frames() {
    const texts = [
        "HDR",
        "Beauty",
        "Portrait",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500); // Change text every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);


    function useInViewOnce(ref) {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Set true jab visible ho
                    } else {
                        setIsVisible(false); // Reset jab scroll ke bahar ho
                    }
                },
                { threshold: 0.5 } // 50% visible hone par trigger
            );

            if (ref.current) observer.observe(ref.current);

            return () => observer.disconnect();
        }, [ref]);

        return isVisible;
    }

    const ref = useRef(null);
    const isInView = useInViewOnce(ref);

    return (
        <div className='min-h-screen w-full flex flex-col  mt-6 lg:mt-24'>
            <div className='md:rounded-[56px] xl:rounded-[54px] lg:border lg:border-[#62b67af4] flex items-center  flex-col lg:p-4 content'>

                {/* Frame 0 */}
                <div
                    ref={ref}
                    className="md:w-full overflow-hidden  h-[556px] md:h-[650px] border-[#62b67af4] border-2 py-5 rounded-[16px] md:rounded-[56px] lg:h-[1056px] bg-cover bg-center flex flex-col bg-[url('/smartphone/a50/f0Bg.webp')]"
                >
                    <motion.div
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }} // Animation on visibility
                        exit={{ opacity: 0 }} // Fade out effect when exiting
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:px-14 px-5">
                            <span className="flex flex-col">
                                <h1 className="lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[709px] text-center md:text-start">
                                    Speed & Storage: All for Your Entertainment Needs
                                </h1>
                                <p className="lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-4 text-center md:text-start">
                                    Enjoy high performance, effortless multitasking, and expandable space.
                                </p>
                            </span>
                            <div className="flex lg:flex-col flex-row lg:justify-center justify-between py-7 lg:py-0">
                                <div className="flex flex-col gap-4 mb-3">
                                    <p className="lg:text-[32px] text-[#181818] leading-10 font-medium text-mobile/title">
                                        <span className="text-[#08E488] ">12GB*</span> (4GB+8GB*) RAM
                                    </p>
                                    <p className="text-[#232323] lg:text-[14px] text-[10px] text-opacity-70">
                                        with Memory Fusion Technology*
                                    </p>
                                </div>
                                <p className="lg:text-[32px] text-[#181818] pt-[9px] md:pt-0 font-medium text-mobile/title lg:mt-5">
                                    <span className="text-[#08E488]">64GB</span> ROM
                                </p>
                            </div>
                        </div>
                        <div className="relative responsveImg">
                            <motion.img
                                src="/smartphone/a50/img2.webp"
                                alt="f1Img"
                                className="absolute w-[200px] md:left-[2rem] md:w-[400px] lg:left-[1rem] lg:w-[800px]"
                                initial={{ x: -200, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }} // Fade effect during animation
                                exit={{ x: -200, opacity: 0 }} // Fade out effect when exiting
                                transition={{ duration: 1, delay: 0.4 }}
                            />
                            <motion.img
                                src="/smartphone/a50/img4.webp"
                                alt="f1Img2"
                                className="absolute top-[6rem] left-[-6rem] w-[200px] md:left-[-9rem] md:top-[13rem] md:w-[400px] lg:top-[25rem] lg:left-[-20rem] lg:w-[800px]"
                                initial={{ x: -200, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }} // Fade effect during animation
                                exit={{ x: -200, opacity: 0 }} // Fade out effect when exiting
                                transition={{ duration: 1, delay: 0.4 }}
                            />
                            <motion.img
                                src="/smartphone/a50/img1.webp"
                                alt="f2Img"
                                className="absolute h-[200px] left-[13rem] md:left-[28rem] md:h-[380px] lg:left-[51rem] lg:h-[668.21px]"
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }} // Fade effect during animation
                                exit={{ y: 100, opacity: 0 }} // Fade out effect when exiting
                                transition={{ duration: 1, delay: 0.4 }}
                            />
                            <motion.img
                                src="/smartphone/a50/img3.webp"
                                alt="f2Img2"
                                className="absolute h-[200px] top-[6rem] left-[7rem] md:top-[13rem] md:left-[16rem] md:h-[380px] lg:top-[25rem] lg:left-[31rem] lg:h-[668.21px]"
                                initial={{ y: 100, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }} // Fade effect during animation
                                exit={{ y: 100, opacity: 0 }} // Fade out effect when exiting
                                transition={{ duration: 1, delay: 0.4 }}
                            />
                        </div>
                    </motion.div>
                </div>
                {/* Frame 1 */}
                <div className="lg:mt-15 border-[#62b67af4] border-2 mt-7 md:w-full  h-[750px] py-5 rounded-[16px] md:rounded-[56px] md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col md:bg-[url('/smartphone/a50/f2.webp')] bg-[url('/smartphone/a50/f1Mobile.webp')]">
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
                    <img src="/smartphone/a50/f1Img.webp" alt="SMP Selfie Cemera" className='lg:h-[580px] md:h-[450px] md:w-[462px] lg:mr-17 mr-7.5 w-[250px] mt-5' />
                </div>

                {/* Frame 2 (Desktop) */}
                <div className="relative mt-5 w-full border-[#62b67af4] border-2 md:rounded-[56px]  hidden lg:h-[739px] bg-cover bg-center lg:flex lg:flex-row lg:justify-between justify-center items-center flex-col bg-[url('/smartphone/a50/f1.webp')]">

                    <div className="md:h-[557px] lg:flex hidden rounded-[32px] absolute left-[66px] overflow-hidden ">
                        <video
                            src="/smartphone/a50/A50Vdo.webm"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                    <img src="/smartphone/a50/f2Hero.webp" alt="8MP AI Rear Camera" className='md:h-[650px] lg:py-5 lg:pl-16 lg:flex hidden' />


                    <div className='relative flex flex-col  justify-start items-start xl:bottom-[9%] xl:right-[51%] md:right-[36%] bottom-[2%]'>
                        <div className="absolute xl:w-[537px] md:w-[337px]  top-0">
                            <p

                                style={{
                                    backgroundImage: 'linear-gradient(122.31deg, #E0DDA8 -0.55%, #05D989 85.83%)',
                                    mixBlendMode: 'normal',

                                }}
                                className='lowercase bg-clip-text text-transparent font-bold leading-[80%] tracking-[-0.06em]  xl:text-[80px] lg:text-[50px]  '

                            >

                                capture every moment with modes like
                            </p>
                            <p
                                className="transition-transform text-[#46E19B] capitalize duration-500 ease-in-out animate-slideFromBottom font-bold leading-[80%] tracking-[-0.06em]  xl:text-[150px] lg:text-[50px] "
                                key={currentTextIndex}
                            >
                                {texts[currentTextIndex]}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Frame 2 (Mobile) */}
                <div className="bg-[url('/smartphone/a50/f1Mobile.webp')] border-[#62b67af4] border-2 bg-cover bg-center flex justify-center items-center overflow-hidden lg:hidden flex-col   rounded-[16px] py-5 mt-5 md:bg-[url('/smartphone/a50/f1.webp')] md:w-full md:h-[724px]">
                    <div className='justify-start items-start flex flex-col pl-7.5  px-4 pt-5'>
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
                    <div className="flex overflow-hidden relative md:h-[490px] h-[250px] w-full justify-center">
                        {/* Image Section */}
                        <div className="absolute h-full overflow-hidden left-[10rem]  md:left-[20rem] ">
                            <img
                                src="/smartphone/a50/sidePhone.webp"
                                alt="f2Mob"
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Video Section */}
                        <div className="overflow-hidden rounded-[18px] h-full absolute  ">
                            <video
                                src="/smartphone/a50/A50Vdo.webm"
                                autoPlay
                                muted
                                loop
                                className="h-full w-full object-contain"
                            ></video>
                        </div>
                    </div>

                    {/* <img src="/smartphone/a50/f2Mob.webp" alt="f2Mob" className='pl-4 pt-2.5 pb-5.5 md:w-[60%]' /> */}
                </div>

                {/* Frame 3 */}
                <div className="md:w-full  h-[624px] border-[#62b67af4] border-2  md:rounded-[56px] rounded-[16px] py-5 md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col bg-[url('/smartphone/a50/mobBg.webp')] md:bg-[url('/smartphone/a50/oBg.webp')] mt-5">
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
                    {/* <img src="/smartphone/a50/A501080p.gif" alt="f1Img" className='lg:h-[580px] md:h-[450px] md:w-[462px] lg:mr-17 mr-7.5 w-[250px] mt-5' /> */}
                    <img src="/smartphone/a50/oct.webp" alt="Minimize Glitches Experience" className='lg:w-[606.59px]  md:w-[462px] lg:pr-10 lg:pt-16 pr-7.5 w-[250px] mt-5' />
                </div>

                {/* Frame 4*/}
                <div className="md:w-full  h-[624px] border-[#62b67af4] border-2  md:rounded-[56px] rounded-[16px] py-5 md:h-[626px] bg-cover bg-center flex md:flex-row md:justify-between justify-center items-center flex-col bg-[url('/smartphone/a50/mobBg.webp')] md:bg-[url('/smartphone/a50/oBg.webp')] mt-5">
                    <div className='flex flex-col lg:justify-start items-start xl:pl-12 px-5 md:ps-4 md:px-0'>
                        <h1 className='lg:text-desktop/h2 text-mobile/h4 text-[#181818] lg:max-w-[437px] text-center md:text-start'>
                            6.6” Big Display with Dynamic Bar
                        </h1>
                        <p className='lg:max-w-[437px] lg:text-mobile/body/large text-desktop/body/2/regular text-[#181818] text-opacity-80 pt-4 text-center md:text-start'>
                            The spacious display, featuring a 90% screen-to-body ratio, provides an immersive viewing experience. Keeping up with your dynamic lifestyle, the integrated dynamic bar delivers essential notifications more seamlessly than ever - from battery status to calls and unlocking.                        </p>
                        <div className='gap-8 lg:gap-10 pt-5 md:pt-12 flex justify-center md:justify-start items-center w-full'>
                            {frame5IconsData.map((data) => (
                                <div key={data.id} className='flex flex-col justify-start items-start md:max-w-[438px]'>

                                    <p
                                        style={{
                                            backgroundImage: 'linear-gradient(98.38deg, #08E488 -17.43%, #047E4B 91.28%)',
                                            mixBlendMode: 'normal',
                                        }}
                                        className='text-desktop/h3 lg:text-desktop/h3 text-transparent bg-clip-text pt-2 md:pt-4 w-full'
                                    >

                                        {data.head}
                                    </p>

                                    <p className='text-mobile/h7 lg:text-desktop/h6/medium text-[#232323] pt-2 md:pt-4 w-full'>
                                        {data.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src="/smartphone/a50/A501080p.gif" alt="6.6” Big Display phone" className='lg:h-[600px] lg:w-[725px] md:h-[400px] md:w-[462px] lg:mr-17 mr-7.5 w-[250px] md:mt-5' />
                    {/* <img src="/smartphone/a50/oct.webp" alt="f1Img" className='lg:w-[606.59px]  md:w-[462px] lg:pr-10 lg:pt-16 pr-7.5 w-[250px] mt-5' /> */}
                </div>
            </div>
        </div>
    );
}
