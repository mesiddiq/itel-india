import { useSelector } from 'react-redux'
import { useState } from 'react'
import ProductCard from './ProductCard'

// Import the AllPhonesData
import { AllFeaturePhoneData } from '../../../data/AllFeaturePhoneData'

export default function ProductList() {
    const filters = useSelector(state => state.featurePhone.filters)
    const [currentPage, setCurrentPage] = useState(1)
    const phonesPerPage = 6

    const filteredPhones = AllFeaturePhoneData.filter(phone => {
        if (filters.series.length > 0 && !filters.series.includes(phone.category) && !filters.series.includes('All')) return false

        if (filters.screen.length > 0) {
            const screen = parseFloat(phone.specification.screenSize.split('"')[0])
            const screenMatch = filters.screen.some(value => {
                return Math.abs(screen - parseFloat(value)) < 0.1
            })
            if (!screenMatch) return false
        }

        if (filters.battery.length > 0) {
            const battery = parseInt(phone.specification.battery.replace('mAh',''))
            const batteryMatch = filters.battery.some(range => {
                if (range === 'HIGH') return battery >= 1500
                if (range === 'LOW') return battery < 1500
                return false
            })
            if (!batteryMatch) return false
        }

        if (filters.price.length > 0) {
            const price = parseInt(phone.specification.price.replace(',', ''))
            const priceMatch = filters.price.some(range => {
                if (range === 'under-1000') return price < 1000
                if (range === 'above-2500') return price > 2500
                const [min, max] = range.split('-').map(Number)
                return price >= min && price <= max
            })
            if (!priceMatch) return false
        }

        if (filters.network.length > 0) {
            const networkMatch = filters.network.some(value => {
                if (value === '2G') return phone.specification.network === '2G';
                if (value === '4G') return phone.specification.network === '4G';
                return false
            })
            if (!networkMatch) return false
        }

        return true
    })

    const totalPages = Math.ceil(filteredPhones.length / phonesPerPage)
    const indexOfLastPhone = currentPage * phonesPerPage
    const indexOfFirstPhone = indexOfLastPhone - phonesPerPage
    const currentPhones = filteredPhones.slice(indexOfFirstPhone, indexOfLastPhone)

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1)
    }

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1)
    }

    return (
        <div>
            {currentPhones.length === 0 ? (
                <p className="text-gray-300">No Feature Phones match your selected filters.</p>
            ) : (
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentPhones.map(phone => (
                            <ProductCard key={phone.id} product={phone} />
                        ))}
                    </div>
                    
                    <div className="flex justify-center items-center mt-4">
                        <img src='/product-listing/arrow-left-carousel.svg' onClick={prevPage} disabled={currentPage === 1} className="p-3 cursor-pointer" />
                        <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{currentPage} of {totalPages}</span>
                        <img src='/product-listing/arrow-right-carousel.svg' onClick={nextPage} disabled={currentPage === totalPages} className="p-3 cursor-pointer" />
                    </div>
                </div>
            )}
        </div>
    )
}