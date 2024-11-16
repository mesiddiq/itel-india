/* eslint-disable react/prop-types */
const FilterCard = ({typeOfFilter, filterOptions}) => {
return (
    <section className="pr-5 font-markot">
        <h1 className='font-base font-medium mb-5'>
                {typeOfFilter}
        </h1>
        <ul className='flex flex-col gap-3 justify-center'>
            {
                filterOptions.map((option) => (
                    <li key={option} className='flex flex-row justify-start items-center gap-2'>
                        
                        {/* Check Mark */}
                        <label className="flex items-center cursor-pointer relative">
                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm shadow hover:shadow-md border border-[#6F7384] text-red-600 bg-red-600 checked:text-red-600 checked:bg-red-600 checked:border-red-600" id="check2" />
                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </label>
                        
                        <span className='text-sm font-normal leading-[22.4px] tracking-[-0.01em] text-[#949494]'>
                            {option}
                        </span>
                    </li>
                ))
            }
        </ul>

        <div className="h-[1px] bg-white/20 my-6"></div>
    </section>
)
}

export default FilterCard