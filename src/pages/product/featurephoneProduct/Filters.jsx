import { useDispatch, useSelector } from 'react-redux'
import { toggleScreenFilter, toggleBatteryFilter, togglePriceFilter, toggleNetworkFilter } from '../../../redux/reducers/actionsFeaturephone'
import FilterHeading from './FilterHeading'

export default function Filters() {
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filtersFeaturePhone.filtersFeaturePhone)

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
            { value: '2G', label: '2G/3G' },
            { value: '4G', label: '4G' },
        ],
    }

    const renderFilter = (title, filterType, options, currentValues, action) => (
        <>
            <div className="mb-6">
                <h3 className="mb-3 text-desktop/title uppercase">{title}</h3>
                <div className="space-y-3">
                    {options.map(option => (
                        <label key={option.value} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={currentValues.includes(option.value)}
                                onChange={() => dispatch(action(option.value))}
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
                {renderFilter('Screen Size', 'screen', filterOptions.screen, filters.screen, toggleScreenFilter)}
                {renderFilter('Battery', 'battery', filterOptions.battery, filters.battery, toggleBatteryFilter)}
                {renderFilter('Price', 'price', filterOptions.price, filters.price, togglePriceFilter)}
                {renderFilter('Network', 'network', filterOptions.network, filters.network, toggleNetworkFilter)}
            </div>
        </div>
    )
}