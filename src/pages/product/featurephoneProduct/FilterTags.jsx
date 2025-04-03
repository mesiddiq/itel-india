// import { useState } from "react";
import { useFilterStore } from "../../../zustandstore/store";

const filtersData = ["UPI", "Bluetooth"];

export default function FilterComponent() {
	const { toggleFeature, features } = useFilterStore();

	const isActive = (filter) => features.includes(filter);

	return (
		<div className="flex gap-4 w-auto">
			{filtersData.map((filter) => (
				<button
					key={filter}
					onClick={() => toggleFeature(filter)}
					className={`flex items-center justify-center px-3 py-1 rounded-sm text-sm transition-colors
		        ${
					isActive(filter)
						? "bg-[#575757] text-white"
						: "bg-[#1C1C1C] text-[#949494] hover:bg-[#575757] hover:text-white"
				}
		      `}
				>
					<span>{filter}</span>
					{isActive(filter) && (
						<span
							className="ml-2 text-xs cursor-pointer hover:text-gray-300"
							onClick={(e) => {
								e.stopPropagation();
								toggleFeature(filter);
							}}
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity="0.6">
									<path
										d="M1.33325 10.6666L10.6665 1.33337"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10.6665 10.6666L1.33325 1.33337"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</span>
					)}
				</button>
			))}
		</div>
	);
}
