import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilterSlice";
import { COMPLETION_STATUS } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";

export function CompletionStatus() {
  const dispatch = useDispatch();

  const handleSelect = (value: string | number) => {
    dispatch(selectValue({ value, type: "completion_status" }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-4">
      <p className="text-[22px] font-medium text-500">Completion Status</p>
      <div className="bathrooms flex flex-wrap gap-x-4">
        {COMPLETION_STATUS.map((bath) => (
          <Chips
            value={bath}
            type="completion_status"
            key={bath}
            onClick={() => handleSelect(bath)}
          />
        ))}
      </div>
    </div>
  );
}
