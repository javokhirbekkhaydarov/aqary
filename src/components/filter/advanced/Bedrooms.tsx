import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilter";
import { BEDROOMS } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";

export function Bedrooms() {
  const dispatch = useDispatch();

  const handleSelect = (value: string | number) => {
    dispatch(selectValue({ value, type: "bedroom" }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Bedrooms</p>
      <div className="bedrooms flex flex-wrap gap-x-4">
        {BEDROOMS.map((bedroom) => (
          <Chips
            value={bedroom}
            type="bedroom"
            key={bedroom}
            onClick={() => handleSelect(bedroom)}
          />
        ))}
      </div>
    </div>
  );
}
