"use client";

import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setPriceRange } from "@/store/filterSlice";
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#6290CB",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: "0 0 2px 0px #E8F3FD",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px #E8F3FD",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px #E8F3FD, 0px 0px 0px 0px r#E8F3FD, 0px 0px 1px 0px #E8F3FD",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: "#000",
      ...theme.applyStyles("dark", {
        color: "#fff",
      }),
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #E8F3FD",
    backgroundColor: "#E8F3FD",
  },
  ...theme.applyStyles("dark", {
    color: "#6290CB",
  }),
}));

interface PriceRangeSliderProps {
  prices: number[];
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  prices,
}) => {
  const dispatch = useDispatch();

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      dispatch(setPriceRange(newValue));
    }
  };
  return (
    <Box sx={{ width: 440 }} className="pl-2">
      <IOSSlider
        aria-label="ios slider"
        value={prices}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
        max={1000000}
        min={0}
      />
    </Box>
  );
};
