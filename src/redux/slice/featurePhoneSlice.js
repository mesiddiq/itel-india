import { createSlice } from '@reduxjs/toolkit'

const featurePhoneSlice = createSlice({
    name: "featurePhone",
    initialState: {
        featurePhones: [],
        filters: {
            series: ['All'],
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
        toggleFilter: (state, action) => {
            const { filterType, value, replace = false } = action.payload;
            
            if (filterType === 'series') {
                state.filters.series = [value];
            } else {
                const currentFilters = state.filters[filterType];
                if (currentFilters.includes(value)) {
                    state.filters[filterType] = currentFilters.filter(item => item !== value);
                } else {
                    state.filters[filterType] = [...currentFilters, value];
                }
            }
        },
        clearFilters: (state) => {
            state.filters = {
                ...state.filters,
                series: ['All'],
                screen: [],
                battery: [],
                price: [],
                network: []
            };
        },
        filterFeaturePhones: (state) => {
            const { series, screen, battery, price, network } = state.filters;
            const filteredPhones = state.featurePhones.filter(phone => {
                // Series filter
                if (series.length > 0 && !series.includes('All')) {
                    if (!series.includes(phone.category)) return false;
                }

                // Screen size filter
                if (screen.length > 0) {
                    const screenSize = parseFloat(phone.specification.screenSize.split('"')[0]);
                    const screenMatch = screen.some(value => Math.abs(screenSize - parseFloat(value)) < 0.1);
                    if (!screenMatch) return false;
                }

                // Battery filter
                if (battery.length > 0) {
                    const batteryValue = parseInt(phone.specification.battery.replace('mAh', ''));
                    const batteryMatch = battery.some(value => {
                        if (value === 'HIGH') return batteryValue >= 1500;
                        if (value === 'LOW') return batteryValue < 1500;
                        return false;
                    });
                    if (!batteryMatch) return false;
                }

                // Price filter
                if (price.length > 0) {
                    const priceValue = parseInt(phone.specification.price.replace(',', ''));
                    const priceMatch = price.some(range => {
                        if (range === 'under-1000') return priceValue < 1000;
                        if (range === 'above-2500') return priceValue > 2500;
                        const [min, max] = range.split('-').map(Number);
                        return priceValue >= min && priceValue <= max;
                    });
                    if (!priceMatch) return false;
                }

                // Network filter
                if (network.length > 0) {
                    const networkMatch = network.some(value => {
                        if (value === '2G/3G') return phone.specification.network?.includes('2G') || phone.specification.network?.includes('3G');
                        if (value === '4G') return phone.specification.network?.includes('4G');
                        return false;
                    });
                    if (!networkMatch) return false;
                }

                return true;
            });
            state.featurePhones = filteredPhones;
        }
    }
});

export const { setFeaturePhones, toggleFilter, clearFilters, filterFeaturePhones } = featurePhoneSlice.actions;
export default featurePhoneSlice.reducer;

