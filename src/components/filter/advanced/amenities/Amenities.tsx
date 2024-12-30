"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAmenities } from "@/store/amenitiesSlice";
import { AMENITIES } from "@/constants/filterOptions";
import { Checkbox, FormControlLabel } from "@mui/material";
import { RootState } from "@/store/store";
export function Amenities() {
  const dispatch = useDispatch();

  const selectedAmenities = useSelector(
    (state: RootState) => state.amenities.selectedAmenities
  );

  const handleChange = (
    amenityName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    let updatedAmenities = [...selectedAmenities];

    if (isChecked) {
      updatedAmenities.push(amenityName);
    } else {
      updatedAmenities = updatedAmenities.filter(
        (item) => item !== amenityName
      );
    }

    dispatch(setSelectedAmenities(updatedAmenities));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-">
      <p className="text-[22px] font-medium text-500">Amenities</p>
      <div className="flex flex-wrap flex-col gap-5 mt-4">
        {AMENITIES.map((item, amenityIndex) => (
          <div key={amenityIndex} className="flex gap-1 flex-col">
            <p className="text-[20px] font-medium text-500">{item.category}</p>
            <div className="flex flex-wrap gap-4 items-center">
              {item.amenities.map((amenity, index) => (
                <div className="flex items-center" key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedAmenities.includes(amenity.name)}
                        onChange={(e) => handleChange(amenity.name, e)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={amenity.name}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: "Geologica",
                        transition: "all .2s linear",
                      },
                      "& .MuiFormControlLabel-label:hover": {
                        color: "#6290CB",
                      },
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
