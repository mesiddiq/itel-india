import { configureStore } from "@reduxjs/toolkit";
import smartPhoneSlice from "./slice/smartPhoneSlice";
import featurePhoneSlice from "./slice/featurePhoneSlice";
import navbarSlice from "./slice/navbarSlice";
import filterReducer from "./reducers/filterReducer";
import filterReducerFeaturePhone from "./reducers/filterReducerFeaturePhone";

export const store = configureStore({
    reducer: {
        smartPhone: smartPhoneSlice,
        featurePhone: featurePhoneSlice,
        navbar:navbarSlice,
        filters:filterReducer,
        filtersFeaturePhone: filterReducerFeaturePhone
    },
});