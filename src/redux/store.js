import { configureStore } from "@reduxjs/toolkit";
import smartPhoneSlice from "./slice/smartPhoneSlice";
import navbarSlice from "./slice/navbarSlice";

export const store = configureStore({
    reducer: {
        smartPhone: smartPhoneSlice,
        navbar:navbarSlice
    },
});