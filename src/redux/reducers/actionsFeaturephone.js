export const TOGGLE_SERIES_FILTER = 'TOGGLE_SERIES_FILTER'
export const TOGGLE_SCREEN_FILTER = 'TOGGLE_SCREEN_FILTER'
export const TOGGLE_BATTERY_FILTER = 'TOGGLE_BATTERY_FILTER'
export const TOGGLE_PRICE_FILTER = 'TOGGLE_PRICE_FILTER'
export const TOGGLE_NETWORK_FILTER = 'TOGGLE_NETORK_FILTER'
export const TOGGLE_FEATURE_FILTER = 'TOGGLE_FEATURE_FILTER'

export const toggleSeriesFilter = (series) => ({ type: TOGGLE_SERIES_FILTER, payload: series })
export const toggleScreenFilter = (screen) => ({ type: TOGGLE_SCREEN_FILTER, payload: screen })
export const toggleBatteryFilter = (battery) => ({ type: TOGGLE_BATTERY_FILTER, payload: battery })
export const togglePriceFilter = (price) => ({ type: TOGGLE_PRICE_FILTER, payload: price })
export const toggleNetworkFilter = (network) => ({ type: TOGGLE_NETWORK_FILTER, payload: network })
export const toggleFeatureFilter = (feature) => ({ type: TOGGLE_FEATURE_FILTER, payload: feature })