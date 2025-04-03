const SuperfastUnisoc = () => {
  return (
    <>

      {/* Laptop */}
      {/* Gradient Background */}
      <div className="hidden lg:block h-screen w-full bg-superfastUnisocGradient">

          <div className="content h-full">
              <div className="relative content font-markot h-full w-full flex flex-col justify-center items-start bg-superfastUnisocBGLaptop bg-contain bg-center bg-no-repeat">
                  <div className="absolute left-[80px] flex flex-col gap-[9px]">
                      <h3 className="text-desktop/h3 text-[#D4DDF0] max-w-[393px]">Superfast Unisoc T606 Octacore Processor </h3>
                      <h3 className="text-base font-normal leading-[22.72px] text-left max-w-[334px]">Experience unparalleled real-time performance and lightning-fast gaming with the Unisoc T606 octa-core processor.</h3>
                  </div>
              </div>
          </div>

      </div>

      <div className="block min-h-[663px] py-[60px] lg:hidden h-screen w-full bg-superfastUnisocGradient">
          <div className="content h-full ">
              <div className="relative font-markot h-full w-full flex flex-col justify-start items-center bg-superfastUnisocBGMobile bg-contain bg-center bg-no-repeat">
                  <div className="absolute pt-[60px] flex flex-col gap-[9px] text-center">
                      <h3 className="text-mobile/h4 text-[#D4DDF0] max-w-[256px]">Superfast Unisoc T606 Octacore Processor </h3>
                      <h3 className="text-mobile/body/2 max-w-[240px]">Experience unparalleled real-time performance and lightning-fast gaming with the Unisoc T606 octa-core processor.</h3>
                  </div>
              </div>
          </div>
      </div>

    </>
  )
}

export default SuperfastUnisoc