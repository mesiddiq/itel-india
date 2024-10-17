const Frame24GB = () => {
  return (
    <div className="h-screen w-full relative z-0" style={{
      background: 'linear-gradient(335.37deg, #00264E 0%, #001F40 100%)'
    }}>

      <div className="absolute z-1 w-full h-full bg-frame24GB bg-contain bg-right bg-no-repeat"></div>


      <div className="font-markot content py-[80px] h-full w-full flex flex-row">
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
  )
}

export default Frame24GB