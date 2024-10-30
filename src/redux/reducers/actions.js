export const TOGGLE_SERIES_FILTER = 'TOGGLE_SERIES_FILTER'
export const TOGGLE_PRICE_FILTER = 'TOGGLE_PRICE_FILTER'
export const TOGGLE_CAMERA_FILTER = 'TOGGLE_CAMERA_FILTER'
export const TOGGLE_SCREEN_FILTER = 'TOGGLE_SCREEN_FILTER'
export const TOGGLE_STORAGE_FILTER = 'TOGGLE_STORAGE_FILTER'

export const toggleSeriesFilter = (series) => ({ type: TOGGLE_SERIES_FILTER, payload: series })
export const togglePriceFilter = (price) => ({ type: TOGGLE_PRICE_FILTER, payload: price })
export const toggleCameraFilter = (camera) => ({ type: TOGGLE_CAMERA_FILTER, payload: camera })
export const toggleScreenFilter = (screen) => ({ type: TOGGLE_SCREEN_FILTER, payload: screen })
export const toggleStorageFilter = (storage) => ({ type: TOGGLE_STORAGE_FILTER, payload: storage })