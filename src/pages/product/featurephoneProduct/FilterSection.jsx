import { featurePhoneBatteryTypes, featurePhoneNetworks, featurePhonePriceRanges, featurePhoneScreenSizes } from '../../../data/AllFeaturePhoneData';
import { useFilterStore } from '../../../zustandstore/store';

const FilterSection = () => {
    const {
        toggleScreenSize,
        toggleBatteryType,
        togglePriceRange,
        toggleNetwork,
        networks,
        screenSizes,
        priceRanges,
        batteryTypes,
    } = useFilterStore();


    return (
        <section className="mt-2 max-h-[70vh] overflow-y-scroll overflowHidden " >
            <div className="">
                <div className="mb-6">
                    <h3 className="mb-3 text-desktop/title uppercase">
                        SCREEN SIZE
                    </h3>
                    <div className="space-y-3">
                        {featurePhoneScreenSizes.map((size) => (
                            <div
                                key={size}
                                className="cursor-pointer flex items-center space-x-2"
                            >
                                <input
                                    id={`screen-${size}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600"
                                    checked={screenSizes.includes(size)}
                                    onChange={() => toggleScreenSize(size)}
                                />
                                <label
                                    className="text-white text-desktop/body/2/regular cursor-pointer"
                                    htmlFor={`screen-${size}`}
                                >
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-white/20 w-full mb-4"></div>
                <div className="mb-6">
                    <h3 className="mb-3 text-desktop/title uppercase">
                        BATTERY
                    </h3>
                    <div className="space-y-3">
                        {featurePhoneBatteryTypes.map((type) => (
                            <div
                                key={type}
                                className="cursor-pointer flex items-center space-x-2"
                            >
                                <input
                                    id={`battery-${type}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600"
                                    checked={batteryTypes.includes(type)}
                                    onChange={() => toggleBatteryType(type)}
                                />
                                <label
                                    className="text-white text-desktop/body/2/regular cursor-pointer"
                                    htmlFor={`battery-${type}`}
                                >
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-white/20 w-full mb-4"></div>
                <div className="mb-6">
                    <h3 className="mb-3 text-desktop/title uppercase">
                        PRICE
                    </h3>
                    <div className="space-y-3">
                        {featurePhonePriceRanges.map((range) => (
                            <div
                                key={range}
                                className="cursor-pointer flex items-center space-x-2"
                            >
                                <input
                                    id={`price-${range}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600"
                                    checked={priceRanges.includes(range)}
                                    onChange={() => togglePriceRange(range)}
                                />
                                <label
                                    className="text-white text-desktop/body/2/regular cursor-pointer"
                                    htmlFor={`price-${range}`}
                                >
                                    {range}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-white/20 w-full mb-4"></div>
                <div className="mb-6">
                    <h3 className="mb-3 text-desktop/title uppercase">
                        NETWORK
                    </h3>
                    <div className="space-y-3">
                        {featurePhoneNetworks.map((network) => (
                            <div
                                key={network}
                                className="cursor-pointer flex items-center space-x-2"
                            >
                                <input
                                    id={`network-${network}`}
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-red-600 bg-red-600"
                                    checked={networks.includes(network)}
                                    onChange={() => toggleNetwork(network)}
                                />
                                <label
                                    className="text-white text-desktop/body/2/regular cursor-pointer"
                                    htmlFor={`network-${network}`}
                                >
                                    {network}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FilterSection