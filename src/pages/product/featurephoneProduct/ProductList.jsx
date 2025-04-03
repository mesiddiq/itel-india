import ProductCard from "./ProductCard";

export default function ProductList({ phones }) {

	return (
		<div>
			{phones.length === 0 ? (
				<p className="text-gray-300">
					No Feature Phones match your selected filters.
				</p>
			) : (
				<div>
					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{phones?.map((phone) => (
							<ProductCard
								key={phone.id}
								product={phone}
							/>
						))}
					</div>

					{/* <div className="flex justify-center items-center mt-4">
                        <img src='/product-listing/arrow-left-carousel.svg' onClick={prevPage} disabled={currentPage === 1} className="p-3 cursor-pointer" />
                        <span className="text-sm leading-[22.4px] tracking-[-0.02em] text-[#F8F6F3]">{currentPage} of {totalPages}</span>
                        <img src='/product-listing/arrow-right-carousel.svg' onClick={nextPage} disabled={currentPage === totalPages} className="p-3 cursor-pointer" />
                    </div> */}
				</div>
			)}
		</div>
	);
}
