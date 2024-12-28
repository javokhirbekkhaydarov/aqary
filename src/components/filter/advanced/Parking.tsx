import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilter";
import { PARKS } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";

export function Parking() {
  const dispatch = useDispatch();

  const handleSelect = (value: string | number) => {
    dispatch(selectValue({ value, type: "park" }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Baths</p>
      <div className="bathrooms flex flex-wrap gap-x-4">
        {PARKS.map((park) => (
          <Chips
            value={park}
            type="park"
            key={park}
            onClick={() => handleSelect(park)}
          />
        ))}
      </div>
    </div>
  );
}
