import React from "react";
import { useDispatch } from "react-redux";
import { selectBedroom } from "@/store/advancedFilter";
import { BEDROOMS } from "@/constants/filterOptions";
import { BedroomChips } from "@/components/mini/BedroomChips";
import { BedroomChipsProps } from "@/types/types";

export function Bedrooms() {
  const dispatch = useDispatch();

  const chooseBedroom = (bedroom: string | number) => {
    dispatch(selectBedroom(bedroom));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Bedrooms</p>
      <div className="bedrooms flex flex-wrap gap-x-4">
        {BEDROOMS.map((bedroom) => (
          <BedroomChips
            bedroom={bedroom}
            key={bedroom}
            onClick={() => chooseBedroom(bedroom)}
          />
        ))}
      </div>
    </div>
  );
}
