import filter from '/product-listing/setting-3.svg'

const FilterHeading = () => {
  return (
    <div className="lg:mb-12 lg:text-left text-center text-black lg:text-white flex flex-row lg:justify-start justify-center items-center gap-2 lg:p-0 py-2 px-9 lg:bg-transparent bg-white lg:rounded-none rounded-3xl ">
        <img src={filter}/>
        <span className='font-base FFMarkBold'>FILTER</span>
    </div>
  )
}

export default FilterHeading