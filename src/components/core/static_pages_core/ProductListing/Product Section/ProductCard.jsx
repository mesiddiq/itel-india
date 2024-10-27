/* eslint-disable react/prop-types */
const ProductCard = ({ isNew, title, thumbnail, description, specification = {} }) => {
  const { price } = specification
  return (
    <div className="w-1/2 lg:w-1/3 py-3 md:py-5 px-3 gap-3 rounded-2xl lg:h-[526px] bg-[#232323] flex flex-col flex-wrap justify-around items-center" >
      
        {/* New */}
        {
          isNew && (
            <h1 className="md:w-[30px] lg:w-[55px] rounded-full bg-[#3A3358] px-3 py-[2px] text-[12px] lg:text-sm leading-[22.4px] tracking-[-0.01em]">
              New
            </h1>
          )
        }
        

        {/* ProductImage */}
        <div className='product-image-card flex justify-center items-center'>
          <img src={thumbnail} className='w-2/3 lg:w-full'/>
        </div>


        {/* ProductDescription */}
        <div className="flex flex-col gap-3">
          <h1 className="text-base md:text-2xl leading-[19.2px] tracking-[-0.01em] md:leading-[31.2px] md:tracking-[-0.02em] text-center">
            { title }
          </h1>
          <h3 className="text-[10px] leading-[14px] tracking-[0.02em] md:text-sm md:leading-[22.4px] md:tracking-[-0.01em] text-center text-[#949494] md:text-[#C0C0C0]">
            { description }
          </h3>
          {/* <h3 className="text-[10px] leading-[16px] tracking-[0.02em] md:text-xs md:leading-[19.2px] md:tracking-[-0.02em] text-center text-[#C0C0C0]">
            Old Price <s>₹1,20,000</s>
          </h3> */}
        </div>
      
      
        {/* PriceButton */}
        <div className='cursor-pointer md:rounded-3xl md:h-[38px] md:border-[0.5px] w-[90%] md:bg-[#2C2C2C] md:border-solid flex flex-row justify-center items-center gap-[6px] md:gap-3 md:py-2 px-6 ' >
          <span className='text-xs md:text-base leading-[18px] md:leading-[19.2px] tracking-[-0.02em] md:tracking-[-0.01em] '>
            ₹{ price }
          </span>
          <img src='/product-listing/arrow-right.svg' className='w-5 h-5 relative top-[-1px]'/>
        </div>

    </div>
  )
}

export default ProductCard