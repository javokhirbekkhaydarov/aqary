"use client";
import { HANDOVER_BY } from "@/constants/filterOptions";
import { getChipSearchStyles } from "@/styles/filterStyles";
import { CitiesType } from "@/types/types";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleHandover } from "@/store/advancedFilter";
import { RootState } from "@/store/store";

export default function HandOverBy() {
  const dispatch = useDispatch();
  const selectedHandover = useSelector(
    (state: RootState) => state.advancedFilter.handoverBy
  );

  const chooseCity = (city: CitiesType) => {
    dispatch(toggleHandover(city));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-2 ">
      <p className="text-[22px] font-medium text-500">Handover By</p>

      {/* HANDOVER */}
      <div className="flex gap-2">
        {HANDOVER_BY.map((city) => {
          const isSelected =
            selectedHandover.findIndex(
              (selectedCity) => selectedCity.id === city.id
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
