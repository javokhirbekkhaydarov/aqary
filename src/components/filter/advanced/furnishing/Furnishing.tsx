import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilter";
import { FURNISHING } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";

export function Furnishing() {
  const dispatch = useDispatch();

  const handleSelect = (value: string | number) => {
    dispatch(selectValue({ value, type: "furnishing" }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Furnishing</p>
      <div className="bathrooms flex flex-wrap gap-x-4">
        {FURNISHING.map((furnished) => (
          <Chips
            value={furnished}
            type="furnishing"
            key={furnished}
            onClick={() => handleSelect(furnished)}
          />
        ))}
      </div>
    </div>
  );
}
