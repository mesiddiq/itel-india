import cross from '/product-listing/cross.svg'
import { useFilterStore } from "../../../zustandstore/store";
import { smartPhoneFeatures } from "../../../data/AllPhoneData";

export default function FilterComponent() {

  const { toggleSmartPhoneFeature, smartPhoneFeatures: selectedFeatures } = useFilterStore()

  // console.log(selectedFeatures)
  // Check if filter is active
  const isActive = (filter) => selectedFeatures.includes(filter);

  // Toggle filter
  const handleClick = (filter) => {
    console.log(filter)
    toggleSmartPhoneFeature(filter)
  };

  return (
    <div className="flex gap-4 w-auto">
      {smartPhoneFeatures.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`flex items-center justify-center px-3 py-1 rounded-sm text-sm transition-colors 
            ${isActive(filter)
              ? "bg-[#575757] text-white"
              : "bg-[#1C1C1C] text-[#949494] hover:bg-[#575757] hover:text-white"
            }
          `}
        >
          <span>{filter}</span>
          {selectedFeatures.includes(filter) && (
            <span
              className="ml-2 text-xs cursor-pointer hover:text-gray-300"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   toggleFilter(filter);
              // }}
            >
              <img src={cross} alt="cross" />
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

