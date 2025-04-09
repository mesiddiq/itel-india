import { featurePhoneCategories } from "../../../data/AllFeaturePhoneData";
import { useFilterStore } from "../../../zustandstore/store";

export default function SeriesTags() {
	const { setActiveCategory, activeCategory } = useFilterStore();

	return (
		<div className="overflowHidden overflow-scroll font-markot text-nowrap tags flex flex-row gap-8 font-bold text-base leading-[19.2px] tracking-[-0.01em]">
			{featurePhoneCategories.map((series) => (
				<button
					key={series}
					className={`uppercase p-[10px] ${
						activeCategory.includes(series)
							? "text-white border-b-4 border-red-600"
							: "border-b-4 border-b-transparent text-gray-400 hover:text-white"
					}`}
					onClick={() => setActiveCategory(series)}
				>
					{series}
				</button>
			))}
		</div>
	);
}
