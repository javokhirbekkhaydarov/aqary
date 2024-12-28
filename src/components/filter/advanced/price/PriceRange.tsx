"use client";

import React from "react";
import { Box, Input } from "@mui/material";
import { inputStyles } from "@/styles/filterStyles";
import { formatPrice } from "@/utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "@/store/filterSlice";
import { RootState } from "@/store/store";
import { PriceRangeSlider } from "@/components/mini/PriceRangeSlider";

export function PriceRange() {
  const dispatch = useDispatch();
  const priceRange = useSelector((state: RootState) => state.filter.priceRange);
  const sanitizedPriceRange = priceRange.map((price) => price ?? 0);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    const newMin = rawValue ? parseInt(rawValue, 10) : null;
    dispatch(setPriceRange([newMin, priceRange[1]]));
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    const newMax = rawValue ? parseInt(rawValue, 10) : null;
    dispatch(setPriceRange([priceRange[0], newMax]));
  };
  return (
    <div className="flex flex-col px-3 items-start w-full gap-4">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-[12px]">
          <p className="text-[22px] font-medium text-500">Price Range (AED)</p>
          <img
            src="/assets/icons/info.svg"
            width={21}
            height={21}
            className="cursor-pointer"
            alt="info"
          />
        </div>
      </div>
      <PriceRangeSlider prices={sanitizedPriceRange} />
      <div className="grid grid-cols-1 gap-[2px] ">
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <Input
            type="text"
            inputMode={"numeric"}
            value={priceRange[0] !== null ? formatPrice(priceRange[0]) : ""}
            onChange={handleMinChange}
            placeholder="Min Pri"
            sx={inputStyles}
          />
          <Input
            type="text"
            inputMode={"numeric"}
            value={priceRange[1] !== null ? formatPrice(priceRange[1]) : ""}
            onChange={handleMaxChange}
            placeholder="Max Pri"
            sx={inputStyles}
          />
        </Box>
      </div>
    </div>
  );
}
