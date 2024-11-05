import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '../../../redux/slice/featurePhoneSlice'
import FilterHeading from './FilterHeading'

export default function Filters() {
    const dispatch = useDispatch()
    const filters = useSelector(state => state.featurePhone.filters)

    const filterOptions = {
        screen: [
            { value: '1.8', label: '1.8"' },
            { value: '2', label: '2"' },
            { value: '2.4', label: '2.4"' },
            { value: '2.8', label: '2.8"' }
        ],
        battery: [
            { value: 'HIGH', label: 'High' },
            { value: 'LOW', label: 'Low' },
        ],
        price: [
            { value: 'under-1000', label: 'Under ₹1,000' },
            { value: '1000-1500', label: '₹1,000 - ₹1,500' },
            { value: '1500-2000', label: '₹1,500 - ₹2,000' },
            { value: '2000-2500', label: '₹2,000 - ₹2,500' },
            { value: 'above-2500', label: 'Above ₹2,500' }
        ],
        network: [
            { value: '2G/3G', label: '2G/3G' },
            { value: '4G', label: '4G' },
        ],
    }

    const handleFilterChange = (filterType, value) => {
        dispatch(toggleFilter({ filterType, value }));
    }

    const renderFilter = (name, filterType, options) => (
        <>
            <div className="mb-6">
                <h3 className="mb-3 text-desktop/title uppercase">{name}</h3>
                <div className="space-y-3">
                    {options.map(option => (
                        <label key={option.value} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5  border-gray-400 rounded-sm checked:bg-red-600 checked:border-red-600"
                                checked={filters[filterType].includes(option.value)}
                                onChange={() => handleFilterChange(filterType, option.value)}
                            />
                            <span className="text-white text-desktop/body/2/regular">{option.label}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='border-[1px] border-white/20 w-full mb-4'></div>
        </>
    )

    return (
        <div className="text-white pr-5 rounded-lg shadow-md">
            <div className="pt-2">
                <FilterHeading />
            </div>
            <div className='hidden lg:block'>
                {renderFilter('Screen Size', 'screen', filterOptions.screen)}
                {renderFilter('Battery', 'battery', filterOptions.battery)}
                {renderFilter('Price', 'price', filterOptions.price)}
                {renderFilter('Network', 'network', filterOptions.network)}
            </div>
        </div>
    )
}