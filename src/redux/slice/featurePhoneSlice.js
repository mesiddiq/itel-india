import { createSlice } from '@reduxjs/toolkit'

const featurePhoneSlice = createSlice({
    name: "featurePhone",
    initialState: {
        featurePhones: [],
        filters: {
            screen: [],
            battery: [],
            price: [],
            network: []
        }
    },
    reducers: {
        setFeaturePhones: (state, action) => {
            state.featurePhones = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        updateFilters: (state, action) => {
            const { filterName, newValues } = action.payload;
            state.filters[filterName] = newValues;
        },
        filterFeaturePhones: (state) => {
            const { screen, battery, price, network } = state.filters;
            const filteredPhones = state.featurePhones.filter(phone => {
                const isScreenMatch = screen.length === 0 || screen.some(value => {
                    const screenSize = parseFloat(phone.specification.screenSize.split('"')[0]);
                    return Math.abs(screenSize - parseFloat(value)) < 0.1;
                });

                const isBatteryMatch = battery.length === 0 || battery.some(value => {
                    const batteryValue = parseInt(phone.specification.battery.replace('mAh', ''));
                    if (value === 'HIGH') return batteryValue >= 1500;
                    if (value === 'LOW') return batteryValue < 1500;
                    return false;
                });

                const priceValue = parseInt(phone.specification.price.replace(',', ''));
                const isPriceMatch = price.length === 0 || price.some(range => {
                    if (range === 'under-1000') return priceValue < 1000;
                    if (range === 'above-2500') return priceValue > 2500;
                    const [min, max] = range.split('-').map(Number);
                    return priceValue >= min && priceValue <= max;
                });

                const isNetworkMatch = network.length === 0 || network.some(value => {
                    if (value === '2G') return phone.specification.network === '2G';
                    if (value === '4G') return phone.specification.network === '4G';
                    return false;
                });

                return isScreenMatch && isBatteryMatch && isPriceMatch && isNetworkMatch;
            });
            state.featurePhones = filteredPhones;
        }
    }
});

export default featurePhoneSlice.reducer;
export const { setFeaturePhones, setFilters, updateFilters, filterFeaturePhones } = featurePhoneSlice.actions;

