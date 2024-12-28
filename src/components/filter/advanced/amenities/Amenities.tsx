import React from "react";
import { useDispatch } from "react-redux";
import { selectValue } from "@/store/advancedFilter";
import { COMPLETION_STATUS } from "@/constants/filterOptions";
import { Chips } from "@/components/mini/Chips";
import { Checkbox } from "@mui/material";

export function Amenities() {
  const dispatch = useDispatch();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex px-3 flex-col items-start gap-">
      <p className="text-[22px] font-medium text-500">Amenities</p>
      <p className="text-[20px] font-medium text-500">Features</p>
      <div className=" flex flex-wrap gap-x-4">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
}
