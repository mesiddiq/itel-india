// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeatureFilter } from '../../../redux/reducers/actions';
import cross from '/product-listing/cross.svg'

const filtersData = ["King Voice", "Power Keypad", "UPI", "Bluetooth"];

export default function FilterComponent() {

  const dispatch = useDispatch();
  const selectedFeatures = useSelector(state => state.filters.filters.features);

  const toggleFilter = (filter) => {
    dispatch(toggleFeatureFilter(filter));
  };

  const isActive = (filter) => selectedFeatures.includes(filter);

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
              onClick={(e) => {
                e.stopPropagation();
                toggleFilter(filter);
              }}
            >
              <img src={cross} alt="cross" />
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

