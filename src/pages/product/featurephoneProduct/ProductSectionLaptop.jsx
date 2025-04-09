import { useMemo } from "react";
import BuyNowSquareBG from "../../../components/common/smartphone_common/BuyNowSquareBG";
import { AllFeaturePhoneData } from "../../../data/AllFeaturePhoneData";
import { useFilterStore } from "../../../zustandstore/store";
import Compare from "../Compare";
import FilterTags from "./FilterTags";
import SeriesTags from "./SeriesTags";
import ProductCard from "../ProductCard";

const ProductSectionLaptop = () => {
	// const [currentPage, setCurrentPage] = useState(1);

	const {
		screenSizes,
		batteryTypes,
		priceRanges,
		networks,
		activeCategory,
		currentPage,
		setCurrentPage,
		features
	} = useFilterStore();

	const filteredProducts = useMemo(() => {
		return AllFeaturePhoneData.filter((product) => {
			// Filter by category
			if (activeCategory !== "ALL") {
				if (
					activeCategory === '2.4" DISPLAY' &&
					product.category !== '2.4" DISPLAY'
				)
					return false;
				if (
					activeCategory === '2.8" DISPLAY' &&
					product.category !== '2.8" DISPLAY'
				)
					return false;
				if (
					activeCategory === "INNOVATION SERIES" &&
					product.category !== "INNOVATION SERIES"
				)
					return false;
				if (
					activeCategory === "ENTRY LEVEL" &&
					product.category !== "ENTRY LEVEL"
				)
					return false;
			}

			// Filter by screen size
			if (
				screenSizes.length > 0 &&
				!screenSizes.includes(product.screenSize)
			) {
				return false;
			}

			// Filter by battery type
			if (
				batteryTypes.length > 0 &&
				!batteryTypes.includes(product.batteryCategory)
			) {
				return false;
			}

			// Filter by price range
			if (priceRanges.length > 0) {
				const priceInRange = priceRanges.some((range) => {
					if (range === "Under ₹1,000" && product.price < 1000)
						return true;
					if (
						range === "₹1,000 - ₹1,500" &&
						product.price >= 1000 &&
						product.price <= 1500
					)
						return true;
					if (
						range === "₹1,500 - ₹2,000" &&
						product.price > 1500 &&
						product.price <= 2000
					)
						return true;
					if (
						range === "₹2,000 - ₹2,500" &&
						product.price > 2000 &&
						product.price <= 2500
					)
						return true;
					if (range === "Above ₹2,500" && product.price > 2500)
						return true;
					return false;
				});

				if (!priceInRange) return false;
			}

			// Filter by network
			if (
				networks.length > 0 &&
				!product.network.some((net) => networks.includes(net))
			) {
				return false;
			}

			// Filter by features
			if (features.length > 0) {
				const hasAllFeatures = features.every((feature) =>
					product.features.includes(feature)
				);
				if (!hasAllFeatures) return false;
			}

			return true;
		});
	}, [screenSizes, batteryTypes, priceRanges, networks, activeCategory, features]);

	const PRODUCTS_PER_PAGE = 6;

	// Calculate pagination
	const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
	const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
	const paginatedProducts = filteredProducts.slice(
		startIndex,
		startIndex + PRODUCTS_PER_PAGE
	);

	// Handle page changes
	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<>
			<section className="hidden lg:flex flex-col gap-8 ">
				<div className="hidden md:flex flex-row justify-between items-center">
					<SeriesTags />
					<Compare phoneData={AllFeaturePhoneData} />
				</div>

				{/* <PhoneBanner source={seriesBannerData[selectedSeries[0]]} /> */}

				<div className="tagPlusCards flex flex-col gap-8">
					<FilterTags />

					<div className="hidden md:flex flex-col gap-12">
						<div className="flex flex-col gap-5">
							{/* Product card + Pagination */}
							{paginatedProducts.length === 0 ? (
								<p className="text-gray-300">
									No Feature Phones match your selected filters.
								</p>
							) : (
								<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{paginatedProducts?.map((phone) => (
										<ProductCard
											key={phone.id}
											product={phone}
										/>
									))}
								</div>
							)}
						</div>
						{totalPages > 1 && (
							<div className="flex justify-center items-center mt-4 mb-6">
								<img
									src="/product-listing/arrow-left-carousel.svg"
									onClick={prevPage}
									className={`p-3 cursor-pointer ${currentPage === 1 ? "opacity-50" : ""
										}`}
									alt="Previous page"
								/>
								<span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">
									{currentPage} of {totalPages}
								</span>
								<img
									src="/product-listing/arrow-right-carousel.svg"
									onClick={nextPage}
									className={`p-3 cursor-pointer ${currentPage === totalPages
										? "opacity-50"
										: ""
										}`}
									alt="Next page"
								/>
							</div>
						)}
						{/* Explore More Section */}
						<div className="content lg:px-[119px] relative w-full h-[462px] lg:min-h-[350px] lg:h-full flex flex-col justify-center items-center">
							<div className="flex flex-col-reverse lg:flex-row justify-between items-center z-20">
								<div className=" lg:scale-[80%] xl:scale-100 text-white max-w-[296px] text-center lg:text-left lg:max-w-[463px] z-20 ">
									<h2 className="xl:text-[36px] font-bold xl:leading-[46.8px] text-desktop/h4 ">
										Stay Plugged into Your
										<br />
										Go-to Socials with itel
									</h2>
									<p className="mb-8 xl:text-desktop/body/1 xl:leading-6 text-[14px] leading-4 -tracking-[0.14px] text-white/80 mt-2 lg:mt-4 ">
										Get all the must-have accessories for
										your fav itel mobile, like the itel
										power bank and itel earphone.
									</p>
									<BuyNowSquareBG
										purchaseLink="https://www.instagram.com/itel_india/"
										content="EXPLORE"
									/>
								</div>

								{/* Selfie Image */}
								<div className=" max-w-[302px] lg:max-w-[517px] z-20">
									<img
										src={"/static_page/homepage/selfie.png"}
									/>
								</div>

								{/* Background Image */}
								<img
									src="/product-listing/exploreBannerLaptop.png"
									className="absolute  left-0 z-10 hidden lg:block top-1/2 -translate-y-1/2"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductSectionLaptop;
