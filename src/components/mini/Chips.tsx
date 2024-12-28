import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ChipsProps } from "@/types/types";

export const Chips: React.FC<ChipsProps> = ({ value, type, onClick }) => {
  const getSelectedValues = (state: RootState) => {
    switch (type) {
      case "bedroom":
        return state.advancedFilter.bedrooms;
      case "bath":
        return state.advancedFilter.baths;
      case "park":
        return state.advancedFilter.parks;
      default:
        return [];
    }
  };

  const selectedValues = useSelector(getSelectedValues);
  const isSelected = selectedValues.includes(value);

  return (
    <div
      onClick={onClick}
      className={`transition duration-200 ease-linear border cursor-pointer px-[20px] py-[6px] gap-[12px] rounded-full ${
        isSelected
          ? "border-secondaryBlue bg-secondaryBlue"
          : "border-primaryGray hover:border-secondaryBlue hover:bg-secondaryBlue"
      }`}
    >
      {value}
    </div>
  );
};
