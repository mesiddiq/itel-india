/* eslint-disable no-unused-vars */
import { setSmartPhones, setFilters, updateFilters, filterSmartPhones } from "../../../redux/slice/smartPhoneSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterSection = () => {
    const filters = [
        {
            id: 1,
            name: 'PRICE RANGE',
            filterName: 'priceRange',
            options: [
                { id: 'under-1000', label: 'Under ₹1000', value: [0, 1000] },
                { id: '1000-3000', label: '₹1000 to ₹3000', value: [1000, 3000] },
                { id: '3000-5000', label: '₹3000 to ₹5000', value: [3000, 5000] },
                { id: 'upto-7500', label: 'Upto ₹7500', value: [0, 7500] }
            ]
        },
        {
            id: 2,
            name: 'PRIMARY CAMERA (FRONT)',
            filterName: 'camera',
            options: [
                { id: '8-12mp', label: '8 - 11.9 MP', value: '8 MP' },
                { id: '12-16mp', label: '12 - 15.9 MP', value: '12 MP' },
                { id: '48-64mp', label: '48 - 63.9 MP', value: '48 MP' },
                { id: '64mp-above', label: '64 MP & Above', value: '64 MP' }
            ]
        },
        {
            id: 3,
            name: 'SCREEN SIZE',
            filterName: 'screenSize',
            options: [
                { id: '5in', label: '5 in', value: '5 in' },
                { id: '5-5in', label: '5.5 in', value: '5.5 in' },
                { id: '6in', label: '6 in & above', value: '6 in' }
            ]
        },
        {
            id: 4,
            name: 'STORAGE',
            filterName: 'storage',
            options: [
                { id: '32gb', label: '32 GB', value: '32 GB' },
                { id: '64gb', label: '64 GB', value: '64 GB' },
                { id: '128gb', label: '128 GB', value: '128 GB' }
            ]
        }
    ]

    const dispatch = useDispatch()
    const { filters: selectedFilters, smartPhones } = useSelector((state) => state.smartPhone)

    const handleFilterChange = (filterName, value, checked) => {
        const currentFilters = selectedFilters[filterName]
        let newValues

        if (checked) {
            newValues = [...currentFilters, value]
        } else {
            newValues = currentFilters.filter((item) =>
                JSON.stringify(item) !== JSON.stringify(value)
            )
        }

        dispatch(updateFilters({ filterName, newValues }))
        dispatch(filterSmartPhones())
        console.log(smartPhones)
    }

    return (
        <aside className="mt-2 max-h-[70vh] overflow-y-scroll overflowHidden " >
            {
                filters.map((filter) => (
                    // <section className="pr-5">
                    //     <h1 className='font-base font-medium mb-5'>
                    //         {filter.name}
                    //     </h1>
                    //     <ul className='flex flex-col gap-3 justify-center'>
                    //         {
                    //             filter?.options?.map((option) => (
                    //                 <li key={option} className='flex flex-row justify-start items-center gap-2'>

                    //                     {/* Check Mark */}
                    //                     <label htmlFor={option} className="flex items-center cursor-pointer relative">
                    //                         <input id={option} type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm shadow hover:shadow-md border border-[#6F7384] checked:bg-red-600 checked:border-red-600" />
                    //                         <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    //                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    //                             </svg>
                    //                         </span>
                    //                     </label>

                    //                     <span className='text-sm font-normal leading-[22.4px] tracking-[-0.01em] text-[#949494]'>
                    //                         {option}
                    //                     </span>
                    //                 </li>
                    //             ))
                    //         }
                    //     </ul>

                    //     <div className="h-[1px] bg-white/20 my-6"></div>
                    // </section>
                    <section key={filter.id} className="pr-5">
                        <h2 className="font-medium text-base mb-5 text-foreground">
                            {filter.name}
                        </h2>

                        <div className="space-y-3 " role="group" aria-labelledby={`filter-${filter.id}`}>
                            {filter.options.map((option) => (
                                <div key={option.id} className="flex items-center space-x-2">
                                    <input type="checkbox"
                                        id={option.id}
                                        onChange={(checked) => {
                                            handleFilterChange(filter.filterName, option.value, checked)
                                        }}
                                        className="h-5 w-5 rounded-sm border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                    />
                                    <label
                                        htmlFor={option.id}
                                        className="text-sm text-muted-foreground leading-tight cursor-pointer"
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-border/20 my-6" role="separator" />
                    </section>
                ))
            }
        </aside>
    )
}

export default FilterSection