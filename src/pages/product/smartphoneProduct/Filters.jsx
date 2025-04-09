import FilterHeading from './FilterHeading'
import { smartPhoneCameraTypes, smartPhonePriceRanges, smartPhoneScreenSizes, smartPhoneStorageOptions } from '../../../data/AllPhoneData'
import { useFilterStore } from '../../../zustandstore/store'

export default function Filters() {

    const {
        toggleSmartPhonePriceRange,
        toggleSmartPhoneCamera,
        toggleSmartPhoneScreenSize,
        toggleSmartPhoneStorage,
        smartPhonePriceRanges: selectedPriceRanges,
        smartPhoneCameras: selectedCameras,
        smartPhoneScreenSizes: selectedScreenSizes,
        smartPhoneStorage: selectedStorage

    } = useFilterStore()

    return (
        <div className=" text-white pr-5 rounded-lg shadow-md no-scrollbar">
            <div className="pt-2">
                <FilterHeading />
            </div>
            <div className="hidden lg:block">
                <div className="mb-6">
                    <h3 className="font-semibold mb-3">PRICE RANGE</h3>
                    <div className="space-y-3">
                        {smartPhonePriceRanges.map((range) => (
                            <div key={range} className="cursor-pointer flex items-center space-x-2">
                                <input
                                    id={`price-${range}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600 checked:text-red-600 checked:bg-red-600 checked:border-red-600"
                                    checked={selectedPriceRanges.includes(range)}
                                    onChange={() => toggleSmartPhonePriceRange(range)}
                                />
                                <label htmlFor={`price-${range}`} className='text-white text-desktop/body/2/regular cursor-pointer'>{range}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-white/20 w-full mb-4"></div>
                <div className="mb-6">
                    <h3 className="font-semibold mb-3">PRIMARY CAMERA</h3>
                    <div className="space-y-3">
                        {smartPhoneCameraTypes.map((camera) => (
                            <div key={camera} className="cursor-pointer flex items-center space-x-2">
                                <input
                                    id={`camera-${camera}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600 checked:text-red-600 checked:bg-red-600 checked:border-red-600"
                                    checked={selectedCameras.includes(camera)}
                                    onChange={() => toggleSmartPhoneCamera(camera)}
                                />
                                <label htmlFor={`camera-${camera}`} className='text-white text-desktop/body/2/regular cursor-pointer'>{camera}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-white/20 w-full mb-4"></div>
                <div className="mb-6">
                    <h3 className="font-semibold mb-3">SCREEN SIZE</h3>
                    <div className="space-y-3">
                        {smartPhoneScreenSizes.map((size) => (
                            <div key={size} className="cursor-pointer flex items-center space-x-2">
                                <input
                                    id={`screen-${size}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600 checked:text-red-600 checked:bg-red-600 checked:border-red-600"
                                    checked={selectedScreenSizes.includes(size)}
                                    onChange={() => toggleSmartPhoneScreenSize(size)}
                                />
                                <label htmlFor={`screen-${size}`} className='text-white text-desktop/body/2/regular cursor-pointer'>{size}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-white/20 w-full mb-4"></div>
                <div className="mb-6">
                    <h3 className="font-semibold mb-3">STORAGE</h3>
                    <div className="space-y-3">
                        {smartPhoneStorageOptions.map((storage) => (
                            <div key={storage} className="cursor-pointer flex items-center space-x-2">
                                <input
                                    id={`storage-${storage}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600 checked:text-red-600 checked:bg-red-600 checked:border-red-600"
                                    checked={selectedStorage.includes(storage)}
                                    onChange={() => toggleSmartPhoneStorage(storage)}
                                />
                                <label htmlFor={`storage-${storage}`} className='text-white text-desktop/body/2/regular cursor-pointer'>{storage}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}