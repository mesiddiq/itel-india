import { combineReducers } from 'redux'
import {
    TOGGLE_SERIES_FILTER,
    TOGGLE_PRICE_FILTER,
    TOGGLE_CAMERA_FILTER,
    TOGGLE_SCREEN_FILTER,
    TOGGLE_STORAGE_FILTER
} from './actions'

const initialState = {
    series: [],
    price: [],
    camera: [],
    screen: [],
    storage: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SERIES_FILTER:
            return {
                ...state,
                series: state.series.includes(action.payload)
                    ? state.series.filter(item => item !== action.payload)
                    : [...state.series, action.payload]
            }
        case TOGGLE_PRICE_FILTER:
            return {
                ...state,
                price: state.price.includes(action.payload)
                    ? state.price.filter(item => item !== action.payload)
                    : [...state.price, action.payload]
            }
        case TOGGLE_CAMERA_FILTER:
            return {
                ...state,
                camera: state.camera.includes(action.payload)
                    ? state.camera.filter(item => item !== action.payload)
                    : [...state.camera, action.payload]
            }
        case TOGGLE_SCREEN_FILTER:
            return {
                ...state,
                screen: state.screen.includes(action.payload)
                    ? state.screen.filter(item => item !== action.payload)
                    : [...state.screen, action.payload]
            }
        case TOGGLE_STORAGE_FILTER:
            return {
                ...state,
                storage: state.storage.includes(action.payload)
                    ? state.storage.filter(item => item !== action.payload)
                    : [...state.storage, action.payload]
            }
        default:
            return state
    }
}

export default combineReducers({
    filters: filterReducer
})