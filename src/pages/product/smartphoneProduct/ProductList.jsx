import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

// Import the AllPhonesData
import { AllPhonesData } from '../../../data/AllPhoneData'

export default function ProductList() {
    const filters = useSelector(state => state.filters.filters)

    const filteredPhones = AllPhonesData.filter(phone => {
        if (filters.series.length > 0 && !filters.series.includes(phone.category) && !filters.series.includes('All')) return false

        if (filters.price.length > 0) {
            const price = parseInt(phone.specification.price.replace(',', ''))
            const priceMatch = filters.price.some(range => {
                const [min, max] = range.split('-').map(Number)
                if (range === 'under-5000') return price < 5000
                if (range === 'above-10000') return price > 10000
                return price >= min && price <= max
            })
            if (!priceMatch) return false
        }

        if (filters.camera.length > 0) {
            const camera = parseInt(phone.specification.primaryCamera)
            const cameraMatch = filters.camera.some(range => {
                if (range === '8-50') return camera >= 8 && camera <= 50
                if (range === '51-100') return camera > 50 && camera <= 100
                if (range === 'above-100') return camera > 100
                return false
            })
            if (!cameraMatch) return false
        }

        if (filters.screen.length > 0) {
            const screen = parseFloat(phone.specification.screenSize)
            const screenMatch = filters.screen.some(range => {
                if (range === 'under-6') return screen < 6
                if (range === '6-6.5') return screen >= 6 && screen <= 6.5
                if (range === 'above-6.5') return screen > 6.5
                return false
            })
            if (!screenMatch) return false
        }

        if (filters.storage.length > 0) {
            const storage = phone.specification.storage.split(' ')[0]
            if (!filters.storage.includes(storage)) return false
        }

        return true
    })

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Available Smartphones</h2>
            {filteredPhones.length === 0 ? (
                <p className="text-gray-600">No smartphones match your selected filters.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border">
                    {filteredPhones.map(phone => (
                        <ProductCard key={phone.id} product={phone} />
                    ))}
                </div>
            )}
        </div>
    )
}