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
	smartPhoneFeatures: [],
	smartPhoneScreenSizes: [],
	smartPhoneCameras: [],
	smartPhonePriceRanges: [],
	smartPhoneActiveCategory: "ALL",
	smartPhoneStorage: [],
	currentPage: 1,
	smartPhoneCurrentPage: 1,

	setCurrentPage: (page) => set({ currentPage: page }),
	setSmartPhoneCurrentPage: (page) => set({ smartPhoneCurrentPage: page }),

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

	//#######################################SMARTPHONE#######################################//

	setSmartPhoneActiveCategory: (category) =>
		set(() => ({
			smartPhoneActiveCategory: category,
			smartPhoneCurrentPage: 1,
		})),

	toggleSmartPhonePriceRange: (range) =>
		set((state) => ({
			smartPhonePriceRanges: state.smartPhonePriceRanges.includes(range)
				? state.smartPhonePriceRanges.filter((r) => r !== range)
				: [...state.smartPhonePriceRanges, range],
			currentPage: 1,
		})),

	toggleSmartPhoneScreenSize: (size) =>
		set((state) => ({
			smartPhoneScreenSizes: state.smartPhoneScreenSizes.includes(size)
				? state.smartPhoneScreenSizes.filter((s) => s !== size)
				: [...state.smartPhoneScreenSizes, size],
			smartPhoneCurrentPage: 1,
		})),

	toggleSmartPhoneFeature: (feature) =>
		set((state) => ({
			smartPhoneFeatures: state.smartPhoneFeatures.includes(feature)
				? state.smartPhoneFeatures.filter((f) => f !== feature)
				: [...state.smartPhoneFeatures, feature],
		})),

	toggleSmartPhoneCamera: (camera) =>
		set((state) => ({
			smartPhoneCameras: state.smartPhoneCameras.includes(camera)
				? state.smartPhoneCameras.filter((c) => c !== camera)
				: [...state.smartPhoneCameras, camera],
			smartPhoneCurrentPage: 1,
		})),

	toggleSmartPhoneStorage: (storage) =>
		set((state) => ({
			smartPhoneStorage: state.smartPhoneStorage.includes(storage)
				? state.smartPhoneStorage.filter((s) => s !== storage)
				: [...state.smartPhoneStorage, storage],
			smartPhoneCurrentPage: 1,
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
