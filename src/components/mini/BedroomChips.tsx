import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BedroomChipsProps } from "@/types/types";

export const BedroomChips: React.FC<BedroomChipsProps> = ({
  bedroom,
  onClick,
}) => {
  const selectedBedrooms = useSelector(
    (state: RootState) => state.advancedFilter.bedrooms
  );

  const isSelected = selectedBedrooms.includes(bedroom);

  return (
    <div
      onClick={onClick}
      className={`transition duration-200 ease-linear bedroom border cursor-pointer px-[20px] py-[6px] gap-[12px] rounded-full ${
        isSelected
          ? "border-secondaryBlue bg-secondaryBlue"
          : "border-primaryGray hover:border-secondaryBlue hover:bg-secondaryBlue"
      }`}
    >
      {bedroom}
    </div>
  );
};
