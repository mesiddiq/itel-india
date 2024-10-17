const Frame24GB = () => {
  return (
    <>
      {/* Laptop */}
      <div className="hidden md:block h-screen w-full relative z-0" style={{
        background: 'linear-gradient(335.37deg, #00264E 0%, #001F40 100%)'
      }}>

        <div className="absolute z-1 w-full h-full bg-frame24GB bg-contain bg-right bg-no-repeat"></div>


        <div className="px-4 md:px-12 xl:p-0 font-markot content py-[80px] h-full w-full flex flex-row">
          <div className="absolute h-full top-0 py-[80px] flex flex-col justify-between">
            
            <span className="text-desktop/h2 max-w-[400px]">Operate Faster than Ever with Memory Fusion Technology</span>
            
            <div className="flex flex-col gap-3">
              <img src='/smartphone/P55/externalDrive.svg' alt='externalDrive' className="w-[27px] h-[38px]"/>
              <span className="max-w-[320px] uppercase text-[22px] font-medium leading-[28px] tracking-[0.02em] text-left">
              8GB RAM, expandable upto 24GB* using Memory Fusion | 128GB Memory Storage
              </span>
            </div>
          
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col-reverse justify-between items-center gap-10 py-10 h-auto min-h-[620px] w-full relative z-0 " style={{
        background: 'linear-gradient(335.37deg, #00264E 0%, #001F40 100%)'
      }}>

        <div className="w-full h-full">
          <img src='/smartphone/P55/frame24GB.png' alt='frame24GB' className="w-full h-full"/>
        </div>

        <div className="font-markot content w-full flex flex-row justify-center items-center">
          <div className="h-[216px] flex flex-col justify-between item-center">

            <span className="text-mobile/h4 max-w-[300px] text-center">Operate Faster than Ever with Memory Fusion Technology</span>
            <div className="flex flex-col justify-center items-center gap-[6px]">
              <img src='/smartphone/P55/externalDrive.svg' alt='externalDrive' className="w-[23px] h-[32px]"/>
              <span className="max-w-[285px] uppercase text-mobile/body/large text-center">
              8GB RAM, expandable upto 24GB* using Memory Fusion | 128GB Memory Storage
              </span>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame24GB