import { createSlice } from '@reduxjs/toolkit'

const smartPhoneSlice = createSlice({
    name: "smartPhone",
    initialState: {
        smartPhones: [],
        filters: {
            screenSize: [],
            priceRange: [],
            camera: [],
            storage: []
        }
    },
    reducers: {
        setSmartPhones: (state, action) => {
            state.smartPhones = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        updateFilters: (state, action) => {
            const { filterName, newValues } = action.payload;
            state.filters[filterName] = newValues;
        },
        filterSmartPhones: (state) => {
            const { screenSize, priceRange, camera, storage } = state.filters;
            const filteredSmartPhones = state.smartPhones.filter(smartPhone => {
                const isScreenSizeMatch = screenSize.length === 0 || screenSize.includes(smartPhone.screenSize);
                const isPriceRangeMatch = priceRange.length === 0 ||
                    (smartPhone.price >= priceRange[0] && smartPhone.price <= priceRange[1]);
                const isCameraMatch = camera.length === 0 || camera.includes(smartPhone.camera);
                const isStorageMatch = storage.length === 0 || storage.includes(smartPhone.storage);
                return isScreenSizeMatch && isPriceRangeMatch && isCameraMatch && isStorageMatch;
            });
            state.smartPhones = filteredSmartPhones;
        },
    }
});

export default smartPhoneSlice.reducer;
export const { setSmartPhones, setFilters, updateFilters, filterSmartPhones } = smartPhoneSlice.actions;

