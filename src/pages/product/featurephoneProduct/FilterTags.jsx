import { useState } from "react";
import cross from '/product-listing/cross.svg'

const filtersData = ["King Voice", "Power Keypad", "UPI", "Bluetooth"];

export default function FilterComponent() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Toggle filter selection
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Check if filter is active
  const isActive = (filter) => selectedFilters.includes(filter);

  return (
    <div className="flex gap-4 w-auto">
      {filtersData.map((filter) => (
        <button
          key={filter}
          onClick={() => toggleFilter(filter)}
          className={`flex items-center justify-center px-3 py-1 rounded-sm FFMarkRegular text-sm transition-colors 
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
              onClick={() => toggleFilter(filter)}
            >
              <img src={cross} alt="cross" />
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

