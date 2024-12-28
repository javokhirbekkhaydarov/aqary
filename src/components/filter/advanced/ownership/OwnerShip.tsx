import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilter";
import { OWNERSHIP } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";

export function OwnerShip() {
  const dispatch = useDispatch();

  const handleSelect = (value: string | number) => {
    dispatch(selectValue({ value, type: "ownership" }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Ownership</p>
      <div className="bathrooms flex flex-wrap gap-x-4">
        {OWNERSHIP.map((owner) => (
          <Chips
            value={owner}
            type="ownership"
            key={owner}
            onClick={() => handleSelect(owner)}
          />
        ))}
      </div>
    </div>
  );
}
