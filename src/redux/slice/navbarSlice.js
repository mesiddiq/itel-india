import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name:'navbar',
    initialState: {
        tvActive:false,
        smartPhoneActive:false,
        accessoriesActive:false,
        supportActive:false,
        navActive: false
    },
    reducers: {
        toggleNavbar: (state) => {
            state.navActive = !state.navActive;
        },
        toggleSmartphone: (state) => {
            state.smartPhoneActive = !state.smartPhoneActive;
        },
        toggleTv: (state) => {
            state.tvActive = !state.tvActive;
        },
        toggleAccessories: (state) => {
            state.accessoriesActive = !state.accessoriesActive;
        },
        toggleSupport: (state) => {
            state.supportActive = !state.supportActive;
        },
        toggleAll: (state) => {
            state.tvActive = false;
            state.smartPhoneActive = false;
            state.accessoriesActive = false;
            state.supportActive = false;
        }
    }
})

export default navbarSlice.reducer
export const {toggleNavbar,toggleAccessories,toggleAll,toggleSmartphone,toggleSupport,toggleTv} = navbarSlice.actions