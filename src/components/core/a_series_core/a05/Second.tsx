export default function Second() {
  return (
    <div className='relative bg-[#FCCE8D] bg-opacity-[20%] border md:h-[800px] h-[270px] border-[#FCCE8D] flex flex-col justify-center items-center overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-no-repeat bg-cover bg-center z-0'
        style={{ backgroundImage: "url('/midVector.png')" }}
      ></div>

      {/* Content */}
      <div className='flex flex-col items-center xl:px-[293px] px-[43px] pt-[21px] xl:pt-[80px] z-10'>
        <p className='md:text-desktop/h2 text-mobile/h5 text-start xl:max-w-full mt-[5rem] md:block xl:mt-20 xs:text-mobile/h6'>
          Experience the Ultimate 
          <span className='block md:text-center xl:inline text-center text-[#FF335F]'> Awesomeness</span>
        </p>
      </div>
      
      <div className='flex-grow'></div> {/* This will push the image to the bottom */}
      <img 
        src="/4mobs.png" 
        alt="4mobs" 
        className='md:w-[1210.8px] w-[100%] max-w-full h-auto mx-auto xl:pt-[40px] pt-0 object-cover z-10' 
      />
    </div>
  )
}
