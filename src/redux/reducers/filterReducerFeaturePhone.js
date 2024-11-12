import { combineReducers } from 'redux'
import {
    TOGGLE_SERIES_FILTER,
    TOGGLE_SCREEN_FILTER,
    TOGGLE_BATTERY_FILTER,
    TOGGLE_PRICE_FILTER,
    TOGGLE_NETWORK_FILTER,
    TOGGLE_FEATURE_FILTER
} from './actionsFeaturephone'

const initialState = {
    series: [],
    screen: [],
    battery: [],
    price: [],
    network: [],
    features: []
}

const filterReducerFeaturePhone = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SERIES_FILTER:
            return {
                ...state,
                series: [action.payload] // Only one series can be selected at a time
            }
        case TOGGLE_PRICE_FILTER:
            return {
                ...state,
                price: state.price.includes(action.payload)
                    ? state.price.filter(item => item !== action.payload)
                    : [...state.price, action.payload]
            }
        case TOGGLE_BATTERY_FILTER:
            return {
                ...state,
                battery: state.battery.includes(action.payload)
                    ? state.battery.filter(item => item !== action.payload)
                    : [...state.battery, action.payload]
            }
        case TOGGLE_SCREEN_FILTER:
            return {
                ...state,
                screen: state.screen.includes(action.payload)
                    ? state.screen.filter(item => item !== action.payload)
                    : [...state.screen, action.payload]
            }
        case TOGGLE_NETWORK_FILTER:
            return {
                ...state,
                network: state.network.includes(action.payload)
                    ? state.network.filter(item => item !== action.payload)
                    : [...state.network, action.payload]
            }
        case TOGGLE_FEATURE_FILTER:
            return {
                ...state,
                features: state.features.includes(action.payload)
                    ? state.features.filter(item => item !== action.payload)
                    : [...state.features, action.payload]
            }
        default:
            return state
    }
}

export default combineReducers({
    filtersFeaturePhone: filterReducerFeaturePhone
})
