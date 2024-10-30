import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglePriceFilter, toggleCameraFilter, toggleScreenFilter, toggleStorageFilter } from '../../../redux/reducers/actions'

export default function Filters() {
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters.filters)

    const filterOptions = {
        price: [
            { value: 'under-5000', label: 'Under ₹5,000' },
            { value: '5000-7000', label: '₹5,000 - ₹7,000' },
            { value: '7000-10000', label: '₹7,000 - ₹10,000' },
            { value: 'above-10000', label: 'Above ₹10,000' }
        ],
        camera: [
            { value: '8-50', label: '8 - 50 MP' },
            { value: '51-100', label: '51 - 100 MP' },
            { value: 'above-100', label: 'Above 100 MP' }
        ],
        screen: [
            { value: 'under-6', label: 'Under 6"' },
            { value: '6-6.5', label: '6" - 6.5"' },
            { value: 'above-6.5', label: 'Above 6.5"' }
        ],
        storage: [
            { value: '32', label: '32 GB' },
            { value: '64', label: '64 GB' },
            { value: '128', label: '128 GB' }
        ]
    }

    const renderFilter = (name, options, currentValues, action) => (
        <div className="mb-6">
            <h3 className="font-semibold mb-2 text-lg">{name}</h3>
            <div className="space-y-2">
                {options.map(option => (
                    <label key={option.value} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={currentValues.includes(option.value)}
                            onChange={() => dispatch(action(option.value))}
                        />
                        <span className="text-gray-700">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    )

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Filters</h2>
            {renderFilter('Price Range', filterOptions.price, filters.price, togglePriceFilter)}
            {renderFilter('Primary Camera', filterOptions.camera, filters.camera, toggleCameraFilter)}
            {renderFilter('Screen Size', filterOptions.screen, filters.screen, toggleScreenFilter)}
            {renderFilter('Storage', filterOptions.storage, filters.storage, toggleStorageFilter)}
        </div>
    )
}