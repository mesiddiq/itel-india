/* eslint-disable no-unused-vars */
import { setFeaturePhones, setFilters, updateFilters, filterFeaturePhones } from "../../../redux/slice/featurePhoneSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterSection = () => {
    const filters = [
        {
            id: 1,
            name: 'SCREEN SIZE',
            filterName: 'screen',
            options: [
                { id: '1.8', label: '1.8 in', value: '1.8' },
                { id: '2', label: '2 in', value: '2' },
                { id: '2.4', label: '2.4 in', value: '2.4' },
                { id: '2.8', label: '2.8 in', value: '2.8' },
            ]
        },
        {
            id: 2,
            name: 'BATTERY',
            filterName: 'battery',
            options: [
                { id: 'high', label: 'HIGH', value: 'HIGH' },
                { id: 'low', label: 'LOW', value: 'LOW' },
            ]
        },
        {
            id: 3,
            name: 'PRICE RANGE',
            filterName: 'price',
            options: [
                { id: 'under-1000', label: 'Under ₹1000', value: 'under-1000' },
                { id: '1000-1500', label: '₹1000 to ₹1500', value: '1000-1500' },
                { id: '1500-2000', label: '₹1500 to ₹2000', value: '1500-2000' },
                { id: '2000-2500', label: '₹2000 to ₹2500', value: '2000-2500' },
                { id: 'above-2500', label: 'Above ₹2500', value: 'above-2500' }
            ]
        },
        {
            id: 4,
            name: 'NETWORK',
            filterName: 'network',
            options: [
                { id: '2G/3G', label: '2G/3G', value: '2G/3G' },
                { id: '4G', label: '4G', value: '4G' },
            ]
        },
    ]

    const dispatch = useDispatch()
    const { filters: selectedFilters, featurePhones } = useSelector((state) => state.featurePhone)

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
        dispatch(filterFeaturePhones())
        console.log(featurePhones)
    }

    return (
        <aside className="mt-2 max-h-[70vh] overflow-y-scroll overflowHidden " >
            {
                filters.map((filter) => (
                    <section key={filter.id} className="pr-5">
                        <h2 className="font-medium text-base mb-5 text-foreground">
                            {filter.name}
                        </h2>

                        <div className="space-y-3" role="group" aria-labelledby={`filter-${filter.id}`}>
                            {filter.options.map((option) => (
                                <div key={option.id} className="flex items-center space-x-2">
                                    <input 
                                        type="checkbox"
                                        id={option.id}
                                        onChange={(checked) => {
                                            handleFilterChange(filter.filterName, option.value, checked)
                                        }}
                                        className="h-5 w-5 rounded-sm border-gray-400 checked:bg-red-600 checked:border-red-600"
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