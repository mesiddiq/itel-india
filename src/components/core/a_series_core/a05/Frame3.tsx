
export default function Frame3() {
  return (
    <div className="relative mt-[16px] bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full min-h-[550px] md:h-[739px] flex flex-col items-center xl:rounded-[36px] rounded-[16px] overflow-hidden">
                
                <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
                    <div className="flex flex-col justify-center xl:pb-[140px] xl:pt-[110px] md:pb-[50px] md:pt-[36px] pt-[16px] px-[12px] xl:px-[56px] z-20 md:px-[24px]">
                        <h2 className="md:text-desktop/h2 text-mobile/h4 text-center md:text-left md:pr-[116px] max-w-[350px]">
                        Unlock & Roll: Your Phone, Your Style!
                        </h2>
                        <p className="flex flex-col md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-center md:text-left md:pt-[20px] pt-[12px] md:pb-[36px] pb-[21px] md:max-w-[200px] xl:max-w-[20rem] xs:text-mobile/h7">
                            Step into the future with a phone that's both
                            chic and practical. With its sleek design
                            and fingerprint sensor, you have complete
                            control right in your hand.
                        </p>

                        <div className="flex md:flex-col flex-row font-bold md:text-[16px] text-[12px] text-left gap-[42px] md:gap-0">
                            <span className="flex items-center md:gap-[14px] gap-[12px] ">
                                <img src="/logos/f3l1.png" alt="f3l1" className="w-8 h-8 md:w-12 md:h-12" />
                                <p>Face Unlock</p>
                            </span>
                            <span className="flex md:pt-[36px] items-center md:gap-[14px] gap-[12px]">
                                <img src="/logos/f3l2.png" alt="f3l2" className="w-8 h-8 md:w-12 md:h-12" />
                                <p>Finger Print Sensor</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="-z-10 absolute overflow-hidden bottom-0 right-0 md:pt-[20px] xl:pl-[289px] pt-[244px] pl-[140px]">
                            <img
                                src="/frame3Vector.png"
                                alt="Background Vector"
                                className="xl:max-w-[685px] md:max-w-[325px] w-100% mx-auto h-auto object-cover hidden md:flex"
                            />
                             <img
                                src="/vec.png"
                                alt="Background Vector"
                                className="md:max-w-[685px] w-100% mx-auto h-auto object-cover flex md:hidden xs:hidden"
                            />
                        </div>

                        <div className="overflow-hidden z-10 absolute bottom-0 right-0 xl:pt-[60px] md:pt-[35px] xl:pr-[80px] md:pr-[15px] pr-[65px]">
                            <img
                                src="/frame3.webp"
                                alt="Foreground Image"
                                className="w-[258px] xl:w-[582px] md:w-[482px] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                

            </div>
  )
}
