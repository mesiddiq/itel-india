/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'

const DropDownComponent = ({data, setCurrentPhone}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Select')
    const dropdownRef = useRef(null)

    const options = data.map(phone => phone.title)
    // console.log(options)
    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleSelect = (option) => {
        setCurrentPhone(option)
        setSelectedOption(option)
        setIsOpen(false)
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={dropdownRef} className="relative w-full">
            <button onClick={toggleDropdown} className="w-full h-[40px] px-2 py-[6px] text-left bg-white rounded-[4px] shadow-sm border border-grey/grey/2 focus:outline-none focus:ring-2 focus:ring-primary">
                <div className="flex items-center justify-between">
                    <span>{selectedOption}</span>
                    <img
                        src="/product-listing/downArrow.svg"
                        alt="Arrow Down"
                        className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto scrollbar-hide">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropDownComponent