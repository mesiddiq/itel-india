import { create } from "zustand";

export const useFilterStore = create((set) => ({
	// Featurephones
	screenSizes: [],
	batteryTypes: [],
	priceRanges: [],
	networks: [],
	features: [],
	cameras: [],
	storageOptions: [],
	activeCategory: "ALL",

	// Smartphones
	smartPhoneScreenSizes: [],
	smartPhoneCameras: [],
	smartPhonePriceRanges: [],
	smartPhoneActiveCategory: "ALL",
	smartPhoneStorage: [],
	currentPage: 1,

	setCurrentPage: (page) => set({ currentPage: page }),

	toggleScreenSize: (size) =>
		set((state) => ({
			screenSizes: state.screenSizes.includes(size)
				? state.screenSizes.filter((s) => s !== size)
				: [...state.screenSizes, size],
			currentPage: 1,
		})),

	toggleBatteryType: (type) =>
		set((state) => ({
			batteryTypes: state.batteryTypes.includes(type)
				? state.batteryTypes.filter((t) => t !== type)
				: [...state.batteryTypes, type],
			currentPage: 1,
		})),

	togglePriceRange: (range) =>
		set((state) => ({
			priceRanges: state.priceRanges.includes(range)
				? state.priceRanges.filter((r) => r !== range)
				: [...state.priceRanges, range],
			currentPage: 1,
		})),

	toggleNetwork: (network) =>
		set((state) => ({
			networks: state.networks.includes(network)
				? state.networks.filter((n) => n !== network)
				: [...state.networks, network],
			currentPage: 1,
		})),

	toggleFeature: (feature) =>
		set((state) => ({
			features: state.features.includes(feature)
				? state.features.filter((f) => f !== feature)
				: [...state.features, feature],
			currentPage: 1,
		})),

	toggleCamera: (camera) =>
		set((state) => ({
			cameras: state.cameras.includes(camera)
				? state.cameras.filter((c) => c !== camera)
				: [...state.cameras, camera],
			currentPage: 1,
		})),

	toggleStorage: (storage) =>
		set((state) => ({
			storageOptions: state.storageOptions.includes(storage)
				? state.storageOptions.filter((s) => s !== storage)
				: [...state.storageOptions, storage],
			currentPage: 1,
		})),

	setActiveCategory: (category) =>
		set(() => ({
			activeCategory: category,
			currentPage: 1,
		})),

	setSmartPhoneActiveCategory: (category) =>
		set(() => ({
			smartPhoneActiveCategory: category,
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
