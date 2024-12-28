import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilter";
import { BATHROOMS } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";

export function Bathrooms() {
  const dispatch = useDispatch();

  const handleSelect = (value: string | number) => {
    dispatch(selectValue({ value, type: "bath" }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Baths</p>
      <div className="bathrooms flex flex-wrap gap-x-4">
        {BATHROOMS.map((bath) => (
          <Chips
            value={bath}
            type="bath"
            key={bath}
            onClick={() => handleSelect(bath)}
          />
        ))}
      </div>
    </div>
  );
}
