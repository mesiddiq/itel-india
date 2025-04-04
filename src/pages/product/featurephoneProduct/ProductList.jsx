/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

export default function ProductList({ phones }) {
	return (
		<div>
			{phones.length === 0 ? (
				<p className="text-gray-300">
					No Feature Phones match your selected filters.
				</p>
			) : (
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{phones?.map((phone) => (
						<ProductCard
							key={phone.id}
							product={phone}
						/>
					))}
				</div>
			)}
		</div>
	);
}
