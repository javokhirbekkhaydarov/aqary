"use client";
import { COMPLETION } from "@/constants/filterOptions";
import { getChipSearchStyles } from "@/styles/filterStyles";
import { CitiesType } from "@/types/types";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "@/store/advancedFilterSlice";
import { RootState } from "@/store/store";

export default function Completion() {
  const dispatch = useDispatch();
  const selectedHandover = useSelector(
    (state: RootState) => state.advancedFilter.completion,
  );
  const chooseCity = (city: CitiesType) => {
    dispatch(toggleItem({ type: "completion", payload: city }));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-2 ">
      <p className="text-[22px] font-medium text-500">% Completion</p>

      <div className="flex gap-2">
        {COMPLETION.map((city) => {
          const isSelected =
            selectedHandover.findIndex(
              (selectedCity) => selectedCity.id === city.id,
            ) >= 0;

          return (
            <Chip
              onClick={() => chooseCity(city)}
              key={city.id}
              label={city.name}
              variant="outlined"
              color="primary"
              style={
                isSelected
                  ? {
                      color: "#202020",
                      border: "1px solid #202020",
                      backgroundColor: "#E3E3E3",
                    }
                  : { color: "#202020", border: "1px solid #E3E3E3" }
              }
              sx={getChipSearchStyles(isSelected)}
            />
          );
        })}
      </div>
    </div>
  );
}
