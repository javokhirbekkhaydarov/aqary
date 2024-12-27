"use client";
import { CITIES } from "@/constants/filterOptions";
import { getChipSearchStyles } from "@/styles/filterStyles";
import { CitiesType } from "@/types/types";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCity } from "@/store/advancedFilter";
import { clearCity } from "@/store/advancedFilter";
import { RootState } from "@/store/store";
import Image from "next/image";
import ClearCity from "./ClearCity";
export default function Cities() {
  const dispatch = useDispatch();
  const selectedCities = useSelector(
    (state: RootState) => state.advancedFilter.cities
  );
  const chooseCity = (city: CitiesType) => {
    dispatch(toggleCity(city));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-2 ">
      {/* selected cities */}
      <div className="flex flex-col  items-start justify-start">
        <div className="flex  gap-2 items-center">
          {selectedCities.map((city) => (
            <Chip
              onClick={() => chooseCity(city)}
              key={city.id}
              label={city.name}
              variant="outlined"
              color="primary"
              style={{
                color: "#202020",
                border: "1px solid #202020",
                backgroundColor: "#E3E3E3",
              }}
              sx={getChipSearchStyles(false)}
            />
          ))}
          <ClearCity />
        </div>
      </div>
      {/* cities */}
      <div className="flex gap-2">
        {CITIES.map((city) => (
          <Chip
            onClick={() => chooseCity(city)}
            key={city.id}
            label={city.name}
            variant="outlined"
            color="primary"
            style={{ color: "#202020", border: "1px solid #E3E3E3" }}
            sx={getChipSearchStyles(false)}
          />
        ))}
      </div>
    </div>
  );
}
