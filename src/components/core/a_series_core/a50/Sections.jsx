export default function Sections() {
  return (
    <div className="w-full flex md:py-[100px] md:px-[80px] py-[40px] px-[16px]">
      
      {/* Parent container to wrap both divs */}
      <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center space-y-[12px] lg:space-y-0">
        
        {/* div1 */}
        <div className="bg-[url('/SmartPhone/a50/f1S.png')] lg:h-[852px] bg-cover bg-center  flex flex-col border rounded-[16px] border-[#41fc6680] md:mr-[24px]">
          <span className="ml-[23px] lg:ml-[50px]">
          <p className="text-start mt-10 md:text-desktop/h4 xl:text-desktop/h3 px-4 text-[#050036] font-bold text-[20px] xs:text-[18px]">
          Enhanced Protection: <span className="block">Secure Access</span>
          </p>
          <p className="ml-4 md:text-desktop/h5 text-mobile/h6 xs:text-mobile/h7 xl:text-desktop/h4 mt-3 text-[#232323] text-start">
            Face Unlock | Side FingerPrint
          </p>
          </span>
          <img
            src="/SmartPhone/a50/f1Hero.png"
            alt="Background Image"
            className="lg:h-[650px] w-full xl:pt-[30px] md:pt-[100px] lg:px-[50px] px-[23px]"
          />
        </div>
      
        {/* div2 */}
        <div className="flex flex-col space-y-[12px] lg:space-y-0 lg:h-[852px]">
          {/* Upper Right Block Desktop */}
          <div className="h-1/2 bg-[url('/SmartPhone/a50/f2S.png')] bg-cover bg-center lg:flex hidden justify-start items-start border rounded-[16px] flex-grow md:mb-[24px]">
            <span className="ml-[23px] lg:ml-[50px] lg:w-[314px]">
            <p className="text-start mt-10 md:text-desktop/h4 xl:text-desktop/h3 px-4 text-[#050036] font-bold text-[20px] xs:text-[18px]">
              Safety & Efficiency in Every Charge 
            </p>
            <p className="ml-4 md:text-desktop/h5 text-mobile/h6 xs:text-mobile/h7 xl:text-desktop/h4 mt-3 text-[#232323] text-start pt-[15px]">
              5000mAh Battery with Fast Type-C Charger
            </p>
            </span>
          </div>
          
          {/* Upper Right Block Mobile */}
          <div className="h-1/2 bg-[url('/SmartPhone/a50/f3S.png')] bg-cover bg-center flex lg:hidden flex-col justify-center items-center flex-grow rounded-[16px]">
              <div className="flex flex-col justify-start items-start w-full h-full pl-[16px] pt-[20px]">
                  <span className="text-start">
                  <p className="font-bold text-[20px] xs:text-[18px] max-w-5xl w-[200px] text-start text-[#050036]">
                    Safety & Efficiency in Every Charge
                  </p>
                  <p className="text-mobile/h7 mt-3 text-[#232323] text-start lg:pr-[40px] w-[200px]">
                    5000mAh Battery with Fast Type-C Charger
                  </p>
                  </span>
                  <img src="/SmartPhone/a50/battery.png" alt="battery" className="h-auto mx-auto w-full pb-[26px] pt-[12px]"/>
              </div>
          </div>

          {/* Lower Right Block */}
          <div className="h-1/2 bg-[url('/SmartPhone/a50/f3S.png')] bg-cover bg-center flex flex-col justify-center items-center flex-grow rounded-[16px]">
              <div className="flex flex-col justify-start items-start w-full h-full">
                  <span className="pl-6 text-center pt-[22px] lg:pt-[40px]">
                  <p className="lg:w-[582px] md:text-desktop/h4 xl:text-desktop/h3 font-bold text-[20px] xs:text-[18px] max-w-5xl text-start text-[#050036]">
                    Free Screen Replacement within 100 Days*
                  </p>
                  <p className="text-[12px] mt-3 text-[#232323] text-start lg:pr-[40px]">
                  *Disclaimer: Terms & conditions apply. Offer valid for 100 days from the date of purchase and covers only the first screen breakage.
                  </p>
                  </span>
                  <img src="/SmartPhone/a50/f3Hero.png" alt="f3Hero" className="h-auto mx-auto lg:w-[650px] w-full px-[16px] pb-[12px] lg:px-[80px]"/>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
