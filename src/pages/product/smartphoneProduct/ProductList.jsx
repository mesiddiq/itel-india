import { useSelector } from 'react-redux'
import { useState } from 'react'
import ProductCard from './ProductCard'

// Import the AllPhonesData
import { AllPhonesData } from '../../../data/AllPhoneData'

export default function ProductList() {
    const filters = useSelector(state => state.filters.filters)
    const [currentPage, setCurrentPage] = useState(1)
    const phonesPerPage = 6

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
                <p className="text-gray-300">No smartphones match your selected filters.</p>
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