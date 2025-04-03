import { create } from "zustand";

export const useFilterStore = create((set) => ({
	screenSizes: [],
	batteryTypes: [],
	priceRanges: [],
	networks: [],
	features: [],
	cameras: [],
	storageOptions: [],
	activeCategory: "ALL",

	toggleScreenSize: (size) =>
		set((state) => ({
			screenSizes: state.screenSizes.includes(size)
				? state.screenSizes.filter((s) => s !== size)
				: [...state.screenSizes, size],
		})),

	toggleBatteryType: (type) =>
		set((state) => ({
			batteryTypes: state.batteryTypes.includes(type)
				? state.batteryTypes.filter((t) => t !== type)
				: [...state.batteryTypes, type],
		})),

	togglePriceRange: (range) =>
		set((state) => ({
			priceRanges: state.priceRanges.includes(range)
				? state.priceRanges.filter((r) => r !== range)
				: [...state.priceRanges, range],
		})),

	toggleNetwork: (network) =>
		set((state) => ({
			networks: state.networks.includes(network)
				? state.networks.filter((n) => n !== network)
				: [...state.networks, network],
		})),

	toggleFeature: (feature) =>
		set((state) => ({
			features: state.features.includes(feature)
				? state.features.filter((f) => f !== feature)
				: [...state.features, feature],
		})),

	toggleCamera: (camera) =>
		set((state) => ({
			cameras: state.cameras.includes(camera)
				? state.cameras.filter((c) => c !== camera)
				: [...state.cameras, camera],
		})),

	toggleStorage: (storage) =>
		set((state) => ({
			storageOptions: state.storageOptions.includes(storage)
				? state.storageOptions.filter((s) => s !== storage)
				: [...state.storageOptions, storage],
		})),

	setActiveCategory: (category) =>
		set(() => ({
			activeCategory: category,
		})),

	resetFilters: () =>
		set(() => ({
			screenSizes: [],
			batteryTypes: [],
			priceRanges: [],
			networks: [],
			features: [],
			cameras: [],
			storageOptions: [],
			activeCategory: "ALL",
		})),
}));
